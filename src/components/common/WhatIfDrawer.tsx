import React from 'react';
import { HelpCircle, ArrowRight, Sparkles } from 'lucide-react';

interface WhatIfDrawerProps {
  type: 'quantum' | 'frames' | 'disk';
  currentVal: number;
  onValChange: (newVal: number) => void;
  originalMetric: string;
  updatedMetric: string;
  explanation: string;
}

export const WhatIfDrawer: React.FC<WhatIfDrawerProps> = ({
  type,
  currentVal,
  onValChange,
  originalMetric,
  updatedMetric,
  explanation
}) => {
  return (
    <div className="p-4 rounded-xl border border-amber-300 dark:border-amber-700/60 bg-amber-50/60 dark:bg-amber-950/20 backdrop-blur-xs">
      <div className="flex items-center space-x-2 mb-2">
        <Sparkles className="w-4 h-4 text-amber-600 dark:text-amber-400" />
        <h4 className="text-xs font-bold uppercase tracking-wider text-amber-800 dark:text-amber-300">
          "What Happens If?" — Cause & Effect Explorer
        </h4>
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
        <div className="flex items-center space-x-3">
          <span className="text-slate-700 dark:text-slate-300 font-medium">
            {type === 'quantum' && 'Change Time Quantum:'}
            {type === 'frames' && 'Change Physical Frame Count:'}
            {type === 'disk' && 'Change Head Seek Strategy:'}
          </span>
          <div className="flex items-center space-x-1.5">
            {[1, 2, 3, 4, 5].map(v => (
              <button
                key={v}
                onClick={() => onValChange(v)}
                className={`w-7 h-7 rounded-md font-mono font-bold text-xs transition-all ${
                  currentVal === v
                    ? 'bg-amber-500 text-white shadow-xs scale-105'
                    : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700 hover:border-amber-400'
                }`}
              >
                {v}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Metric Delta */}
        <div className="flex items-center space-x-2 font-mono text-xs bg-white dark:bg-slate-900/80 px-3 py-1.5 rounded-lg border border-amber-200 dark:border-amber-800">
          <span className="text-slate-400">{originalMetric}</span>
          <ArrowRight className="w-3.5 h-3.5 text-amber-500" />
          <span className="font-bold text-amber-700 dark:text-amber-300">{updatedMetric}</span>
        </div>
      </div>

      {/* Explanation */}
      <div className="mt-2 text-[11px] text-amber-900 dark:text-amber-200/80 flex items-start space-x-1.5">
        <HelpCircle className="w-3.5 h-3.5 mt-0.5 shrink-0 text-amber-500" />
        <span>{explanation}</span>
      </div>
    </div>
  );
};
