import React from 'react';

interface GanttBlock {
  pid: string;
  start: number;
  end: number;
}

interface CPUGanttChartProps {
  timeline: GanttBlock[];
  currentTime: number;
  runningPid: string | null;
}

const PROCESS_COLORS: Record<string, string> = {
  P1: 'bg-blue-500 text-white border-blue-600',
  P2: 'bg-emerald-500 text-white border-emerald-600',
  P3: 'bg-amber-500 text-white border-amber-600',
  P4: 'bg-purple-500 text-white border-purple-600',
  P5: 'bg-rose-500 text-white border-rose-600',
  P6: 'bg-cyan-500 text-white border-cyan-600',
};

export const CPUGanttChart: React.FC<CPUGanttChartProps> = ({
  timeline,
  currentTime,
  runningPid
}) => {
  if (timeline.length === 0) {
    return (
      <div className="p-8 text-center text-xs text-slate-400 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-dashed border-slate-300 dark:border-slate-800">
        Click Play or Step Next to generate the Gantt chart execution timeline.
      </div>
    );
  }

  const totalTime = timeline[timeline.length - 1].end || 1;

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-xs font-semibold text-slate-500 dark:text-slate-400 px-1">
        <span>Gantt Chart Execution Timeline</span>
        <span className="font-mono text-[11px]">Total Time: {totalTime} ms</span>
      </div>

      {/* Gantt Bar */}
      <div className="relative w-full h-12 bg-slate-100 dark:bg-slate-950 rounded-xl p-1 flex border border-slate-200 dark:border-slate-800 overflow-x-auto shadow-inner">
        {timeline.map((block, index) => {
          const duration = block.end - block.start;
          const widthPercent = (duration / totalTime) * 100;
          const colorClass = PROCESS_COLORS[block.pid] || 'bg-slate-600 text-white';
          const isCurrentlyActive = runningPid === block.pid && currentTime >= block.start && currentTime < block.end;

          return (
            <div
              key={`${block.pid}-${index}`}
              style={{ width: `${Math.max(widthPercent, 5)}%` }}
              className={`relative h-full flex flex-col items-center justify-center font-mono font-bold text-xs rounded-lg mx-0.5 border ${colorClass} ${
                isCurrentlyActive ? 'ring-2 ring-white ring-offset-1 dark:ring-offset-slate-900 animate-pulse' : ''
              } transition-all duration-150`}
            >
              <span className="text-[11px]">{block.pid}</span>
              <span className="text-[9px] opacity-75 font-normal">
                {duration}ms
              </span>
            </div>
          );
        })}
      </div>

      {/* Time Ticks */}
      <div className="relative w-full flex justify-between text-[10px] font-mono text-slate-400 px-1">
        <span>0</span>
        {timeline.map((b, i) => (
          <span key={i}>{b.end}</span>
        ))}
      </div>
    </div>
  );
};
