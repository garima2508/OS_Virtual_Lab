import React, { useState, useMemo, useEffect, useRef } from 'react';
import { runPageReplacement, PageRepAlgorithm } from '../../engines/pageReplacement';
import { SimControls } from '../common/SimControls';
import { MetricCard } from '../common/MetricCard';
import { WhatIfDrawer } from '../common/WhatIfDrawer';
import { Check, X, Dices, Sparkles, AlertCircle } from 'lucide-react';

const INITIAL_REF_STRING = [7, 0, 1, 2, 0, 3, 0, 4, 2, 3, 0, 3, 2];

export const PageReplacementSim: React.FC = () => {
  const [refString, setRefString] = useState<number[]>(INITIAL_REF_STRING);
  const [frameCount, setFrameCount] = useState<number>(3);
  const [algorithm, setAlgorithm] = useState<PageRepAlgorithm>('FIFO');
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [speed, setSpeed] = useState<number>(1);
  const [showWhatIf, setShowWhatIf] = useState<boolean>(false);

  const simResult = useMemo(() => {
    return runPageReplacement(refString, frameCount, algorithm);
  }, [refString, frameCount, algorithm]);

  const totalSteps = simResult.steps.length;
  const currentStep = simResult.steps[currentStepIndex] || simResult.steps[0] || {
    stepIndex: 0,
    page: refString[0] || 0,
    frames: Array(frameCount).fill(null),
    isHit: false,
    evictedPage: null,
    explanation: 'Ready to start page replacement simulation.'
  };

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

  const handleRandomize = () => {
    const len = 12;
    const randomized = Array.from({ length: len }, () => Math.floor(Math.random() * 8));
    setRefString(randomized);
    setIsPlaying(false);
    setCurrentStepIndex(0);
  };

  const handleBeladyTest = () => {
    // Standard Belady's anomaly string: 1, 2, 3, 4, 1, 2, 5, 1, 2, 3, 4, 5
    setRefString([1, 2, 3, 4, 1, 2, 5, 1, 2, 3, 4, 5]);
    setAlgorithm('FIFO');
    setIsPlaying(false);
    setCurrentStepIndex(0);
  };

  return (
    <div className="space-y-6">
      
      {/* Configuration Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-1">
            Algorithm:
          </span>
          {(['FIFO', 'LRU', 'Optimal', 'LFU', 'Clock'] as PageRepAlgorithm[]).map(algo => (
            <button
              key={algo}
              onClick={() => {
                setAlgorithm(algo);
                setIsPlaying(false);
                setCurrentStepIndex(0);
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                algorithm === algo
                  ? 'bg-srm-blue text-white shadow-xs'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {algo}
            </button>
          ))}
        </div>

        {/* Frames Selector */}
        <div className="flex items-center space-x-2">
          <span className="text-xs font-semibold text-slate-600 dark:text-slate-300">Frames:</span>
          {[3, 4, 5].map(f => (
            <button
              key={f}
              onClick={() => {
                setFrameCount(f);
                setIsPlaying(false);
                setCurrentStepIndex(0);
              }}
              className={`w-7 h-7 rounded-lg text-xs font-bold font-mono transition-all ${
                frameCount === f
                  ? 'bg-srm-blue text-white'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={handleBeladyTest}
            title="Load Belady's Anomaly string"
            className="flex items-center space-x-1 px-2.5 py-1.5 text-xs font-semibold text-rose-700 dark:text-rose-300 bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900 rounded-lg"
          >
            <AlertCircle className="w-3.5 h-3.5" />
            <span>Belady's Anomaly</span>
          </button>

          <button
            onClick={handleRandomize}
            className="flex items-center space-x-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700"
          >
            <Dices className="w-3.5 h-3.5 text-amber-500" />
            <span>Random String</span>
          </button>

          <button
            onClick={() => setShowWhatIf(!showWhatIf)}
            className="flex items-center space-x-1 px-2.5 py-1.5 text-xs font-semibold text-amber-800 dark:text-amber-300 bg-amber-100/50 dark:bg-amber-900/30 rounded-lg border border-amber-300 dark:border-amber-700"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>What If?</span>
          </button>
        </div>
      </div>

      {showWhatIf && (
        <WhatIfDrawer
          type="frames"
          currentVal={frameCount}
          onValChange={v => {
            setFrameCount(v);
            setIsPlaying(false);
            setCurrentStepIndex(0);
          }}
          originalMetric={`Faults: ${simResult.totalFaults}`}
          updatedMetric={`Hit Ratio: ${simResult.hitRatio}%`}
          explanation="Notice how changing frame capacity directly alters page hit rates. Try 3 vs 4 frames with FIFO on Belady's test string to observe the anomaly!"
        />
      )}

      {/* Reference String Display with Active Step Highlight */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-200 dark:border-slate-800 shadow-xs">
        <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
          Page Reference String (Total: {refString.length})
        </div>
        <div className="flex items-center gap-2 overflow-x-auto pb-2">
          {refString.map((p, idx) => {
            const isActive = idx === currentStepIndex;
            const isPast = idx < currentStepIndex;
            return (
              <div
                key={idx}
                onClick={() => {
                  setIsPlaying(false);
                  setCurrentStepIndex(idx);
                }}
                className={`w-9 h-9 rounded-xl flex items-center justify-center font-mono font-bold text-sm cursor-pointer transition-all ${
                  isActive
                    ? 'bg-srm-blue text-white ring-2 ring-blue-400 scale-110 shadow-md'
                    : isPast
                    ? 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                    : 'bg-slate-100 dark:bg-slate-850 text-slate-400 opacity-60'
                }`}
              >
                {p}
              </div>
            );
          })}
        </div>
      </div>

      {/* Frame Table & Step Explanation */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Physical Frames View */}
        <div className="md:col-span-1 bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Physical Frames ({frameCount})
              </h3>
              {currentStep.isHit ? (
                <span className="flex items-center space-x-1 px-2 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                  <Check className="w-3.5 h-3.5" />
                  <span>PAGE HIT ✓</span>
                </span>
              ) : (
                <span className="flex items-center space-x-1 px-2 py-0.5 rounded-full text-xs font-bold bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300">
                  <X className="w-3.5 h-3.5" />
                  <span>PAGE FAULT ✕</span>
                </span>
              )}
            </div>

            <div className="space-y-2">
              {currentStep.frames.map((pageVal, fIdx) => {
                const isJustReferenced = pageVal === currentStep.page;
                return (
                  <div
                    key={fIdx}
                    className={`flex items-center justify-between p-3 rounded-xl border font-mono transition-all ${
                      isJustReferenced
                        ? 'border-srm-blue bg-blue-50 dark:bg-blue-950/40 shadow-xs'
                        : 'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950'
                    }`}
                  >
                    <span className="text-xs text-slate-400 font-medium">Frame {fIdx}</span>
                    <span className={`text-lg font-bold ${pageVal !== null ? 'text-slate-900 dark:text-white' : 'text-slate-400 italic'}`}>
                      {pageVal !== null ? `Page ${pageVal}` : '[ Empty ]'}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {currentStep.evictedPage !== null && (
            <div className="mt-4 p-2.5 rounded-lg bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/40 text-[11px] text-rose-700 dark:text-rose-300">
              Evicted victim: <strong>Page {currentStep.evictedPage}</strong>
            </div>
          )}
        </div>

        {/* Step Explanation & Algorithm Logic */}
        <div className="md:col-span-2 bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col justify-between">
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              Step Decision & Virtual Memory Log
            </h3>
            <div className="p-4 rounded-xl bg-blue-50/50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900 text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-mono">
              {currentStep.explanation}
            </div>

            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="p-3 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800">
                <div className="text-[11px] text-slate-400">Total References So Far</div>
                <div className="text-xl font-bold font-mono mt-0.5">{currentStepIndex + 1}</div>
              </div>
              <div className="p-3 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800">
                <div className="text-[11px] text-slate-400">Current Page Requested</div>
                <div className="text-xl font-bold font-mono text-srm-blue dark:text-blue-400 mt-0.5">
                  Page {currentStep.page}
                </div>
              </div>
            </div>
          </div>

          <div className="text-xs text-slate-500 mt-4">
            * Stack algorithms (like LRU and Optimal) guarantee that adding frames never increases page faults.
          </div>
        </div>
      </div>

      {/* Playback Controls */}
      <SimControls
        isPlaying={isPlaying}
        onPlayToggle={() => setIsPlaying(!isPlaying)}
        onStepNext={() => setCurrentStepIndex(prev => Math.min(prev + 1, totalSteps - 1))}
        onStepPrev={() => setCurrentStepIndex(prev => Math.max(prev - 1, 0))}
        onReset={() => {
          setIsPlaying(false);
          setCurrentStepIndex(0);
        }}
        currentStep={currentStepIndex}
        totalSteps={totalSteps}
        speed={speed}
        onSpeedChange={setSpeed}
      />

      {/* Metrics */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <MetricCard
          label="Total Page Faults"
          value={simResult.totalFaults}
          variant="rose"
          hint="Misses requiring disk access"
        />
        <MetricCard
          label="Total Page Hits"
          value={simResult.totalHits}
          variant="emerald"
          hint="Satisfied directly in RAM"
        />
        <MetricCard
          label="Hit Ratio"
          value={simResult.hitRatio}
          unit="%"
          variant="blue"
          hint="Percentage of memory hits"
        />
        <MetricCard
          label="Fault Ratio"
          value={simResult.faultRatio}
          unit="%"
          variant="amber"
          hint="Percentage of page misses"
        />
      </div>
    </div>
  );
};
