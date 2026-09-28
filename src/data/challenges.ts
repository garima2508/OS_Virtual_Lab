import { ChallengeInfo } from '../types';

export const LAB_CHALLENGES: ChallengeInfo[] = [
  {
    id: 'chal-rr-quantum',
    moduleId: 'cpu-scheduling',
    title: 'Round Robin Quantum Optimizer',
    difficulty: 'Medium',
    description: 'Find a time quantum between 1 and 6 that achieves an Average Waiting Time under 4.5 ms for 4 processes with burst times [8, 4, 9, 5].',
    hint: 'A quantum of 3 or 4 balances responsiveness without penalizing the shorter jobs with excessive waiting.',
    targetMetric: 'Average Waiting Time <=',
    targetValue: 4.5,
    xpReward: 100
  },
  {
    id: 'chal-bankers-safe',
    moduleId: 'deadlock',
    title: 'Banker’s Safe Sequence Hunt',
    difficulty: 'Hard',
    description: 'Identify the complete safe sequence for 5 processes P0-P4 where Available is [3, 3, 2] and Allocation/Max matrices are configured.',
    hint: 'Look for the process whose Need is strictly less than or equal to [3, 3, 2]. Usually P1 or P3.',
    targetMetric: 'Safe Sequence Found',
    targetValue: 'P1 -> P3 -> P4 -> P0 -> P2',
    xpReward: 150
  },
  {
    id: 'chal-lru-faults',
    moduleId: 'virtual-memory',
    title: 'LRU Minimum Fault Challenge',
    difficulty: 'Medium',
    description: 'Test reference string [7, 0, 1, 2, 0, 3, 0, 4, 2, 3] with 3 frames vs 4 frames and achieve a Fault Ratio under 60%.',
    hint: 'Increasing frames from 3 to 4 provides more buffer for the frequently referenced page 0.',
    targetMetric: 'Fault Ratio <=',
    targetValue: 60,
    xpReward: 120
  },
  {
    id: 'chal-disk-seek',
    moduleId: 'disk-scheduling',
    title: 'Disk Arm Seek Minimizer',
    difficulty: 'Easy',
    description: 'Given requests [98, 183, 37, 122, 14, 124, 65, 67] starting at head 53: compare FCFS vs SSTF vs SCAN to find the lowest total head movement.',
    hint: 'SSTF and SCAN dramatically cut head travel compared to FCFS by avoiding cross-disk thrashing.',
    targetMetric: 'Minimum Total Head Movement',
    targetValue: 236,
    xpReward: 80
  }
];
