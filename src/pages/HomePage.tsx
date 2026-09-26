import React from 'react';
import { OSCore3D } from '../components/3d/OSCore3D';
import { OS_MODULES } from '../data/modules';
import { 
  ArrowRight, 
  Cpu, 
  Sparkles, 
  BookOpen, 
  CheckCircle2, 
  Layers, 
  Activity,
  Award,
  ShieldCheck,
  Building2,
  GraduationCap,
  Terminal,
  Clock,
  ExternalLink
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string, filter?: string) => void;
  onSelectModule: (modId: string) => void;
  onSelectExperiment: (expId: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onSelectModule,
  onSelectExperiment
}) => {
  const stats = [
    { value: '9', label: 'Curriculum Modules' },
    { value: '25+', label: 'Active Experiments' },
    { value: '100%', label: 'Deterministic Grading' },
    { value: 'CO1—CO5', label: 'Curriculum Alignment' },
  ];

  const universityAccreditations = [
    {
      title: 'NAAC A++ Grade',
      subtitle: 'Highest accreditation grade awarded, valid for 7 years (2024–2031)',
      badge: 'Accreditation',
      icon: Award
    },
    {
      title: 'NIRF #14 in Engineering',
      subtitle: 'National Institutional Ranking Framework (2025/2026), #11 in Universities',
      badge: 'NIRF Ranking',
      icon: GraduationCap
    },
    {
      title: 'Category-I University',
      subtitle: 'Awarded highest autonomy status by University Grants Commission (UGC)',
      badge: 'Autonomy',
      icon: ShieldCheck
    },
    {
      title: 'ABET & IET Accredited',
      subtitle: 'Computing and Engineering programs accredited by ABET (USA) and IET (UK)',
      badge: 'Global Standards',
      icon: Building2
    }
  ];

  const courseOutcomes = [
    {
      code: 'CO1',
      title: 'UNIX Commands & System Calls',
      desc: 'Master Linux shell commands, permissions (chmod), shell scripting, and core process system calls (fork, wait, exec).'
    },
    {
      code: 'CO2',
      title: 'CPU Scheduling & Multithreading',
      desc: 'Analyze and implement FCFS, SJF, SRTF, Priority, and Round Robin scheduling algorithms with Gantt chart generation.'
    },
    {
      code: 'CO3',
      title: 'Synchronization & Deadlocks',
      desc: "Resolve race conditions using semaphores (Producer-Consumer, Dining Philosophers) and simulate Banker's Algorithm."
    },
    {
      code: 'CO4',
      title: 'Memory Management & Paging',
      desc: 'Simulate contiguous placement (First/Best/Worst Fit) and virtual memory page replacement (FIFO, LRU, Optimal).'
    },
    {
      code: 'CO5',
      title: 'File Systems & Disk Scheduling',
      desc: 'Evaluate file allocation methods and optimize secondary storage head trajectories (FCFS, SSTF, SCAN, C-SCAN).'
    }
  ];

  return (
    <div className="w-full space-y-24 py-12 sm:py-16 font-sans">
      
      {/* 1. MINIMALIST HERO SECTION (Full width wide presentation) */}
      <section className="relative text-center max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Subtle Watermark Centered Behind Hero */}
        <div 
          aria-hidden="true"
          className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10 select-none"
        >
          <img
            src="/college-logo.webp"
            alt="Watermark"
            className="w-[500px] sm:w-[650px] h-auto object-contain opacity-[0.035] dark:opacity-[0.03]"
          />
        </div>

        {/* Official Portal Pill Badge */}
        <div className="inline-flex items-center space-x-2.5 px-5 py-2 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200/80 dark:border-blue-800/60 text-[#0c4da2] dark:text-blue-300 text-xs sm:text-sm font-bold mb-8 shadow-xs">
          <span className="w-2.5 h-2.5 rounded-full bg-[#0c4da2] dark:bg-blue-400" />
          <span>SRM Institute of Science and Technology • School of Computing</span>
        </div>

        {/* Clean, High-Contrast Typography */}
        <h1 className="text-5xl sm:text-7xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.12]">
          Hands-On Engineering<br />
          <span className="text-[#0c4da2] dark:text-blue-400">Virtual Laboratories</span>
        </h1>

        {/* Professional, Academic Subtitle */}
        <p className="mt-8 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
          Empowering B.Tech Computer Science & Engineering students to master Operating Systems concepts with interactive visual workbenches, seeded parameters, live C code execution, and deterministic continuous evaluation.
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => onSelectExperiment('exp-fcfs')}
            className="px-8 py-4 rounded-2xl bg-[#0c4da2] hover:bg-blue-800 text-white font-bold text-sm sm:text-base shadow-md hover:shadow-lg transition-all flex items-center space-x-2.5 cursor-pointer transform hover:-translate-y-0.5"
          >
            <span>Launch Interactive Workbench</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => onNavigate('lab')}
            className="px-8 py-4 rounded-2xl bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold text-sm sm:text-base border border-slate-200 dark:border-slate-700 shadow-sm transition-all flex items-center space-x-2 cursor-pointer"
          >
            <span>Browse 9 Active Labs (25+ Experiments)</span>
            <span>📚</span>
          </button>
        </div>

        {/* Metrics Row */}
        <div className="mt-20 pt-12 border-t border-slate-200/80 dark:border-slate-800/80">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((st, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
                  {st.value}
                </div>
                <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-bold">
                  {st.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. INTERACTIVE 3D OS WORKBENCH SHOWCASE (Expanded) */}
      <section className="w-full">
        <div className="w-full bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-12 border border-slate-200/80 dark:border-slate-800 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-5 space-y-5 text-left">
              <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0c4da2] dark:text-blue-400">
                Core System Architecture
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white leading-snug">
                Interactive 3D Operating System Core
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                Observe the central processor dispatching processes, managing memory partitions, resolving deadlocks, and scheduling disk heads in real time. Click any orbiting satellite node to jump directly to its simulation.
              </p>
              
              <div className="pt-2 flex flex-wrap gap-2.5 text-xs sm:text-sm font-mono text-slate-600 dark:text-slate-300">
                <span className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold">
                  • 360° Raycasting
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold">
                  • Real-Time Data Streams
                </span>
              </div>
            </div>

            <div className="lg:col-span-7 bg-slate-50 dark:bg-slate-950/60 rounded-3xl p-3 border border-slate-200 dark:border-slate-800 shadow-inner">
              <OSCore3D onSelectModule={onSelectModule} />
            </div>
          </div>
        </div>
      </section>

      {/* 3. ACTIVE LABORATORY MODULES (Full Width Grid) */}
      <section className="w-full space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-slate-200 dark:border-slate-800 pb-5">
          <div>
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0c4da2] dark:text-blue-400">
              B.Tech CSE Core Curriculum
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-1">
              Active Engineering Laboratories
            </h2>
          </div>
          <button
            onClick={() => onNavigate('lab')}
            className="text-sm sm:text-base font-bold text-[#0c4da2] dark:text-blue-400 hover:underline flex items-center space-x-1.5 cursor-pointer"
          >
            <span>View all 9 modules (25+ Labs)</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
          {OS_MODULES.map(mod => (
            <div
              key={mod.id}
              onClick={() => onSelectModule(mod.id)}
              className="group cursor-pointer bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-7 border border-slate-200 dark:border-slate-800 shadow-2xs hover:border-[#0c4da2] dark:hover:border-blue-500 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-[#0c4da2] dark:text-blue-400 flex items-center justify-center font-bold text-sm">
                    {mod.coMapping.split(',')[0]}
                  </div>
                  <span className="px-2.5 py-1 rounded text-xs font-bold uppercase bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                    {mod.difficulty}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-[#0c4da2] dark:group-hover:text-blue-400 transition-colors">
                  {mod.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                  {mod.shortDescription}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs sm:text-sm text-slate-400">
                <span className="font-mono font-semibold">{mod.experimentCount} Experiments</span>
                <span className="font-bold text-[#0c4da2] dark:text-blue-400 flex items-center space-x-1 group-hover:translate-x-1 transition-transform">
                  <span>Enter Lab</span>
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. SRMIST INSTITUTIONAL EXCELLENCE & ACCREDITATION (Full Width) */}
      <section className="w-full space-y-8">
        <div className="w-full bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-12 border border-slate-200 dark:border-slate-800 shadow-sm space-y-10">
          
          {/* Header */}
          <div className="space-y-3 border-b border-slate-100 dark:border-slate-800 pb-8">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-lg bg-[#f8a51d]/10 text-amber-600 dark:text-amber-400 text-xs sm:text-sm font-bold uppercase tracking-wider">
              <span>★ Academic Credentials & Institutional Stature</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
              SRM Institute of Science and Technology (SRMIST)
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-4xl leading-relaxed">
              Located on a sprawling 250+ acre campus in Kattankulathur, Chennai, SRMIST is recognized among India's premier multi-disciplinary universities, hosting over 50,000 students and state-of-the-art supercomputing and systems research facilities.
            </p>
          </div>

          {/* 4 Accreditation Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {universityAccreditations.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div 
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 space-y-4 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="w-11 h-11 rounded-2xl bg-blue-50 dark:bg-blue-950/80 text-[#0c4da2] dark:text-blue-400 flex items-center justify-center">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        {item.badge}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mt-4">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* School of Computing & Course Outcomes Framework */}
          <div className="pt-6 border-t border-slate-100 dark:border-slate-800 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                  B.Tech CSE Operating Systems Course Outcomes (CO1 — CO5)
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                  Every experiment in this virtual lab is strictly mapped to SRMIST departmental curriculum outcomes.
                </p>
              </div>

              <button
                onClick={() => onNavigate('lab')}
                className="text-sm font-bold text-[#0c4da2] dark:text-blue-400 hover:underline flex items-center space-x-1.5 shrink-0 cursor-pointer"
              >
                <span>Explore Mapped Labs</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 pt-2">
              {courseOutcomes.map((co, i) => (
                <div 
                  key={i}
                  className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-2"
                >
                  <div className="flex items-center space-x-2">
                    <span className="px-2.5 py-1 rounded-md text-xs font-mono font-bold bg-[#0c4da2] text-white">
                      {co.code}
                    </span>
                    <span className="text-sm font-bold text-slate-800 dark:text-slate-200 truncate">
                      {co.title}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    {co.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
