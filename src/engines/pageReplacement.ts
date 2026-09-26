import { PageRepResult, PageRepStep } from '../types';

export type PageRepAlgorithm = 'FIFO' | 'LRU' | 'Optimal' | 'LFU' | 'Clock';

export function runPageReplacement(
  referenceString: number[],
  frameCount: number,
  algorithm: PageRepAlgorithm
): PageRepResult {
  const steps: PageRepStep[] = [];
  const frames: (number | null)[] = Array(frameCount).fill(null);

  let hits = 0;
  let faults = 0;

  // Metadata for algorithms
  const fifoQueue: number[] = [];
  const lastUsedTime: Record<number, number> = {};
  const frequency: Record<number, number> = {};
  const referenceBits: number[] = Array(frameCount).fill(0);
  let clockPointer = 0;

  for (let i = 0; i < referenceString.length; i++) {
    const page = referenceString[i];
    const isHit = frames.includes(page);
    let evictedPage: number | null = null;
    let explanation = '';

    // Update frequency
    frequency[page] = (frequency[page] || 0) + 1;
    lastUsedTime[page] = i;

    if (isHit) {
      hits++;
      const frameIdx = frames.indexOf(page);
      if (algorithm === 'Clock') {
        referenceBits[frameIdx] = 1;
      }
      explanation = `Page ${page} is already present in Frame ${frameIdx} (PAGE HIT ✓).`;
    } else {
      faults++;
      // Check if empty slot available
      const emptyIdx = frames.indexOf(null);
      if (emptyIdx !== -1) {
        frames[emptyIdx] = page;
        fifoQueue.push(page);
        if (algorithm === 'Clock') {
          referenceBits[emptyIdx] = 1;
        }
        explanation = `PAGE FAULT ✕: Placed Page ${page} into available Frame ${emptyIdx}.`;
      } else {
        // Eviction needed
        let replaceIdx = 0;

        if (algorithm === 'FIFO') {
          const victim = fifoQueue.shift()!;
          replaceIdx = frames.indexOf(victim);
          evictedPage = victim;
          frames[replaceIdx] = page;
          fifoQueue.push(page);
          explanation = `PAGE FAULT ✕: Frame full. FIFO evicted oldest Page ${victim} to load Page ${page}.`;
        } else if (algorithm === 'LRU') {
          // Find page with minimum lastUsedTime
          let minTime = Infinity;
          let victim = frames[0]!;
          for (const f of frames) {
            if (f !== null && (lastUsedTime[f] ?? -1) < minTime) {
              minTime = lastUsedTime[f] ?? -1;
              victim = f;
            }
          }
          replaceIdx = frames.indexOf(victim);
          evictedPage = victim;
          frames[replaceIdx] = page;
          explanation = `PAGE FAULT ✕: Frame full. LRU evicted least recently used Page ${victim} (last referenced at step ${minTime + 1}).`;
        } else if (algorithm === 'Optimal') {
          // Find page in frames that will not be used for longest time in future
          let farthestUse = -1;
          let victim = frames[0]!;
          for (const f of frames) {
            if (f === null) continue;
            const nextUse = referenceString.slice(i + 1).indexOf(f);
            if (nextUse === -1) {
              // Never used again
              victim = f;
              break;
            } else if (nextUse > farthestUse) {
              farthestUse = nextUse;
              victim = f;
            }
          }
          replaceIdx = frames.indexOf(victim);
          evictedPage = victim;
          frames[replaceIdx] = page;
          explanation = `PAGE FAULT ✕: Frame full. Optimal evicted Page ${victim} as it is not needed for the longest future duration.`;
        } else if (algorithm === 'LFU') {
          // Least Frequently Used
          let minFreq = Infinity;
          let victim = frames[0]!;
          for (const f of frames) {
            if (f !== null && (frequency[f] || 0) < minFreq) {
              minFreq = frequency[f] || 0;
              victim = f;
            }
          }
          replaceIdx = frames.indexOf(victim);
          evictedPage = victim;
          frames[replaceIdx] = page;
          explanation = `PAGE FAULT ✕: Frame full. LFU evicted Page ${victim} with lowest reference count (${minFreq}).`;
        } else if (algorithm === 'Clock') {
          // Second Chance / Clock
          while (true) {
            if (referenceBits[clockPointer] === 0) {
              evictedPage = frames[clockPointer];
              frames[clockPointer] = page;
              referenceBits[clockPointer] = 1;
              replaceIdx = clockPointer;
              clockPointer = (clockPointer + 1) % frameCount;
              break;
            } else {
              referenceBits[clockPointer] = 0;
              clockPointer = (clockPointer + 1) % frameCount;
            }
          }
          explanation = `PAGE FAULT ✕: Clock algorithm gave second chance to referenced pages, evicted Page ${evictedPage} at pointer ${replaceIdx}.`;
        }
      }
    }

    steps.push({
      stepIndex: i,
      page,
      frames: [...frames],
      isHit,
      evictedPage,
      explanation
    });
  }

  const total = referenceString.length || 1;
  return {
    steps,
    totalHits: hits,
    totalFaults: faults,
    hitRatio: Number(((hits / total) * 100).toFixed(1)),
    faultRatio: Number(((faults / total) * 100).toFixed(1)),
    referenceString,
    frameCount
  };
}
