import { QuizQuestion } from '../types';

export const EXPERIMENT_QUIZZES: Record<string, QuizQuestion[]> = {
  // ==================== MODULE 1: LINUX ====================
  'exp-linux-commands': [
    {
      id: 'linux-cmd-q1',
      type: 'pre',
      question: 'Which command is used to display the absolute path of the current working directory in UNIX/Linux?',
      options: ['dir', 'pwd', 'cd -a', 'path'],
      correctAnswer: 1,
      explanation: 'pwd stands for "Print Working Directory" and outputs the absolute path from root (/) to the current directory.'
    },
    {
      id: 'linux-cmd-q2',
      type: 'post',
      question: 'What does the pipe operator (|) do in Linux command lines?',
      options: [
        'Redirects the standard output of one command as standard input to another',
        'Appends text to the end of a file',
        'Terminates background processes',
        'Runs two commands in parallel'
      ],
      correctAnswer: 0,
      explanation: 'A pipe connects the stdout of the left-hand command to the stdin of the right-hand command (e.g. ls | grep txt).'
    }
  ],
  'exp-linux-permissions': [
    {
      id: 'linux-perm-q1',
      type: 'pre',
      question: 'In Linux octal permissions, what numerical value corresponds to read (r), write (w), and execute (x)?',
      options: ['r=1, w=2, x=4', 'r=4, w=2, x=1', 'r=2, w=4, x=1', 'r=3, w=2, x=1'],
      correctAnswer: 1,
      explanation: 'UNIX permission octal values are binary weighted: Read = 4 (2^2), Write = 2 (2^1), Execute = 1 (2^0).'
    },
    {
      id: 'linux-perm-q2',
      type: 'post',
      question: 'What does the permission chmod 755 script.sh grant to user, group, and others?',
      options: [
        'User: rwx, Group: r-x, Others: r-x',
        'User: rwx, Group: rwx, Others: rwx',
        'User: rw-, Group: r--, Others: r--',
        'User: r-x, Group: r-x, Others: r-x'
      ],
      correctAnswer: 0,
      explanation: '7 = 4+2+1 (rwx for owner), 5 = 4+1 (r-x for group), 5 = 4+1 (r-x for others).'
    }
  ],

  // ==================== MODULE 2: PROCESS ====================
  'exp-process-lifecycle': [
    {
      id: 'proc-q1',
      type: 'pre',
      question: 'What value does fork() return to the newly created child process?',
      options: ['The parent PID', '0', '-1', 'A newly allocated positive PID'],
      correctAnswer: 1,
      explanation: 'fork() returns 0 to the child process, while returning the child PID to the parent process.'
    },
    {
      id: 'proc-q2',
      type: 'post',
      question: 'What is a "zombie process" in an operating system?',
      options: [
        'A process executing an infinite while loop',
        'A process that has terminated but its exit status has not yet been read by its parent via wait()',
        'A process whose parent terminated before it',
        'A blocked process waiting on a semaphore'
      ],
      correctAnswer: 1,
      explanation: 'When a child process terminates, its entry remains in the process table as a zombie until the parent calls wait() to reap it.'
    }
  ],
  'exp-process-wait-exec': [
    {
      id: 'proc-exec-q1',
      type: 'pre',
      question: 'What occurs when a process calls an exec() system call successfully?',
      options: [
        'A child process is created',
        'The calling process image is completely overwritten by the new program',
        'The process is put to sleep for 5 seconds',
        'A new thread is spawned'
      ],
      correctAnswer: 1,
      explanation: 'exec() replaces the entire address space (code, data, heap, stack) of the calling process with the new binary executable.'
    }
  ],

  // ==================== MODULE 3: CPU SCHEDULING ====================
  'exp-fcfs': [
    {
      id: 'fcfs-q1',
      type: 'pre',
      question: 'Which queue data structure is inherently used by the FCFS scheduling algorithm?',
      options: ['Priority Queue', 'FIFO (First-In, First-Out) Queue', 'LIFO Stack', 'Double-Ended Queue'],
      correctAnswer: 1,
      explanation: 'FCFS processes jobs strictly in the order they enter the ready queue, which is a First-In, First-Out (FIFO) queue structure.'
    },
    {
      id: 'fcfs-q2',
      type: 'pre',
      question: 'Is standard FCFS CPU scheduling preemptive or non-preemptive?',
      options: ['Preemptive', 'Non-preemptive', 'Partially Preemptive', 'Depends on process burst time'],
      correctAnswer: 1,
      explanation: 'Standard FCFS is non-preemptive; once the CPU is allocated to a process, it holds the CPU until it terminates or blocks for I/O.'
    },
    {
      id: 'fcfs-q3',
      type: 'post',
      question: 'What is the "Convoy Effect" in CPU scheduling?',
      options: [
        'Many short processes waiting behind a single long CPU-bound process',
        'Multiple CPUs executing the same process concurrently',
        'Deadlock occurring between two processes holding printers',
        'Context switching happening too frequently in Round Robin'
      ],
      correctAnswer: 0,
      explanation: 'The Convoy Effect occurs in FCFS when a single CPU-heavy process hogs the CPU, causing all short I/O-bound processes to stall behind it in the ready queue.'
    },
    {
      id: 'fcfs-q4',
      type: 'post',
      question: 'Given processes P1 (AT=0, BT=10) and P2 (AT=0, BT=2). What is the average waiting time under FCFS?',
      options: ['0 ms', '5 ms', '6 ms', '10 ms'],
      correctAnswer: 1,
      explanation: 'P1 waits 0 ms; P2 waits 10 ms. Average waiting time = (0 + 10) / 2 = 5 ms.'
    }
  ],
  'exp-sjf': [
    {
      id: 'sjf-q1',
      type: 'pre',
      question: 'Which scheduling algorithm is provably optimal for minimizing average waiting time for stationary processes?',
      options: ['Round Robin', 'FCFS', 'Shortest Job First (SJF)', 'Priority Scheduling'],
      correctAnswer: 2,
      explanation: 'SJF is provably optimal in minimizing average waiting time because running shorter processes first reduces the queue waiting time for subsequent jobs.'
    },
    {
      id: 'sjf-q2',
      type: 'post',
      question: 'What is the primary drawback of Shortest Job First scheduling in practice?',
      options: [
        'High context switch overhead',
        'Difficulty in knowing the length of the next CPU burst in advance',
        'High CPU idle time',
        'Cannot be implemented on multi-core systems'
      ],
      correctAnswer: 1,
      explanation: 'The fundamental limitation of SJF is accurately predicting or knowing future CPU burst lengths ahead of time.'
    }
  ],
  'exp-rr': [
    {
      id: 'rr-q1',
      type: 'pre',
      question: 'What happens if the Round Robin time quantum is extremely large?',
      options: [
        'It degrades to First-Come, First-Served (FCFS) scheduling',
        'It turns into Shortest Job First',
        'The system deadlocks immediately',
        'Context switches increase exponentially'
      ],
      correctAnswer: 0,
      explanation: 'When the time quantum is larger than any process burst time, no preemption occurs, so RR behaves identically to FCFS.'
    },
    {
      id: 'rr-q2',
      type: 'post',
      question: 'What is the consequence of choosing an excessively small time quantum?',
      options: [
        'Higher CPU utilization for user programs',
        'Excessive context switch overhead, reducing effective CPU throughput',
        'Increased starvation for short jobs',
        'Processes never terminate'
      ],
      correctAnswer: 1,
      explanation: 'Too small a quantum means the CPU spends a large percentage of its time switching contexts between processes rather than executing useful work.'
    }
  ],

  // ==================== MODULE 4: SYNCHRONIZATION ====================
  'exp-producer-consumer': [
    {
      id: 'sync-pc-q1',
      type: 'pre',
      question: 'In the bounded-buffer Producer-Consumer problem, what is the purpose of the mutex semaphore?',
      options: [
        'To count the number of full slots in the buffer',
        'To count the number of empty slots in the buffer',
        'To ensure mutual exclusion when modifying buffer pointers',
        'To signal buffer overflow'
      ],
      correctAnswer: 2,
      explanation: 'The mutex semaphore is a binary semaphore initialized to 1 that ensures only one process (producer or consumer) accesses the buffer at a time.'
    },
    {
      id: 'sync-pc-q2',
      type: 'post',
      question: 'What happens if the Producer executes wait(mutex) before wait(empty) when the buffer is completely full?',
      options: [
        'The producer creates items faster',
        'Deadlock occurs because the producer holds mutex while blocking on empty',
        'The consumer immediately frees a slot',
        'Buffer automatically resizes'
      ],
      correctAnswer: 1,
      explanation: 'If the producer acquires mutex while buffer is full, it then blocks on wait(empty) without releasing mutex. The consumer cannot enter to consume, causing deadlock.'
    }
  ],

  // ==================== MODULE 5: DEADLOCKS ====================
  'exp-bankers': [
    {
      id: 'bank-q1',
      type: 'pre',
      question: "What is the relationship between Max, Allocation, and Need matrices in Banker's Algorithm?",
      options: [
        'Need = Max + Allocation',
        'Need = Max - Allocation',
        'Need = Allocation - Max',
        'Need = Available * Allocation'
      ],
      correctAnswer: 1,
      explanation: 'Need[i][j] = Max[i][j] - Allocation[i][j], representing the remaining resources process i may request.'
    },
    {
      id: 'bank-q2',
      type: 'post',
      question: 'Is an unsafe state always a deadlocked state?',
      options: [
        'Yes, always',
        'No, an unsafe state only means that a deadlock is possible if all processes request their maximum resources',
        'Only in single-resource systems',
        'Only if semaphores are negative'
      ],
      correctAnswer: 1,
      explanation: 'An unsafe state is NOT necessarily a deadlock; it simply means the system cannot guarantee that all processes will finish without deadlock if they simultaneously demand their maximum limits.'
    }
  ],
  'exp-rag': [
    {
      id: 'rag-q1',
      type: 'pre',
      question: 'In a single-instance Resource Allocation Graph (RAG), what does a cycle indicate?',
      options: [
        'Deadlock exists',
        'No deadlock is possible',
        'Memory fragmentation',
        'CPU utilization is 100%'
      ],
      correctAnswer: 0,
      explanation: 'In a system where every resource has exactly one instance, a cycle in the RAG is both necessary and sufficient for a deadlock.'
    }
  ],

  // ==================== MODULE 6: MEMORY ====================
  'exp-first-fit': [
    {
      id: 'mem-ff-q1',
      type: 'pre',
      question: 'Which dynamic memory allocation strategy selects the smallest free hole that is big enough?',
      options: ['First Fit', 'Best Fit', 'Worst Fit', 'Next Fit'],
      correctAnswer: 1,
      explanation: 'Best Fit searches the entire free list to find the hole closest in size to the requested process size, minimizing leftover fragment size.'
    },
    {
      id: 'mem-ff-q2',
      type: 'post',
      question: 'What is external fragmentation in contiguous memory allocation?',
      options: [
        'Unused memory inside an allocated partition',
        'Total free memory is sufficient to satisfy a request, but it is not contiguous',
        'Virtual memory exceeding disk capacity',
        'Page tables taking up too much RAM'
      ],
      correctAnswer: 1,
      explanation: 'External fragmentation occurs when small non-contiguous holes exist across memory; their sum is large enough for a process, but no single hole can fit it.'
    }
  ],

  // ==================== MODULE 7: VIRTUAL MEMORY ====================
  'exp-fifo-page': [
    {
      id: 'page-q1',
      type: 'pre',
      question: 'What is Belady’s Anomaly in page replacement?',
      options: [
        'Increasing physical memory frames causes MORE page faults to occur',
        'Page faults drop to zero when reference strings are sorted',
        'LRU always produces fewer faults than Optimal',
        'Dirty pages cannot be evicted to disk'
      ],
      correctAnswer: 0,
      explanation: 'Belady’s Anomaly is the counterintuitive phenomenon where increasing the number of physical frames results in an increase in page faults under certain algorithms like FIFO.'
    },
    {
      id: 'page-q2',
      type: 'post',
      question: 'Which of the following page replacement algorithms does NOT suffer from Belady’s anomaly?',
      options: ['FIFO', 'LRU (Stack algorithm)', 'Second Chance without reference bits', 'Random Replacement'],
      correctAnswer: 1,
      explanation: 'LRU is a stack algorithm; the set of pages in memory for n frames is always a subset of pages for n+1 frames, guaranteeing freedom from Belady’s anomaly.'
    }
  ],
  'exp-lru-page': [
    {
      id: 'lru-q1',
      type: 'pre',
      question: 'Which program property does LRU page replacement exploit to achieve near-optimal hit rates?',
      options: ['Spatial locality', 'Temporal locality of reference', 'Random distribution', 'FIFO order'],
      correctAnswer: 1,
      explanation: 'LRU relies on temporal locality: pages that have been referenced recently are highly likely to be referenced again in the near future.'
    }
  ],

  // ==================== MODULE 8: FILE SYSTEMS ====================
  'exp-file-alloc': [
    {
      id: 'file-q1',
      type: 'pre',
      question: 'Which file allocation method stores all disk block pointers in a single dedicated index block?',
      options: ['Contiguous Allocation', 'Linked Allocation', 'Indexed Allocation', 'FAT32 Allocation'],
      correctAnswer: 2,
      explanation: 'Indexed allocation brings all pointers together into one index block, allowing direct access without external fragmentation.'
    }
  ],

  // ==================== MODULE 9: DISK SCHEDULING ====================
  'exp-disk-fcfs': [
    {
      id: 'disk-q1',
      type: 'pre',
      question: 'What is seek time in hard disk drives?',
      options: [
        'Time taken to rotate the desired sector under the head',
        'Time taken to position the read/write head over the desired cylinder track',
        'Time taken to transfer data to RAM',
        'Time taken to initialize disk controller'
      ],
      correctAnswer: 1,
      explanation: 'Seek time is the mechanical delay required for the disk arm to travel and position the head over the requested cylinder track.'
    },
    {
      id: 'disk-q2',
      type: 'post',
      question: 'Why does SSTF (Shortest Seek Time First) disk scheduling suffer from possible starvation?',
      options: [
        'It visits the inner tracks too slowly',
        'Continuous arrivals of requests near the current head position keep the head local, starving distant requests',
        'It reverses direction after each cylinder',
        'Magnetic platters overheat'
      ],
      correctAnswer: 1,
      explanation: 'SSTF greedily chooses the nearest request. If a continuous stream of requests arrives near the head, requests far away may never get serviced.'
    }
  ]
};
