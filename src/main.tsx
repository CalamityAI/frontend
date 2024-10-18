import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import router from './routes/routes.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CssBaseline />
    <Container maxWidth={false} sx={{maxWidth: "2560px"}}>
      <RouterProvider router={router} />
    </Container>
  </StrictMode>,
);
