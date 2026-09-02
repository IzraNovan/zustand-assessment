import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useProfile = create(
  persist((set) => {
    return {
      username: '',
      setUsername: (newUsername) => set({ username: newUsername }),
    };
  }),
);
