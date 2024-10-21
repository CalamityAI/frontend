import { createBrowserRouter, Navigate } from 'react-router-dom';
import { Dashboard } from '../components/Dashboard';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/dashboard" replace />,
  },
  {
    path: '/signin',
    element: <div>SignIn</div>,
  },
  {
    path: '/signup',
    element: <div>SignUp</div>,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
]);

export default router;
