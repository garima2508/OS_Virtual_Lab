export interface DiskBlock {
  id: number;
  file: string | null;
  color?: string;
  nextBlock?: number | null;
  isIndexBlock?: boolean;
}

export interface AllocatedFile {
  name: string;
  size: number; // in blocks
  color: string;
  startBlock?: number;
  blocks?: number[];
  indexBlock?: number;
}

export type FileAllocStrategy = 'Contiguous' | 'Linked' | 'Indexed';

export function runFileAllocation(
  strategy: FileAllocStrategy,
  totalBlocks: number = 32,
  filesToAllocate: { name: string; size: number; color: string }[]
): {
  disk: DiskBlock[];
  files: AllocatedFile[];
  allocatedCount: number;
  errorLog: string[];
} {
  const disk: DiskBlock[] = Array.from({ length: totalBlocks }, (_, i) => ({
    id: i,
    file: null,
    nextBlock: null,
    isIndexBlock: false
  }));

  const files: AllocatedFile[] = [];
  const errorLog: string[] = [];
  let allocatedCount = 0;

  for (const file of filesToAllocate) {
    if (strategy === 'Contiguous') {
      // Find contiguous free blocks of length file.size
      let foundStart = -1;
      for (let i = 0; i <= totalBlocks - file.size; i++) {
        let fits = true;
        for (let j = 0; j < file.size; j++) {
          if (disk[i + j].file !== null) {
            fits = false;
            break;
          }
        }
        if (fits) {
          foundStart = i;
          break;
        }
      }

      if (foundStart !== -1) {
        const blks: number[] = [];
        for (let j = 0; j < file.size; j++) {
          disk[foundStart + j].file = file.name;
          disk[foundStart + j].color = file.color;
          blks.push(foundStart + j);
        }
        files.push({
          ...file,
          startBlock: foundStart,
          blocks: blks
        });
        allocatedCount++;
      } else {
        errorLog.push(`Contiguous allocation failed for ${file.name} (Need ${file.size} contiguous blocks). Disk fragmented.`);
      }
    } else if (strategy === 'Linked') {
      // Find file.size free blocks anywhere
      const freeIndices = disk.map((b, idx) => (b.file === null ? idx : -1)).filter(idx => idx !== -1);
      if (freeIndices.length >= file.size) {
        const chosen = freeIndices.slice(0, file.size);
        for (let i = 0; i < chosen.length; i++) {
          const bIdx = chosen[i];
          disk[bIdx].file = file.name;
          disk[bIdx].color = file.color;
          disk[bIdx].nextBlock = i < chosen.length - 1 ? chosen[i + 1] : null;
        }
        files.push({
          ...file,
          startBlock: chosen[0],
          blocks: chosen
        });
        allocatedCount++;
      } else {
        errorLog.push(`Linked allocation failed for ${file.name}. Insufficient free blocks.`);
      }
    } else if (strategy === 'Indexed') {
      // Needs 1 index block + file.size data blocks
      const freeIndices = disk.map((b, idx) => (b.file === null ? idx : -1)).filter(idx => idx !== -1);
      if (freeIndices.length >= file.size + 1) {
        const indexBlockIdx = freeIndices[0];
        const dataBlocks = freeIndices.slice(1, file.size + 1);

        disk[indexBlockIdx].file = file.name;
        disk[indexBlockIdx].color = file.color;
        disk[indexBlockIdx].isIndexBlock = true;

        for (const dIdx of dataBlocks) {
          disk[dIdx].file = file.name;
          disk[dIdx].color = file.color;
        }

        files.push({
          ...file,
          indexBlock: indexBlockIdx,
          blocks: dataBlocks
        });
        allocatedCount++;
      } else {
        errorLog.push(`Indexed allocation failed for ${file.name}. Need ${file.size + 1} blocks (1 index + ${file.size} data).`);
      }
    }
  }

  return {
    disk,
    files,
    allocatedCount,
    errorLog
  };
}
