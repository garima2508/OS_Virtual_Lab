# Repository & Academic Baseline Audit

## 1. Project Context & Purpose
- **Institution**: SRM Institute of Science and Technology (SRMIST)
- **Target Audience**: B.Tech Computer Science & Engineering (CSE) Students
- **Course**: Operating Systems Laboratory
- **Objective**: Develop an interactive, visually engaging, modern virtual laboratory that allows students to **see, simulate, code, and master** core Operating Systems algorithms.
- **University Motto**: *"Learn. Leap. Lead."*
- **Primary Color Palette**: SRMIST Royal Blue (`#0c4da2`), Gold/Amber (`#f8a51d`), Dark Tech Slate (`#0a0d14`).

## 2. Reference Analysis (`erpjietuniverse.in`)
The academic baseline reference site covers traditional virtual lab topics:
1. CPU Scheduling (FCFS, SJF, Priority, Round Robin)
2. Process Synchronization (Critical Section, Mutex, Semaphores)
3. Deadlock Detection (Banker's Algorithm, Safe Sequence)
4. Contiguous Memory Management (Fixed/Variable partitions)
5. Paging Technique (Page Tables, Address Translation)
6. Memory Allocation (First Fit, Best Fit, Worst Fit)
7. Page Replacement (FIFO, LRU, Optimal)
8. File Allocation (Contiguous, Linked, Indexed)
9. Disk Scheduling (FCFS, SSTF, SCAN, LOOK)

### Limitations of Reference:
- Static HTML/jQuery UI from Bootstrap 3 era with minimal interactivity.
- No live step-by-step visualizations or animated state transitions.
- Lacks modern developer tooling, code playground, or interactive shell.
- Lacks algorithm comparisons, "What Happens If?" parameter experimentation, or gamification.

## 3. Tech Stack Decision
- **Core Framework**: React 18 with TypeScript for type-safe simulation engines and modular components.
- **Build Tool**: Vite for instant HMR and optimized production bundles.
- **Styling**: Tailwind CSS with dark-mode first design, custom SRMIST brand tokens, and high contrast accessibility.
- **3D Visualization**: Three.js for interactive WebGL "OS Core" and HTML5 Canvas fallback for mobile/low-power devices.
- **State & Progress**: Zero backend database needed at this stage; clean, abstracted `localStorage` service for completed experiments, quiz attempts, badges, XP, and bookmarks.
- **Branding**: Dedicated fixed watermark component rendering the SRMIST official seal (`college-logo.webp`) across all application pages.
