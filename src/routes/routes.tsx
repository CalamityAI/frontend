import { createBrowserRouter, Navigate } from 'react-router-dom';

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
    element: <div>Dashboard</div>,
  },
]);

export default router;
