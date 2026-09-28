import { DiskSimResult, DiskSimStep } from '../types';

export type DiskAlgorithm = 'FCFS' | 'SSTF' | 'SCAN' | 'C-SCAN' | 'LOOK' | 'C-LOOK';

export function runDiskScheduling(
  tracksInput: number[],
  initialHead: number,
  algorithm: DiskAlgorithm,
  direction: 'UP' | 'DOWN' = 'UP',
  maxCylinder: number = 199
): DiskSimResult {
  const sequence: number[] = [initialHead];
  const steps: DiskSimStep[] = [];
  let totalMovement = 0;

  const requests = [...tracksInput];

  if (algorithm === 'FCFS') {
    for (const track of requests) {
      sequence.push(track);
    }
  } else if (algorithm === 'SSTF') {
    let current = initialHead;
    const remaining = [...requests];
    while (remaining.length > 0) {
      remaining.sort((a, b) => Math.abs(a - current) - Math.abs(b - current));
      const next = remaining.shift()!;
      sequence.push(next);
      current = next;
    }
  } else if (algorithm === 'SCAN') {
    const left = requests.filter(t => t < initialHead).sort((a, b) => a - b);
    const right = requests.filter(t => t >= initialHead).sort((a, b) => a - b);

    if (direction === 'UP') {
      sequence.push(...right);
      if (left.length > 0) {
        sequence.push(maxCylinder);
        sequence.push(...left.reverse());
      }
    } else {
      sequence.push(...left.reverse());
      if (right.length > 0) {
        sequence.push(0);
        sequence.push(...right);
      }
    }
  } else if (algorithm === 'C-SCAN') {
    const left = requests.filter(t => t < initialHead).sort((a, b) => a - b);
    const right = requests.filter(t => t >= initialHead).sort((a, b) => a - b);

    if (direction === 'UP') {
      sequence.push(...right);
      sequence.push(maxCylinder);
      sequence.push(0);
      sequence.push(...left);
    } else {
      sequence.push(...left.reverse());
      sequence.push(0);
      sequence.push(maxCylinder);
      sequence.push(...right.reverse());
    }
  } else if (algorithm === 'LOOK') {
    const left = requests.filter(t => t < initialHead).sort((a, b) => a - b);
    const right = requests.filter(t => t >= initialHead).sort((a, b) => a - b);

    if (direction === 'UP') {
      sequence.push(...right);
      sequence.push(...left.reverse());
    } else {
      sequence.push(...left.reverse());
      sequence.push(...right);
    }
  } else if (algorithm === 'C-LOOK') {
    const left = requests.filter(t => t < initialHead).sort((a, b) => a - b);
    const right = requests.filter(t => t >= initialHead).sort((a, b) => a - b);

    if (direction === 'UP') {
      sequence.push(...right);
      sequence.push(...left);
    } else {
      sequence.push(...left.reverse());
      sequence.push(...right.reverse());
    }
  }

  // Calculate step movements
  for (let i = 0; i < sequence.length - 1; i++) {
    const from = sequence[i];
    const to = sequence[i + 1];
    const dist = Math.abs(to - from);
    totalMovement += dist;
    steps.push({
      stepIndex: i + 1,
      fromTrack: from,
      toTrack: to,
      distance: dist,
      explanation: `Head moved from cylinder ${from} to ${to} (Seek distance: ${dist} cylinders).`
    });
  }

  return {
    sequence,
    steps,
    totalHeadMovement: totalMovement,
    initialHead,
    tracks: tracksInput
  };
}
