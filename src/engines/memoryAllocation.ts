import { MemAllocResult, MemBlock } from '../types';

export type MemoryFitType = 'First Fit' | 'Best Fit' | 'Worst Fit' | 'Next Fit';

export function runMemoryAllocation(
  initialBlocks: { id: string; size: number }[],
  processes: { id: string; size: number }[],
  strategy: MemoryFitType
): MemAllocResult {
  const blocks: MemBlock[] = initialBlocks.map(b => ({
    ...b,
    allocatedProcess: null,
    allocatedSize: 0,
    internalFrag: 0
  }));

  const unallocatedProcesses: { id: string; size: number }[] = [];
  const steps: { action: string; process: string; blockId: string | null; explanation: string }[] = [];
  let allocatedCount = 0;
  let totalInternalFrag = 0;
  let nextFitPointer = 0;

  for (const proc of processes) {
    let chosenIndex = -1;

    if (strategy === 'First Fit') {
      for (let i = 0; i < blocks.length; i++) {
        if (!blocks[i].allocatedProcess && blocks[i].size >= proc.size) {
          chosenIndex = i;
          break;
        }
      }
    } else if (strategy === 'Best Fit') {
      let minDiff = Infinity;
      for (let i = 0; i < blocks.length; i++) {
        if (!blocks[i].allocatedProcess && blocks[i].size >= proc.size) {
          const diff = blocks[i].size - proc.size;
          if (diff < minDiff) {
            minDiff = diff;
            chosenIndex = i;
          }
        }
      }
    } else if (strategy === 'Worst Fit') {
      let maxDiff = -1;
      for (let i = 0; i < blocks.length; i++) {
        if (!blocks[i].allocatedProcess && blocks[i].size >= proc.size) {
          const diff = blocks[i].size - proc.size;
          if (diff > maxDiff) {
            maxDiff = diff;
            chosenIndex = i;
          }
        }
      }
    } else if (strategy === 'Next Fit') {
      const n = blocks.length;
      for (let i = 0; i < n; i++) {
        const idx = (nextFitPointer + i) % n;
        if (!blocks[idx].allocatedProcess && blocks[idx].size >= proc.size) {
          chosenIndex = idx;
          nextFitPointer = (idx + 1) % n;
          break;
        }
      }
    }

    if (chosenIndex !== -1) {
      const block = blocks[chosenIndex];
      const frag = block.size - proc.size;
      block.allocatedProcess = proc.id;
      block.allocatedSize = proc.size;
      block.internalFrag = frag;
      totalInternalFrag += frag;
      allocatedCount++;

      steps.push({
        action: 'ALLOCATED',
        process: proc.id,
        blockId: block.id,
        explanation: `${strategy} allocated ${proc.id} (${proc.size} KB) into ${block.id} (${block.size} KB). Internal Fragmentation = ${frag} KB.`
      });
    } else {
      unallocatedProcesses.push(proc);
      steps.push({
        action: 'FAILED',
        process: proc.id,
        blockId: null,
        explanation: `Could not allocate ${proc.id} (${proc.size} KB). No free partition large enough.`
      });
    }
  }

  // Calculate external fragmentation: total free space in unallocated blocks
  const totalExternalFrag = blocks
    .filter(b => !b.allocatedProcess)
    .reduce((sum, b) => sum + b.size, 0);

  return {
    blocks,
    unallocatedProcesses,
    totalInternalFrag,
    totalExternalFrag,
    allocatedCount,
    steps
  };
}
