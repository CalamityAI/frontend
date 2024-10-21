import { FC, ReactNode } from 'react';
import { Grid2 } from '@mui/material';
import { DisasterMap } from './map/Map';
import { ForecastPanel } from './forecastPanel/ForecastPanel';
import { Navbar } from './navbar/Navbar';

export const Dashboard: FC = (): ReactNode => (
  <Grid2 container direction="column">
    <Navbar />
    <DisasterMap />
    <ForecastPanel />
  </Grid2>
);
