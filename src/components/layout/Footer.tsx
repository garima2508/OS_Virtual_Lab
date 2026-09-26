import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 bg-white dark:bg-[#080b11] border-t border-slate-200 dark:border-slate-800/80 pt-12 pb-8 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Col 1: University Identity */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center space-x-3">
              <img 
                src="/college-logo.webp" 
                alt="SRMIST Crest" 
                className="h-10 w-auto object-contain"
              />
              <div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                  SRMIST
                </h3>
                <p className="text-xs text-srm-blue dark:text-blue-400 font-semibold italic">
                  Learn. Leap. Lead.
                </p>
              </div>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Virtual Operating Systems Laboratory designed for B.Tech Computer Science & Engineering students to simulate, experiment, and master fundamental OS concepts.
            </p>
          </div>

          {/* Col 2: Course Outcomes */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-slate-200 mb-3">
              Course Outcomes (COs)
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-400">
              <li><strong className="text-srm-blue dark:text-blue-400">CO1:</strong> Linux environment & system calls</li>
              <li><strong className="text-srm-blue dark:text-blue-400">CO2:</strong> Process scheduling & synchronization</li>
              <li><strong className="text-srm-blue dark:text-blue-400">CO3:</strong> Deadlock prevention & avoidance</li>
              <li><strong className="text-srm-blue dark:text-blue-400">CO4:</strong> Memory management & virtual memory</li>
              <li><strong className="text-srm-blue dark:text-blue-400">CO5:</strong> File systems & disk scheduling</li>
            </ul>
          </div>

          {/* Col 3: Core Simulators */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-slate-200 mb-3">
              Core Simulators
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-400">
              <li>• CPU Scheduling (FCFS, SJF, RR)</li>
              <li>• Banker’s Deadlock Avoidance</li>
              <li>• Page Replacement (FIFO, LRU, Optimal)</li>
              <li>• Dynamic Memory Allocation (Best/First Fit)</li>
              <li>• Disk Arm Trajectory (SSTF, SCAN)</li>
            </ul>
          </div>

          {/* Col 4: Department & Accreditation */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-slate-200 mb-3">
              Department & Campus
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Department of Computer Science & Engineering<br />
              School of Computing<br />
              SRM Institute of Science and Technology<br />
              Kattankulathur, Chengalpattu District, Tamil Nadu - 603203
            </p>
            <div className="mt-3 inline-block text-[11px] font-medium text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-800 rounded px-2 py-1 bg-slate-50 dark:bg-slate-900">
              NAAC A++ Grade • Category-I University
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200 dark:border-slate-800 pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 dark:text-slate-400">
          <p>© {new Date().getFullYear()} SRM Institute of Science and Technology. All Rights Reserved.</p>
          <p className="mt-2 sm:mt-0">Virtual OS Lab • B.Tech CSE Practical Assessment Platform</p>
        </div>
      </div>
    </footer>
  );
};
