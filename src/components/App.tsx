import { RouterProvider } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import router from '../routes/routes.tsx';

export default function App() {
    return (
        <>
            <CssBaseline />
            <Container maxWidth={false} sx={{maxWidth: "2560px"}}>
                <RouterProvider router={router} />
            </Container>
        </>
    )
}