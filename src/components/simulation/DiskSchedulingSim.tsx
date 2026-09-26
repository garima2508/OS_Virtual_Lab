import React, { useState, useMemo } from 'react';
import { runDiskScheduling, DiskAlgorithm } from '../../engines/diskScheduling';
import { MetricCard } from '../common/MetricCard';
import { Disc, Dices, ArrowRight, ArrowLeft } from 'lucide-react';

const INITIAL_REQUESTS = [98, 183, 37, 122, 14, 124, 65, 67];
const INITIAL_HEAD = 53;

export const DiskSchedulingSim: React.FC = () => {
  const [requests, setRequests] = useState<number[]>(INITIAL_REQUESTS);
  const [head, setHead] = useState<number>(INITIAL_HEAD);
  const [algorithm, setAlgorithm] = useState<DiskAlgorithm>('FCFS');
  const [direction, setDirection] = useState<'UP' | 'DOWN'>('UP');

  const simResult = useMemo(() => {
    return runDiskScheduling(requests, head, algorithm, direction);
  }, [requests, head, algorithm, direction]);

  const handleRandomize = () => {
    const count = 8;
    const rand = Array.from({ length: count }, () => Math.floor(Math.random() * 190) + 5);
    setRequests(rand);
    setHead(Math.floor(Math.random() * 150) + 20);
  };

  return (
    <div className="space-y-6">
      
      {/* Algorithm & Head Controls */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-1">
            Algorithm:
          </span>
          {(['FCFS', 'SSTF', 'SCAN', 'C-SCAN', 'LOOK', 'C-LOOK'] as DiskAlgorithm[]).map(algo => (
            <button
              key={algo}
              onClick={() => setAlgorithm(algo)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                algorithm === algo
                  ? 'bg-srm-blue text-white shadow-xs'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
              }`}
            >
              {algo}
            </button>
          ))}
        </div>

        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-1.5 text-xs font-semibold text-slate-600 dark:text-slate-300">
            <span>Initial Head:</span>
            <input
              type="number"
              min="0"
              max="199"
              value={head}
              onChange={e => setHead(Math.min(199, Math.max(0, Number(e.target.value) || 0)))}
              className="w-14 px-2 py-1 font-mono font-bold text-center bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg"
            />
          </div>

          {(algorithm === 'SCAN' || algorithm === 'C-SCAN' || algorithm === 'LOOK' || algorithm === 'C-LOOK') && (
            <div className="flex items-center space-x-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-lg text-xs">
              <button
                onClick={() => setDirection('UP')}
                className={`px-2 py-1 rounded flex items-center space-x-1 font-semibold ${
                  direction === 'UP' ? 'bg-srm-blue text-white' : 'text-slate-500'
                }`}
              >
                <ArrowRight className="w-3 h-3" />
                <span>Up (199)</span>
              </button>
              <button
                onClick={() => setDirection('DOWN')}
                className={`px-2 py-1 rounded flex items-center space-x-1 font-semibold ${
                  direction === 'DOWN' ? 'bg-srm-blue text-white' : 'text-slate-500'
                }`}
              >
                <ArrowLeft className="w-3 h-3" />
                <span>Down (0)</span>
              </button>
            </div>
          )}

          <button
            onClick={handleRandomize}
            className="flex items-center space-x-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 rounded-lg hover:bg-slate-200"
          >
            <Dices className="w-3.5 h-3.5 text-amber-500" />
            <span>Random Tracks</span>
          </button>
        </div>
      </div>

      {/* Disk Cylinder Track 0-199 Visualization */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center space-x-1.5">
            <Disc className="w-4 h-4 text-srm-blue" />
            <span>Disk Platter Track Coordinates (Cylinders 0 to 199)</span>
          </h3>
          <span className="text-xs font-mono text-srm-blue dark:text-blue-400 font-bold">
            Total Head Movement: {simResult.totalHeadMovement} Cylinders
          </span>
        </div>

        {/* Cylinder Track Bar */}
        <div className="relative w-full h-14 bg-slate-100 dark:bg-slate-950 rounded-2xl border border-slate-300 dark:border-slate-800 p-2 flex items-center shadow-inner my-4">
          {/* Track 0 and 199 boundaries */}
          <div className="absolute left-2 text-[10px] font-mono text-slate-400">0</div>
          <div className="absolute right-2 text-[10px] font-mono text-slate-400">199</div>

          {/* Initial Head Marker */}
          <div
            style={{ left: `${(head / 199) * 94 + 3}%` }}
            className="absolute top-0 bottom-0 w-1 bg-amber-500 z-10 flex flex-col items-center"
            title={`Initial Head Position: ${head}`}
          >
            <span className="text-[9px] font-bold font-mono px-1 py-0.2 rounded bg-amber-500 text-white -mt-4">
              Head {head}
            </span>
          </div>

          {/* Requested Track Markers */}
          {requests.map((trk, i) => (
            <div
              key={i}
              style={{ left: `${(trk / 199) * 94 + 3}%` }}
              className="absolute w-3 h-3 rounded-full bg-srm-blue dark:bg-blue-400 -translate-x-1/2 cursor-pointer transition-transform hover:scale-125"
              title={`Track ${trk}`}
            />
          ))}
        </div>

        {/* Seek Path Order */}
        <div className="mt-6">
          <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-2">
            Service Sequence Trajectory:
          </div>
          <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
            {simResult.sequence.map((cyl, idx) => (
              <React.Fragment key={idx}>
                <span className={`px-2.5 py-1 rounded-lg font-bold ${
                  idx === 0
                    ? 'bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-300 border border-amber-300'
                    : 'bg-blue-50 text-blue-900 dark:bg-blue-950/60 dark:text-blue-200 border border-blue-200 dark:border-blue-900'
                }`}>
                  {cyl}
                </span>
                {idx < simResult.sequence.length - 1 && (
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <MetricCard
          label="Total Head Movement"
          value={simResult.totalHeadMovement}
          unit="cylinders"
          variant="amber"
          hint="Sum of physical arm seek travel"
        />
        <MetricCard
          label="Average Seek Distance"
          value={(simResult.totalHeadMovement / (simResult.sequence.length - 1 || 1)).toFixed(1)}
          unit="cyl/seek"
          variant="blue"
          hint="Per-request arm movement"
        />
        <MetricCard
          label="Requests Serviced"
          value={requests.length}
          unit="requests"
          variant="emerald"
          hint="All pending I/O tracks handled"
        />
      </div>
    </div>
  );
};
