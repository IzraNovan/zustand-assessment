import { create } from 'zustand';

export const useReview = create(() => {
  return {
    reviewData: null,
    name: '',
    review: '',
    isSuccess: false,
    isError: false,
  };
});

export function setName(value) {
  useReview.setState({ name: value });
}

export function setReview(value) {
  useReview.setState({ review: value });
}

export function setIsSuccess(value) {
  useReview.setState({ isSuccess: value });
}

export function setIsError(value) {
  useReview.setState({ isError: value });
}

export function updateReviewData(value) {
  useReview.setState({ reviewData: value });
}
