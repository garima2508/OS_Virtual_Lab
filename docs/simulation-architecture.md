# Simulation Engine Architecture

## 1. Principles of Engine Design
1. **Mathematical Determinism**: Every engine receives pure input data and returns a complete, step-by-step state sequence:
   ```typescript
   Input -> Algorithm Engine -> ExecutionResult {
     timeline: TimelineEvent[];
     steps: SimulationStep[];
     metrics: Record<string, number>;
     explanation: string[];
   }
   ```
2. **State & Presentation Decoupling**: Visual components (Gantt charts, cylinder tracks, memory partitions) only read from the simulation state at `currentStep` and render accordingly. No algorithm logic is embedded in render loops.
3. **Playback Controller**: Standardized playback interface:
   - `play()`: Auto-increments currentStep according to speed factor (0.5x, 1x, 2x, 4x).
   - `pause()`: Halts auto-advancement.
   - `stepForward()` / `stepBackward()`: Fine-grained inspection.
   - `reset()`: Returns to step 0.
   - `setStep(index)`: Scrub directly to any point in the execution timeline.

## 2. Engines Implemented
- `cpuSchedulingEngine`: Supports FCFS, SJF, SRTF, Priority, Round Robin with quantum. Outputs turnaround times, waiting times, response times, ready queue at each instant, and Gantt blocks.
- `pageReplacementEngine`: Supports FIFO, LRU, Optimal, LFU, Clock. Generates reference string stepping, frame table state at each memory reference, hit/fault flags, and victim eviction rationale.
- `bankersAlgorithmEngine`: Checks safe state, calculates Need matrix, discovers safe sequence (or unsafe deadlock state), and tests resource request vectors.
- `memoryAllocationEngine`: Simulates contiguous partition allocation for First Fit, Best Fit, Worst Fit, Next Fit. Tracks internal/external fragmentation.
- `diskSchedulingEngine`: Computes head movement trajectory over cylinders 0-199 for FCFS, SSTF, SCAN, C-SCAN, LOOK, C-LOOK.
- `synchronizationEngine`: Models Producer-Consumer bounded buffer states and Dining Philosophers table transitions.
- `fileAllocationEngine`: Renders block grids for contiguous, linked, and indexed disk allocations.
