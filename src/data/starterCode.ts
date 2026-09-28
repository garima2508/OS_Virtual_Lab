export interface CodeTemplate {
  id: string;
  title: string;
  language: 'c';
  filename: string;
  code: string;
  defaultOutput: string;
}

export const STARTER_CODE: Record<string, CodeTemplate> = {
  // ==================== MODULE 1: LINUX ====================
  'exp-linux-commands': {
    id: 'exp-linux-commands',
    title: 'Basic Linux Shell Execution in C',
    language: 'c',
    filename: 'linux_shell_demo.c',
    code: `/* 
 * SRM Institute of Science and Technology
 * Department of Computer Science & Engineering
 * Experiment: Linux Shell Execution via C system()
 */
#include <stdio.h>
#include <stdlib.h>

int main() {
    printf("========================================\\n");
    printf(" SRMIST VIRTUAL OS LAB - LINUX SYSTEM() \\n");
    printf("========================================\\n\\n");

    printf("[1] Display Current Working Directory:\\n");
    system("pwd");

    printf("\\n[2] List Files in Current Directory:\\n");
    system("ls -l");

    printf("\\n[3] Kernel Information:\\n");
    system("uname -s -r");

    return 0;
}
`,
    defaultOutput: `========================================
 SRMIST VIRTUAL OS LAB - LINUX SYSTEM() 
========================================

[1] Display Current Working Directory:
/home/student/srmist_os_lab

[2] List Files in Current Directory:
total 16
-rw-r--r-- 1 student srmist 1024 Sep 20 10:00 notes.txt
-rwxr-xr-x 1 student srmist 8192 Sep 20 10:05 scheduler
-rw-r--r-- 1 student srmist 2048 Sep 20 10:10 main.c

[3] Kernel Information:
Linux 5.15.0-generic
`
  },

  // ==================== MODULE 2: PROCESS MANAGEMENT ====================
  'exp-process-lifecycle': {
    id: 'exp-process-lifecycle',
    title: 'Process Creation with fork() in C',
    language: 'c',
    filename: 'fork_process.c',
    code: `/* 
 * SRM Institute of Science and Technology
 * Experiment: Process Creation using fork() and getpid()
 */
#include <stdio.h>
#include <unistd.h>
#include <sys/types.h>
#include <sys/wait.h>

int main() {
    pid_t pid;

    printf("========================================\\n");
    printf(" SRMIST VIRTUAL OS LAB - FORK() DEMO    \\n");
    printf("========================================\\n\\n");

    printf("Parent Process before fork (PID: %d)\\n", getpid());

    pid = fork();

    if (pid < 0) {
        // Error occurred
        fprintf(stderr, "Fork failed!\\n");
        return 1;
    } else if (pid == 0) {
        // Child process
        printf("[CHILD]  Hello from Child!  PID: %d, Parent PID: %d\\n", getpid(), getppid());
    } else {
        // Parent process
        wait(NULL); // Wait for child to complete
        printf("[PARENT] Child with PID %d has finished execution.\\n", pid);
    }

    return 0;
}
`,
    defaultOutput: `========================================
 SRMIST VIRTUAL OS LAB - FORK() DEMO    
========================================

Parent Process before fork (PID: 12050)
[CHILD]  Hello from Child!  PID: 12051, Parent PID: 12050
[PARENT] Child with PID 12051 has finished execution.
`
  },

  // ==================== MODULE 3: CPU SCHEDULING ====================
  'exp-fcfs': {
    id: 'exp-fcfs',
    title: 'FCFS CPU Scheduling in C',
    language: 'c',
    filename: 'fcfs_scheduler.c',
    code: `/* 
 * SRM Institute of Science and Technology
 * Department of Computer Science & Engineering
 * Experiment: First-Come, First-Served (FCFS) CPU Scheduling
 */
#include <stdio.h>

struct Process {
    int pid;
    int bt;  // Burst Time
    int at;  // Arrival Time
    int wt;  // Waiting Time
    int tat; // Turnaround Time
    int ct;  // Completion Time
};

int main() {
    int n = 4;
    struct Process p[] = {
        {1, 5, 0, 0, 0, 0},
        {2, 3, 1, 0, 0, 0},
        {3, 8, 2, 0, 0, 0},
        {4, 6, 3, 0, 0, 0}
    };

    int currentTime = 0;
    float total_wt = 0, total_tat = 0;

    printf("========================================\\n");
    printf(" SRMIST VIRTUAL OS LAB - FCFS SCHEDULER \\n");
    printf("========================================\\n\\n");

    for (int i = 0; i < n; i++) {
        if (currentTime < p[i].at) {
            currentTime = p[i].at;
        }
        p[i].ct = currentTime + p[i].bt;
        p[i].tat = p[i].ct - p[i].at;
        p[i].wt = p[i].tat - p[i].bt;
        currentTime = p[i].ct;

        total_wt += p[i].wt;
        total_tat += p[i].tat;
    }

    printf("PID\\tArrival\\tBurst\\tComplete\\tWait\\tTAT\\n");
    printf("-----------------------------------------------------\\n");
    for (int i = 0; i < n; i++) {
        printf("P%d\\t%d\\t%d\\t%d\\t\\t%d\\t%d\\n",
               p[i].pid, p[i].at, p[i].bt, p[i].ct, p[i].wt, p[i].tat);
    }

    printf("\\nAverage Waiting Time    : %.2f ms\\n", total_wt / n);
    printf("Average Turnaround Time : %.2f ms\\n", total_tat / n);

    return 0;
}
`,
    defaultOutput: `========================================
 SRMIST VIRTUAL OS LAB - FCFS SCHEDULER 
========================================

PID	Arrival	Burst	Complete	Wait	TAT
-----------------------------------------------------
P1	0	5	5		0	5
P2	1	3	8		4	7
P3	2	8	16		6	14
P4	3	6	22		13	19

Average Waiting Time    : 5.75 ms
Average Turnaround Time : 11.25 ms
`
  },
  'exp-rr': {
    id: 'exp-rr',
    title: 'Round Robin CPU Scheduling in C',
    language: 'c',
    filename: 'round_robin.c',
    code: `/* 
 * SRM Institute of Science and Technology
 * Experiment: Round Robin Scheduling with Time Quantum
 */
#include <stdio.h>

int main() {
    int n = 3, quantum = 2;
    int bt[] = {5, 3, 8};
    int rem_bt[] = {5, 3, 8};
    int wt[3] = {0}, tat[3] = {0};
    int t = 0;

    printf("SRMIST Virtual OS Lab - Round Robin (Quantum = %d)\\n\\n", quantum);

    while (1) {
        int done = 1;
        for (int i = 0; i < n; i++) {
            if (rem_bt[i] > 0) {
                done = 0;
                if (rem_bt[i] > quantum) {
                    t += quantum;
                    rem_bt[i] -= quantum;
                    printf("[t=%2d] Process P%d executed for %d ms (Remaining: %d)\\n", t, i + 1, quantum, rem_bt[i]);
                } else {
                    t += rem_bt[i];
                    wt[i] = t - bt[i];
                    printf("[t=%2d] Process P%d FINISHED execution\\n", t, i + 1);
                    rem_bt[i] = 0;
                }
            }
        }
        if (done == 1) break;
    }

    for (int i = 0; i < n; i++) tat[i] = bt[i] + wt[i];

    printf("\\nPID\\tBurst\\tWait\\tTAT\\n");
    for (int i = 0; i < n; i++) {
        printf("P%d\\t%d\\t%d\\t%d\\n", i + 1, bt[i], wt[i], tat[i]);
    }
    return 0;
}
`,
    defaultOutput: `SRMIST Virtual OS Lab - Round Robin (Quantum = 2)

[t= 2] Process P1 executed for 2 ms (Remaining: 3)
[t= 4] Process P2 executed for 2 ms (Remaining: 1)
[t= 6] Process P3 executed for 2 ms (Remaining: 6)
[t= 8] Process P1 executed for 2 ms (Remaining: 1)
[t= 9] Process P2 FINISHED execution
[t=11] Process P3 executed for 2 ms (Remaining: 4)
[t=12] Process P1 FINISHED execution
[t=14] Process P3 executed for 2 ms (Remaining: 2)
[t=16] Process P3 FINISHED execution

PID	Burst	Wait	TAT
P1	5	7	12
P2	3	6	9
P3	8	8	16
`
  },

  // ==================== MODULE 4: SYNCHRONIZATION ====================
  'exp-producer-consumer': {
    id: 'exp-producer-consumer',
    title: 'Producer-Consumer using Semaphores in C',
    language: 'c',
    filename: 'producer_consumer.c',
    code: `/* 
 * SRM Institute of Science and Technology
 * Experiment: Bounded Buffer Producer-Consumer Problem
 */
#include <stdio.h>

#define BUFFER_SIZE 5

int buffer[BUFFER_SIZE];
int in = 0, out = 0, count = 0;

void produce(int item) {
    if (count == BUFFER_SIZE) {
        printf("[PRODUCER] Buffer FULL! Cannot produce item %d\\n", item);
        return;
    }
    buffer[in] = item;
    in = (in + 1) % BUFFER_SIZE;
    count++;
    printf("[PRODUCER] Produced item %d (Buffer count: %d)\\n", item, count);
}

void consume() {
    if (count == 0) {
        printf("[CONSUMER] Buffer EMPTY! Cannot consume\\n");
        return;
    }
    int item = buffer[out];
    out = (out + 1) % BUFFER_SIZE;
    count--;
    printf("[CONSUMER] Consumed item %d (Buffer count: %d)\\n", item, count);
}

int main() {
    printf("SRMIST Virtual OS Lab - Bounded Buffer Producer-Consumer\\n\\n");
    produce(10);
    produce(20);
    produce(30);
    consume();
    produce(40);
    produce(50);
    produce(60);
    consume();
    consume();
    return 0;
}
`,
    defaultOutput: `SRMIST Virtual OS Lab - Bounded Buffer Producer-Consumer

[PRODUCER] Produced item 10 (Buffer count: 1)
[PRODUCER] Produced item 20 (Buffer count: 2)
[PRODUCER] Produced item 30 (Buffer count: 3)
[CONSUMER] Consumed item 10 (Buffer count: 2)
[PRODUCER] Produced item 40 (Buffer count: 3)
[PRODUCER] Produced item 50 (Buffer count: 4)
[PRODUCER] Produced item 60 (Buffer count: 5)
[CONSUMER] Consumed item 20 (Buffer count: 4)
[CONSUMER] Consumed item 30 (Buffer count: 3)
`
  },

  // ==================== MODULE 5: DEADLOCKS ====================
  'exp-bankers': {
    id: 'exp-bankers',
    title: "Banker's Algorithm in C",
    language: 'c',
    filename: 'bankers_algorithm.c',
    code: `/* 
 * SRM Institute of Science and Technology
 * Experiment: Banker's Deadlock Avoidance Algorithm
 */
#include <stdio.h>

int main() {
    int n = 5; // Processes
    int m = 3; // Resource types

    int alloc[5][3] = {
        {0, 1, 0},
        {2, 0, 0},
        {3, 0, 2},
        {2, 1, 1},
        {0, 0, 2}
    };

    int max[5][3] = {
        {7, 5, 3},
        {3, 2, 2},
        {9, 0, 2},
        {2, 2, 2},
        {4, 3, 3}
    };

    int avail[3] = {3, 3, 2};
    int f[5] = {0}, ans[5], ind = 0;
    int need[5][3];

    for (int i = 0; i < n; i++) {
        for (int j = 0; j < m; j++) {
            need[i][j] = max[i][j] - alloc[i][j];
        }
    }

    for (int k = 0; k < 5; k++) {
        for (int i = 0; i < n; i++) {
            if (f[i] == 0) {
                int flag = 0;
                for (int j = 0; j < m; j++) {
                    if (need[i][j] > avail[j]) {
                        flag = 1;
                        break;
                    }
                }
                if (flag == 0) {
                    ans[ind++] = i;
                    for (int y = 0; y < m; y++) avail[y] += alloc[i][y];
                    f[i] = 1;
                }
            }
        }
    }

    printf("========================================\\n");
    printf(" SRMIST VIRTUAL OS LAB - BANKER'S SAFETY \\n");
    printf("========================================\\n\\n");

    printf("SAFE Sequence found: ");
    for (int i = 0; i < n - 1; i++) printf("P%d -> ", ans[i]);
    printf("P%d\\n", ans[n - 1]);

    return 0;
}
`,
    defaultOutput: `========================================
 SRMIST VIRTUAL OS LAB - BANKER'S SAFETY 
========================================

SAFE Sequence found: P1 -> P3 -> P4 -> P0 -> P2
`
  },

  // ==================== MODULE 6: MEMORY ALLOCATION ====================
  'exp-first-fit': {
    id: 'exp-first-fit',
    title: 'First Fit Memory Allocation in C',
    language: 'c',
    filename: 'first_fit.c',
    code: `/* 
 * SRM Institute of Science and Technology
 * Experiment: Contiguous Memory Allocation (First Fit)
 */
#include <stdio.h>

int main() {
    int blockSize[] = {100, 500, 200, 300, 600};
    int processSize[] = {212, 417, 112, 426};
    int m = 5;
    int n = 4;
    int allocation[4];

    for (int i = 0; i < n; i++) allocation[i] = -1;

    for (int i = 0; i < n; i++) {
        for (int j = 0; j < m; j++) {
            if (blockSize[j] >= processSize[i]) {
                allocation[i] = j;
                blockSize[j] -= processSize[i];
                break;
            }
        }
    }

    printf("========================================\\n");
    printf(" SRMIST VIRTUAL OS LAB - FIRST FIT      \\n");
    printf("========================================\\n\\n");

    printf("Process No.\\tProcess Size\\tBlock No.\\n");
    for (int i = 0; i < n; i++) {
        printf("%d\\t\\t%d\\t\\t", i + 1, processSize[i]);
        if (allocation[i] != -1)
            printf("%d\\n", allocation[i] + 1);
        else
            printf("Not Allocated\\n");
    }
    return 0;
}
`,
    defaultOutput: `========================================
 SRMIST VIRTUAL OS LAB - FIRST FIT      
========================================

Process No.	Process Size	Block No.
1		212		2
2		417		5
3		112		2
4		426		Not Allocated
`
  },

  // ==================== MODULE 7: VIRTUAL MEMORY ====================
  'exp-fifo-page': {
    id: 'exp-fifo-page',
    title: 'FIFO Page Replacement in C',
    language: 'c',
    filename: 'fifo_page_replacement.c',
    code: `/* 
 * SRM Institute of Science and Technology
 * Experiment: FIFO Page Replacement Algorithm
 */
#include <stdio.h>

int main() {
    int incomingStream[] = {7, 0, 1, 2, 0, 3, 0, 4, 2, 3, 0, 3, 2};
    int pageFaults = 0;
    int frames = 3;
    int m = sizeof(incomingStream) / sizeof(incomingStream[0]);
    int temp[3] = {-1, -1, -1};
    int ptr = 0;

    printf("========================================\\n");
    printf(" SRMIST VIRTUAL OS LAB - FIFO PAGING    \\n");
    printf("========================================\\n\\n");

    for (int i = 0; i < m; i++) {
        int s = 0;
        for (int j = 0; j < frames; j++) {
            if (incomingStream[i] == temp[j]) {
                s++;
                pageFaults--;
            }
        }
        pageFaults++;
        if ((pageFaults <= frames) && (s == 0)) {
            temp[i] = incomingStream[i];
        } else if (s == 0) {
            temp[ptr] = incomingStream[i];
            ptr = (ptr + 1) % frames;
        }

        printf("Page %2d: [ ", incomingStream[i]);
        for (int j = 0; j < frames; j++) {
            if (temp[j] != -1) printf("%d ", temp[j]);
            else printf("- ");
        }
        printf("] %s\\n", s == 0 ? "FAULT" : "HIT");
    }

    printf("\\nTotal Page Faults: %d\\n", pageFaults);
    return 0;
}
`,
    defaultOutput: `========================================
 SRMIST VIRTUAL OS LAB - FIFO PAGING    
========================================

Page  7: [ 7 - - ] FAULT
Page  0: [ 7 0 - ] FAULT
Page  1: [ 7 0 1 ] FAULT
Page  2: [ 2 0 1 ] FAULT
Page  0: [ 2 0 1 ] HIT
Page  3: [ 2 3 1 ] FAULT
Page  0: [ 2 3 0 ] FAULT
Page  4: [ 4 3 0 ] FAULT
Page  2: [ 4 2 0 ] FAULT
Page  3: [ 4 2 3 ] FAULT
Page  0: [ 0 2 3 ] FAULT
Page  3: [ 0 2 3 ] HIT
Page  2: [ 0 2 3 ] HIT

Total Page Faults: 10
`
  },

  // ==================== MODULE 9: DISK SCHEDULING ====================
  'exp-disk-fcfs': {
    id: 'exp-disk-fcfs',
    title: 'FCFS Disk Scheduling in C',
    language: 'c',
    filename: 'disk_fcfs.c',
    code: `/* 
 * SRM Institute of Science and Technology
 * Experiment: FCFS Disk Arm Scheduling
 */
#include <stdio.h>
#include <stdlib.h>

int main() {
    int arr[] = {82, 170, 43, 140, 24, 16, 190};
    int head = 50;
    int size = sizeof(arr) / sizeof(arr[0]);
    int seek_count = 0;

    printf("========================================\\n");
    printf(" SRMIST VIRTUAL OS LAB - DISK FCFS      \\n");
    printf("========================================\\n\\n");

    printf("Initial Head Position: %d\\n", head);
    printf("Seek Trajectory: %d", head);

    for (int i = 0; i < size; i++) {
        seek_count += abs(arr[i] - head);
        head = arr[i];
        printf(" -> %d", head);
    }

    printf("\\n\\nTotal Number of Seek Operations = %d cylinders\\n", seek_count);
    return 0;
}
`,
    defaultOutput: `========================================
 SRMIST VIRTUAL OS LAB - DISK FCFS      
========================================

Initial Head Position: 50
Seek Trajectory: 50 -> 82 -> 170 -> 43 -> 140 -> 24 -> 16 -> 190

Total Number of Seek Operations = 642 cylinders
`
  }
};
