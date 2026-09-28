import React, { useState, useEffect, useRef } from 'react';
import { Search, X, BookOpen, ArrowRight } from 'lucide-react';
import { EXPERIMENTS } from '../../data/experiments';
import { OS_MODULES } from '../../data/modules';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectExperiment: (expId: string) => void;
  onSelectModule: (modId: string) => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onSelectExperiment,
  onSelectModule
}) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setQuery('');
      setSelectedIndex(0);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const filteredExperiments = EXPERIMENTS.filter(e =>
    e.title.toLowerCase().includes(query.toLowerCase()) ||
    e.category.toLowerCase().includes(query.toLowerCase()) ||
    e.keyConcepts.some(k => k.toLowerCase().includes(query.toLowerCase()))
  );

  const filteredModules = OS_MODULES.filter(m =>
    m.title.toLowerCase().includes(query.toLowerCase()) ||
    m.shortDescription.toLowerCase().includes(query.toLowerCase())
  );

  const totalResults = filteredExperiments.length + filteredModules.length;

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => (prev + 1) % (totalResults || 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => (prev - 1 + (totalResults || 1)) % (totalResults || 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (selectedIndex < filteredExperiments.length) {
        onSelectExperiment(filteredExperiments[selectedIndex].id);
        onClose();
      } else {
        const modIdx = selectedIndex - filteredExperiments.length;
        if (filteredModules[modIdx]) {
          onSelectModule(filteredModules[modIdx].id);
          onClose();
        }
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto p-4 sm:p-6 md:p-20 bg-slate-900/60 backdrop-blur-sm flex items-start justify-center">
      <div 
        className="w-full max-w-xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden"
        onKeyDown={handleKeyDown}
      >
        {/* Input Bar */}
        <div className="relative flex items-center px-4 border-b border-slate-200 dark:border-slate-800">
          <Search className="w-5 h-5 text-slate-400 mr-3" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search experiments, algorithms, or concepts... (e.g. Round Robin, LRU, Banker's)"
            value={query}
            onChange={e => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            className="w-full py-4 text-sm bg-transparent text-slate-900 dark:text-white placeholder-slate-400 focus:outline-hidden"
          />
          <button 
            onClick={onClose}
            className="p-1 rounded-md text-slate-400 hover:text-slate-600 dark:hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-96 overflow-y-auto p-2 space-y-1">
          {totalResults === 0 ? (
            <div className="py-12 text-center text-sm text-slate-500 dark:text-slate-400">
              No matching experiments or modules found for "{query}".
            </div>
          ) : (
            <>
              {filteredExperiments.length > 0 && (
                <div>
                  <div className="px-3 py-1.5 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                    Experiments
                  </div>
                  {filteredExperiments.map((exp, idx) => {
                    const isSelected = idx === selectedIndex;
                    return (
                      <div
                        key={exp.id}
                        onClick={() => {
                          onSelectExperiment(exp.id);
                          onClose();
                        }}
                        className={`flex items-center justify-between px-3 py-2.5 rounded-xl cursor-pointer transition-colors ${
                          isSelected
                            ? 'bg-srm-blue text-white'
                            : 'hover:bg-slate-100 dark:hover:bg-slate-800/70 text-slate-700 dark:text-slate-200'
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <BookOpen className={`w-4 h-4 ${isSelected ? 'text-white' : 'text-srm-blue dark:text-blue-400'}`} />
                          <div>
                            <div className="text-sm font-medium">{exp.title}</div>
                            <div className={`text-xs ${isSelected ? 'text-blue-100' : 'text-slate-400'}`}>
                              {exp.category} • {exp.difficulty} • {exp.coMapping}
                            </div>
                          </div>
                        </div>
                        <ArrowRight className={`w-4 h-4 ${isSelected ? 'opacity-100' : 'opacity-0'}`} />
                      </div>
                    );
                  })}
                </div>
              )}

              {filteredModules.length > 0 && (
                <div className="mt-2">
                  <div className="px-3 py-1.5 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                    Modules
                  </div>
                  {filteredModules.map((mod, idx) => {
                    const globalIdx = filteredExperiments.length + idx;
                    const isSelected = globalIdx === selectedIndex;
                    return (
                      <div
                        key={mod.id}
                        onClick={() => {
                          onSelectModule(mod.id);
                          onClose();
                        }}
                        className={`flex items-center justify-between px-3 py-2 rounded-xl cursor-pointer transition-colors ${
                          isSelected
                            ? 'bg-srm-blue text-white'
                            : 'hover:bg-slate-100 dark:hover:bg-slate-800/70 text-slate-700 dark:text-slate-200'
                        }`}
                      >
                        <div className="text-sm font-medium">{mod.title}</div>
                        <span className={`text-xs ${isSelected ? 'text-blue-100' : 'text-slate-400'}`}>
                          {mod.experimentCount} Experiments
                        </span>
                      </div>
                    );
                  })}
                </div>
              )}
            </>
          )}
        </div>

        {/* Footer Hint */}
        <div className="px-4 py-2 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
          <span>Use <kbd className="px-1 py-0.5 rounded bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 font-mono">↑</kbd> <kbd className="px-1 py-0.5 rounded bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 font-mono">↓</kbd> to navigate</span>
          <span>Press <kbd className="px-1 py-0.5 rounded bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 font-mono">Enter</kbd> to select</span>
        </div>
      </div>
    </div>
  );
};
