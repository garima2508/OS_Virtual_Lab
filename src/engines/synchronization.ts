export interface ProdConsState {
  buffer: (number | null)[];
  bufferSize: number;
  producerState: 'idle' | 'producing' | 'blocked';
  consumerState: 'idle' | 'consuming' | 'blocked';
  mutex: number; // 1 or 0
  emptySlots: number;
  fullSlots: number;
  history: string[];
}

export function createProdConsState(bufferSize = 5): ProdConsState {
  return {
    buffer: Array(bufferSize).fill(null),
    bufferSize,
    producerState: 'idle',
    consumerState: 'idle',
    mutex: 1,
    emptySlots: bufferSize,
    fullSlots: 0,
    history: ['Buffer initialized with capacity ' + bufferSize]
  };
}

export function produceItem(state: ProdConsState, itemVal: number): ProdConsState {
  if (state.emptySlots === 0) {
    return {
      ...state,
      producerState: 'blocked',
      history: [`Producer attempted to produce ${itemVal}, but BUFFER IS FULL (Blocked)!`, ...state.history.slice(0, 8)]
    };
  }

  const nextBuffer = [...state.buffer];
  const insertIndex = nextBuffer.indexOf(null);
  nextBuffer[insertIndex] = itemVal;

  return {
    ...state,
    buffer: nextBuffer,
    emptySlots: state.emptySlots - 1,
    fullSlots: state.fullSlots + 1,
    producerState: 'producing',
    mutex: 1,
    history: [`Producer inserted item ${itemVal} into slot ${insertIndex}.`, ...state.history.slice(0, 8)]
  };
}

export function consumeItem(state: ProdConsState): { nextState: ProdConsState; consumedItem: number | null } {
  if (state.fullSlots === 0) {
    return {
      nextState: {
        ...state,
        consumerState: 'blocked',
        history: ['Consumer attempted to read, but BUFFER IS EMPTY (Blocked)!', ...state.history.slice(0, 8)]
      },
      consumedItem: null
    };
  }

  const nextBuffer = [...state.buffer];
  // Find first filled slot
  let removeIndex = -1;
  for (let i = 0; i < nextBuffer.length; i++) {
    if (nextBuffer[i] !== null) {
      removeIndex = i;
      break;
    }
  }

  const item = nextBuffer[removeIndex];
  nextBuffer[removeIndex] = null;

  return {
    nextState: {
      ...state,
      buffer: nextBuffer,
      emptySlots: state.emptySlots + 1,
      fullSlots: state.fullSlots - 1,
      consumerState: 'consuming',
      mutex: 1,
      history: [`Consumer consumed item ${item} from slot ${removeIndex}.`, ...state.history.slice(0, 8)]
    },
    consumedItem: item
  };
}

export type PhilState = 'THINKING' | 'HUNGRY' | 'EATING';

export interface DiningPhilState {
  philosophers: PhilState[];
  forks: (number | null)[]; // fork[i] is null or philosopher id holding it
  deadlockMode: boolean;
  history: string[];
}

export function createDiningPhilState(): DiningPhilState {
  return {
    philosophers: ['THINKING', 'THINKING', 'THINKING', 'THINKING', 'THINKING'],
    forks: [null, null, null, null, null],
    deadlockMode: false,
    history: ['5 philosophers seated around table. All forks on table.']
  };
}

export function philosopherAction(
  state: DiningPhilState,
  philId: number,
  action: 'HUNGRY' | 'EAT' | 'THINK'
): DiningPhilState {
  const nextPhils = [...state.philosophers];
  const nextForks = [...state.forks];
  const leftFork = philId;
  const rightFork = (philId + 1) % 5;
  const history = [...state.history];

  if (action === 'HUNGRY') {
    nextPhils[philId] = 'HUNGRY';
    history.unshift(`Philosopher P${philId} is hungry and wants forks ${leftFork} and ${rightFork}.`);
  } else if (action === 'EAT') {
    if (state.deadlockMode) {
      // In deadlock mode, each hungry philosopher picks up left fork and waits forever
      if (nextForks[leftFork] === null) {
        nextForks[leftFork] = philId;
        history.unshift(`[Deadlock Mode] P${philId} acquired left Fork ${leftFork} and is waiting for Fork ${rightFork}.`);
      }
      // Check if all 5 are holding one fork = DEADLOCK
      const allHolding = nextForks.every(f => f !== null);
      if (allHolding) {
        history.unshift(`⚠️ DEADLOCK DETECTED! Every philosopher holds 1 fork and waits circular indefinitely.`);
      }
    } else {
      // Normal / Synchronized solution: pick both forks atomically if available
      if (nextForks[leftFork] === null && nextForks[rightFork] === null) {
        nextForks[leftFork] = philId;
        nextForks[rightFork] = philId;
        nextPhils[philId] = 'EATING';
        history.unshift(`Philosopher P${philId} acquired Forks ${leftFork} & ${rightFork} and is EATING 🍝.`);
      } else {
        history.unshift(`P${philId} cannot eat: Fork(s) currently held by neighbor.`);
      }
    }
  } else if (action === 'THINK') {
    if (nextForks[leftFork] === philId) nextForks[leftFork] = null;
    if (nextForks[rightFork] === philId) nextForks[rightFork] = null;
    nextPhils[philId] = 'THINKING';
    history.unshift(`Philosopher P${philId} finished eating, released forks, and returned to THINKING 💭.`);
  }

  return {
    ...state,
    philosophers: nextPhils,
    forks: nextForks,
    history: history.slice(0, 8)
  };
}
