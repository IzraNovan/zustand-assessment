import { NavLink } from 'react-router';
import { LayoutDashboard, User, BarChart3 } from 'lucide-react';
import { useProfile } from '@/stores/useProfile';

export default function Sidebar() {
  const email = useProfile((state) => state.email);

  return (
    <aside className='w-64 border-r border-border bg-card flex flex-col shrink-0'>
      {/* Brand */}
      <div className='h-16 border-b border-border flex items-center px-6 gap-2'>
        <div className='w-7 h-7 rounded bg-black text-white dark:bg-white dark:text-black flex items-center justify-center font-bold text-sm tracking-tight'>
          My
        </div>
        <div>
          <h1 className='text-sm font-bold tracking-tight'>Dashboard</h1>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className='flex-1 p-4 space-y-1.5'>
        <NavLink
          to='/'
          end
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
              isActive
                ? 'bg-black text-white dark:bg-white dark:text-black shadow-xs'
                : 'text-muted-foreground hover:text-foreground hover:bg-muted'
            }`
          }>
          <LayoutDashboard className='w-4 h-4' />
          <span>Dashboard</span>
        </NavLink>

        <NavLink
          to='/profile'
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
              isActive
                ? 'bg-black text-white dark:bg-white dark:text-black shadow-xs'
                : 'text-muted-foreground hover:text-foreground hover:bg-muted'
            }`
          }>
          <User className='w-4 h-4' />
          <span>Profile</span>
        </NavLink>

        <NavLink
          to='/stats'
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
              isActive
                ? 'bg-black text-white dark:bg-white dark:text-black shadow-xs'
                : 'text-muted-foreground hover:text-foreground hover:bg-muted'
            }`
          }>
          <BarChart3 className='w-4 h-4' />
          <span>Statistik</span>
        </NavLink>

        <footer className='text-xs absolute bottom-5 text-teal-600'>
          {email}
        </footer>
      </nav>
    </aside>
  );
}
