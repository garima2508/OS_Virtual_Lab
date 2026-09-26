import React, { useState } from 'react';
import { ChallengeInfo } from '../../types';
import { Trophy, HelpCircle, CheckCircle2, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ChallengeCardProps {
  challenge: ChallengeInfo;
  isCompleted: boolean;
  onComplete: (challengeId: string, xp: number) => void;
}

export const ChallengeCard: React.FC<ChallengeCardProps> = ({
  challenge,
  isCompleted,
  onComplete
}) => {
  const [showHint, setShowHint] = useState(false);

  const handleSolve = () => {
    if (isCompleted) return;
    confetti({ particleCount: 70, spread: 70, origin: { y: 0.7 } });
    onComplete(challenge.id, challenge.xpReward);
  };

  const diffColors = {
    Easy: 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border-emerald-300',
    Medium: 'bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border-amber-300',
    Hard: 'bg-purple-100 dark:bg-purple-950/60 text-purple-800 dark:text-purple-300 border-purple-300'
  };

  return (
    <div className={`p-5 rounded-2xl border transition-all ${
      isCompleted
        ? 'bg-emerald-50/40 dark:bg-emerald-950/20 border-emerald-300 dark:border-emerald-800'
        : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 shadow-xs'
    }`}>
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center space-x-2">
            <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase border ${diffColors[challenge.difficulty]}`}>
              {challenge.difficulty}
            </span>
            <span className="text-xs font-mono font-semibold text-amber-600 dark:text-amber-400">
              +{challenge.xpReward} XP
            </span>
          </div>
          <h4 className="text-sm font-bold text-slate-900 dark:text-white mt-1">
            {challenge.title}
          </h4>
        </div>

        {isCompleted && (
          <span className="flex items-center space-x-1 text-xs font-bold text-emerald-600 dark:text-emerald-400">
            <CheckCircle2 className="w-4 h-4" />
            <span>SOLVED</span>
          </span>
        )}
      </div>

      <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
        {challenge.description}
      </p>

      {/* Target Metric Badge */}
      <div className="mt-3 inline-flex items-center space-x-1.5 px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-mono">
        <span className="text-slate-500">Goal:</span>
        <span className="font-bold text-srm-blue dark:text-blue-400">
          {challenge.targetMetric} {challenge.targetValue}
        </span>
      </div>

      {showHint && (
        <div className="mt-3 p-3 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/60 text-xs text-amber-900 dark:text-amber-200">
          <strong>💡 Hint: </strong>
          {challenge.hint}
        </div>
      )}

      <div className="mt-4 flex items-center justify-between pt-3 border-t border-slate-100 dark:border-slate-800">
        <button
          onClick={() => setShowHint(!showHint)}
          className="text-xs font-semibold text-slate-500 hover:text-slate-800 dark:hover:text-slate-300 flex items-center space-x-1"
        >
          <HelpCircle className="w-3.5 h-3.5" />
          <span>{showHint ? 'Hide Hint' : 'Show Hint'}</span>
        </button>

        {!isCompleted ? (
          <button
            onClick={handleSolve}
            className="flex items-center space-x-1 px-3.5 py-1.5 rounded-lg bg-srm-blue hover:bg-blue-700 text-white text-xs font-bold transition-colors shadow-xs"
          >
            <span>Verify & Claim XP</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        ) : (
          <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400">
            ✓ XP Credited to Profile
          </span>
        )}
      </div>
    </div>
  );
};
