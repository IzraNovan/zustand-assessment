import { create } from 'zustand';

export const useReview = create((set) => {
  return {
    reviewData: '',
    setReviewData: (newReviewData) => set({ reviewData: newReviewData }),
  };
});
