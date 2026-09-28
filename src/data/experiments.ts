import { ExperimentInfo } from '../types';

export const EXPERIMENTS: ExperimentInfo[] = [
  // ==================== MODULE 1: LINUX & UNIX ====================
  {
    id: 'exp-linux-commands',
    moduleId: 'linux',
    title: 'Linux File & Directory Navigation Commands',
    category: 'Linux & UNIX',
    difficulty: 'Beginner',
    estimatedTime: '20 mins',
    coMapping: 'CO1',
    objective: 'To master foundational Linux/UNIX terminal commands for directory navigation, file creation, viewing, and searching.',
    learningOutcomes: [
      'Navigate the hierarchical Linux filesystem using pwd, cd, and ls.',
      'Create, copy, move, and remove files using touch, mkdir, cp, mv, and rm.',
      'Inspect and filter text files using cat, head, tail, and grep.'
    ],
    prerequisites: ['Basic computer literacy', 'Concept of files and directories'],
    keyConcepts: ['Absolute vs Relative Paths', 'Piping (|)', 'Wildcards (*, ?)', 'Standard Input/Output'],
    hasSimulation: true,
    hasCode: true,
    hasChallenge: true,
    theory: {
      quickSummary: 'The Linux command-line shell provides direct access to the operating system kernel. Commands like ls, cd, cat, and grep form the essential toolkit for systems programming.',
      definition: 'A shell is a command language interpreter that executes commands read from standard input devices or from files.',
      whyItMatters: 'Every systems software developer, DevOps engineer, and researcher relies on shell commands for automated file manipulation and server administration.',
      howItWorks: 'The shell parses user input, resolves the binary executable from PATH environment variables, forks a child process, executes the command, and returns the exit code.',
      formulas: [
        {
          name: 'Command Syntax',
          formula: 'command [options] [arguments]',
          explanation: 'Standard POSIX syntax for invoking shell utilities.'
        }
      ],
      commonMistakes: [
        'Confusing absolute paths (starting with /) with relative paths.',
        'Using rm -rf without verifying the target path.',
        'Overwriting files unintentionally with > instead of appending with >>.'
      ]
    },
    algorithmSteps: [
      'Step 1: Open terminal shell prompt.',
      'Step 2: Inspect current directory with pwd.',
      'Step 3: List files with detailed permissions using ls -la.',
      'Step 4: Create new directory and navigate into it using mkdir and cd.',
      'Step 5: Create a file with touch and display its content with cat.'
    ]
  },
  {
    id: 'exp-linux-permissions',
    moduleId: 'linux',
    title: 'File Permissions & Access Control (chmod, chown)',
    category: 'Linux & UNIX',
    difficulty: 'Beginner',
    estimatedTime: '25 mins',
    coMapping: 'CO1',
    objective: 'To understand and configure Linux file permissions (read, write, execute) for user, group, and others using numeric and symbolic notation.',
    learningOutcomes: [
      'Interpret file mode strings (e.g. -rwxr-xr-x).',
      'Calculate octal permission values (e.g. 755, 644).',
      'Modify permissions and ownership using chmod and chown.'
    ],
    prerequisites: ['Binary to octal conversion', 'User and group accounts in UNIX'],
    keyConcepts: ['Read (r=4)', 'Write (w=2)', 'Execute (x=1)', 'Octal Mode', 'Symbolic Mode (u, g, o)'],
    hasSimulation: true,
    hasCode: true,
    hasChallenge: true,
    theory: {
      quickSummary: 'UNIX uses a discretionary access control model where every file has distinct read, write, and execute permissions for the owner, the owning group, and others.',
      definition: 'File permissions regulate which users can read (4), write (2), or execute (1) a given file or directory.',
      whyItMatters: 'Protects critical system binaries and sensitive student records from unauthorized modification or execution.',
      howItWorks: 'Permissions are represented as a 9-bit bitmask split into 3 triplets: User (rwx), Group (rwx), and Others (rwx).',
      formulas: [
        {
          name: 'Octal Permission Calculation',
          formula: 'Permission = (r * 4) + (w * 2) + (x * 1)',
          explanation: 'Read = 4, Write = 2, Execute = 1. Example: rwx = 4+2+1 = 7.'
        }
      ],
      commonMistakes: [
        'Setting chmod 777 on sensitive files as a shortcut to fix permission errors.',
        'Forgetting that directory execution (x) permission is required to cd into it.'
      ]
    },
    algorithmSteps: [
      'Step 1: View permissions of existing file using ls -l.',
      'Step 2: Calculate target octal code (e.g., 755 for executables).',
      'Step 3: Execute chmod <octal> <filename>.',
      'Step 4: Verify modified permissions with ls -l.'
    ]
  },
  {
    id: 'exp-linux-scripts',
    moduleId: 'linux',
    title: 'Bash Shell Scripting & Automated System Calls',
    category: 'Linux & UNIX',
    difficulty: 'Intermediate',
    estimatedTime: '30 mins',
    coMapping: 'CO1',
    objective: 'To write and execute automated Bash shell scripts utilizing variables, conditional branches (if-else), and loops (for, while).',
    learningOutcomes: [
      'Create executable Bash scripts with proper shebang (#!/bin/bash).',
      'Implement conditional logic with if, elif, and test brackets [ ].',
      'Automate repetitive tasks using for and while loops.'
    ],
    prerequisites: ['Basic Linux commands', 'Variables and arithmetic'],
    keyConcepts: ['Shebang (#!/bin/bash)', 'Positional Parameters ($1, $2)', 'Exit Status ($?)', 'Test Operators (-eq, -f, -d)'],
    hasSimulation: true,
    hasCode: true,
    hasChallenge: true,
    theory: {
      quickSummary: 'Shell scripting combines individual Linux commands into powerful executable scripts for systems management, automated backups, and batch processing.',
      definition: 'A shell script is a text file containing a sequence of commands for a UNIX-based operating system.',
      whyItMatters: 'Automation of administrative tasks, CI/CD pipelines, and systems programming heavily relies on shell scripting.',
      howItWorks: 'The operating system reads the shebang line, spawns the specified interpreter, and executes lines sequentially with flow control.',
      formulas: [
        {
          name: 'Exit Code Invariant',
          formula: 'Exit Code 0 = Success, Exit Code > 0 = Error',
          explanation: 'Scripts return $? to report success or failure to parent processes.'
        }
      ],
      commonMistakes: [
        'Missing spaces around square brackets in if [ $a -eq $b ].',
        'Forgetting to grant execution permission with chmod +x script.sh.'
      ]
    },
    algorithmSteps: [
      'Step 1: Create script file with #!/bin/bash header.',
      'Step 2: Define variables and prompt user input.',
      'Step 3: Add conditional validation and loop iteration.',
      'Step 4: Make script executable with chmod +x script.sh and run with ./script.sh.'
    ]
  },

  // ==================== MODULE 2: PROCESS MANAGEMENT ====================
  {
    id: 'exp-process-lifecycle',
    moduleId: 'process',
    title: 'Process Lifecycle & Process Creation using fork()',
    category: 'Process Management',
    difficulty: 'Beginner',
    estimatedTime: '25 mins',
    coMapping: 'CO1, CO2',
    objective: 'To simulate process state transitions (New, Ready, Running, Waiting, Terminated) and understand UNIX process creation using the fork() system call.',
    learningOutcomes: [
      'Trace process state transitions through the five-state lifecycle model.',
      'Understand how fork() duplicates the calling process address space.',
      'Distinguish parent and child processes using the return value of fork().'
    ],
    prerequisites: ['C programming basics', 'Memory layout of C programs'],
    keyConcepts: ['Process Control Block (PCB)', 'PID & PPID', 'fork() Return Values', 'Zombie & Orphan Processes'],
    hasSimulation: true,
    hasCode: true,
    hasChallenge: true,
    theory: {
      quickSummary: 'A process is a program in execution. The fork() system call creates a new child process by duplicating the parent. The child receives PID 0 from fork(), while the parent receives the child PID.',
      definition: 'fork() is the primary UNIX system call used to create a new process by duplicating the calling process.',
      whyItMatters: 'Every process in Linux (except the root init/systemd process) is created via fork() or clone().',
      howItWorks: 'The kernel allocates a new PCB, copies page tables in copy-on-write mode, and returns twice: once to the parent and once to the child.',
      formulas: [
        {
          name: 'fork() Return Value',
          formula: 'rc < 0 (Error), rc == 0 (Child), rc > 0 (Parent receives Child PID)',
          explanation: 'Enables conditional branching for concurrent execution.'
        }
      ],
      commonMistakes: [
        'Assuming parent and child share mutable variables after fork (they have separate address spaces).',
        'Creating a fork bomb by invoking fork() inside an infinite loop without exit conditions.'
      ]
    },
    algorithmSteps: [
      'Step 1: Include <unistd.h> and <sys/types.h>.',
      'Step 2: Call pid_t pid = fork().',
      'Step 3: If pid < 0, handle fork failure.',
      'Step 4: If pid == 0, execute child-specific code.',
      'Step 5: If pid > 0, execute parent-specific code.'
    ]
  },
  {
    id: 'exp-process-wait-exec',
    moduleId: 'process',
    title: 'Process Synchronization using wait() and exec()',
    category: 'Process Management',
    difficulty: 'Intermediate',
    estimatedTime: '30 mins',
    coMapping: 'CO2',
    objective: 'To implement parent-child process synchronization using wait() and replace process images using the exec() family of system calls.',
    learningOutcomes: [
      'Prevent zombie processes by reaping terminated children with wait().',
      'Load new binaries into process address spaces using execvp().',
      'Analyze exit status codes passed from child to parent.'
    ],
    prerequisites: ['fork() system call', 'Process termination'],
    keyConcepts: ['wait(&status)', 'execvp()', 'Zombie Reaping', 'Process Image Replacement'],
    hasSimulation: true,
    hasCode: true,
    hasChallenge: true,
    theory: {
      quickSummary: 'The wait() system call blocks the parent process until one of its child processes terminates. The exec() family replaces the current process address space with a new executable program.',
      definition: 'wait() synchronizes parent execution with child termination, while exec() overwrites the process text, data, and stack segments with a new program.',
      whyItMatters: 'Forms the foundational architecture of command shells (e.g. bash), which fork a child and exec the requested command.',
      howItWorks: 'When exec() succeeds, it never returns to the calling code because the old program memory image is completely replaced.',
      formulas: [
        {
          name: 'WIFEXITED Status Check',
          formula: 'WIFEXITED(status) && WEXITSTATUS(status)',
          explanation: 'POSIX macros to inspect whether child exited normally and retrieve its exit code.'
        }
      ],
      commonMistakes: [
        'Placing code after execvp() expecting it to run (execvp only returns on failure).',
        'Neglecting wait() causing child processes to become zombies.'
      ]
    },
    algorithmSteps: [
      'Step 1: Parent calls fork().',
      'Step 2: Child process calls execvp("ls", args).',
      'Step 3: Parent process calls wait(&status) to block until child completes.',
      'Step 4: Parent inspects child return status using WEXITSTATUS(status).'
    ]
  },
  {
    id: 'exp-threads',
    moduleId: 'process',
    title: 'POSIX Threads (pthreads) Concurrency vs Processes',
    category: 'Process Management',
    difficulty: 'Intermediate',
    estimatedTime: '30 mins',
    coMapping: 'CO2',
    objective: 'To implement multithreaded programs using POSIX pthreads and compare shared-memory thread concurrency with separate-memory process concurrency.',
    learningOutcomes: [
      'Spawn concurrent threads with pthread_create().',
      'Join threads and synchronize completion with pthread_join().',
      'Observe race conditions on unprotected shared memory.'
    ],
    prerequisites: ['C pointers and structs', 'Process memory layout'],
    keyConcepts: ['Thread vs Process', 'pthread_create', 'pthread_join', 'Shared Address Space', 'Race Condition'],
    hasSimulation: true,
    hasCode: true,
    hasChallenge: true,
    theory: {
      quickSummary: 'Threads are lightweight execution units within a single process that share code, data, and heap segments, but maintain independent stacks and register sets.',
      definition: 'A thread is a basic unit of CPU utilization, comprising a thread ID, a program counter, a register set, and a stack.',
      whyItMatters: 'Threads offer significantly lower context-switching overhead and faster inter-thread communication than heavy processes.',
      howItWorks: 'Threads share global variables directly, requiring synchronization primitives (mutex/semaphores) to prevent race conditions.',
      formulas: [
        {
          name: 'Context Switch Overhead',
          formula: 'Overhead(Thread) << Overhead(Process)',
          explanation: 'Threads share virtual memory address spaces, avoiding TLB invalidation during context switches.'
        }
      ],
      commonMistakes: [
        'Passing pointers to loop variables into pthread_create leading to race conditions.',
        'Failing to pthread_join resulting in premature thread termination when main returns.'
      ]
    },
    algorithmSteps: [
      'Step 1: Define thread worker function void* worker(void* arg).',
      'Step 2: Declare pthread_t thread identifier.',
      'Step 3: Create thread using pthread_create(&tid, NULL, worker, arg).',
      'Step 4: Await thread completion using pthread_join(tid, NULL).'
    ]
  },

  // ==================== MODULE 3: CPU SCHEDULING ====================
  {
    id: 'exp-fcfs',
    moduleId: 'cpu-scheduling',
    title: 'First-Come, First-Served (FCFS) CPU Scheduling',
    category: 'CPU Scheduling',
    difficulty: 'Beginner',
    estimatedTime: '25 mins',
    coMapping: 'CO2',
    objective: 'To implement the non-preemptive First-Come, First-Served (FCFS) CPU scheduling algorithm and calculate average waiting time and turnaround time.',
    learningOutcomes: [
      'Understand how FIFO queues govern non-preemptive process dispatch.',
      'Construct Gantt charts from arrival and burst times.',
      'Analyze the Convoy Effect where short processes wait behind long CPU-bound processes.'
    ],
    prerequisites: ['Basic process concepts', 'Arrival time vs Burst time', 'Gantt chart representation'],
    keyConcepts: ['Ready Queue', 'Burst Time', 'Turnaround Time (TAT)', 'Waiting Time (WT)', 'Convoy Effect'],
    hasSimulation: true,
    hasCode: true,
    hasChallenge: true,
    theory: {
      quickSummary: 'FCFS schedules processes in strict order of their arrival in the ready queue. It is simple and non-preemptive, but suffers from high average waiting times due to the convoy effect.',
      definition: 'First-Come, First-Served (FCFS) is an operating system scheduling algorithm that automatically executes queued requests and processes in order of their arrival.',
      whyItMatters: 'FCFS is the foundational baseline against which all modern scheduling algorithms (SJF, SRTF, Round Robin) are benchmarked.',
      howItWorks: 'The process that requests the CPU first is allocated the CPU first via a standard FIFO queue. Once a process gets the CPU, it runs to completion without interruption.',
      formulas: [
        {
          name: 'Turnaround Time (TAT)',
          formula: 'TAT = Completion Time - Arrival Time',
          explanation: 'The entire elapsed interval from process arrival to complete execution.'
        },
        {
          name: 'Waiting Time (WT)',
          formula: 'WT = Turnaround Time - Burst Time',
          explanation: 'The total time a process spends waiting in the ready queue.'
        },
        {
          name: 'Average Waiting Time',
          formula: 'Avg WT = (Σ WT) / n',
          explanation: 'Sum of all waiting times divided by the total number of processes.'
        }
      ],
      commonMistakes: [
        'Confusing Arrival Time with Burst Time when ordering processes in the Gantt chart.',
        'Neglecting idle CPU intervals when no process has arrived yet.',
        'Calculating Waiting Time directly as Completion Time minus Burst Time without subtracting Arrival Time.'
      ]
    },
    algorithmSteps: [
      'Step 1: Input processes with Arrival Times (AT) and Burst Times (BT).',
      'Step 2: Sort processes according to Arrival Times.',
      'Step 3: Initialize currentTime = 0.',
      'Step 4: If currentTime < ATi, advance currentTime = ATi (CPU idle).',
      'Step 5: Completion Time CTi = currentTime + BTi.',
      'Step 6: Update currentTime = CTi, compute TATi and WTi.',
      'Step 7: Output Gantt chart and average metrics.'
    ]
  },
  {
    id: 'exp-sjf',
    moduleId: 'cpu-scheduling',
    title: 'Shortest Job First (SJF) Scheduling (Non-Preemptive)',
    category: 'CPU Scheduling',
    difficulty: 'Intermediate',
    estimatedTime: '30 mins',
    coMapping: 'CO2',
    objective: 'To implement the non-preemptive Shortest Job First scheduling algorithm and examine its optimality for minimizing average waiting time.',
    learningOutcomes: [
      'Understand how greedy selection of minimum burst time optimizes average waiting time.',
      'Analyze tie-breaking using arrival time.',
      'Examine starvation risks for long burst processes.'
    ],
    prerequisites: ['FCFS scheduling', 'Process state transitions'],
    keyConcepts: ['Optimal Average Waiting Time', 'Non-preemptive Dispatch', 'Starvation', 'Burst Time Estimation'],
    hasSimulation: true,
    hasCode: true,
    hasChallenge: true,
    theory: {
      quickSummary: 'SJF associates with each process the length of its next CPU burst. The CPU is allocated to the process with the smallest burst time among all arrived processes.',
      definition: 'Shortest Job First (SJF) is a scheduling policy that selects the waiting process with the smallest execution time to execute next.',
      whyItMatters: 'SJF is provably optimal in minimizing the average waiting time for a given set of stationary processes.',
      howItWorks: 'At any scheduling decision point, examine all processes in the ready queue. Select the one with lowest burst time.',
      formulas: [
        {
          name: 'Optimality Proof',
          formula: 'Avg WT(SJF) <= Avg WT(Any Non-preemptive Algorithm)',
          explanation: 'Moving shorter processes ahead reduces cumulative waiting time.'
        }
      ],
      commonMistakes: [
        'Selecting a process that has not arrived yet just because it has a smaller burst time.',
        'Preempting an already running process in non-preemptive SJF.'
      ]
    },
    algorithmSteps: [
      'Step 1: Read all processes (AT, BT).',
      'Step 2: Initialize currentTime = 0, completedCount = 0.',
      'Step 3: Filter arrived, uncompleted processes.',
      'Step 4: Pick process with minimum Burst Time.',
      'Step 5: Run to completion: currentTime += BT, record CT, TAT, WT.',
      'Step 6: Repeat until all processes finish.'
    ]
  },
  {
    id: 'exp-srtf',
    moduleId: 'cpu-scheduling',
    title: 'Shortest Remaining Time First (SRTF Preemptive SJF)',
    category: 'CPU Scheduling',
    difficulty: 'Intermediate',
    estimatedTime: '35 mins',
    coMapping: 'CO2',
    objective: 'To simulate preemptive SJF (SRTF) where a currently running process is preempted if a newly arrived process has a shorter remaining burst time.',
    learningOutcomes: [
      'Master preemptive CPU scheduling mechanics.',
      'Construct multi-segment Gantt charts with process interruptions.',
      'Track dynamic remaining burst times at each clock tick.'
    ],
    prerequisites: ['SJF scheduling', 'Concept of preemption'],
    keyConcepts: ['Remaining Burst Time', 'Preemption Interrupt', 'Response Time vs Waiting Time'],
    hasSimulation: true,
    hasCode: true,
    hasChallenge: true,
    theory: {
      quickSummary: 'SRTF is the preemptive version of SJF. At each time unit, the scheduler compares the remaining time of the running process with newly arrived jobs.',
      definition: 'Shortest Remaining Time First (SRTF) preempts the executing process whenever another process arrives with a shorter remaining burst time.',
      whyItMatters: 'Delivers superior response time for short interactive jobs compared to non-preemptive SJF.',
      howItWorks: 'The scheduler evaluates the ready queue continuously at every arrival event or unit time step.',
      formulas: [
        {
          name: 'Preemption Condition',
          formula: 'BT(New_Arrival) < Remaining_BT(Running_Process)',
          explanation: 'Triggers context switch to the new arrival.'
        }
      ],
      commonMistakes: [
        'Failing to decrement the remaining burst time of the currently executing process.',
        'Forgetting that Response Time is recorded at the FIRST time a process gets the CPU.'
      ]
    },
    algorithmSteps: [
      'Step 1: Track remaining burst time for all processes.',
      'Step 2: At each unit time t, select process with minimum remaining burst time > 0.',
      'Step 3: Execute for 1 unit, decrement remaining burst time.',
      'Step 4: If remaining burst time == 0, mark complete and record CT.',
      'Step 5: Advance t and repeat until all jobs complete.'
    ]
  },
  {
    id: 'exp-priority',
    moduleId: 'cpu-scheduling',
    title: 'Priority CPU Scheduling (Preemptive & Non-Preemptive)',
    category: 'CPU Scheduling',
    difficulty: 'Intermediate',
    estimatedTime: '30 mins',
    coMapping: 'CO2',
    objective: 'To implement Priority CPU scheduling where the CPU is allocated to the process with the highest priority, and study aging techniques to prevent starvation.',
    learningOutcomes: [
      'Map integer priority numbers to CPU scheduling order.',
      'Analyze indefinite blocking (starvation) of low-priority processes.',
      'Implement Aging to dynamically elevate the priority of waiting jobs.'
    ],
    prerequisites: ['FCFS scheduling', 'Process priority concepts'],
    keyConcepts: ['Priority Integer Convention', 'Starvation', 'Aging Mechanism', 'Preemptive vs Non-Preemptive Priority'],
    hasSimulation: true,
    hasCode: true,
    hasChallenge: true,
    theory: {
      quickSummary: 'Priority scheduling assigns an integer rank to each process. The CPU is allocated to the process with the highest priority (commonly, lowest integer value).',
      definition: 'Priority scheduling is a method of scheduling processes based on priority, where higher-priority jobs execute before lower-priority jobs.',
      whyItMatters: 'Essential for real-time systems and operating system kernels where critical system tasks take precedence over user applications.',
      howItWorks: 'Ready processes are sorted by priority. Tie-breaking is resolved using FCFS.',
      formulas: [
        {
          name: 'Aging Formula',
          formula: 'Priority(t) = Priority(0) - k * Waiting_Time',
          explanation: 'Gradually elevates priority of waiting processes to guarantee bounded waiting.'
        }
      ],
      commonMistakes: [
        'Inverting priority convention (assuming higher number means higher priority without verifying system specs).',
        'Failing to handle tie-breaking when two arrived processes share the same priority.'
      ]
    },
    algorithmSteps: [
      'Step 1: Read processes with AT, BT, and Priority.',
      'Step 2: At currentTime, inspect all arrived processes in ready queue.',
      'Step 3: Select process with highest priority (lowest integer value).',
      'Step 4: Run process, record CT, TAT, and WT.',
      'Step 5: Repeat until all processes finish.'
    ]
  },
  {
    id: 'exp-rr',
    moduleId: 'cpu-scheduling',
    title: 'Round Robin (RR) Scheduling with Time Quantum',
    category: 'CPU Scheduling',
    difficulty: 'Intermediate',
    estimatedTime: '35 mins',
    coMapping: 'CO2',
    objective: 'To analyze and simulate Round Robin scheduling and explore how the Time Quantum affects context switching, response time, and turnaround time.',
    learningOutcomes: [
      'Master circular ready queue rotation with timer interrupts.',
      'Observe the trade-off: small quantum gives fast response but high context switch overhead; large quantum degrades to FCFS.',
      'Implement multi-pass Gantt chart generation.'
    ],
    prerequisites: ['FCFS scheduling', 'Preemption concepts', 'Circular queues'],
    keyConcepts: ['Time Quantum (q)', 'Preemption', 'Context Switch', 'Response Time', 'Circular Ready Queue'],
    hasSimulation: true,
    hasCode: true,
    hasChallenge: true,
    theory: {
      quickSummary: 'Round Robin is designed for time-sharing systems. Each process gets a small unit of CPU time (time quantum). After this, the process is preempted and added to the tail of the ready queue.',
      definition: 'Round Robin is a preemptive scheduling algorithm where each ready process is allocated the CPU for a fixed time slice called a quantum.',
      whyItMatters: 'Round Robin provides excellent response time for interactive users, ensuring no single process monopolizes the processor.',
      howItWorks: 'The ready queue is treated as a FIFO ring. The CPU scheduler allocates the CPU to each process for a time interval of up to 1 time quantum.',
      formulas: [
        {
          name: 'Quantum Rule of Thumb',
          formula: '80% of CPU bursts should be shorter than the time quantum (q)',
          explanation: 'Balances interactive responsiveness against excessive context switch penalties.'
        }
      ],
      commonMistakes: [
        'Failing to push newly arrived processes into the ready queue before returning the preempted process.',
        'Subtracting the full quantum when a process needs less burst time than the quantum.'
      ]
    },
    algorithmSteps: [
      'Step 1: Set time quantum q and read processes (AT, BT).',
      'Step 2: Maintain FIFO Ready Queue and remaining burst times.',
      'Step 3: Dequeue head process P, execute for min(q, P.remaining).',
      'Step 4: Advance currentTime, enqueue new arrivals.',
      'Step 5: If P.remaining > 0, re-enqueue P at tail; else record completion.',
      'Step 6: Repeat until ready queue is empty.'
    ]
  },

  // ==================== MODULE 4: PROCESS SYNCHRONIZATION ====================
  {
    id: 'exp-producer-consumer',
    moduleId: 'synchronization',
    title: 'Producer-Consumer Problem using Semaphores',
    category: 'Process Synchronization',
    difficulty: 'Intermediate',
    estimatedTime: '30 mins',
    coMapping: 'CO2, CO3',
    objective: 'To simulate the classical bounded-buffer Producer-Consumer synchronization problem using mutex and counting semaphores.',
    learningOutcomes: [
      'Understand critical sections and mutual exclusion.',
      'Differentiate between binary semaphores (mutex) and counting semaphores (empty, full).',
      'Observe buffer overflow and underflow prevention.'
    ],
    prerequisites: ['Processes vs Threads', 'Race conditions', 'Semaphore wait() and signal()'],
    keyConcepts: ['Bounded Buffer', 'Counting Semaphore', 'Binary Mutex', 'Deadlock Prevention'],
    hasSimulation: true,
    hasCode: true,
    hasChallenge: true,
    theory: {
      quickSummary: 'The Producer generates data items and puts them into a shared buffer of fixed size. The Consumer removes items from the buffer. Semaphores ensure the producer cannot produce into a full buffer and the consumer cannot read from an empty buffer.',
      definition: 'The Producer-Consumer (bounded-buffer) problem is a multi-process synchronization problem where two processes share a common fixed-size buffer used as a queue.',
      whyItMatters: 'It models real-world pipeline architectures such as media streaming, audio playback buffers, and printer spooling.',
      howItWorks: 'Three semaphores are used: mutex (1) for mutual exclusion, empty (N) counting empty slots, and full (0) counting filled slots.',
      formulas: [
        {
          name: 'Semaphore Invariant',
          formula: 'empty + full = N (Buffer Capacity)',
          explanation: 'At any point, the sum of empty and full slots always equals buffer capacity.'
        }
      ],
      commonMistakes: [
        'Swapping the order of wait(empty) and wait(mutex) causing deadlock if the buffer is full.',
        'Allowing two consumers or producers into the critical section simultaneously without mutex.'
      ]
    },
    algorithmSteps: [
      'Step 1: Initialize mutex = 1, empty = BUFFER_SIZE, full = 0.',
      'Step 2: Producer: produce item -> wait(empty) -> wait(mutex) -> add to buffer -> signal(mutex) -> signal(full).',
      'Step 3: Consumer: wait(full) -> wait(mutex) -> remove from buffer -> signal(mutex) -> signal(empty) -> consume item.',
      'Step 4: Observe how buffer state transitions smoothly without race conditions.'
    ]
  },
  {
    id: 'exp-dining-phil',
    moduleId: 'synchronization',
    title: 'Dining Philosophers Problem & Deadlock Resolution',
    category: 'Process Synchronization',
    difficulty: 'Advanced',
    estimatedTime: '35 mins',
    coMapping: 'CO3',
    objective: 'To demonstrate concurrent resource contention, circular wait, deadlock formation, and starvation among 5 philosophers sharing 5 forks.',
    learningOutcomes: [
      'Visualize the 4 Coffman conditions required for deadlock in action.',
      'Observe how symmetric resource acquisition produces circular wait.',
      'Implement asymmetric or semaphore-guarded solutions that guarantee freedom from deadlock.'
    ],
    prerequisites: ['Semaphores', 'Deadlock conditions', 'Mutual exclusion'],
    keyConcepts: ['Circular Wait', 'Starvation', 'Asymmetric Solution', 'Resource Contention'],
    hasSimulation: true,
    hasCode: true,
    hasChallenge: true,
    theory: {
      quickSummary: 'Five philosophers sit at a circular table with 5 forks. Each philosopher alternates between thinking and eating. To eat, a philosopher requires both their left and right forks.',
      definition: 'The Dining Philosophers problem is a classic multi-process synchronization problem illustrating deadlock and starvation in concurrent systems.',
      whyItMatters: 'It is the quintessential metaphor for multiple processes competing for mutually exclusive shared hardware resources without centralized coordination.',
      howItWorks: 'If every philosopher picks up their left fork simultaneously, none can acquire their right fork, resulting in permanent deadlock.',
      formulas: [
        {
          name: 'Deadlock Condition',
          formula: 'Circular Wait: P0 waits for F1, P1 waits for F2, ..., P4 waits for F0',
          explanation: 'Closed loop of waiting dependencies leads to permanent system halt.'
        }
      ],
      commonMistakes: [
        'Assuming deadlock cannot occur if philosophers eat at different speeds.',
        'Solving deadlock but inadvertently causing starvation where one philosopher never eats.'
      ]
    },
    algorithmSteps: [
      'Step 1: Model 5 philosophers and 5 forks (semaphores) in a circular topology.',
      'Step 2: Philosopher i thinking -> gets hungry.',
      'Step 3: Pick up Fork i (left) and Fork (i+1)%5 (right).',
      'Step 4: Eat for designated duration.',
      'Step 5: Put down both forks and return to thinking.'
    ]
  },
  {
    id: 'exp-readers-writers',
    moduleId: 'synchronization',
    title: 'Readers-Writers Problem using Mutex & ReadCount',
    category: 'Process Synchronization',
    difficulty: 'Intermediate',
    estimatedTime: '30 mins',
    coMapping: 'CO2, CO3',
    objective: 'To synchronize concurrent read and write access to a shared database, ensuring multiple readers can read simultaneously while writers have exclusive access.',
    learningOutcomes: [
      'Implement shared-read and exclusive-write synchronization policies.',
      'Maintain readcount and protect it using a mutex.',
      'Analyze reader preference vs writer starvation.'
    ],
    prerequisites: ['Binary semaphores', 'Mutual exclusion'],
    keyConcepts: ['Shared Read Lock', 'Exclusive Write Lock', 'readcount Variable', 'Writer Starvation'],
    hasSimulation: true,
    hasCode: true,
    hasChallenge: true,
    theory: {
      quickSummary: 'Multiple readers can access a shared dataset simultaneously without conflicts, but if a writer accesses the data, no reader or other writer may do so concurrently.',
      definition: 'The Readers-Writers problem is a classical synchronization problem that models concurrent access to a shared database.',
      whyItMatters: 'Used in database transaction management, distributed file systems, and operating system kernels.',
      howItWorks: 'The first reader acquires the write semaphore to block writers; subsequent readers increment readcount. The last reader releases the write semaphore.',
      formulas: [
        {
          name: 'First/Last Reader Logic',
          formula: 'if (readcount == 1) wait(wrt); ... if (readcount == 0) signal(wrt);',
          explanation: 'Ensures writers are excluded whenever any readers are active.'
        }
      ],
      commonMistakes: [
        'Allowing writers into the critical section while readers are still active.',
        'Causing writer starvation by continually admitting new readers.'
      ]
    },
    algorithmSteps: [
      'Step 1: Initialize mutex = 1, wrt = 1, readcount = 0.',
      'Step 2: Reader: wait(mutex) -> readcount++ -> if readcount==1 wait(wrt) -> signal(mutex) -> READ -> wait(mutex) -> readcount-- -> if readcount==0 signal(wrt) -> signal(mutex).',
      'Step 3: Writer: wait(wrt) -> WRITE -> signal(wrt).'
    ]
  },

  // ==================== MODULE 5: DEADLOCKS ====================
  {
    id: 'exp-bankers',
    moduleId: 'deadlock',
    title: "Banker's Algorithm for Deadlock Avoidance",
    category: 'Deadlock Detection & Avoidance',
    difficulty: 'Intermediate',
    estimatedTime: '35 mins',
    coMapping: 'CO3',
    objective: "To simulate Banker's algorithm for multi-resource deadlock avoidance and determine whether the system is in a safe state by discovering a safe execution sequence.",
    learningOutcomes: [
      'Compute the Need matrix from Allocation and Max demand matrices.',
      'Execute safety checks step-by-step using Work and Finish vectors.',
      'Test Resource Request algorithms to determine if requests can be granted immediately.'
    ],
    prerequisites: ['Matrices in OS', 'Deadlock concepts', 'Safe vs Unsafe states'],
    keyConcepts: ['Allocation Matrix', 'Max Matrix', 'Available Vector', 'Need Matrix', 'Safe Sequence', 'Unsafe State'],
    hasSimulation: true,
    hasCode: true,
    hasChallenge: true,
    theory: {
      quickSummary: "Banker's algorithm tests for safety by simulating the allocation of predetermined maximum possible amounts of all resources, then makes an safety check to test for possible deadlock conditions.",
      definition: "Banker's algorithm is a resource allocation and deadlock avoidance algorithm that tests all requests for safety before granting them.",
      whyItMatters: 'Provides a mathematical guarantee that the operating system will never enter a deadlocked state.',
      howItWorks: 'System grants requests only if the resulting state leaves at least one safe sequence of execution where all processes can finish.',
      formulas: [
        {
          name: 'Need Matrix Equation',
          formula: 'Need[i][j] = Max[i][j] - Allocation[i][j]',
          explanation: 'The remaining resources process Pi may request to complete.'
        },
        {
          name: 'Safety Condition',
          formula: 'Need[i] <= Work',
          explanation: 'Process Pi can complete only if its remaining need can be satisfied by current Work.'
        }
      ],
      commonMistakes: [
        'Forgetting that Work vector increases after a process completes.',
        'Confusing an Unsafe State with an immediate Deadlock.'
      ]
    },
    algorithmSteps: [
      'Step 1: Initialize Work = Available, Finish[i] = false.',
      'Step 2: Find index i where Finish[i] == false and Need[i] <= Work.',
      'Step 3: If found: Work += Allocation[i], Finish[i] = true, append Pi to safeSeq. Repeat Step 2.',
      'Step 4: If all Finish[i] == true, system is SAFE; else UNSAFE.'
    ]
  },
  {
    id: 'exp-rag',
    moduleId: 'deadlock',
    title: 'Resource Allocation Graph (RAG) & Cycle Detection',
    category: 'Deadlock Detection & Avoidance',
    difficulty: 'Intermediate',
    estimatedTime: '30 mins',
    coMapping: 'CO3',
    objective: 'To construct and analyze Resource Allocation Graphs (RAG) with process nodes, resource nodes, request edges, and assignment edges, and detect deadlock cycles.',
    learningOutcomes: [
      'Construct bipartite directed graphs representing process-resource dependencies.',
      'Identify request edges (Process -> Resource) and assignment edges (Resource -> Process).',
      'Apply cycle detection algorithms to determine deadlock conditions.'
    ],
    prerequisites: ['Graph theory basics', 'Coffman conditions'],
    keyConcepts: ['Bipartite Graph', 'Request Edge', 'Assignment Edge', 'Cycle in Single vs Multi-Instance Resources'],
    hasSimulation: true,
    hasCode: true,
    hasChallenge: true,
    theory: {
      quickSummary: 'A Resource Allocation Graph visually depicts the state of a system in terms of processes and resources. A cycle in a single-instance resource graph is both necessary and sufficient for deadlock.',
      definition: 'A Resource Allocation Graph (RAG) is a directed graph that describes the current state of all resources and processes in an OS.',
      whyItMatters: 'Used by operating system monitors for visual deadlock detection and debugging concurrent systems.',
      howItWorks: 'Nodes are partitioned into Processes P and Resources R. Directed edges depict allocation and pending requests.',
      formulas: [
        {
          name: 'Cycle Theorem',
          formula: 'Cycle in Single-Instance RAG <=> Deadlock Exists',
          explanation: 'In multi-instance systems, a cycle is necessary but not sufficient.'
        }
      ],
      commonMistakes: [
        'Assuming a cycle in a multi-instance graph always implies deadlock (other processes may release resources).',
        'Drawing request edges in the reverse direction.'
      ]
    },
    algorithmSteps: [
      'Step 1: Plot process nodes P1..Pn and resource nodes R1..Rm.',
      'Step 2: Draw assignment edges (Rj -> Pi) for allocated units.',
      'Step 3: Draw request edges (Pi -> Rj) for pending requests.',
      'Step 4: Run DFS/Tarjan cycle detection to identify deadlocked processes.'
    ]
  },

  // ==================== MODULE 6: MEMORY MANAGEMENT ====================
  {
    id: 'exp-first-fit',
    moduleId: 'memory',
    title: 'Contiguous Memory Allocation: First Fit, Best Fit, & Worst Fit',
    category: 'Contiguous Memory Allocation',
    difficulty: 'Intermediate',
    estimatedTime: '30 mins',
    coMapping: 'CO3, CO4',
    objective: 'To implement and compare dynamic contiguous memory allocation strategies (First Fit, Best Fit, Worst Fit) and visualize internal and external fragmentation.',
    learningOutcomes: [
      'Understand fixed and variable partition memory management.',
      'Observe how partition search order impacts memory utilization.',
      'Quantify internal and external fragmentation.'
    ],
    prerequisites: ['Memory partitioning', 'Process memory footprints'],
    keyConcepts: ['First Fit', 'Best Fit', 'Worst Fit', 'Internal Fragmentation', 'External Fragmentation'],
    hasSimulation: true,
    hasCode: true,
    hasChallenge: true,
    theory: {
      quickSummary: 'Operating systems allocate variable memory blocks to incoming processes using placement algorithms: First Fit picks the first hole that is big enough; Best Fit picks the smallest hole; Worst Fit picks the largest hole.',
      definition: 'Contiguous memory allocation is a memory management technique where each program occupies a single contiguous block of physical memory addresses.',
      whyItMatters: 'Understanding contiguous allocation is critical for understanding why modern operating systems evolved into non-contiguous paging.',
      howItWorks: 'Allocator scans the free list according to the chosen heuristic and assigns the process into the selected partition.',
      formulas: [
        {
          name: 'Internal Fragmentation',
          formula: 'Internal Frag = Block Size - Process Size',
          explanation: 'Memory allocated to a process that remains unused within the partition.'
        },
        {
          name: 'External Fragmentation',
          formula: 'External Frag = Total Free Memory (when request fails)',
          explanation: 'Total free space is sufficient, but no single hole is large enough.'
        }
      ],
      commonMistakes: [
        'Believing Best Fit always produces less total fragmentation.',
        'Failing to track remaining free space when a block is split.'
      ]
    },
    algorithmSteps: [
      'Step 1: Read memory partition sizes and process sizes.',
      'Step 2: For each process, search available blocks according to strategy.',
      'Step 3: Allocate process, compute internal fragmentation.',
      'Step 4: If no partition fits, record external fragmentation.'
    ]
  },
  {
    id: 'exp-paging',
    moduleId: 'memory',
    title: 'Paging & Logical-to-Physical Address Translation',
    category: 'Contiguous Memory Allocation',
    difficulty: 'Intermediate',
    estimatedTime: '30 mins',
    coMapping: 'CO4',
    objective: 'To simulate non-contiguous memory paging and demonstrate hardware address translation using Page Numbers, Offsets, Page Tables, and Frame Numbers.',
    learningOutcomes: [
      'Decompose logical addresses into Page Number (p) and Offset (d).',
      'Look up physical Frame Number (f) in the Page Table.',
      'Calculate physical address f * Page_Size + d and analyze internal fragmentation.'
    ],
    prerequisites: ['Binary addresses', 'Powers of 2 in memory'],
    keyConcepts: ['Page Number (p)', 'Page Offset (d)', 'Frame Number (f)', 'Page Table Base Register (PTBR)', 'Internal Fragmentation in Paging'],
    hasSimulation: true,
    hasCode: true,
    hasChallenge: true,
    theory: {
      quickSummary: 'Paging eliminates external fragmentation by dividing logical memory into fixed-size pages and physical memory into identical frames. A page table translates logical page numbers into physical frames.',
      definition: 'Paging is a memory management scheme that permits the physical address space of a process to be non-contiguous.',
      whyItMatters: 'Paging is the fundamental architecture of all modern operating systems (Linux, Windows, macOS).',
      howItWorks: 'Given address A with page size 2^m: page number p = A / 2^m, offset d = A % 2^m. Physical address = (Frame * 2^m) + d.',
      formulas: [
        {
          name: 'Address Translation',
          formula: 'Physical Address = (Frame Number * Page Size) + Offset',
          explanation: 'Combines mapped frame base with the intra-page offset.'
        }
      ],
      commonMistakes: [
        'Assuming offset changes during translation (offset remains identical in logical and physical addresses).',
        'Confusing page size with frame size (they are always strictly equal).'
      ]
    },
    algorithmSteps: [
      'Step 1: Define page size (e.g. 4 KB = 4096 bytes).',
      'Step 2: Read logical address from user.',
      'Step 3: Compute page number p = address / pageSize, offset d = address % pageSize.',
      'Step 4: Look up frame f = pageTable[p].',
      'Step 5: Compute physical address = (f * pageSize) + d.'
    ]
  },

  // ==================== MODULE 7: VIRTUAL MEMORY ====================
  {
    id: 'exp-fifo-page',
    moduleId: 'virtual-memory',
    title: 'FIFO Page Replacement & Belady’s Anomaly',
    category: 'Virtual Memory',
    difficulty: 'Intermediate',
    estimatedTime: '30 mins',
    coMapping: 'CO4',
    objective: 'To simulate FIFO page replacement, calculate page faults and hit ratios, and demonstrate Belady’s anomaly.',
    learningOutcomes: [
      'Understand demand paging and page fault handling.',
      'Track page frame queues in First-In, First-Out order.',
      'Demonstrate Belady’s anomaly where adding frames increases faults.'
    ],
    prerequisites: ['Paging concepts', 'Queue data structure'],
    keyConcepts: ['Page Hit', 'Page Fault', 'Belady’s Anomaly', 'FIFO Queue', 'Hit Ratio'],
    hasSimulation: true,
    hasCode: true,
    hasChallenge: true,
    theory: {
      quickSummary: 'FIFO replaces the oldest page that was loaded into memory. While simple to implement, FIFO suffers from Belady’s anomaly where increasing frame capacity can counterintuitively increase page faults.',
      definition: 'FIFO page replacement associates with each page the time when that page was brought into memory; when a page must be replaced, the oldest page is chosen.',
      whyItMatters: 'Demonstrates why practical operating systems avoid pure FIFO in favor of recency or clock approximations.',
      howItWorks: 'A FIFO queue tracks resident pages. On fault, the head page is evicted, and the new page is enqueued at the tail.',
      formulas: [
        {
          name: 'Fault Ratio',
          formula: 'Fault Ratio = (Total Faults / Total References) * 100%',
          explanation: 'Percentage of references that incurred page faults.'
        }
      ],
      commonMistakes: [
        'Updating the FIFO queue on a page hit (in FIFO, hits do not alter queue order).',
        'Believing more memory frames always guarantees fewer page faults.'
      ]
    },
    algorithmSteps: [
      'Step 1: Read reference string and frame capacity.',
      'Step 2: For each page, check if present in frames (HIT).',
      'Step 3: If not present (FAULT), evict oldest page in FIFO queue.',
      'Step 4: Insert new page and record metrics.'
    ]
  },
  {
    id: 'exp-lru-page',
    moduleId: 'virtual-memory',
    title: 'Least Recently Used (LRU) Page Replacement',
    category: 'Virtual Memory',
    difficulty: 'Intermediate',
    estimatedTime: '30 mins',
    coMapping: 'CO4',
    objective: 'To implement and simulate the LRU page replacement algorithm using timestamps or stack tracking, and verify its freedom from Belady’s anomaly.',
    learningOutcomes: [
      'Understand recency-based eviction heuristics.',
      'Update page timestamps on every memory reference (hits and faults).',
      'Verify that LRU is a stack algorithm free from Belady’s anomaly.'
    ],
    prerequisites: ['FIFO page replacement', 'Stack data structures'],
    keyConcepts: ['Recency Tracking', 'Stack Algorithm', 'Locality of Reference', 'Victim Selection'],
    hasSimulation: true,
    hasCode: true,
    hasChallenge: true,
    theory: {
      quickSummary: 'LRU associates with each page the time of its last use. When a page must be replaced, LRU evicts the page that has not been used for the longest period of time.',
      definition: 'LRU page replacement replaces the page that has not been referenced for the longest time in the past.',
      whyItMatters: 'Approximates optimal replacement by exploiting the temporal locality of reference exhibited by programs.',
      howItWorks: 'Every memory access updates the referenced page timestamp or moves it to the top of the stack.',
      formulas: [
        {
          name: 'Stack Property',
          formula: 'Frames(n) ⊆ Frames(n+1)',
          explanation: 'The set of pages for n frames is always a subset of pages for n+1 frames.'
        }
      ],
      commonMistakes: [
        'Forgetting to update the timestamp when a page hit occurs.',
        'Confusing LRU (least recently used) with LFU (least frequently used).'
      ]
    },
    algorithmSteps: [
      'Step 1: Maintain lastUsed timestamp for each page.',
      'Step 2: For each reference, update lastUsed[page] = currentTime.',
      'Step 3: On page fault when frames are full, evict page with minimum lastUsed timestamp.',
      'Step 4: Load new page and compute cumulative hit ratio.'
    ]
  },
  {
    id: 'exp-optimal-page',
    moduleId: 'virtual-memory',
    title: 'Optimal (OPT / MIN) Page Replacement Algorithm',
    category: 'Virtual Memory',
    difficulty: 'Advanced',
    estimatedTime: '30 mins',
    coMapping: 'CO4',
    objective: 'To simulate the theoretical Optimal page replacement algorithm that achieves the lowest possible page fault rate for any reference string.',
    learningOutcomes: [
      'Analyze the theoretical lower bound for page faults.',
      'Inspect future references to select the victim page.',
      'Benchmark practical algorithms (FIFO, LRU, Clock) against Optimal.'
    ],
    prerequisites: ['LRU page replacement', 'Future reference analysis'],
    keyConcepts: ['Belady’s Optimal Algorithm', 'Theoretical Lower Bound', 'Future Lookahead', 'Performance Benchmarking'],
    hasSimulation: true,
    hasCode: true,
    hasChallenge: true,
    theory: {
      quickSummary: 'Optimal page replacement replaces the page that will not be used for the longest period of time in the future. It guarantees the absolute minimum number of page faults.',
      definition: 'Optimal page replacement (OPT / MIN) replaces the page whose next reference is farthest in the future.',
      whyItMatters: 'Serves as the theoretical benchmark against which all real-world page replacement algorithms are evaluated.',
      howItWorks: 'On fault, the algorithm scans forward through the remaining reference string and evicts the page needed farthest in the future (or never again).',
      formulas: [
        {
          name: 'Optimality Criterion',
          formula: 'Faults(OPT) <= Faults(Any Online Algorithm)',
          explanation: 'Optimal provides the absolute minimum fault count possible.'
        }
      ],
      commonMistakes: [
        'Attempting to deploy Optimal in a real OS (requires omniscient future knowledge).',
        'Evicting a page needed soon instead of one needed farthest away.'
      ]
    },
    algorithmSteps: [
      'Step 1: For each reference, if page present -> HIT.',
      'Step 2: If FAULT and frames full: scan future references for each resident page.',
      'Step 3: Select page with maximum distance to next reference (or not referenced again).',
      'Step 4: Replace victim and record step.'
    ]
  },

  // ==================== MODULE 8: FILE SYSTEMS ====================
  {
    id: 'exp-file-alloc',
    moduleId: 'file-systems',
    title: 'File Allocation Methods: Contiguous, Linked, & Indexed',
    category: 'File Systems',
    difficulty: 'Intermediate',
    estimatedTime: '30 mins',
    coMapping: 'CO4, CO5',
    objective: 'To visualize and compare contiguous, linked, and indexed disk block allocation strategies for file system storage.',
    learningOutcomes: [
      'Understand direct vs sequential file access trade-offs.',
      'Analyze internal/external fragmentation in contiguous allocation.',
      'Examine pointer overhead and reliability in linked allocation.',
      'Master index blocks and multi-level indexing.'
    ],
    prerequisites: ['Disk sectors and blocks', 'File directory structures'],
    keyConcepts: ['Contiguous Allocation', 'Linked Allocation', 'Indexed Allocation', 'Index Block', 'Directory Entry'],
    hasSimulation: true,
    hasCode: true,
    hasChallenge: false,
    theory: {
      quickSummary: 'File allocation methods determine how secondary storage disk blocks are allocated to files: contiguous (consecutive blocks), linked (each block points to next), or indexed (a dedicated index block contains pointers to all data blocks).',
      definition: 'File allocation methods define the physical arrangement and tracking of file data blocks across disk sectors.',
      whyItMatters: 'Dictates file access speed (random vs sequential), disk space efficiency, and resistance to corruption.',
      howItWorks: 'Directory tables store metadata: start block and length for contiguous; start and end pointers for linked; and index block pointer for indexed.',
      formulas: [
        {
          name: 'Linked Pointer Overhead',
          formula: 'Usable Bytes = Block Size - Pointer Size',
          explanation: 'Each disk block reserves bytes for the pointer to the next block.'
        }
      ],
      commonMistakes: [
        'Assuming linked allocation supports efficient direct/random access.',
        'Overlooking index block overhead for small files.'
      ]
    },
    algorithmSteps: [
      'Step 1: Initialize disk blocks (e.g. 32 blocks).',
      'Step 2: Contiguous: Find consecutive free blocks of size N. Record start block and length.',
      'Step 3: Linked: Find N free blocks anywhere, chain them with pointers. Record start and end block.',
      'Step 4: Indexed: Allocate 1 index block pointing to N data blocks.',
      'Step 5: Render disk layout and directory table.'
    ]
  },
  {
    id: 'exp-directory-struct',
    moduleId: 'file-systems',
    title: 'Directory Structures: Single-Level, Two-Level & Tree-Structured',
    category: 'File Systems',
    difficulty: 'Beginner',
    estimatedTime: '25 mins',
    coMapping: 'CO4, CO5',
    objective: 'To model directory organization schemes (Single-Level, Two-Level User Directories, Hierarchical Tree) and examine path resolution and file collision prevention.',
    learningOutcomes: [
      'Understand filename collision problems in Single-Level directories.',
      'Structure user-isolated files using Two-Level Master File Directories (MFD/UFD).',
      'Traverse hierarchical tree-structured directories using absolute and relative paths.'
    ],
    prerequisites: ['File concepts', 'Tree data structures'],
    keyConcepts: ['Master File Directory (MFD)', 'User File Directory (UFD)', 'Path Traversal', 'Subdirectories', 'File Protection'],
    hasSimulation: true,
    hasCode: true,
    hasChallenge: false,
    theory: {
      quickSummary: 'Directory structures organize files logically. Single-level directories cause name collisions; two-level directories isolate users; tree-structured directories enable arbitrary nesting and modular organization.',
      definition: 'A directory structure is the organizational method used by a file system to keep track of files and subdirectories on storage media.',
      whyItMatters: 'Forms the backbone of modern filesystems (ext4, NTFS, APFS), enabling users to organize millions of files.',
      howItWorks: 'Directories are special files containing pairs of (filename, inode/block pointer). Path resolution parses path separators recursively.',
      formulas: [
        {
          name: 'Hierarchical Path Depth',
          formula: 'Path = /dir1/dir2/.../filename',
          explanation: 'Traverses tree edges from root (/) to the target inode.'
        }
      ],
      commonMistakes: [
        'Assuming files in different directories cannot share the exact same name.',
        'Confusing hard links with symbolic (soft) links in directory trees.'
      ]
    },
    algorithmSteps: [
      'Step 1: Model root directory node.',
      'Step 2: Support directory creation (mkdir) and file creation (touch).',
      'Step 3: Enforce unique filenames within the same directory level.',
      'Step 4: Traverse and display directory tree hierarchy.'
    ]
  },

  // ==================== MODULE 9: DISK SCHEDULING ====================
  {
    id: 'exp-disk-fcfs',
    moduleId: 'disk-scheduling',
    title: 'Disk Scheduling: FCFS & Shortest Seek Time First (SSTF)',
    category: 'Disk Scheduling',
    difficulty: 'Intermediate',
    estimatedTime: '30 mins',
    coMapping: 'CO5',
    objective: 'To simulate disk arm scheduling algorithms (FCFS and SSTF) over cylinders 0-199 and evaluate total head movement.',
    learningOutcomes: [
      'Visualize disk seek paths and cylinder head travel.',
      'Understand how SSTF minimizes immediate seek time but risks starvation.',
      'Calculate total head movement across multiple pending I/O requests.'
    ],
    prerequisites: ['Magnetic disk geometry', 'Seek time vs Rotational latency'],
    keyConcepts: ['Seek Time', 'Cylinder Track', 'Head Movement', 'SSTF Starvation'],
    hasSimulation: true,
    hasCode: true,
    hasChallenge: true,
    theory: {
      quickSummary: 'Disk scheduling algorithms order pending I/O requests to minimize physical read/write head movement across disk cylinders, reducing seek time.',
      definition: 'Disk scheduling is the technique used by operating systems to schedule multiple pending I/O requests for the hard disk.',
      whyItMatters: 'Seek time accounts for the largest component of disk I/O delay; efficient scheduling dramatically enhances overall system throughput.',
      howItWorks: 'Starting from an initial head position, FCFS follows arrival order while SSTF greedily moves to the nearest cylinder.',
      formulas: [
        {
          name: 'Total Head Movement (THM)',
          formula: 'THM = Σ |Track[i] - Track[i-1]|',
          explanation: 'Sum of absolute cylinder distance traveled between consecutive serviced requests.'
        }
      ],
      commonMistakes: [
        'Overlooking that SSTF can starve requests located at the platter edges if new requests cluster near the head.',
        'Calculating seek distances with negative numbers instead of absolute values.'
      ]
    },
    algorithmSteps: [
      'Step 1: Input cylinder requests and initial head position.',
      'Step 2: If FCFS: service in arrival order.',
      'Step 3: If SSTF: greedily pick unserviced track with minimum |currentHead - track|.',
      'Step 4: Compute total head movement and display trajectory graph.'
    ]
  },
  {
    id: 'exp-disk-scan',
    moduleId: 'disk-scheduling',
    title: 'SCAN (Elevator), C-SCAN, & LOOK Disk Scheduling',
    category: 'Disk Scheduling',
    difficulty: 'Intermediate',
    estimatedTime: '35 mins',
    coMapping: 'CO5',
    objective: 'To implement and compare unidirectional and bidirectional sweeping disk scheduling algorithms (SCAN, C-SCAN, LOOK, C-LOOK).',
    learningOutcomes: [
      'Master the Elevator algorithm (SCAN) sweeping to cylinder boundaries.',
      'Analyze C-SCAN circular return for uniform wait times.',
      'Differentiate LOOK and C-LOOK which reverse at the final request rather than disk edges.'
    ],
    prerequisites: ['FCFS and SSTF disk scheduling'],
    keyConcepts: ['SCAN (Elevator)', 'C-SCAN Circular Sweep', 'LOOK & C-LOOK', 'Uniform Waiting Time'],
    hasSimulation: true,
    hasCode: true,
    hasChallenge: true,
    theory: {
      quickSummary: 'SCAN moves the disk head in one direction servicing requests until it reaches the edge, then reverses. C-SCAN provides more uniform wait times by only servicing in one direction and jumping back to the start.',
      definition: 'The SCAN algorithm (also called the elevator algorithm) moves the disk arm back and forth across the platter to service requests in order of track position.',
      whyItMatters: 'Prevents the starvation seen in SSTF and ensures fair, bounded wait times for all disk requests.',
      howItWorks: 'Arm moves towards chosen direction (0 or 199) servicing all encountered requests, then reverses (SCAN) or jumps back to start (C-SCAN).',
      formulas: [
        {
          name: 'SCAN Boundary Rule',
          formula: 'SCAN traverses to 0 or Max_Cylinder before reversing direction',
          explanation: 'LOOK only travels as far as the final requested track in that direction.'
        }
      ],
      commonMistakes: [
        'Confusing SCAN with LOOK (LOOK does not travel to cylinder 0 or 199 unless requested).',
        'Counting seek distance during the idle return jump in C-SCAN incorrectly.'
      ]
    },
    algorithmSteps: [
      'Step 1: Read requests, initial head, and sweep direction (UP/DOWN).',
      'Step 2: Sort requests.',
      'Step 3: Service towards direction until boundary (199 or 0).',
      'Step 4: Reverse direction (SCAN) or jump to opposite boundary (C-SCAN).',
      'Step 5: Output complete seek path and total distance.'
    ]
  }
];
