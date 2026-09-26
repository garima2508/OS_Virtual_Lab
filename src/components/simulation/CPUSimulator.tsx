import React, { useState, useEffect, useMemo, useRef } from 'react';
import { ProcessItem } from '../../types';
import { runCPUScheduling, CPUAlgorithm } from '../../engines/cpuScheduling';
import { CPUGanttChart } from './CPUGanttChart';
import { SimControls } from '../common/SimControls';
import { MetricCard } from '../common/MetricCard';
import { WhatIfDrawer } from '../common/WhatIfDrawer';
import { Plus, Trash2, Dices, Cpu, ArrowRight, Info, Sparkles } from 'lucide-react';

const INITIAL_PROCESSES: ProcessItem[] = [
  { id: '1', pid: 'P1', arrivalTime: 0, burstTime: 5, priority: 2 },
  { id: '2', pid: 'P2', arrivalTime: 1, burstTime: 3, priority: 1 },
  { id: '3', pid: 'P3', arrivalTime: 2, burstTime: 8, priority: 3 },
  { id: '4', pid: 'P4', arrivalTime: 3, burstTime: 6, priority: 2 }
];

export const CPUSimulator: React.FC = () => {
  const [processes, setProcesses] = useState<ProcessItem[]>(INITIAL_PROCESSES);
  const [algorithm, setAlgorithm] = useState<CPUAlgorithm>('FCFS');
  const [quantum, setQuantum] = useState<number>(2);
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [speed, setSpeed] = useState<number>(1);
  const [showWhatIf, setShowWhatIf] = useState<boolean>(false);

  // Compute full simulation results deterministically
  const simResult = useMemo(() => {
    return runCPUScheduling(processes, algorithm, quantum);
  }, [processes, algorithm, quantum]);

  const totalSteps = simResult.steps.length;
  const currentStep = simResult.steps[currentStepIndex] || simResult.steps[0] || {
    time: 0,
    runningProcessId: null,
    readyQueue: [],
    completedProcesses: [],
    actionDescription: 'Ready to start simulation.'
  };

  // Playback timer
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    if (isPlaying) {
      const intervalMs = Math.max(250, 1000 / speed);
      timerRef.current = window.setInterval(() => {
        setCurrentStepIndex(prev => {
          if (prev >= totalSteps - 1) {
            setIsPlaying(false);
            return prev;
          }
          return prev + 1;
        });
      }, intervalMs);
    } else if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, speed, totalSteps]);

  const handlePlayToggle = () => {
    if (currentStepIndex >= totalSteps - 1) {
      setCurrentStepIndex(0);
    }
    setIsPlaying(!isPlaying);
  };

  const handleReset = () => {
    setIsPlaying(false);
    setCurrentStepIndex(0);
  };

  const handleStepNext = () => {
    if (currentStepIndex < totalSteps - 1) {
      setCurrentStepIndex(prev => prev + 1);
    }
  };

  const handleStepPrev = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(prev => prev - 1);
    }
  };

  const handleAddProcess = () => {
    if (processes.length >= 6) return;
    const nextNum = processes.length + 1;
    const newP: ProcessItem = {
      id: String(Date.now()),
      pid: `P${nextNum}`,
      arrivalTime: Math.floor(Math.random() * 4),
      burstTime: Math.floor(Math.random() * 6) + 2,
      priority: Math.floor(Math.random() * 3) + 1
    };
    setProcesses([...processes, newP]);
    handleReset();
  };

  const handleRemoveProcess = (id: string) => {
    if (processes.length <= 2) return;
    setProcesses(processes.filter(p => p.id !== id));
    handleReset();
  };

  const handleRandomize = () => {
    const count = 4;
    const randoms: ProcessItem[] = [];
    for (let i = 1; i <= count; i++) {
      randoms.push({
        id: String(i),
        pid: `P${i}`,
        arrivalTime: i === 1 ? 0 : Math.floor(Math.random() * 5),
        burstTime: Math.floor(Math.random() * 8) + 2,
        priority: Math.floor(Math.random() * 4) + 1
      });
    }
    setProcesses(randoms);
    handleReset();
  };

  // Slice timeline up to current step
  const visibleTimeline = useMemo(() => {
    if (!currentStep) return [];
    return simResult.timeline.filter(b => b.start <= currentStep.time);
  }, [simResult.timeline, currentStep]);

  return (
    <div className="space-y-6">
      
      {/* Top Controls: Algorithm Selection & Parameters */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-1">
            Algorithm:
          </span>
          {(['FCFS', 'SJF', 'SRTF', 'Priority', 'RR'] as CPUAlgorithm[]).map(algo => (
            <button
              key={algo}
              onClick={() => {
                setAlgorithm(algo);
                handleReset();
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                algorithm === algo
                  ? 'bg-srm-blue text-white shadow-xs'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {algo === 'RR' ? 'Round Robin' : algo}
            </button>
          ))}
        </div>

        {algorithm === 'RR' && (
          <div className="flex items-center space-x-2 bg-amber-50 dark:bg-amber-950/40 px-3 py-1.5 rounded-xl border border-amber-300 dark:border-amber-800">
            <span className="text-xs font-semibold text-amber-900 dark:text-amber-300">
              Time Quantum (q):
            </span>
            <input
              type="number"
              min="1"
              max="10"
              value={quantum}
              onChange={e => {
                setQuantum(Math.max(1, Number(e.target.value) || 1));
                handleReset();
              }}
              className="w-12 px-2 py-0.5 text-xs text-center font-mono font-bold bg-white dark:bg-slate-900 border border-amber-300 dark:border-amber-700 rounded"
            />
          </div>
        )}

        <div className="flex items-center space-x-2">
          <button
            onClick={handleRandomize}
            className="flex items-center space-x-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors"
          >
            <Dices className="w-3.5 h-3.5 text-amber-500" />
            <span>Random Problem</span>
          </button>
          <button
            onClick={() => setShowWhatIf(!showWhatIf)}
            className="flex items-center space-x-1.5 px-3 py-1.5 text-xs font-semibold text-amber-800 dark:text-amber-300 bg-amber-100/60 dark:bg-amber-900/30 hover:bg-amber-200/60 rounded-lg transition-colors border border-amber-300 dark:border-amber-700"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>What If?</span>
          </button>
        </div>
      </div>

      {/* "What Happens If?" Drawer */}
      {showWhatIf && (
        <WhatIfDrawer
          type="quantum"
          currentVal={quantum}
          onValChange={v => {
            setQuantum(v);
            handleReset();
          }}
          originalMetric={`Avg WT: ${simResult.avgWaitingTime} ms`}
          updatedMetric={`Context Switches: ${simResult.contextSwitches}`}
          explanation="Notice how changing the Time Quantum alters the balance: smaller quantum yields rapid responsiveness but inflates context switch overhead; larger quantum approaches non-preemptive FCFS."
        />
      )}

      {/* Process Table & Live Architecture */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Process Table */}
        <div className="lg:col-span-1 bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-200 dark:border-slate-800 shadow-xs">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Processes ({processes.length}/6)
            </h3>
            <button
              onClick={handleAddProcess}
              disabled={processes.length >= 6}
              className="flex items-center space-x-1 text-xs font-semibold text-srm-blue dark:text-blue-400 hover:underline disabled:opacity-40"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add</span>
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800 text-slate-400">
                  <th className="pb-2 font-medium">PID</th>
                  <th className="pb-2 font-medium">AT (ms)</th>
                  <th className="pb-2 font-medium">BT (ms)</th>
                  {algorithm === 'Priority' && <th className="pb-2 font-medium">Prio</th>}
                  <th className="pb-2"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 font-mono">
                {processes.map((p, idx) => (
                  <tr key={p.id}>
                    <td className="py-2 font-bold text-srm-blue dark:text-blue-400">{p.pid}</td>
                    <td className="py-2">
                      <input
                        type="number"
                        min="0"
                        max="20"
                        value={p.arrivalTime}
                        onChange={e => {
                          const updated = [...processes];
                          updated[idx].arrivalTime = Math.max(0, Number(e.target.value) || 0);
                          setProcesses(updated);
                          handleReset();
                        }}
                        className="w-12 px-1.5 py-0.5 bg-slate-50 dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700"
                      />
                    </td>
                    <td className="py-2">
                      <input
                        type="number"
                        min="1"
                        max="30"
                        value={p.burstTime}
                        onChange={e => {
                          const updated = [...processes];
                          updated[idx].burstTime = Math.max(1, Number(e.target.value) || 1);
                          setProcesses(updated);
                          handleReset();
                        }}
                        className="w-12 px-1.5 py-0.5 bg-slate-50 dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700"
                      />
                    </td>
                    {algorithm === 'Priority' && (
                      <td className="py-2">
                        <input
                          type="number"
                          min="1"
                          max="10"
                          value={p.priority ?? 1}
                          onChange={e => {
                            const updated = [...processes];
                            updated[idx].priority = Math.max(1, Number(e.target.value) || 1);
                            setProcesses(updated);
                            handleReset();
                          }}
                          className="w-12 px-1.5 py-0.5 bg-slate-50 dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700"
                        />
                      </td>
                    )}
                    <td className="py-2 text-right">
                      {processes.length > 2 && (
                        <button
                          onClick={() => handleRemoveProcess(p.id)}
                          className="text-slate-400 hover:text-rose-500"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Live Architecture: Ready Queue + CPU Core */}
        <div className="lg:col-span-2 bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col justify-between">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Live CPU Dispatch Architecture
            </h3>
            <span className="text-xs font-mono font-bold text-srm-blue dark:text-blue-400">
              t = {currentStep.time} ms
            </span>
          </div>

          {/* Ready Queue -> CPU Flow */}
          <div className="my-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            
            {/* Ready Queue Box */}
            <div className="flex-1 w-full bg-slate-50 dark:bg-slate-950 p-3 rounded-xl border border-slate-200 dark:border-slate-800">
              <div className="text-[11px] font-semibold text-slate-400 mb-2 flex items-center justify-between">
                <span>READY QUEUE</span>
                <span>{currentStep.readyQueue.length} in queue</span>
              </div>
              <div className="flex items-center space-x-2 min-h-[42px] overflow-x-auto">
                {currentStep.readyQueue.length === 0 ? (
                  <span className="text-xs text-slate-400 italic">Queue Empty</span>
                ) : (
                  currentStep.readyQueue.map((pid, idx) => (
                    <div
                      key={`${pid}-${idx}`}
                      className="px-3 py-1.5 rounded-lg bg-blue-100 dark:bg-blue-950/60 border border-blue-300 dark:border-blue-800 text-blue-800 dark:text-blue-300 font-mono font-bold text-xs shrink-0 animate-fadeIn"
                    >
                      {pid}
                    </div>
                  ))
                )}
              </div>
            </div>

            <ArrowRight className="hidden sm:block w-5 h-5 text-slate-400 shrink-0" />

            {/* CPU Execution Box */}
            <div className="w-full sm:w-44 bg-blue-50 dark:bg-blue-950/30 p-3 rounded-xl border-2 border-srm-blue dark:border-blue-500/40 text-center">
              <div className="text-[10px] font-bold tracking-wider uppercase text-srm-blue dark:text-blue-400 mb-1 flex items-center justify-center space-x-1">
                <Cpu className="w-3.5 h-3.5" />
                <span>CPU CORE</span>
              </div>
              {currentStep.runningProcessId ? (
                <div className="font-mono font-extrabold text-xl text-srm-blue dark:text-blue-300 animate-pulse">
                  {currentStep.runningProcessId}
                </div>
              ) : (
                <div className="text-xs text-slate-400 italic font-mono py-1">IDLE</div>
              )}
            </div>
          </div>

          {/* Contextual Step Explanation */}
          <div className="p-3 bg-blue-50/50 dark:bg-blue-950/20 rounded-xl border border-blue-200 dark:border-blue-900/60 flex items-start space-x-2 text-xs">
            <Info className="w-4 h-4 text-srm-blue dark:text-blue-400 shrink-0 mt-0.5" />
            <div className="text-slate-700 dark:text-slate-300">
              <strong className="text-slate-900 dark:text-white">Action at t={currentStep.time}: </strong>
              {currentStep.actionDescription}
            </div>
          </div>
        </div>
      </div>

      {/* Gantt Chart Component */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-200 dark:border-slate-800 shadow-xs">
        <CPUGanttChart
          timeline={visibleTimeline}
          currentTime={currentStep.time}
          runningPid={currentStep.runningProcessId}
        />
      </div>

      {/* Playback Controls */}
      <SimControls
        isPlaying={isPlaying}
        onPlayToggle={handlePlayToggle}
        onStepNext={handleStepNext}
        onStepPrev={handleStepPrev}
        onReset={handleReset}
        currentStep={currentStepIndex}
        totalSteps={totalSteps}
        speed={speed}
        onSpeedChange={setSpeed}
      />

      {/* Results & Metrics Dashboard */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <MetricCard
          label="Avg Waiting Time"
          value={simResult.avgWaitingTime}
          unit="ms"
          variant="blue"
          hint="Lower is better"
        />
        <MetricCard
          label="Avg Turnaround Time"
          value={simResult.avgTurnaroundTime}
          unit="ms"
          variant="emerald"
          hint="Total execution latency"
        />
        <MetricCard
          label="Avg Response Time"
          value={simResult.avgResponseTime}
          unit="ms"
          variant="purple"
          hint="First CPU access"
        />
        <MetricCard
          label="Context Switches"
          value={simResult.contextSwitches}
          unit="switches"
          variant="amber"
          hint="CPU state change count"
        />
      </div>
    </div>
  );
};
