import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useProfile = create(
  persist(
    (set) => ({
      name: 'Alex Morgan',
      role: 'Senior Frontend Engineer',
      email: 'alex.morgan@example.com',
      bio: 'Passionate developer crafting clean code and modern web experiences.',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=256&auto=format&fit=crop',

      // Summary metrics
      totalProjects: 14,
      completedTasks: 89,
      activityPoints: 1250,
      accountStatus: 'Aktif',

      // Actions
      updateProfile: (updatedData) =>
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

      toggleStatus: () =>
        set((state) => ({
          accountStatus: state.accountStatus === 'Aktif' || state.accountStatus === 'Active' ? 'Nonaktif' : 'Aktif',
        })),
    }),
    {
      name: 'user-profile-storage',
    },
  ),
);
