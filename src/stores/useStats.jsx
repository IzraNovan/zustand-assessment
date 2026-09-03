import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useStats = create(
  persist(
    (set) => ({
      totalProjects: 14,
      completedTasks: 89,
      activityPoints: 1250,

      updateStats: (updatedData) =>
        set((state) => ({
          ...state,
          ...updatedData,
        })),

      incrementTasks: () =>
        set((state) => ({ completedTasks: state.completedTasks + 1 })),

      incrementProjects: () =>
        set((state) => ({ totalProjects: state.totalProjects + 1 })),

      addPoints: (amount = 50) =>
        set((state) => ({ activityPoints: state.activityPoints + amount })),
    }),
    {
      name: 'user-stats-storage',
    },
  ),
);
