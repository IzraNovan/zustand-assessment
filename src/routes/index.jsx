import { createBrowserRouter } from 'react-router';
import AppLayout from '@/layouts/AppLayout';
import Dashboard from '@/pages/Dashboard';
import Profile from '@/pages/Profile';
import EditProfile from '@/pages/EditProfile';
import EditStats from '@/pages/EditStats';
import LoginForm from '@/pages/LoginForm';

export const myRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: 'profile',
        element: <Profile />,
      },
      {
        path: 'profile/edit',
        element: <EditProfile />,
      },
      {
        path: 'stats',
        element: <EditStats />,
      },
    ],
  },
  {
    path: '/login',
    element: <LoginForm />,
  },
]);
