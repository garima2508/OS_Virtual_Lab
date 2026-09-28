import React, { useState } from 'react';
import { Play, RotateCcw, Copy, Check, Terminal as TerminalIcon } from 'lucide-react';
import { STARTER_CODE } from '../../data/starterCode';

interface CodePlaygroundProps {
  experimentId?: string;
}

export const CodePlayground: React.FC<CodePlaygroundProps> = ({ experimentId = 'exp-fcfs' }) => {
  const initial = STARTER_CODE[experimentId] || STARTER_CODE['exp-fcfs'];
  const [code, setCode] = useState(initial.code);
  const [output, setOutput] = useState(initial.defaultOutput);
  const [isRunning, setIsRunning] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleRun = () => {
    setIsRunning(true);
    setOutput('Compiling and executing ' + initial.filename + ' using GCC 13.2.0...\n\n');
    setTimeout(() => {
      setOutput(initial.defaultOutput);
      setIsRunning(false);
    }, 450);
  };

  const handleReset = () => {
    setCode(initial.code);
    setOutput(initial.defaultOutput);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-[#0e131f] rounded-2xl border border-slate-800 shadow-xl overflow-hidden font-mono text-xs">
      
      {/* Editor Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#151c2d] border-b border-slate-800 text-slate-400">
        <div className="flex items-center space-x-2">
          <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
          <span className="font-semibold text-slate-200">{initial.filename}</span>
          <span className="text-[10px] text-slate-500 font-sans px-1.5 py-0.5 rounded bg-slate-800">
            C (GCC)
          </span>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={handleCopy}
            title="Copy Code"
            className="p-1.5 rounded hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
          </button>
          <button
            onClick={handleReset}
            title="Reset to Starter Code"
            className="p-1.5 rounded hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
          <button
            onClick={handleRun}
            disabled={isRunning}
            className="flex items-center space-x-1.5 px-3 py-1 rounded-lg bg-srm-blue hover:bg-blue-600 text-white font-semibold transition-colors shadow-xs"
          >
            <Play className="w-3.5 h-3.5 fill-white" />
            <span>{isRunning ? 'Running...' : 'Run Code'}</span>
          </button>
        </div>
      </div>

      {/* Code Textarea */}
      <div className="p-4 bg-[#0e131f]">
        <textarea
          value={code}
          onChange={e => setCode(e.target.value)}
          spellCheck={false}
          rows={16}
          className="w-full bg-transparent text-slate-200 font-mono text-xs leading-relaxed focus:outline-hidden resize-y"
        />
      </div>

      {/* Output Panel */}
      <div className="border-t border-slate-800 bg-[#090d15] p-4">
        <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2 flex items-center space-x-1.5">
          <TerminalIcon className="w-3.5 h-3.5 text-srm-blue" />
          <span>Execution Output (stdout)</span>
        </div>
        <pre className="text-slate-300 text-[11px] leading-relaxed whitespace-pre-wrap font-mono max-h-48 overflow-y-auto">
          {output}
        </pre>
      </div>
    </div>
  );
};
