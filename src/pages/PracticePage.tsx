import React, { useState } from 'react';
import { ComparisonModal } from '../components/common/ComparisonModal';
import { BreadcrumbBar } from '../components/layout/BreadcrumbBar';
import { BarChart3, ArrowRight, Sparkles, Cpu, Layers, Disc } from 'lucide-react';

interface PracticePageProps {
  onBack: () => void;
}

export const PracticePage: React.FC<PracticePageProps> = ({ onBack }) => {
  const [modalCategory, setModalCategory] = useState<'cpu' | 'page' | 'disk' | null>(null);

  return (
    <div className="space-y-6 py-6 font-sans">
      
      {/* Universal Breadcrumb & Back Navigation */}
      <BreadcrumbBar
        onBack={onBack}
        backLabel="← Back to Home"
        breadcrumbs={[
          { label: 'Virtual Laboratories', onClick: onBack },
          { label: 'Algorithm Comparison Workbench' }
        ]}
      />

      <div>
        <div className="flex items-center space-x-2 text-xs font-bold text-srm-blue dark:text-blue-400 uppercase tracking-wider">
          <BarChart3 className="w-4 h-4" />
          <span>Algorithm Comparison Workbench</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-1">
          Side-by-Side Algorithm Comparison
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 max-w-2xl">
          Evaluate multiple operating system algorithms against the exact same workload to analyze turnaround time, page fault rates, and head movement trade-offs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* CPU Benchmark Card */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/60 text-srm-blue dark:text-blue-400 flex items-center justify-center mb-4">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              CPU Scheduling Benchmark
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
              Compare FCFS, Shortest Job First (SJF), and Round Robin on a stationary workload. Inspect Waiting Time and context switch overhead.
            </p>
            <div className="mt-4 flex flex-wrap gap-1.5 text-[10px] font-mono">
              <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800">FCFS</span>
              <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800">SJF</span>
              <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800">Round Robin</span>
            </div>
          </div>

          <button
            onClick={() => setModalCategory('cpu')}
            className="mt-6 w-full py-2.5 rounded-xl bg-srm-blue hover:bg-blue-700 text-white font-bold text-xs flex items-center justify-center space-x-1.5 shadow-xs transition-colors cursor-pointer"
          >
            <span>Run CPU Comparison</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Page Replacement Benchmark Card */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-4">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Page Replacement Benchmark
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
              Compare FIFO, Least Recently Used (LRU), and Optimal replacement policies across 3 frames. Inspect fault counts and Belady's anomaly.
            </p>
            <div className="mt-4 flex flex-wrap gap-1.5 text-[10px] font-mono">
              <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800">FIFO</span>
              <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800">LRU</span>
              <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800">Optimal</span>
            </div>
          </div>

          <button
            onClick={() => setModalCategory('page')}
            className="mt-6 w-full py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs flex items-center justify-center space-x-1.5 shadow-xs transition-colors cursor-pointer"
          >
            <span>Run Page Replacement Comparison</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Disk Scheduling Benchmark Card */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-4">
              <Disc className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Disk Arm Scheduling Benchmark
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
              Compare FCFS, Shortest Seek Time First (SSTF), and SCAN (Elevator) head trajectories over cylinders 0-199.
            </p>
            <div className="mt-4 flex flex-wrap gap-1.5 text-[10px] font-mono">
              <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800">FCFS</span>
              <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800">SSTF</span>
              <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800">SCAN</span>
            </div>
          </div>

          <button
            onClick={() => setModalCategory('disk')}
            className="mt-6 w-full py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs flex items-center justify-center space-x-1.5 shadow-xs transition-colors cursor-pointer"
          >
            <span>Run Disk Comparison</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Comparison Modal */}
      {modalCategory && (
        <ComparisonModal
          isOpen={true}
          onClose={() => setModalCategory(null)}
          category={modalCategory}
        />
      )}
    </div>
  );
};
