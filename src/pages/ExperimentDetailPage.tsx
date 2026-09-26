import React, { useState } from 'react';
import { EXPERIMENTS } from '../data/experiments';
import { EXPERIMENT_QUIZZES } from '../data/quizzes';
import { VIVA_QUESTIONS } from '../data/viva';
import { CPUSimulator } from '../components/simulation/CPUSimulator';
import { PageReplacementSim } from '../components/simulation/PageReplacementSim';
import { BankersSim } from '../components/simulation/BankersSim';
import { MemoryAllocationSim } from '../components/simulation/MemoryAllocationSim';
import { DiskSchedulingSim } from '../components/simulation/DiskSchedulingSim';
import { SyncSim } from '../components/simulation/SyncSim';
import { FileAllocationSim } from '../components/simulation/FileAllocationSim';
import { Terminal } from '../components/terminal/Terminal';
import { CodePlayground } from '../components/playground/CodePlayground';
import { QuizCard } from '../components/assessment/QuizCard';
import { VivaCard } from '../components/assessment/VivaCard';
import { BreadcrumbBar } from '../components/layout/BreadcrumbBar';
import { 
  ArrowLeft, 
  BookOpen, 
  Code, 
  Cpu, 
  HelpCircle, 
  ListChecks, 
  CheckCircle2, 
  Clock, 
  AlertTriangle, 
  Bookmark, 
  Sparkles,
  Terminal as TerminalIcon
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface ExperimentDetailPageProps {
  experimentId: string;
  onBack: () => void;
  isCompleted: boolean;
  onMarkCompleted: (expId: string) => void;
  isBookmarked: boolean;
  onToggleBookmark: (expId: string) => void;
}

export const ExperimentDetailPage: React.FC<ExperimentDetailPageProps> = ({
  experimentId,
  onBack,
  isCompleted,
  onMarkCompleted,
  isBookmarked,
  onToggleBookmark
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'theory' | 'algorithm' | 'simulation' | 'code' | 'quiz' | 'viva'>('simulation');

  const exp = EXPERIMENTS.find(e => e.id === experimentId) || EXPERIMENTS[0];
  const quizzes = EXPERIMENT_QUIZZES[exp.id] || EXPERIMENT_QUIZZES['exp-fcfs'] || [];
  const vivaQuestions = VIVA_QUESTIONS.filter(v => v.category === exp.category || v.category === 'CPU Scheduling');

  const handleComplete = () => {
    confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
    onMarkCompleted(exp.id);
  };

  return (
    <div className="space-y-6 py-6 font-sans">
      
      {/* 1. UNIVERSAL BREADCRUMB & BACK NAVIGATION */}
      <BreadcrumbBar
        onBack={onBack}
        backLabel="← Back to Experiment Catalog"
        breadcrumbs={[
          { label: 'Virtual Laboratories', onClick: onBack },
          { label: exp.category },
          { label: exp.title }
        ]}
      />

      {/* 2. TOP EXPERIMENT HEADER & ACTION BAR */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xs">
        <div className="space-y-2">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-blue-50 dark:bg-blue-950 text-srm-blue dark:text-blue-400 border border-blue-200 dark:border-blue-900">
              {exp.category}
            </span>
            <span className="text-xs text-slate-400">•</span>
            <span className="text-xs font-mono font-bold text-slate-600 dark:text-slate-300">{exp.coMapping}</span>
            <span className="text-xs text-slate-400">•</span>
            <span className="text-xs font-mono text-slate-500 flex items-center space-x-1">
              <Clock className="w-3 h-3 inline mr-1" />
              {exp.estimatedTime}
            </span>
          </div>

          <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white mt-1">
            {exp.title}
          </h1>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-2 shrink-0">
          <button
            onClick={() => onToggleBookmark(exp.id)}
            className={`p-2.5 rounded-xl border transition-colors cursor-pointer ${
              isBookmarked
                ? 'border-amber-300 bg-amber-50 dark:bg-amber-950 text-amber-600'
                : 'border-slate-200 dark:border-slate-800 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
            title={isBookmarked ? 'Remove Bookmark' : 'Bookmark Experiment'}
          >
            <Bookmark className="w-4 h-4 fill-current" />
          </button>

          {isCompleted ? (
            <div className="flex items-center space-x-1.5 px-4 py-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 text-xs font-bold">
              <CheckCircle2 className="w-4 h-4" />
              <span>Completed ✓</span>
            </div>
          ) : (
            <button
              onClick={handleComplete}
              className="flex items-center space-x-1.5 px-4 py-2.5 rounded-xl bg-srm-blue hover:bg-blue-700 text-white text-xs font-bold shadow-xs transition-colors cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>Mark Completed (+50 XP)</span>
            </button>
          )}
        </div>
      </div>

      {/* 3. PROGRESSIVE TAB NAVIGATION */}
      <div className="flex items-center space-x-1 bg-white dark:bg-slate-900 p-1.5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs overflow-x-auto text-xs font-semibold">
        {[
          { id: 'simulation', label: 'Interactive Simulation', icon: Cpu },
          { id: 'overview', label: 'Overview & Objectives', icon: BookOpen },
          { id: 'theory', label: 'Theory & Formulas', icon: ListChecks },
          { id: 'algorithm', label: 'Algorithm Steps', icon: Code },
          { id: 'code', label: 'C Code Playground', icon: Code },
          { id: 'quiz', label: 'Pre/Post Quiz', icon: HelpCircle },
          { id: 'viva', label: 'Viva Voce', icon: HelpCircle },
        ].map(tab => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center space-x-1.5 px-3.5 py-2 rounded-xl whitespace-nowrap transition-all cursor-pointer ${
                isActive
                  ? 'bg-srm-blue text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* 4. TAB CONTENTS */}
      <div className="min-h-[500px]">
        
        {/* SIMULATION TAB */}
        {activeTab === 'simulation' && (
          <div>
            {exp.moduleId === 'cpu-scheduling' && <CPUSimulator />}
            {exp.moduleId === 'virtual-memory' && <PageReplacementSim />}
            {exp.moduleId === 'deadlock' && <BankersSim />}
            {exp.moduleId === 'memory' && <MemoryAllocationSim />}
            {exp.moduleId === 'disk-scheduling' && <DiskSchedulingSim />}
            {exp.moduleId === 'synchronization' && <SyncSim />}
            {exp.moduleId === 'file-systems' && <FileAllocationSim />}
            {exp.moduleId === 'linux' && <Terminal />}
            {exp.moduleId === 'process' && <CPUSimulator />}
          </div>
        )}

        {/* OVERVIEW TAB */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                Objective
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {exp.objective}
              </p>

              <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider pt-2">
                Learning Outcomes
              </h3>
              <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
                {exp.learningOutcomes.map((lo, i) => (
                  <li key={i} className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{lo}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                Prerequisites & Concepts
              </h3>
              <div className="space-y-3">
                <div>
                  <span className="text-xs font-semibold text-slate-500">Prerequisites:</span>
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {exp.prerequisites.map((p, i) => (
                      <span key={i} className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-xs font-medium text-slate-700 dark:text-slate-300">
                        {p}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="text-xs font-semibold text-slate-500">Key Concepts:</span>
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {exp.keyConcepts.map((k, i) => (
                      <span key={i} className="px-2.5 py-1 rounded-lg bg-blue-50 dark:bg-blue-950 text-xs font-medium text-srm-blue dark:text-blue-300 border border-blue-200 dark:border-blue-900">
                        {k}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* THEORY TAB */}
        {activeTab === 'theory' && (
          <div className="space-y-6">
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
              <div className="p-4 rounded-2xl bg-blue-50/50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900 text-xs leading-relaxed text-slate-800 dark:text-slate-200">
                <strong className="text-srm-blue dark:text-blue-400">Quick Summary: </strong>
                {exp.theory.quickSummary}
              </div>

              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">Definition</h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{exp.theory.definition}</p>
              </div>

              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">Why It Matters</h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{exp.theory.whyItMatters}</p>
              </div>

              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">How It Works</h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{exp.theory.howItWorks}</p>
              </div>

              {/* Formulas */}
              {exp.theory.formulas && exp.theory.formulas.length > 0 && (
                <div className="pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                    Mathematical Formulas
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {exp.theory.formulas.map((f, i) => (
                      <div key={i} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 font-mono text-xs">
                        <div className="font-semibold text-slate-500 font-sans">{f.name}</div>
                        <div className="text-sm font-bold text-srm-blue dark:text-blue-400 my-1">{f.formula}</div>
                        <div className="text-[11px] text-slate-400 font-sans">{f.explanation}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Common Mistakes */}
              {exp.theory.commonMistakes && (
                <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-300 dark:border-amber-800/60 text-xs">
                  <div className="flex items-center space-x-1.5 font-bold text-amber-800 dark:text-amber-300 mb-2">
                    <AlertTriangle className="w-4 h-4 text-amber-600" />
                    <span>Common Student Exam Mistakes:</span>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-amber-900 dark:text-amber-200">
                    {exp.theory.commonMistakes.map((m, i) => (
                      <li key={i}>{m}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ALGORITHM TAB */}
        {activeTab === 'algorithm' && (
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">
              Step-by-Step Algorithm Execution Flow
            </h3>

            <div className="space-y-3">
              {exp.algorithmSteps.map((st, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-start space-x-3 text-xs"
                >
                  <span className="w-6 h-6 rounded-full bg-srm-blue text-white flex items-center justify-center font-bold shrink-0 font-mono text-[11px]">
                    {i + 1}
                  </span>
                  <span className="text-slate-700 dark:text-slate-300 leading-relaxed pt-0.5">
                    {st}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CODE TAB */}
        {activeTab === 'code' && (
          <CodePlayground experimentId={exp.id} />
        )}

        {/* QUIZ TAB */}
        {activeTab === 'quiz' && (
          <QuizCard questions={quizzes} />
        )}

        {/* VIVA TAB */}
        {activeTab === 'viva' && (
          <VivaCard questions={vivaQuestions} />
        )}
      </div>
    </div>
  );
};
