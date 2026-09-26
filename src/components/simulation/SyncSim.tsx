import React, { useState } from 'react';
import { 
  createProdConsState, 
  produceItem, 
  consumeItem, 
  createDiningPhilState, 
  philosopherAction 
} from '../../engines/synchronization';
import { ShieldCheck, Plus, Minus, RotateCcw, AlertTriangle } from 'lucide-react';

export const SyncSim: React.FC = () => {
  const [tab, setTab] = useState<'producer-consumer' | 'dining'>('producer-consumer');

  // Producer-Consumer state
  const [pcState, setPcState] = useState(createProdConsState(5));
  const [nextItemVal, setNextItemVal] = useState(1);

  // Dining Philosophers state
  const [dpState, setDpState] = useState(createDiningPhilState());

  const handleProduce = () => {
    setPcState(prev => produceItem(prev, nextItemVal));
    setNextItemVal(v => v + 1);
  };

  const handleConsume = () => {
    const { nextState } = consumeItem(pcState);
    setPcState(nextState);
  };

  const handleResetPC = () => {
    setPcState(createProdConsState(5));
    setNextItemVal(1);
  };

  const handleResetDP = () => {
    setDpState(createDiningPhilState());
  };

  return (
    <div className="space-y-6">
      
      {/* Sub-tab Switcher */}
      <div className="flex space-x-2 border-b border-slate-200 dark:border-slate-800 pb-2">
        <button
          onClick={() => setTab('producer-consumer')}
          className={`px-4 py-2 text-xs font-bold rounded-xl transition-all ${
            tab === 'producer-consumer'
              ? 'bg-srm-blue text-white shadow-xs'
              : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
          }`}
        >
          Producer-Consumer (Bounded Buffer)
        </button>
        <button
          onClick={() => setTab('dining')}
          className={`px-4 py-2 text-xs font-bold rounded-xl transition-all ${
            tab === 'dining'
              ? 'bg-srm-blue text-white shadow-xs'
              : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
          }`}
        >
          Dining Philosophers (5 Forks)
        </button>
      </div>

      {tab === 'producer-consumer' ? (
        <div className="space-y-6">
          
          {/* Controls */}
          <div className="flex flex-wrap items-center justify-between gap-4 p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs">
            <div className="flex items-center space-x-3">
              <button
                onClick={handleProduce}
                className="flex items-center space-x-1.5 px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition-colors shadow-xs"
              >
                <Plus className="w-4 h-4" />
                <span>Produce Item ({nextItemVal})</span>
              </button>

              <button
                onClick={handleConsume}
                className="flex items-center space-x-1.5 px-3.5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs transition-colors shadow-xs"
              >
                <Minus className="w-4 h-4" />
                <span>Consume Item</span>
              </button>
            </div>

            <button
              onClick={handleResetPC}
              className="flex items-center space-x-1 px-3 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 rounded-lg hover:bg-slate-200"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Buffer</span>
            </button>
          </div>

          {/* Semaphore States & Buffer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Semaphores */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Synchronization Semaphores
              </h3>

              <div className="space-y-2 font-mono text-xs">
                <div className="flex justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                  <span className="text-slate-500 font-sans">Mutex (Binary):</span>
                  <span className="font-bold text-srm-blue dark:text-blue-400">{pcState.mutex}</span>
                </div>
                <div className="flex justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                  <span className="text-slate-500 font-sans">Empty Slots:</span>
                  <span className="font-bold text-emerald-500">{pcState.emptySlots}</span>
                </div>
                <div className="flex justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                  <span className="text-slate-500 font-sans">Full Slots:</span>
                  <span className="font-bold text-amber-500">{pcState.fullSlots}</span>
                </div>
              </div>
            </div>

            {/* Bounded Buffer Slots */}
            <div className="md:col-span-2 bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col justify-between">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Shared Bounded Buffer (Capacity: {pcState.bufferSize})
                </h3>

                <div className="grid grid-cols-5 gap-3 my-4">
                  {pcState.buffer.map((item, idx) => (
                    <div
                      key={idx}
                      className={`h-20 rounded-xl border-2 flex flex-col items-center justify-center font-mono transition-all ${
                        item !== null
                          ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 shadow-sm'
                          : 'border-dashed border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-slate-400'
                      }`}
                    >
                      <span className="text-[10px] text-slate-400">Slot {idx}</span>
                      <span className="text-lg font-bold mt-1">
                        {item !== null ? `Item ${item}` : 'Empty'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Event Log */}
              <div className="mt-2 text-xs font-mono text-slate-500 bg-slate-50 dark:bg-slate-950 p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 line-clamp-2">
                Latest: {pcState.history[0]}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          
          {/* Dining Table Controls */}
          <div className="flex flex-wrap items-center justify-between gap-4 p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs">
            <div className="flex items-center space-x-3">
              <label className="flex items-center space-x-2 text-xs font-semibold text-rose-700 dark:text-rose-400 cursor-pointer">
                <input
                  type="checkbox"
                  checked={dpState.deadlockMode}
                  onChange={e => setDpState({ ...dpState, deadlockMode: e.target.checked })}
                  className="rounded border-rose-300 text-rose-600 focus:ring-rose-500"
                />
                <span>Simulate Deadlock Condition (Pick left fork first)</span>
              </label>
            </div>

            <button
              onClick={handleResetDP}
              className="flex items-center space-x-1 px-3 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 rounded-lg hover:bg-slate-200"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Philosophers</span>
            </button>
          </div>

          {/* Table Visualizer */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
              5 Philosophers Seated with 5 Shared Forks
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
              {dpState.philosophers.map((state, i) => {
                const isEating = state === 'EATING';
                const isHungry = state === 'HUNGRY';

                return (
                  <div
                    key={i}
                    className={`p-4 rounded-2xl border text-center transition-all ${
                      isEating
                        ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 shadow-md scale-105'
                        : isHungry
                        ? 'border-amber-500 bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300'
                        : 'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    <div className="text-2xl mb-1">
                      {isEating ? '🍝' : isHungry ? '😋' : '🤔'}
                    </div>
                    <div className="font-bold text-sm">Philosopher P{i}</div>
                    <div className="text-xs font-mono mt-1 font-semibold">{state}</div>

                    {/* Action buttons */}
                    <div className="mt-3 flex flex-col space-y-1">
                      {state === 'THINKING' && (
                        <button
                          onClick={() => setDpState(prev => philosopherAction(prev, i, 'HUNGRY'))}
                          className="px-2 py-1 text-[11px] font-semibold rounded bg-amber-500 text-white"
                        >
                          Become Hungry
                        </button>
                      )}
                      {state === 'HUNGRY' && (
                        <button
                          onClick={() => setDpState(prev => philosopherAction(prev, i, 'EAT'))}
                          className="px-2 py-1 text-[11px] font-semibold rounded bg-emerald-600 text-white"
                        >
                          Pick Forks & Eat
                        </button>
                      )}
                      {state === 'EATING' && (
                        <button
                          onClick={() => setDpState(prev => philosopherAction(prev, i, 'THINK'))}
                          className="px-2 py-1 text-[11px] font-semibold rounded bg-blue-600 text-white"
                        >
                          Put Forks & Think
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Forks Status */}
            <div className="mt-6 p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
              <div className="text-xs font-semibold text-slate-400 mb-2">Forks on Table (0-4):</div>
              <div className="flex flex-wrap gap-3 font-mono text-xs">
                {dpState.forks.map((heldBy, fIdx) => (
                  <div
                    key={fIdx}
                    className={`px-3 py-1.5 rounded-lg border ${
                      heldBy !== null
                        ? 'border-amber-400 bg-amber-50 dark:bg-amber-950 text-amber-800 dark:text-amber-300'
                        : 'border-slate-300 dark:border-slate-700 text-slate-500'
                    }`}
                  >
                    Fork {fIdx}: {heldBy !== null ? `Held by P${heldBy}` : 'On Table'}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
