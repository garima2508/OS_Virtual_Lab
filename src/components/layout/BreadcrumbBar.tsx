import React from 'react';
import { ArrowLeft, ChevronRight, Home, ShieldCheck, User } from 'lucide-react';

interface BreadcrumbBarProps {
  onBack: () => void;
  backLabel?: string;
  breadcrumbs: { label: string; onClick?: () => void }[];
  registrationNo?: string;
}

export const BreadcrumbBar: React.FC<BreadcrumbBarProps> = ({
  onBack,
  backLabel = 'Back to Home',
  breadcrumbs,
  registrationNo = 'RA2211003010001'
}) => {
  return (
    <div className="w-full flex flex-col md:flex-row md:items-center justify-between gap-4 py-3.5 px-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs mb-6">
      
      {/* Left: Big Prominent Back Button & Hierarchical Breadcrumbs */}
      <div className="flex items-center space-x-3 flex-wrap gap-y-2">
        {/* BIG BACK BUTTON */}
        <button
          onClick={onBack}
          className="inline-flex items-center space-x-2.5 px-5 py-2.5 rounded-xl bg-[#0c4da2] hover:bg-blue-800 text-white font-extrabold text-sm sm:text-base shadow-md hover:shadow-lg transition-all transform hover:-translate-x-0.5 cursor-pointer group"
          title={backLabel}
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span>{backLabel}</span>
        </button>

        <span className="text-slate-300 dark:text-slate-700 hidden sm:inline text-lg">|</span>

        {/* Breadcrumb Trail with Increased Font Size */}
        <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-sm text-slate-500 dark:text-slate-400">
          <div className="flex items-center space-x-1 font-semibold text-slate-600 dark:text-slate-300">
            <Home className="w-4 h-4 text-[#0c4da2] dark:text-blue-400" />
            <span className="hidden sm:inline">SRMIST Portal</span>
          </div>

          {breadcrumbs.map((crumb, idx) => (
            <React.Fragment key={idx}>
              <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
              {crumb.onClick ? (
                <button
                  onClick={crumb.onClick}
                  className="hover:text-[#0c4da2] dark:hover:text-blue-400 transition-colors font-semibold cursor-pointer"
                >
                  {crumb.label}
                </button>
              ) : (
                <span className="font-bold text-slate-900 dark:text-white truncate max-w-[240px] sm:max-w-[400px]">
                  {crumb.label}
                </span>
              )}
            </React.Fragment>
          ))}
        </nav>
      </div>

      {/* Right: Student Status & Verification Pill */}
      <div className="flex items-center space-x-3 shrink-0 font-mono text-xs sm:text-sm bg-slate-50 dark:bg-slate-950 px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-800">
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
        <span className="text-slate-500 dark:text-slate-400 hidden sm:inline">Student ID:</span>
        <span className="font-bold text-slate-800 dark:text-slate-200">{registrationNo}</span>
        <span className="text-slate-400 hidden lg:inline">• B.Tech CSE (Sem IV)</span>
        <span className="px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-950 text-[#0c4da2] dark:text-blue-300 font-sans font-bold text-[11px] uppercase">
          Verified
        </span>
      </div>
    </div>
  );
};
