import { ModuleInfo } from '../types';

export const OS_MODULES: ModuleInfo[] = [
  {
    id: 'linux',
    title: 'Linux & UNIX Environment',
    shortDescription: 'Master terminal commands, permissions, shell scripting, and core UNIX system calls.',
    iconName: 'Terminal',
    experimentCount: 6,
    difficulty: 'Beginner',
    coMapping: 'CO1',
    badgeId: 'Terminal Wizard'
  },
  {
    id: 'process',
    title: 'Process Management',
    shortDescription: 'Explore process states, lifecycles, fork(), wait(), exec(), and thread concurrency.',
    iconName: 'Cpu',
    experimentCount: 5,
    difficulty: 'Beginner',
    coMapping: 'CO1, CO2',
    badgeId: 'Process Architect'
  },
  {
    id: 'cpu-scheduling',
    title: 'CPU Scheduling Algorithms',
    shortDescription: 'Interactive Gantt charts for FCFS, SJF, SRTF, Priority, and Round Robin.',
    iconName: 'Clock',
    experimentCount: 6,
    difficulty: 'Intermediate',
    coMapping: 'CO2',
    badgeId: 'Scheduler'
  },
  {
    id: 'synchronization',
    title: 'Process Synchronization',
    shortDescription: 'Solve race conditions, Producer-Consumer, and Dining Philosophers with semaphores.',
    iconName: 'ShieldCheck',
    experimentCount: 4,
    difficulty: 'Intermediate',
    coMapping: 'CO2, CO3',
    badgeId: 'Synchronization Pro'
  },
  {
    id: 'deadlock',
    title: 'Deadlock Detection & Avoidance',
    shortDescription: "Resource Allocation Graphs (RAG) and Banker's Algorithm safe sequence calculator.",
    iconName: 'Lock',
    experimentCount: 4,
    difficulty: 'Intermediate',
    coMapping: 'CO3',
    badgeId: 'Deadlock Detective'
  },
  {
    id: 'memory',
    title: 'Contiguous Memory Allocation',
    shortDescription: 'Dynamic memory partitions, First Fit, Best Fit, Worst Fit, and fragmentation maps.',
    iconName: 'HardDrive',
    experimentCount: 4,
    difficulty: 'Intermediate',
    coMapping: 'CO3, CO4',
    badgeId: 'Memory Master'
  },
  {
    id: 'virtual-memory',
    title: 'Virtual Memory & Page Replacement',
    shortDescription: 'Frame tables, page hits/faults, FIFO, LRU, Optimal, LFU, and Belady’s anomaly.',
    iconName: 'Layers',
    experimentCount: 5,
    difficulty: 'Advanced',
    coMapping: 'CO4',
    badgeId: 'Paging Explorer'
  },
  {
    id: 'file-systems',
    title: 'File Allocation Techniques',
    shortDescription: 'Visualize Contiguous, Linked, and Indexed disk block allocations and directory tables.',
    iconName: 'FolderTree',
    experimentCount: 3,
    difficulty: 'Intermediate',
    coMapping: 'CO4, CO5',
    badgeId: 'Storage Master'
  },
  {
    id: 'disk-scheduling',
    title: 'Disk Scheduling Algorithms',
    shortDescription: 'Animate cylinder seek paths for FCFS, SSTF, SCAN, C-SCAN, LOOK, and C-LOOK.',
    iconName: 'Disc',
    experimentCount: 6,
    difficulty: 'Intermediate',
    coMapping: 'CO5',
    badgeId: 'Disk Master'
  }
];
