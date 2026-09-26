import { VivaQuestion } from '../types';

export const VIVA_QUESTIONS: VivaQuestion[] = [
  // Module 1: Linux & UNIX
  {
    id: 'viva-linux-1',
    category: 'Linux & UNIX',
    question: 'What is the difference between a hard link and a symbolic (soft) link in Linux?',
    answer: 'A hard link is a direct directory entry pointing to the same underlying inode on the filesystem; it shares the same inode number and survives if the original file is deleted. A soft link is a special file containing the path string to another file; if the target is deleted, the soft link becomes broken (dangling).'
  },
  {
    id: 'viva-linux-2',
    category: 'Linux & UNIX',
    question: 'What is the function of the shebang (#!/bin/bash) at the start of a script?',
    answer: 'The shebang tells the operating system program loader which interpreter binary to spawn to execute the lines contained in the script file.'
  },

  // Module 2: Process Management
  {
    id: 'viva-proc-1',
    category: 'Process Management',
    question: 'What is the difference between fork() and exec() in UNIX?',
    answer: 'fork() creates an exact duplicate child process with its own PID and copy-on-write memory space. exec() replaces the current process memory image (code, data, stack) with a completely new executable program.'
  },
  {
    id: 'viva-proc-2',
    category: 'Process Management',
    question: 'What is an orphan process and how does the OS handle it?',
    answer: 'An orphan process is a child process whose parent terminates before it. The operating system kernel automatically re-parents the orphan to the root init/systemd process (PID 1), which periodically reaps terminated children.'
  },

  // Module 3: CPU Scheduling
  {
    id: 'viva-cpu-1',
    category: 'CPU Scheduling',
    question: 'What is the difference between Turnaround Time and Waiting Time?',
    answer: 'Turnaround Time (TAT) is the total elapsed time between process submission and completion (TAT = Completion Time - Arrival Time). Waiting Time (WT) is the time spent waiting in the ready queue without doing CPU work (WT = TAT - Burst Time).'
  },
  {
    id: 'viva-cpu-2',
    category: 'CPU Scheduling',
    question: 'What is the difference between preemptive and non-preemptive scheduling?',
    answer: 'In non-preemptive scheduling, once a process is allocated the CPU, it retains it until termination or an I/O wait. In preemptive scheduling, the OS can forcibly suspend a running process when a higher-priority process arrives or when its time quantum expires.'
  },
  {
    id: 'viva-cpu-3',
    category: 'CPU Scheduling',
    question: 'Why can Round Robin scheduling cause high context switch overhead?',
    answer: 'If the time quantum is configured too small, the scheduler switches tasks very frequently. Each switch involves saving CPU registers, flushing caches, updating process control blocks (PCBs), and re-loading state, which wastes CPU cycles.'
  },

  // Module 4: Process Synchronization
  {
    id: 'viva-sync-1',
    category: 'Process Synchronization',
    question: 'What is a race condition and how do semaphores prevent it?',
    answer: 'A race condition occurs when multiple threads/processes access and manipulate shared data concurrently, and the outcome depends on the non-deterministic order of execution. Semaphores enforce mutual exclusion around critical sections so only one execution thread can modify the shared state at any given moment.'
  },
  {
    id: 'viva-sync-2',
    category: 'Process Synchronization',
    question: 'What is the difference between a binary semaphore and a counting semaphore?',
    answer: 'A binary semaphore (mutex) has a value of either 0 or 1, primarily used for mutual exclusion. A counting semaphore has an integer value ranging over an unrestricted domain, used to control access to a resource pool consisting of a finite number of instances.'
  },

  // Module 5: Deadlocks
  {
    id: 'viva-deadlock-1',
    category: 'Deadlock Detection & Avoidance',
    question: 'What are the four necessary Coffman conditions for deadlock to occur?',
    answer: '1. Mutual Exclusion (non-shareable resources)\n2. Hold and Wait (processes hold resources while waiting for more)\n3. No Preemption (resources cannot be forcibly confiscated)\n4. Circular Wait (a closed chain of processes waiting on each other).'
  },
  {
    id: 'viva-deadlock-2',
    category: 'Deadlock Detection & Avoidance',
    question: 'What is the difference between Deadlock Prevention and Deadlock Avoidance?',
    answer: 'Deadlock Prevention eliminates at least one of the four Coffman conditions statically by protocol design. Deadlock Avoidance dynamically inspects resource requests at runtime (e.g. using Banker’s Algorithm) and only grants requests that maintain a safe execution sequence.'
  },

  // Module 6: Memory Management
  {
    id: 'viva-mem-1',
    category: 'Contiguous Memory Allocation',
    question: 'What is the difference between Internal and External Fragmentation?',
    answer: 'Internal Fragmentation is allocated space that remains unused inside a designated partition because the process is smaller than the block. External Fragmentation is unallocated free memory distributed across disjoint holes that cannot satisfy a request because it is not contiguous.'
  },
  {
    id: 'viva-mem-2',
    category: 'Contiguous Memory Allocation',
    question: 'How does paging solve external fragmentation?',
    answer: 'Paging divides physical memory into fixed-size frames and logical memory into same-size pages. Since any free frame can be allocated to any process page, no external fragmentation can ever exist.'
  },

  // Module 7: Virtual Memory
  {
    id: 'viva-vm-1',
    category: 'Virtual Memory',
    question: 'What is Belady’s Anomaly and which algorithms suffer from it?',
    answer: 'Belady’s Anomaly is when increasing the number of physical page frames results in an increase in page faults for certain reference strings. First-In, First-Out (FIFO) suffers from it. Stack algorithms such as LRU and Optimal do NOT suffer from Belady’s anomaly.'
  },
  {
    id: 'viva-vm-2',
    category: 'Virtual Memory',
    question: 'What is thrashing in virtual memory systems?',
    answer: 'Thrashing occurs when a computer spends more time paging (swapping pages between RAM and disk) than executing instructions. It happens when the sum of working sets of active processes exceeds physical memory capacity.'
  },

  // Module 8: File Systems
  {
    id: 'viva-fs-1',
    category: 'File Systems',
    question: 'Compare Contiguous, Linked, and Indexed file allocation methods.',
    answer: 'Contiguous: Fast sequential and direct access, but suffers from external fragmentation and hard-to-predict file growth. Linked: No external fragmentation, but slow direct access and pointer overhead. Indexed: Supports direct access and no external fragmentation, but requires index block overhead.'
  },

  // Module 9: Disk Scheduling
  {
    id: 'viva-disk-1',
    category: 'Disk Scheduling',
    question: 'Why does SSTF (Shortest Seek Time First) risk starvation?',
    answer: 'SSTF greedily services requests closest to the current head. If new requests continuously arrive near the current head position, distant requests on outer or inner tracks may wait indefinitely (starvation).'
  },
  {
    id: 'viva-disk-2',
    category: 'Disk Scheduling',
    question: 'What is the key difference between SCAN (Elevator) and LOOK disk scheduling?',
    answer: 'SCAN travels all the way to the boundary cylinder (track 0 or 199) before reversing, even if no pending requests exist at the edge. LOOK only travels as far as the final pending request in that direction before reversing.'
  }
];
