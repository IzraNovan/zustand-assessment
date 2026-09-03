import { useState } from 'react';
import { useNavigate, Link } from 'react-router';
import { useProfile } from '@/stores/useProfile';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { ArrowLeft, Save } from 'lucide-react';

export default function EditProfile() {
  const navigate = useNavigate();

  // Select primitive state values individually to avoid infinite re-render loops
  const name = useProfile((state) => state.name);
  const role = useProfile((state) => state.role);
  const email = useProfile((state) => state.email);
  const bio = useProfile((state) => state.bio);
  const avatar = useProfile((state) => state.avatar);
  const updateProfile = useProfile((state) => state.updateProfile);

  // Initialize form state (hanya data profil)
  const [formData, setFormData] = useState({
    name,
    role,
    email,
    bio,
    avatar,
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProfile(formData);
    navigate('/profile');
  };

  return (
    <div className='space-y-6 max-w-2xl mx-auto'>
      {/* Header with back button */}
      <div className='flex items-center gap-3'>
        <Link to='/profile'>
          <Button
            variant='outline'
            size='icon-sm'>
            <ArrowLeft className='w-4 h-4' />
          </Button>
        </Link>
        <div>
          <h1 className='text-xl font-bold tracking-tight'>
            Edit Profil Pengguna
          </h1>
          <p className='text-xs text-muted-foreground'>
            Perubahan akan langsung terupdate ke seluruh layout dan komponen.
          </p>
        </div>
      </div>

      {/* Edit Form Card */}
      <form
        onSubmit={handleSubmit}
        className='border border-border rounded-xl p-6 bg-card space-y-6'>
        {/* Input Fields */}
        <div className='space-y-4'>
          <div className='space-y-1.5'>
            <Label
              htmlFor='name'
              className='text-xs font-semibold'>
              Nama Lengkap <span className='text-destructive'>*</span>
            </Label>
            <Input
              id='name'
              type='text'
              required
              placeholder='Masukkan nama lengkap...'
              value={formData.name}
              onChange={(e) => handleChange('name', e.target.value)}
              className='bg-background'
            />
          </div>

          <div className='space-y-1.5'>
            <Label
              htmlFor='role'
              className='text-xs font-semibold'>
              Role / Pekerjaan <span className='text-destructive'>*</span>
            </Label>
            <Input
              id='role'
              type='text'
              required
              placeholder='Contoh: Senior Frontend Engineer'
              value={formData.role}
              onChange={(e) => handleChange('role', e.target.value)}
              className='bg-background'
            />
          </div>

          <div className='space-y-1.5'>
            <Label
              htmlFor='email'
              className='text-xs font-semibold'>
              Email <span className='text-destructive'>*</span>
            </Label>
            <Input
              id='email'
              type='email'
              required
              placeholder='nama@domain.com'
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              className='bg-background'
            />
          </div>

          <div className='space-y-1.5'>
            <Label
              htmlFor='bio'
              className='text-xs font-semibold'>
              Bio / Deskripsi Singkat
            </Label>
            <Textarea
              id='bio'
              rows={4}
              placeholder='Tulis bio singkat tentang Anda...'
              value={formData.bio}
              onChange={(e) => handleChange('bio', e.target.value)}
              className='bg-background resize-none text-sm'
            />
          </div>

          <div className='space-y-1.5'>
            <Label
              htmlFor='avatar'
              className='text-xs font-semibold'>
              URL Avatar
            </Label>
            <Input
              id='avatar'
              type='url'
              required
              placeholder='Masukkan URL gambar avatar...'
              value={formData.avatar}
              onChange={(e) => handleChange('avatar', e.target.value)}
              className='bg-background text-sm'
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className='pt-4 border-t border-border flex items-center justify-between gap-3'>
          <Link to='/profile'>
            <Button
              type='button'
              variant='outline'
              className='text-xs font-semibold'>
              Batal
            </Button>
          </Link>
          <Button
            type='submit'
            className='gap-2 text-xs font-semibold bg-black text-white hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200'>
            <Save className='w-3.5 h-3.5' />
            Simpan Perubahan
          </Button>
        </div>
      </form>
    </div>
  );
}
