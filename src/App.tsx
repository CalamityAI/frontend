import { FC } from 'react';
import { RouterProvider } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import router from './routes/routes.tsx';

const App: FC = (): React.ReactNode => (
  <>
    <CssBaseline />
    <Container maxWidth={false} sx={{ maxWidth: '2560px' }}>
      <RouterProvider router={router} />
    </Container>
  </>
);

export default App;
