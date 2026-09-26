import React, { useState, useEffect, useMemo } from 'react';
import { EXPERIMENTS } from '../data/experiments';
import { OS_MODULES } from '../data/modules';
import { BreadcrumbBar } from '../components/layout/BreadcrumbBar';
import { 
  Search, 
  Bookmark, 
  Clock, 
  Cpu, 
  ArrowRight, 
  Sparkles, 
  Layers, 
  CheckCircle2, 
  Circle,
  Filter,
  RotateCcw,
  BookOpen,
  Award
} from 'lucide-react';

interface LabCatalogPageProps {
  onSelectExperiment: (expId: string) => void;
  bookmarkedIds: string[];
  onToggleBookmark: (expId: string) => void;
  completedExperimentIds: string[];
  onMarkCompleted: (expId: string) => void;
  initialModuleFilter?: string;
  onBack: () => void;
}

export const LabCatalogPage: React.FC<LabCatalogPageProps> = ({
  onSelectExperiment,
  bookmarkedIds,
  onToggleBookmark,
  completedExperimentIds,
  onMarkCompleted,
  initialModuleFilter,
  onBack
}) => {
  const [selectedModule, setSelectedModule] = useState<string>(initialModuleFilter || 'all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<'all' | 'completed' | 'pending'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Synchronize when parent passes a new module filter (e.g. from Home or Nav)
  useEffect(() => {
    if (initialModuleFilter) {
      setSelectedModule(initialModuleFilter);
    }
  }, [initialModuleFilter]);

  // Compute counts per module
  const moduleCounts = useMemo(() => {
    const counts: Record<string, number> = { all: EXPERIMENTS.length };
    EXPERIMENTS.forEach(exp => {
      counts[exp.moduleId] = (counts[exp.moduleId] || 0) + 1;
    });
    return counts;
  }, []);

  // Filtered experiments
  const filteredExperiments = useMemo(() => {
    return EXPERIMENTS.filter(exp => {
      const matchModule = selectedModule === 'all' || exp.moduleId === selectedModule;
      const matchDiff = selectedDifficulty === 'all' || exp.difficulty.toLowerCase() === selectedDifficulty.toLowerCase();
      const isCompleted = completedExperimentIds.includes(exp.id);
      const matchStatus = 
        selectedStatus === 'all' || 
        (selectedStatus === 'completed' && isCompleted) || 
        (selectedStatus === 'pending' && !isCompleted);

      const query = searchQuery.trim().toLowerCase();
      const matchSearch =
        query === '' ||
        exp.title.toLowerCase().includes(query) ||
        exp.category.toLowerCase().includes(query) ||
        exp.keyConcepts.some(k => k.toLowerCase().includes(query)) ||
        exp.coMapping.toLowerCase().includes(query);

      return matchModule && matchDiff && matchStatus && matchSearch;
    });
  }, [selectedModule, selectedDifficulty, selectedStatus, searchQuery, completedExperimentIds]);

  const totalCompleted = completedExperimentIds.length;
  const overallPercentage = Math.round((totalCompleted / EXPERIMENTS.length) * 100);

  const handleResetFilters = () => {
    setSelectedModule('all');
    setSelectedDifficulty('all');
    setSelectedStatus('all');
    setSearchQuery('');
  };

  const isFiltered = selectedModule !== 'all' || selectedDifficulty !== 'all' || selectedStatus !== 'all' || searchQuery !== '';

  const activeModuleTitle = selectedModule === 'all' 
    ? 'All Modules' 
    : OS_MODULES.find(m => m.id === selectedModule)?.title || selectedModule;

  return (
    <div className="w-full space-y-8 font-sans">
      
      {/* 1. UNIVERSAL BREADCRUMB & BIG BACK BUTTON */}
      <BreadcrumbBar
        onBack={onBack}
        backLabel="← Back to Home"
        breadcrumbs={[
          { label: 'Virtual Laboratories', onClick: onBack },
          { label: activeModuleTitle }
        ]}
      />

      {/* 2. CATALOG HEADER WITH PROGRESS BANNER (FULL WIDTH) */}
      <div className="w-full bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-10 border border-slate-200 dark:border-slate-800 shadow-xs">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          
          <div className="space-y-3 flex-1">
            <div className="flex items-center space-x-2 text-xs sm:text-sm font-bold text-[#0c4da2] dark:text-blue-400 uppercase tracking-wider">
              <Layers className="w-5 h-5" />
              <span>SRMIST CSE Curriculum Laboratory Catalog</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
              Operating Systems Laboratory Experiments
            </h1>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
              Explore hands-on experiments mapped to Course Outcomes CO1-CO5. Step through live algorithm simulations, execute C code sandboxes, and verify your mastery with quizzes and viva voce.
            </p>
          </div>

          {/* Student Progress Overview Banner */}
          <div className="bg-slate-50 dark:bg-slate-950/80 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shrink-0 min-w-[320px] sm:min-w-[360px] space-y-4">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center space-x-2 font-bold text-slate-800 dark:text-slate-200">
                <Award className="w-5 h-5 text-amber-500" />
                <span className="text-base">Your Lab Progress</span>
              </div>
              <span className="font-mono font-black text-base text-[#0c4da2] dark:text-blue-400">
                {totalCompleted} / {EXPERIMENTS.length} ({overallPercentage}%)
              </span>
            </div>

            <div className="w-full bg-slate-200 dark:bg-slate-800 h-3 rounded-full overflow-hidden">
              <div 
                className="bg-[#0c4da2] dark:bg-blue-500 h-full rounded-full transition-all duration-500"
                style={{ width: `${Math.max(overallPercentage, 3)}%` }}
              />
            </div>

            <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-semibold">
              <span>9 Modules Active</span>
              <span>•</span>
              <span>CO1 — CO5 Aligned</span>
              <span>•</span>
              <span className="text-emerald-600 dark:text-emerald-400 font-black">{totalCompleted * 50} XP</span>
            </div>
          </div>
        </div>
      </div>

      {/* 3. FILTER BAR & SEARCH (FULL WIDTH) */}
      <div className="w-full bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xs space-y-6">
        
        {/* Search & Status Row */}
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <div className="relative flex-1 w-full">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search experiments by name, category, or concept (e.g. Gantt, LRU, Banker's, fork)..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 text-sm sm:text-base bg-slate-50 dark:bg-slate-800/80 rounded-2xl border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-hidden focus:border-[#0c4da2] transition-colors"
            />
          </div>

          {/* Status Filter (All / Completed / Pending) */}
          <div className="flex items-center space-x-2 shrink-0 text-sm w-full sm:w-auto overflow-x-auto">
            <button
              onClick={() => setSelectedStatus('all')}
              className={`px-4 py-3 rounded-xl font-bold transition-all cursor-pointer ${
                selectedStatus === 'all'
                  ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-sm'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
              }`}
            >
              All Status ({EXPERIMENTS.length})
            </button>
            <button
              onClick={() => setSelectedStatus('completed')}
              className={`px-4 py-3 rounded-xl font-bold flex items-center space-x-1.5 transition-all cursor-pointer ${
                selectedStatus === 'completed'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
              }`}
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>Completed ({totalCompleted})</span>
            </button>
            <button
              onClick={() => setSelectedStatus('pending')}
              className={`px-4 py-3 rounded-xl font-bold flex items-center space-x-1.5 transition-all cursor-pointer ${
                selectedStatus === 'pending'
                  ? 'bg-amber-600 text-white shadow-sm'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
              }`}
            >
              <Circle className="w-4 h-4" />
              <span>Pending ({EXPERIMENTS.length - totalCompleted})</span>
            </button>
          </div>
        </div>

        {/* Module Filter Pills */}
        <div className="space-y-2.5">
          <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-400">
            Curriculum Modules:
          </div>
          <div className="flex flex-wrap gap-2 text-xs sm:text-sm">
            <button
              onClick={() => setSelectedModule('all')}
              className={`px-4 py-2 rounded-xl font-bold transition-all cursor-pointer ${
                selectedModule === 'all'
                  ? 'bg-[#0c4da2] text-white shadow-sm'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
              }`}
            >
              All Modules ({EXPERIMENTS.length})
            </button>
            {OS_MODULES.map(m => {
              const count = moduleCounts[m.id] || 0;
              const isSelected = selectedModule === m.id;
              return (
                <button
                  key={m.id}
                  onClick={() => setSelectedModule(m.id)}
                  className={`px-4 py-2 rounded-xl font-bold transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#0c4da2] text-white shadow-sm'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
                  }`}
                >
                  {m.title} ({count})
                </button>
              );
            })}
          </div>
        </div>

        {/* Difficulty Filter & Reset */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-100 dark:border-slate-800 text-xs sm:text-sm">
          <div className="flex items-center space-x-2.5">
            <Filter className="w-4 h-4 text-slate-400" />
            <span className="text-slate-500 font-semibold">Difficulty:</span>
            {['all', 'beginner', 'intermediate', 'advanced'].map(d => (
              <button
                key={d}
                onClick={() => setSelectedDifficulty(d)}
                className={`px-3 py-1.5 rounded-lg capitalize font-bold cursor-pointer transition-colors ${
                  selectedDifficulty === d
                    ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900'
                    : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {d}
              </button>
            ))}
          </div>

          {isFiltered && (
            <button
              onClick={handleResetFilters}
              className="flex items-center space-x-1.5 text-xs sm:text-sm font-bold text-rose-600 hover:text-rose-700 transition-colors cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Reset Filters</span>
            </button>
          )}
        </div>
      </div>

      {/* 4. EXPERIMENTS FULL-WIDTH GRID (Expanded for wide screens) */}
      <div className="w-full space-y-4">
        <div className="flex items-center justify-between text-sm text-slate-500 px-1 font-semibold">
          <span>Showing <strong>{filteredExperiments.length}</strong> of {EXPERIMENTS.length} experiments</span>
          {selectedModule !== 'all' && (
            <span className="font-bold text-[#0c4da2] dark:text-blue-400">
              Module: {activeModuleTitle}
            </span>
          )}
        </div>

        {filteredExperiments.length === 0 ? (
          <div className="w-full py-20 text-center text-sm sm:text-base text-slate-500 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-4">
            <Layers className="w-10 h-10 text-slate-400 mx-auto" />
            <div className="font-bold text-slate-800 dark:text-slate-200 text-lg">No experiments found matching your filters.</div>
            <p className="text-sm text-slate-400 max-w-md mx-auto">
              Try clicking "Reset Filters" or selecting "All Modules" to view the complete catalog.
            </p>
            <button
              onClick={handleResetFilters}
              className="px-6 py-2.5 rounded-xl bg-[#0c4da2] text-white font-bold text-sm shadow-xs cursor-pointer"
            >
              View All Experiments
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
            {filteredExperiments.map(exp => {
              const isBookmarked = bookmarkedIds.includes(exp.id);
              const isCompleted = completedExperimentIds.includes(exp.id);

              return (
                <div
                  key={exp.id}
                  className={`bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-7 border shadow-xs hover:border-[#0c4da2] dark:hover:border-blue-500 hover:shadow-md transition-all duration-200 flex flex-col justify-between ${
                    isCompleted 
                      ? 'border-emerald-200/80 dark:border-emerald-900/60 bg-emerald-50/10 dark:bg-emerald-950/10' 
                      : 'border-slate-200 dark:border-slate-800'
                  }`}
                >
                  <div>
                    {/* Top Badges */}
                    <div className="flex items-center justify-between mb-4 gap-2">
                      <div className="flex items-center space-x-2 flex-wrap">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#0c4da2] dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-2.5 py-1 rounded-md border border-blue-200 dark:border-blue-900">
                          {exp.category}
                        </span>
                        <span className="text-xs font-mono font-bold text-slate-600 dark:text-slate-400 px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800">
                          {exp.coMapping}
                        </span>
                      </div>
                      
                      <div className="flex items-center space-x-1.5">
                        {isCompleted ? (
                          <span className="inline-flex items-center space-x-1 text-xs font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-1 rounded-md border border-emerald-300 dark:border-emerald-800">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            <span>Done</span>
                          </span>
                        ) : (
                          <span className="text-xs text-slate-400 font-semibold px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800">
                            Pending
                          </span>
                        )}

                        <button
                          onClick={() => onToggleBookmark(exp.id)}
                          title={isBookmarked ? 'Remove Bookmark' : 'Bookmark Experiment'}
                          className={`p-2 rounded-lg transition-colors cursor-pointer ${
                            isBookmarked
                              ? 'text-amber-500 bg-amber-50 dark:bg-amber-950'
                              : 'text-slate-400 hover:text-amber-500 hover:bg-slate-100 dark:hover:bg-slate-800'
                          }`}
                        >
                          <Bookmark className="w-4 h-4 fill-current" />
                        </button>
                      </div>
                    </div>

                    {/* Experiment Title */}
                    <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white leading-snug">
                      {exp.title}
                    </h3>

                    {/* Quick Summary */}
                    <p className="text-sm text-slate-600 dark:text-slate-300 mt-2.5 line-clamp-2 leading-relaxed">
                      {exp.theory.quickSummary}
                    </p>

                    {/* Key Concepts */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {exp.keyConcepts.slice(0, 3).map((c, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-xs font-mono text-slate-600 dark:text-slate-400"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs sm:text-sm">
                    <div className="flex items-center space-x-1.5 text-slate-400 font-mono">
                      <Clock className="w-4 h-4" />
                      <span>{exp.estimatedTime}</span>
                    </div>

                    <button
                      onClick={() => onSelectExperiment(exp.id)}
                      className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-[#0c4da2] hover:bg-blue-800 text-white font-bold transition-all shadow-xs cursor-pointer group"
                    >
                      <span>Simulate</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
