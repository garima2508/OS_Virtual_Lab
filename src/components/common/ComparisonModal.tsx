import React, { useState } from 'react';
import { X, BarChart3, CheckCircle2 } from 'lucide-react';
import { runCPUScheduling } from '../../engines/cpuScheduling';
import { runPageReplacement } from '../../engines/pageReplacement';
import { runDiskScheduling } from '../../engines/diskScheduling';

interface ComparisonModalProps {
  isOpen: boolean;
  onClose: () => void;
  category: 'cpu' | 'page' | 'disk';
}

export const ComparisonModal: React.FC<ComparisonModalProps> = ({
  isOpen,
  onClose,
  category
}) => {
  const [cpuQuantum, setCpuQuantum] = useState(2);

  if (!isOpen) return null;

  // CPU Comparison sample dataset
  const sampleProcs = [
    { id: '1', pid: 'P1', arrivalTime: 0, burstTime: 8 },
    { id: '2', pid: 'P2', arrivalTime: 1, burstTime: 4 },
    { id: '3', pid: 'P3', arrivalTime: 2, burstTime: 9 },
    { id: '4', pid: 'P4', arrivalTime: 3, burstTime: 5 }
  ];

  const fcfsRes = runCPUScheduling(sampleProcs, 'FCFS');
  const sjfRes = runCPUScheduling(sampleProcs, 'SJF');
  const rrRes = runCPUScheduling(sampleProcs, 'RR', cpuQuantum);

  // Page Replacement sample dataset
  const refString = [7, 0, 1, 2, 0, 3, 0, 4, 2, 3, 0, 3, 2];
  const fifoRes = runPageReplacement(refString, 3, 'FIFO');
  const lruRes = runPageReplacement(refString, 3, 'LRU');
  const optRes = runPageReplacement(refString, 3, 'Optimal');

  // Disk Scheduling sample dataset
  const diskTracks = [98, 183, 37, 122, 14, 124, 65, 67];
  const diskFcfs = runDiskScheduling(diskTracks, 53, 'FCFS');
  const diskSstf = runDiskScheduling(diskTracks, 53, 'SSTF');
  const diskScan = runDiskScheduling(diskTracks, 53, 'SCAN', 'UP');

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto p-4 sm:p-6 md:p-12 bg-slate-900/70 backdrop-blur-sm flex items-center justify-center">
      <div className="w-full max-w-3xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50">
          <div className="flex items-center space-x-2">
            <BarChart3 className="w-5 h-5 text-srm-blue dark:text-blue-400" />
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              Algorithm Benchmark & Trade-off Comparison
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-md text-slate-400 hover:text-slate-600 dark:hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 max-h-[80vh] overflow-y-auto">
          {category === 'cpu' && (
            <div>
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200">
                    CPU Scheduling Comparison on Identical Workload
                  </h4>
                  <p className="text-xs text-slate-500">
                    Processes: P1(BT=8), P2(BT=4), P3(BT=9), P4(BT=5)
                  </p>
                </div>
                <div className="flex items-center space-x-2 text-xs">
                  <span>RR Quantum:</span>
                  <input
                    type="number"
                    min="1"
                    max="6"
                    value={cpuQuantum}
                    onChange={e => setCpuQuantum(Number(e.target.value) || 2)}
                    className="w-12 px-2 py-1 bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded text-center font-mono font-bold"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl border border-blue-200 dark:border-blue-900 bg-blue-50/40 dark:bg-blue-950/20">
                  <div className="font-bold text-sm text-blue-700 dark:text-blue-300">FCFS</div>
                  <div className="mt-3 space-y-2 text-xs">
                    <div>Avg Waiting: <strong className="font-mono text-sm">{fcfsRes.avgWaitingTime} ms</strong></div>
                    <div>Avg Turnaround: <strong className="font-mono text-sm">{fcfsRes.avgTurnaroundTime} ms</strong></div>
                    <div>Context Switches: <strong className="font-mono text-sm">{fcfsRes.contextSwitches}</strong></div>
                  </div>
                  <div className="mt-3 text-[11px] text-slate-500">
                    Simple, zero preemption overhead, but prone to Convoy Effect.
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-emerald-200 dark:border-emerald-900 bg-emerald-50/40 dark:bg-emerald-950/20">
                  <div className="font-bold text-sm text-emerald-700 dark:text-emerald-300 flex items-center justify-between">
                    <span>SJF (Optimal WT)</span>
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  </div>
                  <div className="mt-3 space-y-2 text-xs">
                    <div>Avg Waiting: <strong className="font-mono text-sm text-emerald-600 dark:text-emerald-400">{sjfRes.avgWaitingTime} ms</strong></div>
                    <div>Avg Turnaround: <strong className="font-mono text-sm">{sjfRes.avgTurnaroundTime} ms</strong></div>
                    <div>Context Switches: <strong className="font-mono text-sm">{sjfRes.contextSwitches}</strong></div>
                  </div>
                  <div className="mt-3 text-[11px] text-slate-500">
                    Lowest possible average waiting time, but difficult to predict burst times in practice.
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-amber-200 dark:border-amber-900 bg-amber-50/40 dark:bg-amber-950/20">
                  <div className="font-bold text-sm text-amber-700 dark:text-amber-300">Round Robin</div>
                  <div className="mt-3 space-y-2 text-xs">
                    <div>Avg Waiting: <strong className="font-mono text-sm">{rrRes.avgWaitingTime} ms</strong></div>
                    <div>Avg Turnaround: <strong className="font-mono text-sm">{rrRes.avgTurnaroundTime} ms</strong></div>
                    <div>Context Switches: <strong className="font-mono text-sm text-amber-600 dark:text-amber-400">{rrRes.contextSwitches}</strong></div>
                  </div>
                  <div className="mt-3 text-[11px] text-slate-500">
                    Fair, responsive for interactive users, but suffers from context switch penalties.
                  </div>
                </div>
              </div>
            </div>
          )}

          {category === 'page' && (
            <div>
              <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200 mb-1">
                Page Replacement Comparison (3 Frames)
              </h4>
              <p className="text-xs text-slate-500 mb-4">
                Reference String: [7, 0, 1, 2, 0, 3, 0, 4, 2, 3, 0, 3, 2]
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40">
                  <div className="font-bold text-sm text-slate-800 dark:text-slate-200">FIFO</div>
                  <div className="mt-3 space-y-1.5 text-xs">
                    <div>Page Faults: <strong className="font-mono text-base text-rose-500">{fifoRes.totalFaults}</strong></div>
                    <div>Hit Ratio: <strong className="font-mono text-sm">{fifoRes.hitRatio}%</strong></div>
                  </div>
                  <div className="mt-3 text-[11px] text-slate-500">
                    Replaces oldest page. Prone to Belady's Anomaly.
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-blue-200 dark:border-blue-900 bg-blue-50/40 dark:bg-blue-950/20">
                  <div className="font-bold text-sm text-blue-700 dark:text-blue-300">LRU</div>
                  <div className="mt-3 space-y-1.5 text-xs">
                    <div>Page Faults: <strong className="font-mono text-base text-blue-600">{lruRes.totalFaults}</strong></div>
                    <div>Hit Ratio: <strong className="font-mono text-sm">{lruRes.hitRatio}%</strong></div>
                  </div>
                  <div className="mt-3 text-[11px] text-slate-500">
                    Replaces least recently used page. Stack algorithm (no Belady's anomaly).
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-emerald-200 dark:border-emerald-900 bg-emerald-50/40 dark:bg-emerald-950/20">
                  <div className="font-bold text-sm text-emerald-700 dark:text-emerald-300 flex items-center justify-between">
                    <span>Optimal (MIN)</span>
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  </div>
                  <div className="mt-3 space-y-1.5 text-xs">
                    <div>Page Faults: <strong className="font-mono text-base text-emerald-600">{optRes.totalFaults}</strong></div>
                    <div>Hit Ratio: <strong className="font-mono text-sm">{optRes.hitRatio}%</strong></div>
                  </div>
                  <div className="mt-3 text-[11px] text-slate-500">
                    Theoretical lower bound; requires future knowledge of reference string.
                  </div>
                </div>
              </div>
            </div>
          )}

          {category === 'disk' && (
            <div>
              <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200 mb-1">
                Disk Arm Travel Comparison (Initial Head = 53)
              </h4>
              <p className="text-xs text-slate-500 mb-4">
                Requests: [98, 183, 37, 122, 14, 124, 65, 67]
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40">
                  <div className="font-bold text-sm text-slate-800 dark:text-slate-200">FCFS</div>
                  <div className="mt-3 text-xs">
                    <div>Total Head Movement: <strong className="font-mono text-base text-rose-500">{diskFcfs.totalHeadMovement}</strong> cyl</div>
                  </div>
                  <div className="mt-3 text-[11px] text-slate-500">
                    Wild arm swings back and forth across disk platter.
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-blue-200 dark:border-blue-900 bg-blue-50/40 dark:bg-blue-950/20">
                  <div className="font-bold text-sm text-blue-700 dark:text-blue-300">SSTF</div>
                  <div className="mt-3 text-xs">
                    <div>Total Head Movement: <strong className="font-mono text-base text-blue-600">{diskSstf.totalHeadMovement}</strong> cyl</div>
                  </div>
                  <div className="mt-3 text-[11px] text-slate-500">
                    Dramatically reduces seek time, but can starve distant tracks.
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-emerald-200 dark:border-emerald-900 bg-emerald-50/40 dark:bg-emerald-950/20">
                  <div className="font-bold text-sm text-emerald-700 dark:text-emerald-300">SCAN (Elevator)</div>
                  <div className="mt-3 text-xs">
                    <div>Total Head Movement: <strong className="font-mono text-base text-emerald-600">{diskScan.totalHeadMovement}</strong> cyl</div>
                  </div>
                  <div className="mt-3 text-[11px] text-slate-500">
                    Provides uniform, fair wait times with predictable arm sweeps.
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-200 dark:border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold rounded-lg bg-srm-blue text-white hover:bg-blue-700 transition-colors"
          >
            Close Benchmark
          </button>
        </div>
      </div>
    </div>
  );
};
