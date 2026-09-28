import React from 'react';
import { 
  Sparkles, 
  Sun, 
  Moon, 
  Search, 
  Home, 
  FlaskConical, 
  BarChart3, 
  Terminal, 
  Trophy, 
  User, 
  Award,
  BookOpen
} from 'lucide-react';
import { StudentProgress } from '../../types';
import { EXPERIMENTS } from '../../data/experiments';

interface NavbarProps {
  activePage: string;
  setActivePage: (page: string) => void;
  progress: StudentProgress;
  onOpenCommandPalette: () => void;
  toggleTheme: () => void;
  theme: 'dark' | 'light';
}

export const Navbar: React.FC<NavbarProps> = ({
  activePage,
  setActivePage,
  progress,
  onOpenCommandPalette,
  toggleTheme,
  theme
}) => {
  const totalExperiments = EXPERIMENTS.length;
  const completedCount = progress.completedExperiments.length;
  const progressPercent = Math.round((completedCount / totalExperiments) * 100);

  const navLinks = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'lab', label: 'All Labs', icon: FlaskConical, badge: totalExperiments.toString() },
    { id: 'practice', label: 'Compare', icon: BarChart3 },
    { id: 'terminal', label: 'Terminal', icon: Terminal },
    { id: 'challenges', label: 'Challenges', icon: Trophy },
  ];

  return (
    <header className="sticky top-0 z-40 w-full shadow-sm transition-colors duration-200">
      
      {/* Top Thin Bar - Full Width with Extreme Left & Extreme Right */}
      <div className="w-full bg-[#092244] text-white text-xs font-medium py-2 px-6 sm:px-10 lg:px-16 border-b border-blue-950 flex items-center justify-between">
        <div className="flex items-center space-x-3 font-semibold tracking-wide">
          <span className="text-[#f8a51d] font-bold text-xs sm:text-sm">SRM UNIVERSITY</span>
          <span className="text-blue-300/40">|</span>
          <span className="text-blue-100 hidden sm:inline text-xs sm:text-sm">
            Department of Computer Science & Engineering • School of Computing
          </span>
        </div>

        <div className="flex items-center space-x-4">
          <span className="text-blue-200/80 text-xs hidden md:inline font-mono">
            Kattankulathur, Chennai - 603203
          </span>
          <span className="text-blue-300/40 hidden md:inline">|</span>
          <span className="text-blue-200/90 text-xs hidden lg:inline font-mono">
            Academic Year 2025–26 (Semester IV)
          </span>
          <div className="flex items-center space-x-2">
            <span className="px-2.5 py-1 rounded text-[11px] font-black bg-[#f8a51d] text-slate-950 uppercase tracking-wider shadow-xs">
              NAAC A++ GRADE
            </span>
            <span className="px-2.5 py-1 rounded text-[11px] font-black bg-blue-600 text-white uppercase tracking-wider shadow-xs hidden sm:inline">
              NIRF #14 ENGG
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar - Full Width with Extreme Left & Extreme Right */}
      <div className="w-full bg-white dark:bg-[#0c121e] border-b border-slate-200 dark:border-slate-800 px-6 sm:px-10 lg:px-16">
        <div className="w-full flex items-center justify-between h-24">
          
          {/* EXTREME LEFT: University Logo & Portal Branding */}
          <div 
            onClick={() => setActivePage('home')}
            className="flex items-center space-x-4 cursor-pointer select-none group shrink-0"
          >
            <img 
              src="/college-logo.webp" 
              alt="SRM Logo" 
              className="h-14 sm:h-16 w-auto object-contain transition-transform group-hover:scale-105"
            />
            <div className="flex flex-col">
              <div className="flex items-center space-x-2.5">
                <span className="font-serif font-black text-2xl sm:text-3xl text-[#0c4da2] dark:text-blue-400 tracking-tight">
                  SRM
                </span>
                <span className="px-2.5 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-[#0c4da2] text-white shadow-xs">
                  VIRTUAL LAB
                </span>
              </div>
              <span className="text-xs sm:text-sm font-serif font-bold uppercase text-slate-700 dark:text-slate-300 tracking-wider">
                INSTITUTE OF SCIENCE & TECHNOLOGY
              </span>
              <span className="text-[10px] text-slate-400 dark:text-slate-500 font-mono">
                (Deemed to be University under section 3 of UGC Act 1956)
              </span>
            </div>
          </div>

          {/* EXTREME RIGHT: Comprehensive Navigation Links & Utility Controls */}
          <div className="flex items-center space-x-3 lg:space-x-5">
            
            {/* Direct Navigation Links with Icons & Badges */}
            <nav className="hidden xl:flex items-center space-x-1.5">
              {navLinks.map(link => {
                const Icon = link.icon;
                const isActive = activePage === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => setActivePage(link.id)}
                    className={`flex items-center space-x-2 px-3.5 py-2 rounded-xl text-sm font-bold transition-all cursor-pointer ${
                      isActive
                        ? 'bg-blue-50 dark:bg-blue-950/80 text-[#0c4da2] dark:text-blue-400 border border-blue-200 dark:border-blue-900 shadow-2xs'
                        : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{link.label}</span>
                    {link.badge && (
                      <span className="px-1.5 py-0.5 rounded-full text-[10px] font-mono bg-blue-100 dark:bg-blue-900 text-[#0c4da2] dark:text-blue-300 font-bold">
                        {link.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Live Student Progress Mini-Meter */}
            <div 
              onClick={() => setActivePage('progress')}
              className="hidden lg:flex items-center space-x-3 bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 px-3.5 py-2 rounded-xl cursor-pointer hover:border-srm-blue transition-colors group"
              title="Click to view full Student Dashboard"
            >
              <div className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 flex items-center justify-center font-bold text-xs">
                <Award className="w-4 h-4" />
              </div>
              <div className="flex flex-col text-left">
                <div className="flex items-center justify-between space-x-2 text-[11px] font-bold text-slate-700 dark:text-slate-300">
                  <span>Progress:</span>
                  <span className="text-[#0c4da2] dark:text-blue-400 font-mono">{progressPercent}%</span>
                </div>
                <div className="w-20 bg-slate-200 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden mt-1">
                  <div 
                    className="bg-[#0c4da2] dark:bg-blue-500 h-full rounded-full transition-all duration-300"
                    style={{ width: `${Math.max(progressPercent, 4)}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Search (Ctrl+K) Button */}
            <button
              onClick={onOpenCommandPalette}
              className="hidden sm:flex items-center space-x-2.5 px-4 py-2.5 text-sm text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-srm-blue transition-colors cursor-pointer"
            >
              <Search className="w-4 h-4" />
              <span className="font-semibold">Search Labs</span>
              <kbd className="px-2 py-0.5 text-xs font-mono bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-md font-bold shadow-2xs">
                Ctrl+K
              </kbd>
            </button>

            {/* Student Login Link */}
            <button
              onClick={() => setActivePage('progress')}
              className={`flex items-center space-x-1.5 px-3.5 py-2 rounded-xl text-sm font-bold transition-colors cursor-pointer ${
                activePage === 'progress'
                  ? 'text-[#0c4da2] dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60'
                  : 'text-slate-700 dark:text-slate-300 hover:text-[#0c4da2]'
              }`}
            >
              <User className="w-4 h-4" />
              <span>Student Portal</span>
            </button>

            {/* Enter Virtual Lab Primary Action Button */}
            <button
              onClick={() => setActivePage('lab')}
              className="flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-[#0c4da2] hover:bg-blue-800 text-white font-extrabold text-sm shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Enter Virtual Lab</span>
              <span className="text-base">🧪</span>
            </button>

            {/* Dark/Light Mode Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2.5 rounded-xl text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 border border-transparent hover:border-slate-200 dark:hover:border-slate-700 transition-colors cursor-pointer"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-amber-400" />
              ) : (
                <Moon className="w-5 h-5 text-slate-700" />
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
