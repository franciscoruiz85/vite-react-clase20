import React, { useState } from 'react';
import { Container, Grid, Typography, Button } from '@mui/material';
import useFetch from '../hooks/useFetch';

const Advice = () => {
    const [update, setUpdate] = useState(false);
    const { data } = useFetch(import.meta.env.VITE_ADVICES_API_URL, update);

    return (
        <Container>
            <Typography
                variant='h3'
                gutterBottom
                sx={{ marginTop: 10, justifyContent: 'center', textAlign: 'center' }}
            >
                Consejos
            </Typography>
            <Grid
                sx={{ justifyContent: 'center', textAlign: 'center' }}
            >
                <Typography
                    variant='h6'
                    gutterBottom
                    sx={{ marginTop: 2, justifyContent: 'center', textAlign: 'center' }}
                >
                    { data?.slip?.advice }
                </Typography>
                <Button
                    variant="contained"
                    onClick={() => setUpdate(!update)}
                >Actualizar consejo</Button>
            </Grid>
        </Container>
    )
}

export default Advice;