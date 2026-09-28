import React from 'react';

interface MetricCardProps {
  label: string;
  value: string | number;
  unit?: string;
  icon?: React.ReactNode;
  hint?: string;
  variant?: 'blue' | 'amber' | 'emerald' | 'purple' | 'rose';
}

export const MetricCard: React.FC<MetricCardProps> = ({
  label,
  value,
  unit,
  icon,
  hint,
  variant = 'blue'
}) => {
  const variantStyles = {
    blue: 'border-blue-200 dark:border-blue-900/50 bg-blue-50/50 dark:bg-blue-950/20 text-blue-900 dark:text-blue-200',
    amber: 'border-amber-200 dark:border-amber-900/50 bg-amber-50/50 dark:bg-amber-950/20 text-amber-900 dark:text-amber-200',
    emerald: 'border-emerald-200 dark:border-emerald-900/50 bg-emerald-50/50 dark:bg-emerald-950/20 text-emerald-900 dark:text-emerald-200',
    purple: 'border-purple-200 dark:border-purple-900/50 bg-purple-50/50 dark:bg-purple-950/20 text-purple-900 dark:text-purple-200',
    rose: 'border-rose-200 dark:border-rose-900/50 bg-rose-50/50 dark:bg-rose-950/20 text-rose-900 dark:text-rose-200',
  };

  return (
    <div className={`p-4 rounded-xl border ${variantStyles[variant]} backdrop-blur-xs flex flex-col justify-between transition-all duration-200 hover:shadow-sm`}>
      <div className="flex items-center justify-between mb-1">
        <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          {label}
        </span>
        {icon && <div className="text-slate-400 dark:text-slate-500">{icon}</div>}
      </div>

      <div className="flex items-baseline space-x-1.5 mt-1">
        <span className="text-2xl font-extrabold font-mono tracking-tight">
          {value}
        </span>
        {unit && (
          <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
            {unit}
          </span>
        )}
      </div>

      {hint && (
        <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-2 line-clamp-1">
          {hint}
        </div>
      )}
    </div>
  );
};
