import { Link, useLocation } from 'react-router';
import { useProfile } from '@/stores/useProfile';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ShieldCheck } from 'lucide-react';

export default function Navbar() {
  const name = useProfile((state) => state.name);
  const role = useProfile((state) => state.role);
  const avatar = useProfile((state) => state.avatar);
  const location = useLocation();

  const getPageTitle = () => {
    if (location.pathname === '/') return 'Dashboard Overview';
    if (location.pathname === '/profile') return 'Profil Pengguna';
    if (location.pathname === '/profile/edit') return 'Edit Profil';
    if (location.pathname === '/stats') return 'Data Statistik Akun';
    return 'Dashboard';
  };

  const getInitials = (text) => {
    if (!text) return 'U';
    return text
      .split(' ')
      .map((part) => part[0])
      .slice(0, 2)
      .join('')
      .toUpperCase();
  };

  return (
    <header className='h-16 border-b border-border bg-card/80 backdrop-blur-sm px-8 flex items-center justify-between sticky top-0 z-10'>
      <div className='flex items-center gap-3'>
        <div className='h-4 w-1 bg-black dark:bg-white rounded-full' />
        <span className='font-semibold text-sm tracking-tight'>
          {getPageTitle()}
        </span>
      </div>

      {/* Right Section: Realtime Avatar & Name */}
      <div className='flex items-center gap-3'>
        <div className='text-right hidden sm:block'>
          <p className='text-xs font-bold leading-tight text-foreground'>
            {name || 'Nama Pengguna'}
          </p>
          <span className='inline-flex items-center gap-1 text-[10px] text-muted-foreground font-mono'>
            <ShieldCheck className='w-3 h-3' />
            {role || 'Member'}
          </span>
        </div>

        <Link to='/profile'>
          <Avatar className='size-9 border border-border hover:ring-2 hover:ring-black dark:hover:ring-white transition-all cursor-pointer'>
            <AvatarImage
              src={avatar}
              alt={name}
            />
            <AvatarFallback className='bg-black text-white dark:bg-white dark:text-black font-semibold text-xs'>
              {getInitials(name)}
            </AvatarFallback>
          </Avatar>
        </Link>
      </div>
    </header>
  );
}
