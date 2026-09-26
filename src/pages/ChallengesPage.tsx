import React, { useState } from 'react';
import { LAB_CHALLENGES } from '../data/challenges';
import { ChallengeCard } from '../components/assessment/ChallengeCard';
import { BreadcrumbBar } from '../components/layout/BreadcrumbBar';
import { Trophy, Sparkles, Filter } from 'lucide-react';

interface ChallengesPageProps {
  completedChallenges: string[];
  onCompleteChallenge: (challengeId: string, xp: number) => void;
  onBack: () => void;
}

export const ChallengesPage: React.FC<ChallengesPageProps> = ({
  completedChallenges,
  onCompleteChallenge,
  onBack
}) => {
  const [filterDiff, setFilterDiff] = useState<string>('all');

  const filtered = LAB_CHALLENGES.filter(c => {
    return filterDiff === 'all' || c.difficulty.toLowerCase() === filterDiff.toLowerCase();
  });

  return (
    <div className="space-y-6 py-6 font-sans">
      
      {/* Universal Breadcrumb & Back Navigation */}
      <BreadcrumbBar
        onBack={onBack}
        backLabel="← Back to Home"
        breadcrumbs={[
          { label: 'Virtual Laboratories', onClick: onBack },
          { label: 'Interactive Challenges' }
        ]}
      />

      <div>
        <div className="flex items-center space-x-2 text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider">
          <Trophy className="w-4 h-4" />
          <span>Interactive Challenges</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-1">
          Operating Systems Lab Challenges
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 max-w-2xl">
          Apply your knowledge to solve real-world scheduling, memory management, and deadlock avoidance puzzles. Earn XP and unlock achievements!
        </p>
      </div>

      {/* Filter Bar */}
      <div className="flex items-center space-x-2 text-xs">
        <Filter className="w-3.5 h-3.5 text-slate-400" />
        <span className="text-slate-500 font-medium">Difficulty:</span>
        {['all', 'easy', 'medium', 'hard'].map(d => (
          <button
            key={d}
            onClick={() => setFilterDiff(d)}
            className={`px-3 py-1.5 rounded-lg capitalize font-semibold transition-colors cursor-pointer ${
              filterDiff === d
                ? 'bg-amber-500 text-white shadow-xs'
                : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800'
            }`}
          >
            {d}
          </button>
        ))}
      </div>

      {/* Challenges Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map(c => (
          <ChallengeCard
            key={c.id}
            challenge={c}
            isCompleted={completedChallenges.includes(c.id)}
            onComplete={onCompleteChallenge}
          />
        ))}
      </div>
    </div>
  );
};
