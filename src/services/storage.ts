import { StudentProgress } from '../types';

const STORAGE_KEY = 'srmist_virtual_os_lab_progress_v1';

const defaultProgress: StudentProgress = {
  completedExperiments: ['exp-fcfs', 'exp-fifo-page'],
  bookmarkedExperiments: ['exp-rr', 'exp-bankers'],
  quizScores: {
    'exp-fcfs': 100,
    'exp-fifo-page': 80
  },
  completedChallenges: ['chal-rr-quantum'],
  xp: 350,
  badges: ['Scheduler', 'Paging Explorer'],
  streakDays: 3,
  lastVisitedExperiment: 'exp-fcfs',
  theme: 'dark'
};

export const getStoredProgress = (): StudentProgress => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultProgress));
      return defaultProgress;
    }
    return { ...defaultProgress, ...JSON.parse(raw) };
  } catch (e) {
    console.warn('localStorage not accessible, using default state', e);
    return defaultProgress;
  }
};

export const saveProgress = (progress: StudentProgress): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (e) {
    console.warn('Failed to save to localStorage', e);
  }
};

export const markExperimentCompleted = (expId: string, xpGained = 50): StudentProgress => {
  const current = getStoredProgress();
  const completed = new Set(current.completedExperiments);
  completed.add(expId);

  // Award badges based on completed experiments
  const badges = new Set(current.badges);
  if (completed.has('exp-fcfs') && completed.has('exp-rr')) {
    badges.add('Scheduler');
  }
  if (completed.has('exp-bankers')) {
    badges.add('Deadlock Detective');
  }
  if (completed.has('exp-first-fit') || completed.has('exp-best-fit')) {
    badges.add('Memory Master');
  }
  if (completed.has('exp-fifo-page') || completed.has('exp-lru-page')) {
    badges.add('Paging Explorer');
  }
  if (completed.has('exp-producer-consumer') || completed.has('exp-dining-phil')) {
    badges.add('Synchronization Pro');
  }
  if (completed.has('exp-disk-fcfs') || completed.has('exp-disk-scan')) {
    badges.add('Disk Master');
  }

  const updated: StudentProgress = {
    ...current,
    completedExperiments: Array.from(completed),
    badges: Array.from(badges),
    xp: current.xp + xpGained,
    lastVisitedExperiment: expId
  };

  saveProgress(updated);
  return updated;
};

export const toggleBookmark = (expId: string): StudentProgress => {
  const current = getStoredProgress();
  const bookmarks = new Set(current.bookmarkedExperiments);
  if (bookmarks.has(expId)) {
    bookmarks.delete(expId);
  } else {
    bookmarks.add(expId);
  }

  const updated = {
    ...current,
    bookmarkedExperiments: Array.from(bookmarks)
  };
  saveProgress(updated);
  return updated;
};

export const recordQuizScore = (expId: string, score: number): StudentProgress => {
  const current = getStoredProgress();
  const scores = { ...current.quizScores, [expId]: score };
  const updated = {
    ...current,
    quizScores: scores,
    xp: current.xp + score * 5
  };
  saveProgress(updated);
  return updated;
};
