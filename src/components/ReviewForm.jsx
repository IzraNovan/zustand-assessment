import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { Label } from './ui/label';
import {
  setIsError,
  setIsSuccess,
  setName,
  setReview,
  updateReviewData,
  useReview,
} from '@/stores/useReview';
import { useShallow } from 'zustand/shallow';

function ReviewForm() {
  const { name, review, isSuccess, isError } = useReview(
    useShallow((state) => ({
      name: state.name,
      review: state.review,
      isSuccess: state.isSuccess,
      isError: state.isError,
    })),
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!review || review.length <= 5) {
      setIsError(true);
      return;
    }

    setIsSuccess(true);
    setIsError(false);
    setName('');
    setReview('');
    updateReviewData({
      name: name,
      review: review,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='border rounded-lg p-6 w-full max-w-150 transition-colors'>
      <div className='flex items-center justify-between'>
        <h1 className='font-bold text-lg'>Formulir Ulasan Produk</h1>
      </div>

      {isSuccess && (
        <p className='text-green-500 text-sm mt-2 font-medium'>
          Review Berhasil Dikirim!
        </p>
      )}

      <div className='flex flex-col gap-4 mt-5'>
        <div>
          <Label>Nama Produk</Label>
          <Input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <Label>Komentar</Label>
          <Textarea
            value={review}
            onChange={(e) => setReview(e.target.value)}
          />
          {isError && (
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
