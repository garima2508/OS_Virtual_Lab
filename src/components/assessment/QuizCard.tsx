import React, { useState } from 'react';
import { QuizQuestion } from '../../types';
import { CheckCircle2, XCircle, HelpCircle, Trophy } from 'lucide-react';
import confetti from 'canvas-confetti';

interface QuizCardProps {
  questions: QuizQuestion[];
  onComplete?: (score: number) => void;
}

export const QuizCard: React.FC<QuizCardProps> = ({ questions, onComplete }) => {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSelect = (questionId: string, optionIdx: number) => {
    if (submitted) return;
    setSelectedAnswers(prev => ({ ...prev, [questionId]: optionIdx }));
  };

  const calculateScore = () => {
    let score = 0;
    questions.forEach(q => {
      if (selectedAnswers[q.id] === q.correctAnswer) {
        score++;
      }
    });
    return score;
  };

  const handleSubmit = () => {
    setSubmitted(true);
    const score = calculateScore();
    const percent = Math.round((score / questions.length) * 100);
    if (percent >= 70) {
      confetti({ particleCount: 60, spread: 60, origin: { y: 0.7 } });
    }
    if (onComplete) {
      onComplete(percent);
    }
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setSubmitted(false);
  };

  if (questions.length === 0) {
    return (
      <div className="p-8 text-center text-xs text-slate-400 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
        No quiz questions available for this experiment.
      </div>
    );
  }

  const score = calculateScore();
  const allAnswered = questions.every(q => selectedAnswers[q.id] !== undefined);

  return (
    <div className="space-y-6">
      
      {/* Quiz Header */}
      <div className="flex items-center justify-between p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs">
        <div>
          <h3 className="text-sm font-bold text-slate-900 dark:text-white">
            Pre-Test & Post-Test Assessment
          </h3>
          <p className="text-xs text-slate-500">
            Answer the following multiple choice questions to verify your conceptual understanding.
          </p>
        </div>

        {submitted && (
          <div className="flex items-center space-x-2 px-3 py-1.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800 font-mono text-xs font-bold text-amber-800 dark:text-amber-300">
            <Trophy className="w-4 h-4 text-amber-500" />
            <span>Score: {score} / {questions.length} ({Math.round((score / questions.length) * 100)}%)</span>
          </div>
        )}
      </div>

      {/* Questions List */}
      <div className="space-y-4">
        {questions.map((q, idx) => {
          const selected = selectedAnswers[q.id];
          const isCorrect = selected === q.correctAnswer;

          return (
            <div
              key={q.id}
              className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-xs space-y-3"
            >
              <div className="flex items-start justify-between">
                <span className="font-semibold text-sm text-slate-900 dark:text-slate-100">
                  {idx + 1}. {q.question}
                </span>
                <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500">
                  {q.type.toUpperCase()}-TEST
                </span>
              </div>

              {/* Options */}
              <div className="space-y-2">
                {q.options.map((opt, optIdx) => {
                  const isThisSelected = selected === optIdx;
                  let optStyle = 'border-slate-200 dark:border-slate-800 hover:border-srm-blue';

                  if (submitted) {
                    if (optIdx === q.correctAnswer) {
                      optStyle = 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-800 dark:text-emerald-300 font-semibold';
                    } else if (isThisSelected) {
                      optStyle = 'border-rose-500 bg-rose-50 dark:bg-rose-950/30 text-rose-800 dark:text-rose-300';
                    } else {
                      optStyle = 'opacity-50 border-slate-200 dark:border-slate-800';
                    }
                  } else if (isThisSelected) {
                    optStyle = 'border-srm-blue bg-blue-50 dark:bg-blue-950/30 text-srm-blue dark:text-blue-300 font-semibold';
                  }

                  return (
                    <div
                      key={optIdx}
                      onClick={() => handleSelect(q.id, optIdx)}
                      className={`p-3 rounded-xl border text-xs cursor-pointer transition-all flex items-center justify-between ${optStyle}`}
                    >
                      <span>{opt}</span>
                      {submitted && optIdx === q.correctAnswer && (
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      )}
                      {submitted && isThisSelected && optIdx !== q.correctAnswer && (
                        <XCircle className="w-4 h-4 text-rose-500 shrink-0" />
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Explanation upon submit */}
              {submitted && (
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 flex items-start space-x-2">
                  <HelpCircle className="w-4 h-4 text-srm-blue shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-800 dark:text-slate-200">Explanation: </strong>
                    {q.explanation}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Action Footer */}
      <div className="flex justify-end space-x-3">
        {submitted ? (
          <button
            onClick={handleReset}
            className="px-4 py-2 text-xs font-semibold rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 transition-colors"
          >
            Retake Quiz
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            disabled={!allAnswered}
            className="px-5 py-2 text-xs font-bold rounded-xl bg-srm-blue text-white hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors shadow-xs"
          >
            Submit Quiz
          </button>
        )}
      </div>
    </div>
  );
};
