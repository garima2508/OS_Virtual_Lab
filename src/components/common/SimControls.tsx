import React from 'react';
import { Play, Pause, SkipBack, SkipForward, RotateCcw, Zap } from 'lucide-react';

interface SimControlsProps {
  isPlaying: boolean;
  onPlayToggle: () => void;
  onStepNext: () => void;
  onStepPrev: () => void;
  onReset: () => void;
  currentStep: number;
  totalSteps: number;
  speed: number;
  onSpeedChange: (speed: number) => void;
}

export const SimControls: React.FC<SimControlsProps> = ({
  isPlaying,
  onPlayToggle,
  onStepNext,
  onStepPrev,
  onReset,
  currentStep,
  totalSteps,
  speed,
  onSpeedChange
}) => {
  const speeds = [0.5, 1, 2, 4];

  return (
    <div className="flex flex-wrap items-center justify-between gap-3 p-3 bg-slate-100 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700">
      
      {/* Primary Playback Buttons */}
      <div className="flex items-center space-x-1.5">
        <button
          onClick={onReset}
          title="Reset to Start"
          className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-700 hover:text-srm-blue transition-colors border border-transparent hover:border-slate-300 dark:hover:border-slate-600"
        >
          <RotateCcw className="w-4 h-4" />
        </button>

        <button
          onClick={onStepPrev}
          disabled={currentStep <= 0}
          title="Previous Step"
          className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors border border-transparent hover:border-slate-300 dark:hover:border-slate-600"
        >
          <SkipBack className="w-4 h-4" />
        </button>

        <button
          onClick={onPlayToggle}
          title={isPlaying ? 'Pause' : 'Play'}
          className="flex items-center space-x-1.5 px-3.5 py-2 rounded-lg bg-srm-blue hover:bg-blue-700 text-white font-medium text-xs shadow-xs transition-colors"
        >
          {isPlaying ? (
            <>
              <Pause className="w-4 h-4 fill-white" />
              <span>Pause</span>
            </>
          ) : (
            <>
              <Play className="w-4 h-4 fill-white" />
              <span>Play</span>
            </>
          )}
        </button>

        <button
          onClick={onStepNext}
          disabled={currentStep >= totalSteps - 1}
          title="Next Step"
          className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors border border-transparent hover:border-slate-300 dark:hover:border-slate-600"
        >
          <SkipForward className="w-4 h-4" />
        </button>
      </div>

      {/* Step Counter & Progress Slider */}
      <div className="flex items-center space-x-3 flex-1 max-w-xs px-2">
        <span className="text-xs font-mono font-medium text-slate-500 dark:text-slate-400 whitespace-nowrap">
          Step {Math.min(currentStep + 1, totalSteps)} / {Math.max(totalSteps, 1)}
        </span>
        <div className="w-full bg-slate-200 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden">
          <div 
            className="bg-srm-blue h-full transition-all duration-150"
            style={{ width: `${totalSteps > 1 ? ((currentStep + 1) / totalSteps) * 100 : 100}%` }}
          />
        </div>
      </div>

      {/* Speed Controls */}
      <div className="flex items-center space-x-1">
        <span className="text-[11px] text-slate-400 mr-1 flex items-center">
          <Zap className="w-3 h-3 mr-0.5 text-amber-500" />
          Speed:
        </span>
        {speeds.map(s => (
          <button
            key={s}
            onClick={() => onSpeedChange(s)}
            className={`px-2 py-1 text-xs font-mono font-semibold rounded-md transition-all ${
              speed === s
                ? 'bg-srm-blue text-white shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:bg-white dark:hover:bg-slate-700'
            }`}
          >
            {s}x
          </button>
        ))}
      </div>
    </div>
  );
};
