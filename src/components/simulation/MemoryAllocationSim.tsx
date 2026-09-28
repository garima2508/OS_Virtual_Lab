import React, { useState, useMemo } from 'react';
import { runMemoryAllocation, MemoryFitType } from '../../engines/memoryAllocation';
import { MetricCard } from '../common/MetricCard';
import { Dices, Check, X, Layers } from 'lucide-react';

const INITIAL_BLOCKS = [
  { id: 'Block 0', size: 100 },
  { id: 'Block 1', size: 500 },
  { id: 'Block 2', size: 200 },
  { id: 'Block 3', size: 300 },
  { id: 'Block 4', size: 600 }
];

const INITIAL_PROCESSES = [
  { id: 'P1', size: 212 },
  { id: 'P2', size: 417 },
  { id: 'P3', size: 112 },
  { id: 'P4', size: 426 }
];

export const MemoryAllocationSim: React.FC = () => {
  const [strategy, setStrategy] = useState<MemoryFitType>('First Fit');
  const [blocks, setBlocks] = useState(INITIAL_BLOCKS);
  const [processes, setProcesses] = useState(INITIAL_PROCESSES);

  const simResult = useMemo(() => {
    return runMemoryAllocation(blocks, processes, strategy);
  }, [blocks, processes, strategy]);

  const handleRandomize = () => {
    const newProcs = [
      { id: 'P1', size: Math.floor(Math.random() * 300) + 80 },
      { id: 'P2', size: Math.floor(Math.random() * 400) + 100 },
      { id: 'P3', size: Math.floor(Math.random() * 200) + 50 },
      { id: 'P4', size: Math.floor(Math.random() * 500) + 150 }
    ];
    setProcesses(newProcs);
  };

  return (
    <div className="space-y-6">
      
      {/* Strategy Selector Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-1">
            Fit Strategy:
          </span>
          {(['First Fit', 'Best Fit', 'Worst Fit', 'Next Fit'] as MemoryFitType[]).map(st => (
            <button
              key={st}
              onClick={() => setStrategy(st)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                strategy === st
                  ? 'bg-srm-blue text-white shadow-xs'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
              }`}
            >
              {st}
            </button>
          ))}
        </div>

        <button
          onClick={handleRandomize}
          className="flex items-center space-x-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 rounded-lg hover:bg-slate-200"
        >
          <Dices className="w-3.5 h-3.5 text-amber-500" />
          <span>Randomize Sizes</span>
        </button>
      </div>

      {/* Process Request Badges */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-200 dark:border-slate-800 shadow-xs">
        <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
          Incoming Processes to Allocate
        </div>
        <div className="flex flex-wrap gap-3">
          {processes.map(p => {
            const isAllocated = simResult.blocks.some(b => b.allocatedProcess === p.id);
            return (
              <div
                key={p.id}
                className={`flex items-center space-x-2 px-3 py-2 rounded-xl border font-mono text-xs ${
                  isAllocated
                    ? 'border-emerald-300 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300'
                    : 'border-rose-300 bg-rose-50 dark:bg-rose-950/40 text-rose-800 dark:text-rose-300'
                }`}
              >
                {isAllocated ? <Check className="w-3.5 h-3.5" /> : <X className="w-3.5 h-3.5" />}
                <span className="font-bold">{p.id}</span>
                <span>({p.size} KB)</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Memory Partitions Visual Layout */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-xs">
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4 flex items-center space-x-1.5">
          <Layers className="w-4 h-4 text-srm-blue" />
          <span>Physical Memory Partitions Map</span>
        </h3>

        <div className="space-y-3">
          {simResult.blocks.map(b => {
            const isOccupied = b.allocatedProcess !== null;
            const allocatedPct = isOccupied ? ((b.allocatedSize || 0) / b.size) * 100 : 0;
            const fragPct = isOccupied ? ((b.internalFrag || 0) / b.size) * 100 : 0;

            return (
              <div
                key={b.id}
                className="p-3 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800"
              >
                <div className="flex items-center justify-between text-xs font-mono mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="font-bold text-slate-800 dark:text-slate-200">{b.id}</span>
                    <span className="text-slate-400">Total: {b.size} KB</span>
                  </div>
                  {isOccupied ? (
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold">
                      Allocated to {b.allocatedProcess} ({b.allocatedSize} KB) • Frag: {b.internalFrag} KB
                    </span>
                  ) : (
                    <span className="text-slate-400 italic">FREE HOLE</span>
                  )}
                </div>

                {/* Partition Visual Bar */}
                <div className="w-full h-7 bg-slate-200 dark:bg-slate-800 rounded-lg overflow-hidden flex font-mono text-[10px] font-bold">
                  {isOccupied && (
                    <>
                      <div
                        style={{ width: `${allocatedPct}%` }}
                        className="bg-srm-blue text-white flex items-center justify-center transition-all"
                        title={`Process Data: ${b.allocatedSize} KB`}
                      >
                        {b.allocatedProcess} ({b.allocatedSize} KB)
                      </div>
                      <div
                        style={{ width: `${fragPct}%` }}
                        className="bg-amber-400/80 dark:bg-amber-600 text-slate-900 flex items-center justify-center pattern-stripes"
                        title={`Internal Fragmentation: ${b.internalFrag} KB`}
                      >
                        {b.internalFrag && b.internalFrag > 20 ? `${b.internalFrag} KB Frag` : ''}
                      </div>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <MetricCard
          label="Allocated Processes"
          value={`${simResult.allocatedCount} / ${processes.length}`}
          variant="emerald"
          hint="Satisfied requests"
        />
        <MetricCard
          label="Total Internal Frag"
          value={simResult.totalInternalFrag}
          unit="KB"
          variant="amber"
          hint="Wasted space within partitions"
        />
        <MetricCard
          label="Total External Frag"
          value={simResult.totalExternalFrag}
          unit="KB"
          variant="purple"
          hint="Unallocated free space"
        />
        <MetricCard
          label="Unallocated Count"
          value={simResult.unallocatedProcesses.length}
          variant="rose"
          hint="Processes waiting for holes"
        />
      </div>
    </div>
  );
};
