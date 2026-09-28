export type ModuleId =
  | 'linux'
  | 'process'
  | 'cpu-scheduling'
  | 'synchronization'
  | 'deadlock'
  | 'memory'
  | 'virtual-memory'
  | 'file-systems'
  | 'disk-scheduling';

export interface ModuleInfo {
  id: ModuleId;
  title: string;
  shortDescription: string;
  iconName: string;
  experimentCount: number;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  coMapping: string;
  badgeId: string;
}

export interface ExperimentInfo {
  id: string;
  moduleId: ModuleId;
  title: string;
  category: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  estimatedTime: string;
  coMapping: string;
  objective: string;
  learningOutcomes: string[];
  prerequisites: string[];
  keyConcepts: string[];
  hasSimulation: boolean;
  hasCode: boolean;
  hasChallenge: boolean;
  theory: {
    quickSummary: string;
    definition: string;
    whyItMatters: string;
    howItWorks: string;
    formulas?: { name: string; formula: string; explanation: string }[];
    commonMistakes: string[];
    comparisonTable?: { headers: string[]; rows: string[][] };
  };
  algorithmSteps: string[];
}

export interface ProcessItem {
  id: string;
  pid: string;
  arrivalTime: number;
  burstTime: number;
  priority?: number;
  remainingTime?: number;
  color?: string;
}

export interface CPUSimStep {
  time: number;
  runningProcessId: string | null;
  readyQueue: string[];
  completedProcesses: string[];
  actionDescription: string;
}

export interface CPUMetrics {
  pid: string;
  completionTime: number;
  turnaroundTime: number;
  waitingTime: number;
  responseTime: number;
}

export interface CPUSimResult {
  timeline: { pid: string; start: number; end: number }[];
  steps: CPUSimStep[];
  processMetrics: Record<string, CPUMetrics>;
  avgWaitingTime: number;
  avgTurnaroundTime: number;
  avgResponseTime: number;
  contextSwitches: number;
}

export interface PageRepStep {
  stepIndex: number;
  page: number;
  frames: (number | null)[];
  isHit: boolean;
  evictedPage: number | null;
  explanation: string;
}

export interface PageRepResult {
  steps: PageRepStep[];
  totalHits: number;
  totalFaults: number;
  hitRatio: number;
  faultRatio: number;
  referenceString: number[];
  frameCount: number;
}

export interface BankersStep {
  stepIndex: number;
  currentWork: number[];
  processChecked: string;
  canAllocate: boolean;
  needVector: number[];
  newWork?: number[];
  safeSequenceSoFar: string[];
  explanation: string;
}

export interface BankersResult {
  isSafe: boolean;
  safeSequence: string[];
  steps: BankersStep[];
  needMatrix: number[][];
}

export interface MemBlock {
  id: string;
  size: number;
  allocatedProcess: string | null;
  allocatedSize?: number;
  internalFrag?: number;
}

export interface MemAllocResult {
  blocks: MemBlock[];
  unallocatedProcesses: { id: string; size: number }[];
  totalInternalFrag: number;
  totalExternalFrag: number;
  allocatedCount: number;
  steps: { action: string; process: string; blockId: string | null; explanation: string }[];
}

export interface DiskSimStep {
  stepIndex: number;
  fromTrack: number;
  toTrack: number;
  distance: number;
  explanation: string;
}

export interface DiskSimResult {
  sequence: number[];
  steps: DiskSimStep[];
  totalHeadMovement: number;
  initialHead: number;
  tracks: number[];
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  type: 'pre' | 'post';
}

export interface VivaQuestion {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface ChallengeInfo {
  id: string;
  moduleId: ModuleId;
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  description: string;
  hint: string;
  targetMetric: string;
  targetValue: number | string;
  xpReward: number;
}

export interface StudentProgress {
  completedExperiments: string[];
  bookmarkedExperiments: string[];
  quizScores: Record<string, number>;
  completedChallenges: string[];
  xp: number;
  badges: string[];
  streakDays: number;
  lastVisitedExperiment: string | null;
  theme: 'dark' | 'light';
}
