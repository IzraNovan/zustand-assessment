import { Outlet } from 'react-router';
import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';

export default function AppLayout() {
  return (
    <div className='flex min-h-screen bg-background text-foreground font-sans antialiased'>
      {/* Sidebar */}
      <Sidebar />

      {/* Main Layout Area */}
      <div className='flex-1 flex flex-col min-w-0'>
        {/* Top Navbar */}
        <Navbar />

        {/* Content View */}
        <main className='flex-1 p-6 md:p-8 overflow-y-auto'>
          <div className='max-w-5xl mx-auto'>
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
