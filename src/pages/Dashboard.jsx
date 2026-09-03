import { Link } from 'react-router';
import { useProfile } from '@/stores/useProfile';
import { useStats } from '@/stores/useStats';
import { Button } from '@/components/ui/button';
import SummaryCard from '@/components/SummaryCard';

export default function Dashboard() {
  const name = useProfile((state) => state.name);
  const bio = useProfile((state) => state.bio);
  const accountStatus = useProfile((state) => state.accountStatus);

  const totalProjects = useStats((state) => state.totalProjects);
  const completedTasks = useStats((state) => state.completedTasks);
  const activityPoints = useStats((state) => state.activityPoints);

  const summaryCards = [
    {
      title: 'Total Proyek',
      value: totalProjects,
      description: 'Proyek yang sedang berjalan',
    },
    {
      title: 'Tugas Selesai',
      value: completedTasks,
      description: 'Terselesaikan bulan ini',
    },
    {
      title: 'Poin Aktivitas',
      value: activityPoints?.toLocaleString() || 0,
      description: 'Total poin akumulasi',
    },
    {
      title: 'Status Akun',
      value: accountStatus,
      description: 'Status ketersediaan Anda',
    },
  ];

  return (
    <div className='space-y-8'>
      {/* Dynamic Greeting & Bio */}
      <section className='border border-border rounded-xl p-6 bg-card'>
        <div className='flex flex-col md:flex-row md:items-center justify-between gap-4'>
          <div className='space-y-1.5'>
            <h1 className='text-2xl font-bold tracking-tight text-foreground'>
              Selamat datang kembali,{' '}
              <span className='text-teal-600'>{name || 'Pengguna'}</span>!
            </h1>
            <p className='text-sm text-teal-600 max-w-2xl leading-relaxed italic'>
              {bio || 'Belum ada bio singkat. Silakan atur pada menu profil.'}
            </p>
          </div>
        </div>
      </section>

      {/* 4 Summary Cards */}
      <section className='space-y-4'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
          {summaryCards.map((card, idx) => (
            <SummaryCard
              key={idx}
              title={card.title}
              value={card.value}
              description={card.description}
              icon={card.icon}
            />
          ))}
        </div>
      </section>

      {/* Quick Info & Navigation Box */}
      <section className='border border-border rounded-xl p-6 bg-card'>
        <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4'>
          <div className='space-y-1'>
            <h3 className='text-sm font-bold tracking-tight flex items-center gap-2'>
              Manajemen Profil Real-time
            </h3>
            <p className='text-xs text-muted-foreground'>
              Perubahan profil pada halaman Edit Profil akan langsung terupdate
              di seluruh layout tanpa perlu update
            </p>
          </div>
          <Link to='/profile/edit'>
            <Button className='text-xs font-semibold bg-black text-white hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200'>
              Edit Profil Sekarang
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
