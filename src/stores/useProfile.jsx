import { create } from 'zustand';

export const useProfile = create((set) => {
  return {
    username: '',
    setUsername: (newUsername) => set({ username: newUsername }),
  };
});
