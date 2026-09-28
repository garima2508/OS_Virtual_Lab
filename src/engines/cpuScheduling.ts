import { ProcessItem, CPUSimResult, CPUSimStep, CPUMetrics } from '../types';

export type CPUAlgorithm = 'FCFS' | 'SJF' | 'SRTF' | 'Priority' | 'RR';

export function runCPUScheduling(
  processesInput: ProcessItem[],
  algorithm: CPUAlgorithm,
  quantum: number = 2
): CPUSimResult {
  // Deep clone processes
  const procs = processesInput.map(p => ({
    ...p,
    remainingTime: p.burstTime,
    priority: p.priority ?? 1
  }));

  const steps: CPUSimStep[] = [];
  const timeline: { pid: string; start: number; end: number }[] = [];
  const startTimes: Record<string, number> = {};
  const completionTimes: Record<string, number> = {};
  const completed: string[] = [];

  let currentTime = 0;
  let contextSwitches = 0;
  let lastRanPid: string | null = null;

  // Max simulation time safeguard
  const totalBurst = procs.reduce((sum, p) => sum + p.burstTime, 0);
  const maxSimTime = totalBurst + 100;

  if (algorithm === 'FCFS') {
    // Sort by arrival time
    const sorted = [...procs].sort((a, b) => a.arrivalTime - b.arrivalTime);
    for (const p of sorted) {
      if (currentTime < p.arrivalTime) {
        currentTime = p.arrivalTime;
      }
      if (lastRanPid !== null && lastRanPid !== p.pid) {
        contextSwitches++;
      }
      startTimes[p.pid] = currentTime;
      const start = currentTime;
      currentTime += p.burstTime;
      completionTimes[p.pid] = currentTime;
      completed.push(p.pid);
      timeline.push({ pid: p.pid, start, end: currentTime });
      lastRanPid = p.pid;

      steps.push({
        time: start,
        runningProcessId: p.pid,
        readyQueue: sorted
          .filter(x => x.arrivalTime <= start && !completed.includes(x.pid) && x.pid !== p.pid)
          .map(x => x.pid),
        completedProcesses: [...completed],
        actionDescription: `Process ${p.pid} begins execution at t=${start} and finishes at t=${currentTime}.`
      });
    }
  } else if (algorithm === 'SJF') {
    // Non-preemptive Shortest Job First
    while (completed.length < procs.length && currentTime < maxSimTime) {
      const ready = procs.filter(
        p => p.arrivalTime <= currentTime && !completed.includes(p.pid)
      );

      if (ready.length === 0) {
        // Jump to next arrival
        const nextArrival = procs
          .filter(p => !completed.includes(p.pid))
          .sort((a, b) => a.arrivalTime - b.arrivalTime)[0];
        if (!nextArrival) break;
        currentTime = nextArrival.arrivalTime;
        continue;
      }

      // Pick shortest burst
      ready.sort((a, b) => a.burstTime - b.burstTime || a.arrivalTime - b.arrivalTime);
      const chosen = ready[0];

      if (lastRanPid !== null && lastRanPid !== chosen.pid) {
        contextSwitches++;
      }
      if (startTimes[chosen.pid] === undefined) {
        startTimes[chosen.pid] = currentTime;
      }

      const start = currentTime;
      currentTime += chosen.burstTime;
      completionTimes[chosen.pid] = currentTime;
      completed.push(chosen.pid);
      timeline.push({ pid: chosen.pid, start, end: currentTime });
      lastRanPid = chosen.pid;

      steps.push({
        time: start,
        runningProcessId: chosen.pid,
        readyQueue: ready.slice(1).map(x => x.pid),
        completedProcesses: [...completed],
        actionDescription: `SJF selected ${chosen.pid} (Burst=${chosen.burstTime}) at t=${start}. Completed at t=${currentTime}.`
      });
    }
  } else if (algorithm === 'SRTF') {
    // Preemptive SJF / Shortest Remaining Time First (unit time steps)
    while (completed.length < procs.length && currentTime < maxSimTime) {
      const ready = procs.filter(
        p => p.arrivalTime <= currentTime && (p.remainingTime ?? 0) > 0
      );

      if (ready.length === 0) {
        currentTime++;
        continue;
      }

      ready.sort((a, b) => (a.remainingTime ?? 0) - (b.remainingTime ?? 0) || a.arrivalTime - b.arrivalTime);
      const chosen = ready[0];

      if (lastRanPid !== null && lastRanPid !== chosen.pid) {
        contextSwitches++;
      }
      if (startTimes[chosen.pid] === undefined) {
        startTimes[chosen.pid] = currentTime;
      }

      // Run for 1 time unit
      const start = currentTime;
      chosen.remainingTime = (chosen.remainingTime ?? 1) - 1;
      currentTime += 1;

      // Group timeline entries for adjacent intervals of same process
      const lastEntry = timeline[timeline.length - 1];
      if (lastEntry && lastEntry.pid === chosen.pid && lastEntry.end === start) {
        lastEntry.end = currentTime;
      } else {
        timeline.push({ pid: chosen.pid, start, end: currentTime });
      }

      if (chosen.remainingTime === 0) {
        completionTimes[chosen.pid] = currentTime;
        completed.push(chosen.pid);
      }

      steps.push({
        time: start,
        runningProcessId: chosen.pid,
        readyQueue: ready.filter(x => x.pid !== chosen.pid).map(x => x.pid),
        completedProcesses: [...completed],
        actionDescription: `SRTF running ${chosen.pid} (Rem=${chosen.remainingTime}) at t=${start}.`
      });

      lastRanPid = chosen.pid;
    }
  } else if (algorithm === 'Priority') {
    // Non-preemptive Priority (Lower number = Higher priority)
    while (completed.length < procs.length && currentTime < maxSimTime) {
      const ready = procs.filter(
        p => p.arrivalTime <= currentTime && !completed.includes(p.pid)
      );

      if (ready.length === 0) {
        const nextArrival = procs
          .filter(p => !completed.includes(p.pid))
          .sort((a, b) => a.arrivalTime - b.arrivalTime)[0];
        if (!nextArrival) break;
        currentTime = nextArrival.arrivalTime;
        continue;
      }

      ready.sort((a, b) => (a.priority ?? 1) - (b.priority ?? 1) || a.arrivalTime - b.arrivalTime);
      const chosen = ready[0];

      if (lastRanPid !== null && lastRanPid !== chosen.pid) {
        contextSwitches++;
      }
      if (startTimes[chosen.pid] === undefined) {
        startTimes[chosen.pid] = currentTime;
      }

      const start = currentTime;
      currentTime += chosen.burstTime;
      completionTimes[chosen.pid] = currentTime;
      completed.push(chosen.pid);
      timeline.push({ pid: chosen.pid, start, end: currentTime });
      lastRanPid = chosen.pid;

      steps.push({
        time: start,
        runningProcessId: chosen.pid,
        readyQueue: ready.slice(1).map(x => x.pid),
        completedProcesses: [...completed],
        actionDescription: `Priority selected ${chosen.pid} (Priority=${chosen.priority}) at t=${start}. Completed at t=${currentTime}.`
      });
    }
  } else if (algorithm === 'RR') {
    // Round Robin with Quantum
    const readyQueue: ProcessItem[] = [];
    const arrived = new Set<string>();

    const checkArrivals = (time: number) => {
      procs
        .filter(p => p.arrivalTime <= time && !arrived.has(p.pid))
        .sort((a, b) => a.arrivalTime - b.arrivalTime)
        .forEach(p => {
          readyQueue.push(p);
          arrived.add(p.pid);
        });
    };

    checkArrivals(currentTime);

    while ((readyQueue.length > 0 || completed.length < procs.length) && currentTime < maxSimTime) {
      if (readyQueue.length === 0) {
        currentTime++;
        checkArrivals(currentTime);
        continue;
      }

      const currentProc = readyQueue.shift()!;
      if (lastRanPid !== null && lastRanPid !== currentProc.pid) {
        contextSwitches++;
      }
      if (startTimes[currentProc.pid] === undefined) {
        startTimes[currentProc.pid] = currentTime;
      }

      const execTime = Math.min(quantum, currentProc.remainingTime ?? currentProc.burstTime);
      const start = currentTime;
      currentTime += execTime;
      currentProc.remainingTime = (currentProc.remainingTime ?? currentProc.burstTime) - execTime;

      timeline.push({ pid: currentProc.pid, start, end: currentTime });

      // Check arrivals before re-queueing current process
      checkArrivals(currentTime);

      if ((currentProc.remainingTime ?? 0) > 0) {
        readyQueue.push(currentProc);
      } else {
        completionTimes[currentProc.pid] = currentTime;
        completed.push(currentProc.pid);
      }

      steps.push({
        time: start,
        runningProcessId: currentProc.pid,
        readyQueue: readyQueue.map(p => p.pid),
        completedProcesses: [...completed],
        actionDescription: `Round Robin: ${currentProc.pid} ran for ${execTime} unit(s) (Quantum=${quantum}). Remaining=${currentProc.remainingTime ?? 0}.`
      });

      lastRanPid = currentProc.pid;
    }
  }

  // Calculate Metrics
  const processMetrics: Record<string, CPUMetrics> = {};
  let totalWT = 0;
  let totalTAT = 0;
  let totalRT = 0;

  procs.forEach(p => {
    const ct = completionTimes[p.pid] ?? p.arrivalTime + p.burstTime;
    const tat = ct - p.arrivalTime;
    const wt = tat - p.burstTime;
    const rt = (startTimes[p.pid] ?? p.arrivalTime) - p.arrivalTime;

    processMetrics[p.pid] = {
      pid: p.pid,
      completionTime: ct,
      turnaroundTime: tat,
      waitingTime: Math.max(0, wt),
      responseTime: Math.max(0, rt)
    };

    totalWT += Math.max(0, wt);
    totalTAT += tat;
    totalRT += Math.max(0, rt);
  });

  const count = procs.length || 1;
  return {
    timeline,
    steps,
    processMetrics,
    avgWaitingTime: Number((totalWT / count).toFixed(2)),
    avgTurnaroundTime: Number((totalTAT / count).toFixed(2)),
    avgResponseTime: Number((totalRT / count).toFixed(2)),
    contextSwitches
  };
}
