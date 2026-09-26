import React, { useState } from 'react';
import { VivaQuestion } from '../../types';
import { HelpCircle, Eye, EyeOff } from 'lucide-react';

interface VivaCardProps {
  questions: VivaQuestion[];
}

export const VivaCard: React.FC<VivaCardProps> = ({ questions }) => {
  const [revealed, setRevealed] = useState<Record<string, boolean>>({});

  const toggleReveal = (id: string) => {
    setRevealed(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="space-y-4">
      <div className="p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs">
        <h3 className="text-sm font-bold text-slate-900 dark:text-white">
          Viva Voce Examination Questions
        </h3>
        <p className="text-xs text-slate-500">
          Essential oral viva questions commonly asked by external examiners during practical lab evaluations.
        </p>
      </div>

      <div className="space-y-3">
        {questions.map((q, idx) => {
          const isRevealed = !!revealed[q.id];

          return (
            <div
              key={q.id}
              className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-xs space-y-3"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-2">
                  <HelpCircle className="w-4 h-4 text-srm-blue dark:text-blue-400 shrink-0 mt-0.5" />
                  <span className="font-semibold text-sm text-slate-900 dark:text-slate-100">
                    Q{idx + 1}: {q.question}
                  </span>
                </div>
                <button
                  onClick={() => toggleReveal(q.id)}
                  className="flex items-center space-x-1 px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors shrink-0 ml-2"
                >
                  {isRevealed ? (
                    <>
                      <EyeOff className="w-3.5 h-3.5" />
                      <span>Hide Answer</span>
                    </>
                  ) : (
                    <>
                      <Eye className="w-3.5 h-3.5" />
                      <span>Reveal Answer</span>
                    </>
                  )}
                </button>
              </div>

              {isRevealed && (
                <div className="p-4 rounded-xl bg-blue-50/50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900 text-xs leading-relaxed text-slate-700 dark:text-slate-300 font-sans whitespace-pre-wrap animate-fadeIn">
                  <strong className="text-slate-900 dark:text-white">Sample Model Answer: </strong>
                  {q.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
