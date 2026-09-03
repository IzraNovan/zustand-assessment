import { Link } from 'react-router';
import { useProfile } from '@/stores/useProfile';
import { Avatar, AvatarImage } from '@/components/ui/avatar';

function Navbar() {
  const name = useProfile((state) => state.name);
  const role = useProfile((state) => state.role);
  const avatar = useProfile((state) => state.avatar);

  return (
    <header className='h-16 border-b border-border bg-card/80 backdrop-blur-sm px-8 flex items-center justify-end sticky top-0 z-10'>
      <div className='flex items-center gap-3'>
        <div className=' hidden sm:flex flex-col text-right gap-0.5'>
          <p className='text-xs font-bold text-teal-600'>
            {name || 'Nama Pengguna'}
          </p>
          <span className='inline-flex items-center text-[10px] text-teal-600 font-mono'>
            {role || 'Member'}
          </span>
        </div>

        <Link to='/profile'>
          <Avatar className='size-9 border border-border hover:ring-2 hover:ring-black dark:hover:ring-white transition-all cursor-pointer'>
            <AvatarImage
              src={avatar}
              alt={name}
            />
          </Avatar>
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
