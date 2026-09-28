import React, { useState, useEffect } from 'react';
import { 
  getStoredProgress, 
  markExperimentCompleted, 
  toggleBookmark, 
  saveProgress 
} from './services/storage';
import { StudentProgress } from './types';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Watermark } from './components/layout/Watermark';
import { CommandPalette } from './components/layout/CommandPalette';
import { HomePage } from './pages/HomePage';
import { LabCatalogPage } from './pages/LabCatalogPage';
import { ExperimentDetailPage } from './pages/ExperimentDetailPage';
import { PracticePage } from './pages/PracticePage';
import { ChallengesPage } from './pages/ChallengesPage';
import { TerminalPage } from './pages/TerminalPage';
import { ProgressPage } from './pages/ProgressPage';

export const App: React.FC = () => {
  const [progress, setProgress] = useState<StudentProgress>(getStoredProgress());
  const [activePage, setActivePage] = useState<string>('home');
  const [selectedExperimentId, setSelectedExperimentId] = useState<string>('exp-fcfs');
  const [moduleFilter, setModuleFilter] = useState<string>('all');
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState<boolean>(false);
  const [theme, setTheme] = useState<'dark' | 'light'>(progress.theme || 'dark');

  // Sync theme with document class
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  // Global Ctrl+K / Cmd+K listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsCommandPaletteOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleToggleTheme = () => {
    const nextTheme: 'dark' | 'light' = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    const updated: StudentProgress = { ...progress, theme: nextTheme };
    setProgress(updated);
    saveProgress(updated);
  };

  const handleSelectModule = (modId: string) => {
    setModuleFilter(modId);
    setActivePage('lab');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectExperiment = (expId: string) => {
    setSelectedExperimentId(expId);
    setActivePage('experiment');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGoBack = () => {
    if (activePage === 'experiment') {
      setActivePage('lab');
    } else if (activePage !== 'home') {
      setActivePage('home');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleMarkCompleted = (expId: string) => {
    const updated = markExperimentCompleted(expId, 50);
    setProgress(updated);
  };

  const handleToggleBookmark = (expId: string) => {
    const updated = toggleBookmark(expId);
    setProgress(updated);
  };

  const handleCompleteChallenge = (chalId: string, xpReward: number) => {
    const completed = new Set(progress.completedChallenges);
    completed.add(chalId);
    const updated: StudentProgress = {
      ...progress,
      completedChallenges: Array.from(completed),
      xp: progress.xp + xpReward
    };
    setProgress(updated);
    saveProgress(updated);
  };

  const handleResetProgress = () => {
    localStorage.removeItem('srmist_virtual_os_lab_progress_v1');
    const fresh = getStoredProgress();
    setProgress(fresh);
  };

  return (
    <div className="relative min-h-screen flex flex-col font-sans bg-slate-50 dark:bg-[#0a0d14] text-slate-900 dark:text-slate-100 transition-colors duration-200">
      
      {/* Universal SRMIST Watermark on Every Page */}
      <Watermark />

      {/* Navigation Bar - Full Width with Extreme Left & Extreme Right */}
      <Navbar
        activePage={activePage}
        setActivePage={page => {
          setActivePage(page);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        progress={progress}
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
        toggleTheme={handleToggleTheme}
        theme={theme}
      />

      {/* Main Page Content - Full Width to cover the whole page */}
      <main className="relative z-10 flex-1 w-full px-6 sm:px-10 lg:px-16 py-6">
        {activePage === 'home' && (
          <HomePage
            onNavigate={(page, filter) => {
              if (filter) setModuleFilter(filter);
              setActivePage(page);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onSelectModule={handleSelectModule}
            onSelectExperiment={handleSelectExperiment}
          />
        )}

        {activePage === 'lab' && (
          <LabCatalogPage
            onSelectExperiment={handleSelectExperiment}
            bookmarkedIds={progress.bookmarkedExperiments}
            onToggleBookmark={handleToggleBookmark}
            completedExperimentIds={progress.completedExperiments}
            onMarkCompleted={handleMarkCompleted}
            initialModuleFilter={moduleFilter}
            onBack={handleGoBack}
          />
        )}

        {activePage === 'experiment' && (
          <ExperimentDetailPage
            experimentId={selectedExperimentId}
            onBack={handleGoBack}
            isCompleted={progress.completedExperiments.includes(selectedExperimentId)}
            onMarkCompleted={handleMarkCompleted}
            isBookmarked={progress.bookmarkedExperiments.includes(selectedExperimentId)}
            onToggleBookmark={handleToggleBookmark}
          />
        )}

        {activePage === 'practice' && (
          <PracticePage onBack={handleGoBack} />
        )}

        {activePage === 'challenges' && (
          <ChallengesPage
            completedChallenges={progress.completedChallenges}
            onCompleteChallenge={handleCompleteChallenge}
            onBack={handleGoBack}
          />
        )}

        {activePage === 'terminal' && (
          <TerminalPage onBack={handleGoBack} />
        )}

        {activePage === 'progress' && (
          <ProgressPage
            progress={progress}
            onSelectExperiment={handleSelectExperiment}
            onResetProgress={handleResetProgress}
            onBack={handleGoBack}
          />
        )}
      </main>

      {/* Footer */}
      <Footer />

      {/* Global Command Palette */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onSelectExperiment={handleSelectExperiment}
        onSelectModule={handleSelectModule}
      />
    </div>
  );
};

export default App;
