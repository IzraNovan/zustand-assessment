import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useProfile = create(
  persist(
    (set) => ({
      name: 'Alex Morgan',
      role: 'Senior Frontend Engineer',
      email: 'alex.morgan@example.com',
      bio: 'Passionate developer crafting clean code and modern web experiences.',
      avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Oliver&style=circle',
      accountStatus: 'Aktif',

      // Actions
      updateProfile: (updatedData) =>
        set((state) => ({
          ...state,
          ...updatedData,
        })),

      toggleStatus: () =>
        set((state) => ({
          accountStatus:
            state.accountStatus === 'Aktif' || state.accountStatus === 'Active'
              ? 'Nonaktif'
              : 'Aktif',
        })),
    }),
    {
      name: 'user-profile-storage',
    },
  ),
);
