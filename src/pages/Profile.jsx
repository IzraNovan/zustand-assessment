import { Link } from 'react-router';
import { useProfile } from '@/stores/useProfile';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  Mail,
  Briefcase,
  Edit3,
  CheckCircle2,
  FolderKanban,
  Award,
} from 'lucide-react';

export default function Profile() {
  const name = useProfile((state) => state.name);
  const role = useProfile((state) => state.role);
  const email = useProfile((state) => state.email);
  const bio = useProfile((state) => state.bio);
  const avatar = useProfile((state) => state.avatar);
  const totalProjects = useProfile((state) => state.totalProjects);
  const completedTasks = useProfile((state) => state.completedTasks);
  const activityPoints = useProfile((state) => state.activityPoints);
  const accountStatus = useProfile((state) => state.accountStatus);

  const getInitials = (text) => {
    if (!text) return 'U';
    return text
      .split(' ')
      .map((part) => part[0])
      .slice(0, 2)
      .join('')
      .toUpperCase();
  };

  const isStatusActive =
    accountStatus === 'Aktif' || accountStatus === 'Active';

  return (
    <div className='space-y-4 max-w-3xl mx-auto'>
      {/* Page Header */}
      <div className='flex items-center justify-between'>
        <div>
          <h1 className='text-lg font-bold tracking-tight'>Detail Profil</h1>
          <p className='text-xs text-muted-foreground'>
            Informasi lengkap akun dan data personal Anda.
          </p>
        </div>
        <Link to='/profile/edit'>
          <Button className='gap-1.5 text-xs font-semibold bg-black text-white hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200'>
            <Edit3 className='w-3.5 h-3.5' />
            Edit Profil
          </Button>
        </Link>
      </div>

      {/* Main Profile Card View - Compact to prevent scroll */}
      <div className='border border-border rounded-xl bg-card overflow-hidden'>
        {/* Banner area */}
        <div className='h-20 bg-neutral-100 dark:bg-neutral-900 border-b border-border relative px-6 flex items-end'>
          <div className='absolute -bottom-7 flex items-end gap-4'>
            <Avatar className='size-16 rounded-xl border-4 border-card shadow-xs bg-muted'>
              <AvatarImage
                src={avatar}
                alt={name}
                className='rounded-xl'
              />
              <AvatarFallback className='rounded-xl bg-black text-white dark:bg-white dark:text-black text-base font-bold'>
                {getInitials(name)}
              </AvatarFallback>
            </Avatar>
          </div>
        </div>

        <div className='pt-10 p-6 space-y-4'>
          {/* Identity Header */}
          <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-2'>
            <div>
              <div className='flex items-center gap-2'>
                <h2 className='text-xl font-bold tracking-tight text-foreground'>
                  {name || 'Nama Belum Diisi'}
                </h2>
                {/* Status Badge: Hijau jika Aktif, Merah jika Nonaktif */}
                {isStatusActive ? (
                  <span className='inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 dark:bg-emerald-500/20 dark:text-emerald-400 dark:border-emerald-500/30'>
                    Aktif
                  </span>
                ) : (
                  <span className='inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-rose-500/10 text-rose-600 border border-rose-500/20 dark:bg-rose-500/20 dark:text-rose-400 dark:border-rose-500/30'>
                    <span className='size-1.5 rounded-full bg-rose-500' />
                    Nonaktif
                  </span>
                )}
              </div>
              <p className='text-xs text-muted-foreground font-medium flex items-center gap-1.5 mt-0.5'>
                {role || 'Role Belum Diisi'}
              </p>
            </div>
          </div>

          {/* Bio Section */}
          <div className='space-y-1 border-t border-border pt-3.5'>
            <h3 className='text-[11px] font-bold uppercase tracking-wider text-muted-foreground'>
              Tentang / Bio
            </h3>
            <p className='text-xs text-foreground/90 leading-relaxed bg-muted/40 p-3 rounded-lg border border-border'>
              {bio || 'Pengguna ini belum menambahkan bio deskripsi.'}
            </p>
          </div>

          {/* Details & Email */}
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 border-t border-border pt-3.5'>
            <div className='flex items-center gap-2.5 p-2.5 rounded-lg border border-border bg-card'>
              <Mail className='w-4 h-4 text-muted-foreground' />
              <div className='min-w-0'>
                <p className='text-[10px] font-semibold text-muted-foreground uppercase tracking-wider'>
                  Email
                </p>
                <p className='text-xs font-medium text-foreground truncate'>
                  {email || '-'}
                </p>
              </div>
            </div>

            <div className='flex items-center gap-2.5 p-2.5 rounded-lg border border-border bg-card'>
              <Briefcase className='w-4 h-4 text-muted-foreground' />
              <div className='min-w-0'>
                <p className='text-[10px] font-semibold text-muted-foreground uppercase tracking-wider'>
                  Role / Profesi
                </p>
                <p className='text-xs font-medium text-foreground truncate'>
                  {role || '-'}
                </p>
              </div>
            </div>
          </div>

          {/* Quick Metrics */}
          <div className='border-t border-border pt-3.5'>
            <h3 className='text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-2'>
              Statistik Akun
            </h3>
            <div className='grid grid-cols-3 gap-3 text-center'>
              <div className='p-2.5 border border-border rounded-lg bg-card'>
                <div className='flex items-center justify-center gap-1 text-muted-foreground text-[11px]'>
                  <FolderKanban className='w-3 h-3' />
                  <span>Proyek</span>
                </div>
                <p className='text-base font-bold text-foreground mt-0.5'>
                  {totalProjects}
                </p>
              </div>
              <div className='p-2.5 border border-border rounded-lg bg-card'>
                <div className='flex items-center justify-center gap-1 text-muted-foreground text-[11px]'>
                  <CheckCircle2 className='w-3 h-3' />
                  <span>Tugas</span>
                </div>
                <p className='text-base font-bold text-foreground mt-0.5'>
                  {completedTasks}
                </p>
              </div>
              <div className='p-2.5 border border-border rounded-lg bg-card'>
                <div className='flex items-center justify-center gap-1 text-muted-foreground text-[11px]'>
                  <Award className='w-3 h-3' />
                  <span>Poin</span>
                </div>
                <p className='text-base font-bold text-foreground mt-0.5'>
                  {activityPoints?.toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
