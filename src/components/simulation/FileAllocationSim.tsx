import React, { useState, useMemo } from 'react';
import { runFileAllocation, FileAllocStrategy } from '../../engines/fileAllocation';
import { FolderTree, FileCode, ArrowRight } from 'lucide-react';

const SAMPLE_FILES = [
  { name: 'fileA.txt', size: 4, color: '#3b82f6' },
  { name: 'fileB.dat', size: 6, color: '#10b981' },
  { name: 'fileC.bin', size: 5, color: '#f59e0b' },
  { name: 'fileD.log', size: 3, color: '#ec4899' }
];

export const FileAllocationSim: React.FC = () => {
  const [strategy, setStrategy] = useState<FileAllocStrategy>('Contiguous');

  const { disk, files, allocatedCount, errorLog } = useMemo(() => {
    return runFileAllocation(strategy, 32, SAMPLE_FILES);
  }, [strategy]);

  return (
    <div className="space-y-6">
      
      {/* Strategy Selector */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs">
        <div className="flex items-center space-x-2">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-1">
            Strategy:
          </span>
          {(['Contiguous', 'Linked', 'Indexed'] as FileAllocStrategy[]).map(st => (
            <button
              key={st}
              onClick={() => setStrategy(st)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                strategy === st
                  ? 'bg-srm-blue text-white shadow-xs'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
              }`}
            >
              {st}
            </button>
          ))}
        </div>

        <div className="text-xs font-mono text-slate-500">
          Allocated: <strong className="text-srm-blue dark:text-blue-400">{allocatedCount}</strong> / {SAMPLE_FILES.length} files
        </div>
      </div>

      {/* Disk Block Grid (32 Blocks) */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs">
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4 flex items-center space-x-1.5">
          <FolderTree className="w-4 h-4 text-srm-blue" />
          <span>Secondary Storage Disk Blocks (32 Blocks)</span>
        </h3>

        <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
          {disk.map(b => (
            <div
              key={b.id}
              style={{
                backgroundColor: b.color ? `${b.color}20` : undefined,
                borderColor: b.color || undefined
              }}
              className={`h-16 rounded-xl border p-1.5 flex flex-col justify-between font-mono text-[10px] transition-all ${
                b.file
                  ? 'border-2 shadow-xs'
                  : 'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-400'
              }`}
            >
              <div className="flex justify-between items-center text-slate-400">
                <span>#{b.id}</span>
                {b.isIndexBlock && (
                  <span className="px-1 py-0.2 rounded bg-purple-600 text-white text-[8px] font-bold">
                    INDEX
                  </span>
                )}
              </div>
              <div className="font-bold text-center truncate text-slate-800 dark:text-slate-200">
                {b.file ? b.file.split('.')[0] : 'FREE'}
              </div>
              <div className="text-[9px] text-right opacity-70">
                {b.nextBlock !== null && b.nextBlock !== undefined ? `→ #${b.nextBlock}` : ''}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Directory Table */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-xs">
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
          File System Directory Table
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full text-xs font-mono text-left">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-800 text-slate-400">
                <th className="pb-2">File Name</th>
                <th className="pb-2">Size (Blocks)</th>
                {strategy === 'Contiguous' && <th className="pb-2">Start Block</th>}
                {strategy === 'Linked' && <th className="pb-2">Start Block</th>}
                {strategy === 'Indexed' && <th className="pb-2">Index Block</th>}
                <th className="pb-2">Allocated Blocks</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60">
              {files.map(f => (
                <tr key={f.name}>
                  <td className="py-2.5 font-bold flex items-center space-x-1.5" style={{ color: f.color }}>
                    <FileCode className="w-3.5 h-3.5" />
                    <span>{f.name}</span>
                  </td>
                  <td className="py-2.5">{f.size}</td>
                  {strategy === 'Contiguous' && <td className="py-2.5">#{f.startBlock}</td>}
                  {strategy === 'Linked' && <td className="py-2.5">#{f.startBlock}</td>}
                  {strategy === 'Indexed' && (
                    <td className="py-2.5 font-bold text-purple-500">#{f.indexBlock}</td>
                  )}
                  <td className="py-2.5 text-slate-600 dark:text-slate-400">
                    {f.blocks?.map(b => `#${b}`).join(', ')}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
