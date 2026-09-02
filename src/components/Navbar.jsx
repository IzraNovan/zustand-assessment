import { useProfile } from '@/stores/useProfile';
import { Input } from './ui/input';

function Navbar() {
  const username = useProfile((state) => state.username);
  const setUsername = useProfile((state) => state.setUsername);

  return (
    <nav className='flex shadow-sm justify-between items-center py-3 px-5 border-b bg-background transition-colors'>
      <div>
        <div className='flex items-center gap-2'>
          <h1 className='font-bold text-lg'>Review App</h1>
        </div>
        <p className='text-[11px] text-muted-foreground'>
          Halo, {username || 'Masukkan nama anda'}!
        </p>
      </div>

      <div className='w-64'>
        <Input
          type='text'
          placeholder='Masukkan username...'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
    </nav>
  );
}

export default Navbar;
