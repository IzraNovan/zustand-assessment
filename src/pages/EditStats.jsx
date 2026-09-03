import { useState } from 'react';
import { useProfile } from '@/stores/useProfile';
import { useStats } from '@/stores/useStats';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

export default function EditStats() {
  const accountStatus = useProfile((state) => state.accountStatus);
  const updateProfile = useProfile((state) => state.updateProfile);

  const totalProjects = useStats((state) => state.totalProjects);
  const completedTasks = useStats((state) => state.completedTasks);
  const activityPoints = useStats((state) => state.activityPoints);
  const updateStats = useStats((state) => state.updateStats);

  // Normalize initial status to either Aktif or Nonaktif
  const initialStatus =
    accountStatus === 'Nonaktif' || accountStatus === 'Offline'
      ? 'Nonaktif'
      : 'Aktif';

  const [formData, setFormData] = useState({
    totalProjects: totalProjects ?? 0,
    completedTasks: completedTasks ?? 0,
    activityPoints: activityPoints ?? 0,
    accountStatus: initialStatus,
  });

  const [isSaved, setIsSaved] = useState(false);

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    updateStats({
      totalProjects: Number(formData.totalProjects),
      completedTasks: Number(formData.completedTasks),
      activityPoints: Number(formData.activityPoints),
    });

    updateProfile({
      accountStatus: formData.accountStatus,
    });

    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  return (
    <div className='space-y-6 max-w-3xl mx-auto'>
      {/* Header */}
      <div className='flex items-center justify-between'>
        <div>
          <h1 className='text-xl font-bold tracking-tight'>
            Manajemen Statistik Akun
          </h1>
          <p className='text-xs text-muted-foreground'>
            Atur dan perbarui data performa serta status keaktifan akun Anda.
          </p>
        </div>
      </div>

      {isSaved && (
        <div className='p-3.5 rounded-lg border border-border bg-muted flex items-center gap-2 text-xs font-semibold'>
          <span>
            Statistik berhasil disimpan dan diperbarui di seluruh aplikasi!
          </span>
        </div>
      )}

      {/* Edit Form Card */}
      <form
        onSubmit={handleSubmit}
        className='border border-border rounded-xl p-6 bg-card space-y-6'>
        {/* Metric Inputs */}
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
          {/* Total Proyek */}
          <div className='space-y-1.5'>
            <Label
              htmlFor='totalProjects'
              className='text-xs font-semibold flex items-center gap-1.5'>
              Total Proyek
            </Label>
            <Input
              id='totalProjects'
              type='number'
              min='0'
              required
              value={formData.totalProjects}
              onChange={(e) => handleChange('totalProjects', e.target.value)}
              className='bg-background'
            />
          </div>

          {/* Tugas Selesai */}
          <div className='space-y-1.5'>
            <Label
              htmlFor='completedTasks'
              className='text-xs font-semibold flex items-center gap-1.5'>
              Tugas Selesai
            </Label>
            <Input
              id='completedTasks'
              type='number'
              min='0'
              required
              value={formData.completedTasks}
              onChange={(e) => handleChange('completedTasks', e.target.value)}
              className='bg-background'
            />
          </div>

          {/* Poin Aktivitas */}
          <div className='space-y-1.5'>
            <Label
              htmlFor='activityPoints'
              className='text-xs font-semibold flex items-center gap-1.5'>
              Poin Aktivitas
            </Label>
            <Input
              id='activityPoints'
              type='number'
              min='0'
              required
              value={formData.activityPoints}
              onChange={(e) => handleChange('activityPoints', e.target.value)}
              className='bg-background'
            />
          </div>
        </div>

        {/* Status Keaktifan (Radio Button Sederhana Default) */}
        <div className='space-y-2.5 border-t border-border pt-4'>
          <Label className='text-xs font-semibold'>Status Keaktifan Akun</Label>

          <div className='flex items-center gap-6 pt-1'>
            <label className='flex items-center gap-2 text-sm cursor-pointer select-none'>
              <input
                type='radio'
                name='accountStatus'
                value='Aktif'
                checked={formData.accountStatus === 'Aktif'}
                onChange={(e) => handleChange('accountStatus', e.target.value)}
                className='size-4 text-black accent-black cursor-pointer'
              />
              <span className='font-medium text-xs'>Aktif</span>
            </label>

            <label className='flex items-center gap-2 text-sm cursor-pointer select-none'>
              <input
                type='radio'
                name='accountStatus'
                value='Nonaktif'
                checked={formData.accountStatus === 'Nonaktif'}
                onChange={(e) => handleChange('accountStatus', e.target.value)}
                className='size-4 text-black accent-black cursor-pointer'
              />
              <span className='font-medium text-xs'>Nonaktif</span>
            </label>
          </div>
        </div>

        {/* Action Buttons */}
        <div className='pt-4 border-t border-border flex items-center justify-end gap-3'>
          <Button
            type='submit'
            className='gap-2 text-xs font-semibold bg-black text-white hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200'>
            Simpan Perubahan
          </Button>
        </div>
      </form>
    </div>
  );
}
