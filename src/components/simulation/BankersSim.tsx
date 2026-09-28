import React, { useState, useMemo } from 'react';
import { runBankersAlgorithm } from '../../engines/bankersAlgorithm';
import { CheckCircle2, AlertTriangle, Play, RotateCcw, ArrowRight } from 'lucide-react';

const INITIAL_PROCESSES = ['P0', 'P1', 'P2', 'P3', 'P4'];
const INITIAL_ALLOC = [
  [0, 1, 0],
  [2, 0, 0],
  [3, 0, 2],
  [2, 1, 1],
  [0, 0, 2]
];
const INITIAL_MAX = [
  [7, 5, 3],
  [3, 2, 2],
  [9, 0, 2],
  [2, 2, 2],
  [4, 3, 3]
];
const INITIAL_AVAIL = [3, 3, 2];

export const BankersSim: React.FC = () => {
  const [allocation, setAllocation] = useState<number[][]>(INITIAL_ALLOC);
  const [max, setMax] = useState<number[][]>(INITIAL_MAX);
  const [available, setAvailable] = useState<number[]>(INITIAL_AVAIL);
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);

  const simResult = useMemo(() => {
    return runBankersAlgorithm(INITIAL_PROCESSES, allocation, max, available);
  }, [allocation, max, available]);

  const totalSteps = simResult.steps.length;
  const currentStep = simResult.steps[currentStepIndex] || simResult.steps[0];

  const handleReset = () => {
    setAllocation(INITIAL_ALLOC);
    setMax(INITIAL_MAX);
    setAvailable(INITIAL_AVAIL);
    setCurrentStepIndex(0);
  };

  const handleSetUnsafe = () => {
    // Modify available to make system unsafe
    setAvailable([1, 0, 0]);
    setCurrentStepIndex(0);
  };

  return (
    <div className="space-y-6">
      
      {/* Action Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs">
        <div className="flex items-center space-x-3">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            System State:
          </span>
          {simResult.isSafe ? (
            <span className="flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800">
              <CheckCircle2 className="w-4 h-4" />
              <span>SAFE STATE ✓</span>
            </span>
          ) : (
            <span className="flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-bold bg-rose-100 dark:bg-rose-950/60 text-rose-800 dark:text-rose-300 border border-rose-300 dark:border-rose-800">
              <AlertTriangle className="w-4 h-4" />
              <span>UNSAFE STATE (Deadlock Possible) ✕</span>
            </span>
          )}
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={handleSetUnsafe}
            className="px-3 py-1.5 text-xs font-semibold text-rose-700 dark:text-rose-300 bg-rose-50 dark:bg-rose-950/40 rounded-lg border border-rose-200 dark:border-rose-900"
          >
            Test Unsafe State
          </button>
          <button
            onClick={handleReset}
            className="flex items-center space-x-1 px-3 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 rounded-lg hover:bg-slate-200"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Matrices</span>
          </button>
        </div>
      </div>

      {/* Safe Sequence Banner */}
      {simResult.isSafe && (
        <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-300 dark:border-emerald-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-300">
              Verified Safe Execution Sequence
            </div>
            <div className="flex items-center space-x-2 mt-2">
              {simResult.safeSequence.map((pid, idx) => (
                <React.Fragment key={pid}>
                  <span className="px-3 py-1 rounded-lg font-mono font-bold text-sm bg-emerald-500 text-white shadow-xs">
                    {pid}
                  </span>
                  {idx < simResult.safeSequence.length - 1 && (
                    <ArrowRight className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
          <div className="text-xs text-emerald-700 dark:text-emerald-300 font-medium">
            All 5 processes can finish without deadlock.
          </div>
        </div>
      )}

      {/* Matrix Display: Allocation, Max, Need, Available */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        
        {/* Allocation Matrix */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-200 dark:border-slate-800 shadow-xs">
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
            Allocation [A, B, C]
          </h4>
          <table className="w-full text-xs font-mono text-center">
            <thead>
              <tr className="text-slate-400 border-b border-slate-200 dark:border-slate-800">
                <th className="pb-1">Proc</th>
                <th>A</th><th>B</th><th>C</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/50">
              {allocation.map((row, i) => (
                <tr key={i} className="py-1">
                  <td className="font-bold text-srm-blue dark:text-blue-400">{INITIAL_PROCESSES[i]}</td>
                  <td>{row[0]}</td><td>{row[1]}</td><td>{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Max Matrix */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-200 dark:border-slate-800 shadow-xs">
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
            Max Demand [A, B, C]
          </h4>
          <table className="w-full text-xs font-mono text-center">
            <thead>
              <tr className="text-slate-400 border-b border-slate-200 dark:border-slate-800">
                <th className="pb-1">Proc</th>
                <th>A</th><th>B</th><th>C</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/50">
              {max.map((row, i) => (
                <tr key={i}>
                  <td className="font-bold text-srm-blue dark:text-blue-400">{INITIAL_PROCESSES[i]}</td>
                  <td>{row[0]}</td><td>{row[1]}</td><td>{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Need Matrix (Calculated) */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 border border-blue-200 dark:border-blue-900/60 bg-blue-50/20 dark:bg-blue-950/10 shadow-xs">
          <h4 className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-2">
            Need = Max - Alloc
          </h4>
          <table className="w-full text-xs font-mono text-center">
            <thead>
              <tr className="text-slate-400 border-b border-slate-200 dark:border-slate-800">
                <th className="pb-1">Proc</th>
                <th>A</th><th>B</th><th>C</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/50">
              {simResult.needMatrix.map((row, i) => (
                <tr key={i}>
                  <td className="font-bold text-srm-blue dark:text-blue-400">{INITIAL_PROCESSES[i]}</td>
                  <td className="font-semibold text-slate-800 dark:text-slate-200">{row[0]}</td>
                  <td className="font-semibold text-slate-800 dark:text-slate-200">{row[1]}</td>
                  <td className="font-semibold text-slate-800 dark:text-slate-200">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Available Vector */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col justify-between">
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
              Available Vector
            </h4>
            <div className="grid grid-cols-3 gap-2 text-center font-mono my-3">
              <div className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800">
                <div className="text-[10px] text-slate-400">Res A</div>
                <div className="text-lg font-bold text-srm-blue dark:text-blue-400">{available[0]}</div>
              </div>
              <div className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800">
                <div className="text-[10px] text-slate-400">Res B</div>
                <div className="text-lg font-bold text-emerald-500">{available[1]}</div>
              </div>
              <div className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800">
                <div className="text-[10px] text-slate-400">Res C</div>
                <div className="text-lg font-bold text-amber-500">{available[2]}</div>
              </div>
            </div>
          </div>
          <div className="text-[11px] text-slate-400 italic">
            Work vector updates as processes release resources upon completion.
          </div>
        </div>
      </div>

      {/* Step-by-Step Inspection */}
      {currentStep && (
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-200 dark:border-slate-800 shadow-xs">
          <div className="flex items-center justify-between mb-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Safety Verification Step {currentStepIndex + 1} of {totalSteps}
            </h4>
            <div className="flex items-center space-x-1">
              <button
                onClick={() => setCurrentStepIndex(prev => Math.max(0, prev - 1))}
                disabled={currentStepIndex === 0}
                className="px-2 py-1 text-xs rounded bg-slate-100 dark:bg-slate-800 disabled:opacity-40"
              >
                Previous
              </button>
              <button
                onClick={() => setCurrentStepIndex(prev => Math.min(totalSteps - 1, prev + 1))}
                disabled={currentStepIndex >= totalSteps - 1}
                className="px-2 py-1 text-xs rounded bg-slate-100 dark:bg-slate-800 disabled:opacity-40"
              >
                Next
              </button>
            </div>
          </div>

          <div className="p-3 bg-slate-50 dark:bg-slate-950 rounded-xl font-mono text-xs text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-800">
            {currentStep.explanation}
          </div>
        </div>
      )}
    </div>
  );
};
