import { Link } from 'react-router';
import { useProfile } from '@/stores/useProfile';
import { useStats } from '@/stores/useStats';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

export default function Profile() {
  const {
    name,
    role,
    email,
    bio,
    avatar,
    accountStatus,
  } = useProfile();

  const {
    totalProjects,
    completedTasks,
    activityPoints,
  } = useStats();

  const isActive = ['Aktif', 'Active'].includes(accountStatus);

  const stats = [
    { label: 'Proyek', value: totalProjects },
    { label: 'Tugas', value: completedTasks },
    { label: 'Poin', value: activityPoints?.toLocaleString() },
  ];

  // Helper kelas Tailwind yang sering berulang agar tidak ditulis panjang
  const boxClass = 'p-2.5 rounded-lg border border-border bg-card';
  const labelClass =
    'text-[10px] font-semibold text-muted-foreground uppercase tracking-wider';

  return (
    <div className='space-y-4 max-w-3xl mx-auto'>
      {/* Header */}
      <div className='flex items-center justify-between'>
        <div>
          <h1 className='text-lg font-bold'>Detail Profil</h1>
          <p className='text-xs text-muted-foreground'>
            Informasi lengkap akun dan data personal Anda.
          </p>
        </div>
        <Link to='/profile/edit'>
          <Button
            size='sm'
            className='font-semibold'>
            Edit Profil
          </Button>
        </Link>
      </div>

      {/* Main Card */}
      <div className='border border-border rounded-xl bg-card overflow-hidden'>
        {/* Banner */}
        <div className='h-20 bg-muted border-b border-border relative px-6 flex items-end'>
          <div className='absolute -bottom-7'>
            <Avatar className='size-16 rounded-xl border-4 border-card shadow-xs'>
              <AvatarImage
                src={avatar}
                alt={name}
                className='rounded-xl'
              />
            </Avatar>
          </div>
        </div>

        <div className='pt-10 p-6 space-y-4'>
          {/* Identity */}
          <div>
            <div className='flex items-center gap-2'>
              <h2 className='text-xl text-teal-600 font-bold'>
                {name || 'Nama Belum Diisi'}
              </h2>
              <span
                className={`px-2.5 py-0.5 rounded-full text-[10px] font-semibold border ${
                  isActive
                    ? 'bg-red-600/10 text-red-600 border-red-600/20'
                    : 'bg-rose-500/10 text-rose-600 border-rose-500/20'
                }`}>
                {isActive ? 'Aktif' : 'Nonaktif'}
              </span>
            </div>
            <p className='text-xs text-teal-600 mt-0.5'>
              {role || 'Role Belum Diisi'}
            </p>
          </div>

          {/* Bio */}
          <div className='border-t border-border pt-3.5 space-y-1'>
            <p className={labelClass}>Tentang / Bio</p>
            <p className='text-xs text-teal-600 bg-muted/40 p-3 rounded-lg border border-border'>
              {bio || 'Pengguna ini belum menambahkan bio deskripsi.'}
            </p>
          </div>

          {/* Details (Email & Role) */}
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 border-t border-border pt-3.5'>
            {[
              { label: 'Email', value: email },
              { label: 'Role / Profesi', value: role },
            ].map((item, idx) => (
              <div
                key={idx}
                className={boxClass}>
                <p className={labelClass}>{item.label}</p>
                <p className='text-xs text-teal-600 font-medium truncate mt-0.5'>
                  {item.value || '-'}
                </p>
              </div>
            ))}
          </div>

          {/* Metrics */}
          <div className='border-t border-border pt-3.5'>
            <p className={`${labelClass} mb-2`}>Statistik Akun</p>
            <div className='grid grid-cols-3 gap-3 text-center'>
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className={boxClass}>
                  <p className={labelClass}>{stat.label}</p>
                  <p className='text-base text-red-600 font-bold mt-0.5'>
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
