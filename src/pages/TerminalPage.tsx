import React from 'react';
import { Terminal } from '../components/terminal/Terminal';
import { BreadcrumbBar } from '../components/layout/BreadcrumbBar';
import { Terminal as TerminalIcon, Command, CheckCircle2 } from 'lucide-react';

interface TerminalPageProps {
  onBack: () => void;
}

export const TerminalPage: React.FC<TerminalPageProps> = ({ onBack }) => {
  const commandsCheatSheet = [
    { cmd: 'help', desc: 'Display all supported virtual UNIX commands and syntax.' },
    { cmd: 'ls', desc: 'List workspace files (e.g. fcfs_scheduler.c, round_robin.c).' },
    { cmd: 'cat <file>', desc: 'View source code or lab notes (e.g. "cat notes.txt").' },
    { cmd: 'ps', desc: 'Inspect active simulated system processes and PIDs.' },
    { cmd: 'top', desc: 'View real-time simulated CPU and memory consumption.' },
    { cmd: 'fork', desc: 'Simulate the fork() system call creating child process and PPID.' },
    { cmd: 'chmod 755 <f>', desc: 'Modify file access mode permissions.' },
    { cmd: 'uname -a', desc: 'Print virtual Linux kernel architecture and version.' },
    { cmd: 'clear', desc: 'Clear the terminal output screen.' },
  ];

  return (
    <div className="space-y-6 py-6 font-sans">
      
      {/* Universal Breadcrumb & Back Navigation */}
      <BreadcrumbBar
        onBack={onBack}
        backLabel="← Back to Home"
        breadcrumbs={[
          { label: 'Virtual Laboratories', onClick: onBack },
          { label: 'Interactive Linux Terminal' }
        ]}
      />

      <div>
        <div className="flex items-center space-x-2 text-xs font-bold text-srm-blue dark:text-blue-400 uppercase tracking-wider">
          <TerminalIcon className="w-4 h-4" />
          <span>Interactive Linux Subsystem</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-1">
          Virtual UNIX Shell & Terminal
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 max-w-2xl">
          A secure in-browser simulated terminal environment for learning foundational Linux commands, process inspection, and system calls.
        </p>
      </div>

      {/* Terminal Visualizer */}
      <Terminal />

      {/* Cheat Sheet */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 flex items-center space-x-2">
          <Command className="w-4 h-4 text-srm-blue" />
          <span>Supported Terminal Commands Reference</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {commandsCheatSheet.map((item, i) => (
            <div
              key={i}
              className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs"
            >
              <div className="font-mono font-bold text-srm-blue dark:text-blue-400">
                $ {item.cmd}
              </div>
              <div className="text-slate-500 dark:text-slate-400 mt-1 text-[11px] leading-relaxed">
                {item.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
