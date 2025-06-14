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
      setUsername: name => set({ username: name }),
    }),
    { name: 'UserStore' },
  ),
);
