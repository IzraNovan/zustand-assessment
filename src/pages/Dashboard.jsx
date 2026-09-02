import { Link } from 'react-router';
import { useProfile } from '@/stores/useProfile';
import { Button } from '@/components/ui/button';
import SummaryCard from '@/components/SummaryCard';
import {
  FolderKanban,
  CheckCircle2,
  Award,
  Activity,
  ArrowRight,
} from 'lucide-react';

export default function Dashboard() {
  const name = useProfile((state) => state.name);
  const bio = useProfile((state) => state.bio);
  const totalProjects = useProfile((state) => state.totalProjects);
  const completedTasks = useProfile((state) => state.completedTasks);
  const activityPoints = useProfile((state) => state.activityPoints);
  const accountStatus = useProfile((state) => state.accountStatus);

  const summaryCards = [
    {
      title: 'Total Proyek',
      value: totalProjects,
      description: 'Proyek yang sedang berjalan',
      icon: FolderKanban,
    },
    {
      title: 'Tugas Selesai',
      value: completedTasks,
      description: 'Terselesaikan bulan ini',
      icon: CheckCircle2,
    },
    {
      title: 'Poin Aktivitas',
      value: activityPoints?.toLocaleString() || 0,
      description: 'Total poin akumulasi',
      icon: Award,
    },
    {
      title: 'Status Akun',
      value: accountStatus,
      description: 'Status ketersediaan Anda',
      icon: Activity,
    },
  ];

  return (
    <div className='space-y-8'>
      {/* Dynamic Greeting & Bio */}
      <section className='border border-border rounded-xl p-6 bg-card'>
        <div className='flex flex-col md:flex-row md:items-center justify-between gap-4'>
          <div className='space-y-1.5'>
            <h1 className='text-2xl font-bold tracking-tight text-foreground'>
              Selamat datang kembali, {name || 'Pengguna'}!
            </h1>
            <p className='text-sm text-muted-foreground max-w-2xl leading-relaxed'>
              {bio || 'Belum ada bio singkat. Silakan atur pada menu profil.'}
            </p>
          </div>

          <div className='shrink-0'>
            <Link to='/profile'>
              <Button
                variant='outline'
                className='gap-2 text-xs font-semibold'>
                Lihat Profil
                <ArrowRight className='w-3.5 h-3.5' />
              </Button>
            </Link>
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
