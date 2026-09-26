import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, Maximize2, RotateCcw } from 'lucide-react';

interface TerminalLine {
  type: 'input' | 'output' | 'system';
  text: string;
}

export const Terminal: React.FC = () => {
  const [history, setHistory] = useState<TerminalLine[]>([
    { type: 'system', text: 'SRMIST Virtual UNIX Subsystem [Version 2.4.0-srmist-cse]' },
    { type: 'system', text: 'Type "help" to view supported lab commands or "demo" for process simulation.\n' }
  ]);
  const [input, setInput] = useState('');
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim();
    if (!trimmed) return;

    const parts = trimmed.split(' ');
    const cmd = parts[0].toLowerCase();
    const args = parts.slice(1);

    const newHistory: TerminalLine[] = [...history, { type: 'input', text: trimmed }];

    switch (cmd) {
      case 'help':
        newHistory.push({
          type: 'output',
          text: `Supported SRMIST Lab Commands:
  ls          List files and directories in current workspace
  cat <file>  Display file contents
  ps          Show active virtual processes
  top         Display real-time CPU & memory utilization
  fork        Simulate UNIX fork() system call creating child process
  chmod <opt> Change file permissions
  uname -a    Print system and kernel release information
  clear       Clear terminal screen
  help        Show this help message`
        });
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      case 'ls':
        newHistory.push({
          type: 'output',
          text: `fcfs_scheduler.c   round_robin.c   bankers_algorithm.c\nnotes.txt          process_table.csv`
        });
        break;

      case 'cat':
        if (args.length === 0) {
          newHistory.push({ type: 'output', text: 'Usage: cat <filename>' });
        } else if (args[0] === 'notes.txt') {
          newHistory.push({
            type: 'output',
            text: 'SRMIST OS Lab Notes:\n- FCFS suffers from Convoy effect.\n- SJF is optimal for average waiting time.\n- LRU does not suffer from Belady anomaly.'
          });
        } else if (args[0] === 'fcfs_scheduler.c') {
          newHistory.push({
            type: 'output',
            text: '#include <stdio.h>\nint main() {\n    printf("SRMIST FCFS Initialized\\n");\n    return 0;\n}'
          });
        } else {
          newHistory.push({ type: 'output', text: `cat: ${args[0]}: No such file or directory` });
        }
        break;

      case 'ps':
        newHistory.push({
          type: 'output',
          text: `  PID TTY          TIME CMD
 1001 pts/0    00:00:01 bash
 1042 pts/0    00:00:03 cpu_scheduler
 1089 pts/0    00:00:00 ps`
        });
        break;

      case 'top':
        newHistory.push({
          type: 'output',
          text: `Tasks: 3 total, 1 running, 2 sleeping, 0 stopped, 0 zombie
%Cpu(s):  4.2 us,  1.8 sy,  0.0 ni, 94.0 id,  0.0 wa,  0.0 hi,  0.0 si
MiB Mem :   8192.0 total,   4120.4 free,   2480.2 used,   1591.4 buff/cache`
        });
        break;

      case 'fork':
        newHistory.push({
          type: 'output',
          text: `[Parent PID 1042]: calling fork()...\n[Child  PID 1043]: spawned successfully with PPID 1042.\n[Parent PID 1042]: wait(&status) returned child exit code 0.`
        });
        break;

      case 'chmod':
        if (args.length < 2) {
          newHistory.push({ type: 'output', text: 'Usage: chmod <mode> <file>' });
        } else {
          newHistory.push({
            type: 'output',
            text: `Permissions of "${args[1]}" changed to ${args[0]} (-rwxr-xr-x).`
          });
        }
        break;

      case 'uname':
        newHistory.push({
          type: 'output',
          text: 'Linux srmist-os-lab 6.5.0-virtual #1 SMP PREEMPT_DYNAMIC x86_64 GNU/Linux'
        });
        break;

      default:
        newHistory.push({
          type: 'output',
          text: `bash: ${cmd}: command not found. Type "help" for available commands.`
        });
    }

    setHistory(newHistory);
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(input);
    }
  };

  return (
    <div className="bg-[#0c1017] rounded-2xl border border-slate-800 shadow-2xl overflow-hidden font-mono text-xs">
      
      {/* Terminal Titlebar */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#161c28] border-b border-slate-800 text-slate-400">
        <div className="flex items-center space-x-2">
          <div className="flex space-x-1.5">
            <div className="w-3 h-3 rounded-full bg-rose-500/80" />
            <div className="w-3 h-3 rounded-full bg-amber-500/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          </div>
          <span className="text-xs font-semibold text-slate-300 ml-2 flex items-center">
            <TerminalIcon className="w-3.5 h-3.5 mr-1.5 text-srm-accent" />
            student@srmist-os: ~ (bash)
          </span>
        </div>

        <button
          onClick={() => setHistory([])}
          title="Clear screen"
          className="p-1 hover:text-white transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Terminal Output Area */}
      <div 
        className="p-4 h-80 sm:h-96 overflow-y-auto space-y-2 text-slate-200 cursor-text"
        onClick={() => inputRef.current?.focus()}
      >
        {history.map((line, idx) => (
          <div key={idx} className="leading-relaxed whitespace-pre-wrap">
            {line.type === 'input' && (
              <span className="text-slate-400">
                <span className="text-emerald-400 font-bold">student@srmist-os</span>:
                <span className="text-blue-400 font-bold">~</span>$ {line.text}
              </span>
            )}
            {line.type === 'output' && (
              <span className="text-slate-300">{line.text}</span>
            )}
            {line.type === 'system' && (
              <span className="text-amber-400/90">{line.text}</span>
            )}
          </div>
        ))}

        {/* Input Prompt */}
        <div className="flex items-center space-x-2 pt-1">
          <span className="text-slate-400 shrink-0">
            <span className="text-emerald-400 font-bold">student@srmist-os</span>:
            <span className="text-blue-400 font-bold">~</span>$
          </span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="w-full bg-transparent text-white focus:outline-hidden caret-srm-accent"
            autoFocus
          />
        </div>
        <div ref={bottomRef} />
      </div>
    </div>
  );
};
