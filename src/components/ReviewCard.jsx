import { useProfile } from '@/stores/useProfile';
import { useReview } from '@/stores/useReview';

export function ReviewCard() {
  const username = useProfile((state) => state.username);
  const reviewData = useReview((state) => state.reviewData);

  return (
    <section className='border rounded-lg p-6 w-full max-w-150 transition-colors'>
      <div className='flex items-center justify-between'>
        <h1 className='font-bold text-lg'>Kartu Ulasan</h1>
      </div>

      <div className='flex flex-col gap-2 p-4 border rounded-lg mt-3 bg-muted/30'>
        {reviewData ? (
          <>
            <h2 className='font-semibold'>
              {reviewData.name || reviewData.nama}
            </h2>
            <p className='italic text-sm'>"{reviewData.review}"</p>
            <p className='text-xs text-muted-foreground mt-1'>
              Diulas oleh:{' '}
              <span className='font-medium text-foreground'>
                {username || 'Anonim'}
              </span>
            </p>
          </>
        ) : (
          <p className='text-sm text-muted-foreground italic'>
            Belum ada ulasan yang dikirim. Coba ketik pada form atau navbar!
          </p>
        )}
      </div>
    </section>
  );
}

export default ReviewCard;
