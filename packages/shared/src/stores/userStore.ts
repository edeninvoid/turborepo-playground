import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface UserState {
  username: string;
  setUsername: (name: string) => void;
}

export const useUserStore = create<UserState>()(
  devtools(
    set => ({
      username: '',
      setUsername: name => set(state => ({ username: name }), false, 'username/set'),
    }),
    { name: 'userStore' },
  ),
);

interface CounterState {
  count: number;
  increment: () => void;
  decrement: () => void;
}

export const useCounterStore = create<CounterState>()(
  devtools(
    set => ({
      count: 0,
      increment: () => set(state => ({ count: state.count + 1 }), false, 'counter/increase'),
      decrement: () => set(state => ({ count: state.count - 1 }), false, 'counter/decrease'),
    }),
    { name: 'counterStore' },
  ),
);
