import { BankersResult, BankersStep } from '../types';

export function runBankersAlgorithm(
  processes: string[],
  allocation: number[][],
  max: number[][],
  available: number[]
): BankersResult {
  const pCount = processes.length;
  const rCount = available.length;

  // Need = Max - Allocation
  const needMatrix: number[][] = [];
  for (let i = 0; i < pCount; i++) {
    const row: number[] = [];
    for (let j = 0; j < rCount; j++) {
      row.push(Math.max(0, max[i][j] - allocation[i][j]));
    }
    needMatrix.push(row);
  }

  const work = [...available];
  const finish = Array(pCount).fill(false);
  const safeSequence: string[] = [];
  const steps: BankersStep[] = [];

  let count = 0;
  let progressMade = true;

  while (count < pCount && progressMade) {
    progressMade = false;

    for (let i = 0; i < pCount; i++) {
      if (!finish[i]) {
        // Check if Need[i] <= Work
        let canAllocate = true;
        for (let j = 0; j < rCount; j++) {
          if (needMatrix[i][j] > work[j]) {
            canAllocate = false;
            break;
          }
        }

        if (canAllocate) {
          const currentWorkSnap = [...work];
          // Release resources: Work = Work + Allocation[i]
          for (let j = 0; j < rCount; j++) {
            work[j] += allocation[i][j];
          }
          finish[i] = true;
          safeSequence.push(processes[i]);
          count++;
          progressMade = true;

          steps.push({
            stepIndex: steps.length + 1,
            processChecked: processes[i],
            currentWork: currentWorkSnap,
            canAllocate: true,
            needVector: [...needMatrix[i]],
            newWork: [...work],
            safeSequenceSoFar: [...safeSequence],
            explanation: `Need for ${processes[i]} [${needMatrix[i].join(', ')}] <= Work [${currentWorkSnap.join(', ')}]. Resources allocated and released. New Work: [${work.join(', ')}].`
          });
        } else {
          steps.push({
            stepIndex: steps.length + 1,
            processChecked: processes[i],
            currentWork: [...work],
            canAllocate: false,
            needVector: [...needMatrix[i]],
            safeSequenceSoFar: [...safeSequence],
            explanation: `Need for ${processes[i]} [${needMatrix[i].join(', ')}] exceeds Work [${work.join(', ')}]. Process must wait.`
          });
        }
      }
    }
  }

  const isSafe = count === pCount;

  return {
    isSafe,
    safeSequence: isSafe ? safeSequence : [],
    steps,
    needMatrix
  };
}
