import { useContext } from 'react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { ReviewContext } from '@/context/ReviewContext';
import { Button } from './ui/button';
import { Label } from './ui/label';
import { useReview } from '@/stores/useReview';

function ReviewForm() {
  const { state, dispatch } = useContext(ReviewContext);
  const setReviewData = useReview((state) => state.setReviewData);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!state?.review || state.review.length <= 5) {
      dispatch({ type: 'ERROR' });
      return;
    }

    dispatch({ type: 'SUCCESS' });
    setReviewData({
      name: state.name,
      review: state.review,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='border rounded-lg p-6 w-full max-w-150 transition-colors'>
      <div className='flex items-center justify-between'>
        <h1 className='font-bold text-lg'>Formulir Ulasan Produk</h1>
      </div>

      {state.isSuccess && (
        <p className='text-green-500 text-sm mt-2 font-medium'>
          Review Berhasil Dikirim!
        </p>
      )}

      <div className='flex flex-col gap-4 mt-5'>
        <div>
          <Label>Nama Produk</Label>
          <Input
            type='text'
            value={state.name}
            onChange={(e) =>
              dispatch({
                type: 'SET_FIELD',
                field: 'name',
                value: e.target.value,
              })
            }
          />
        </div>

        <div>
          <Label>Komentar</Label>
          <Textarea
            value={state.review}
            onChange={(e) =>
              dispatch({
                type: 'SET_FIELD',
                field: 'review',
                value: e.target.value,
              })
            }
          />
          {state.isError && (
            <p className='text-red-500 text-sm mt-2'>
              Komentar harus lebih dari 5 karakter
            </p>
          )}
        </div>

        <Button type='submit'>Kirim</Button>
      </div>
    </form>
  );
}

export default ReviewForm;
