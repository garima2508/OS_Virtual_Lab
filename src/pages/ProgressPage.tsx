import React from 'react';
import { StudentProgress } from '../types';
import { OS_MODULES } from '../data/modules';
import { EXPERIMENTS } from '../data/experiments';
import { BreadcrumbBar } from '../components/layout/BreadcrumbBar';
import { 
  Award, 
  Sparkles, 
  Bookmark, 
  CheckCircle2, 
  ArrowRight, 
  RotateCcw,
  Trophy,
  ChevronLeft
} from 'lucide-react';

interface ProgressPageProps {
  progress: StudentProgress;
  onSelectExperiment: (expId: string) => void;
  onResetProgress: () => void;
  onBack: () => void;
}

export const ProgressPage: React.FC<ProgressPageProps> = ({
  progress,
  onSelectExperiment,
  onResetProgress,
  onBack
}) => {
  const totalExperiments = EXPERIMENTS.length;
  const completedCount = progress.completedExperiments.length;
  const progressPercent = Math.round((completedCount / totalExperiments) * 100);

  const availableBadges = [
    { id: 'Scheduler', title: 'Scheduler', desc: 'Completed FCFS & Round Robin', icon: '⏱️' },
    { id: 'Deadlock Detective', title: 'Deadlock Detective', desc: "Solved Banker's Algorithm", icon: '🔒' },
    { id: 'Memory Master', title: 'Memory Master', desc: 'Mastered Contiguous Allocation', icon: '💾' },
    { id: 'Paging Explorer', title: 'Paging Explorer', desc: 'Analyzed Page Replacement', icon: '📄' },
    { id: 'Synchronization Pro', title: 'Synchronization Pro', desc: 'Solved Producer-Consumer & Philosophers', icon: '🛡️' },
    { id: 'Disk Master', title: 'Disk Master', desc: 'Optimized Disk Arm Trajectory', icon: '💿' },
  ];

  const bookmarkedExps = EXPERIMENTS.filter(e => progress.bookmarkedExperiments.includes(e.id));

  return (
    <div className="space-y-6 py-6 font-sans">
      
      {/* 1. UNIVERSAL BREADCRUMB & BACK NAVIGATION */}
      <BreadcrumbBar
        onBack={onBack}
        backLabel="← Back to Home"
        breadcrumbs={[
          { label: 'Virtual Laboratories', onClick: onBack },
          { label: 'Student Profile & Progress' }
        ]}
      />

      {/* 2. SRMIST WELCOME CARD BANNER (matching media_1789924222398.jpg) */}
      <div className="rounded-3xl bg-[#09356d] text-white p-6 sm:p-8 shadow-md flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border border-blue-900">
        <div className="space-y-3">
          <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-md bg-[#f8a51d] text-slate-950 font-bold text-[10px] tracking-wider uppercase">
            <span>★ SRMIST CSE PORTAL</span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Welcome back, AB1234@SRMIST.EDU.IN!
          </h1>

          <p className="text-xs sm:text-sm text-blue-200 font-mono">
            Registration No: <strong className="text-amber-300 font-bold">RA2211003010001</strong> • Semester IV • B.Tech CSE
          </p>
        </div>

        {/* Right Box: Total Experiments */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/20 text-center shrink-0 min-w-[170px]">
          <div className="text-[10px] font-bold uppercase tracking-widest text-blue-200">
            TOTAL EXPERIMENTS
          </div>
          <div className="text-2xl sm:text-3xl font-black font-mono text-[#f8a51d] mt-1">
            {totalExperiments} Available
          </div>
        </div>
      </div>

      {/* 3. THREE STAT METRIC CARDS (matching media_1789924222398.jpg) */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        
        {/* Active Laboratories */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-2xs">
          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
            ACTIVE LABORATORIES
          </div>
          <div className="text-3xl font-black font-mono text-[#0c4da2] dark:text-blue-400 mt-2">
            9 Modules
          </div>
        </div>

        {/* Completed Experiments */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-2xs">
          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
            COMPLETED EXPERIMENTS
          </div>
          <div className="text-3xl font-black font-mono text-[#0c4da2] dark:text-blue-400 mt-2">
            {completedCount} <span className="text-sm font-normal text-slate-400">/ {totalExperiments}</span>
          </div>
        </div>

        {/* Overall Lab Progress */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-2xs flex flex-col justify-between">
          <div>
            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
              OVERALL LAB PROGRESS
            </div>
            <div className="text-3xl font-black font-mono text-[#0c4da2] dark:text-blue-400 mt-2">
              {progressPercent}%
            </div>
          </div>
          
          <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden mt-3">
            <div
              className="bg-[#0c4da2] dark:bg-blue-500 h-full transition-all duration-300"
              style={{ width: `${Math.max(progressPercent, 2)}%` }}
            />
          </div>
        </div>
      </div>

      {/* 4. EARNED ACADEMIC BADGES */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-4">
        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 flex items-center space-x-2">
          <Trophy className="w-4 h-4 text-amber-500" />
          <span>Earned Academic Badges ({progress.badges.length} / {availableBadges.length})</span>
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {availableBadges.map(b => {
            const isUnlocked = progress.badges.includes(b.id);
            return (
              <div
                key={b.id}
                className={`p-3.5 rounded-xl border text-center transition-all ${
                  isUnlocked
                    ? 'border-amber-300 dark:border-amber-700 bg-amber-50/50 dark:bg-amber-950/30 text-amber-900 dark:text-amber-200 shadow-xs'
                    : 'border-slate-200 dark:border-slate-800/80 bg-slate-50 dark:bg-slate-950 text-slate-400 opacity-50 grayscale'
                }`}
              >
                <div className="text-2xl mb-1">{b.icon}</div>
                <div className="font-bold text-xs">{b.title}</div>
                <div className="text-[10px] mt-0.5 line-clamp-2">{b.desc}</div>
                {isUnlocked && (
                  <div className="mt-1.5 text-[9px] font-bold uppercase text-amber-600 dark:text-amber-400">
                    UNLOCKED ✓
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* 5. MODULE COMPLETION & BOOKMARKED EXPERIMENTS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Module Breakdown */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-4">
          <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">
            Curriculum Module Breakdown
          </h3>

          <div className="space-y-3">
            {OS_MODULES.map(m => {
              const moduleExps = EXPERIMENTS.filter(e => e.moduleId === m.id);
              const completedInMod = moduleExps.filter(e => progress.completedExperiments.includes(e.id)).length;
              const pct = moduleExps.length > 0 ? Math.round((completedInMod / moduleExps.length) * 100) : 0;

              return (
                <div key={m.id} className="space-y-1">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-slate-700 dark:text-slate-300">{m.title}</span>
                    <span className="font-mono text-slate-400">{completedInMod}/{moduleExps.length} ({pct}%)</span>
                  </div>
                  <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                    <div
                      className="bg-[#0c4da2] h-full transition-all duration-300"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bookmarked Experiments */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider flex items-center space-x-1.5">
              <Bookmark className="w-4 h-4 text-amber-500 fill-amber-500" />
              <span>Bookmarked Experiments ({bookmarkedExps.length})</span>
            </h3>

            <button
              onClick={onResetProgress}
              className="flex items-center space-x-1 text-[11px] text-rose-500 hover:text-rose-700 transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset Progress</span>
            </button>
          </div>

          {bookmarkedExps.length === 0 ? (
            <div className="py-12 text-center text-xs text-slate-400 italic">
              No bookmarked experiments yet. Pin experiments from the catalog to access them quickly here.
            </div>
          ) : (
            <div className="space-y-2">
              {bookmarkedExps.map(exp => (
                <div
                  key={exp.id}
                  onClick={() => onSelectExperiment(exp.id)}
                  className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 hover:border-srm-blue flex items-center justify-between cursor-pointer transition-colors"
                >
                  <div>
                    <div className="text-xs font-bold text-slate-800 dark:text-slate-200">{exp.title}</div>
                    <div className="text-[10px] text-slate-400">{exp.category} • {exp.estimatedTime}</div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#0c4da2] dark:text-blue-400" />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
