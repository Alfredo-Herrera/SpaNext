import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { FC } from 'react';
import { PropsPage } from '../../../interfaces/index';

const SeccionTractor: FC<PropsPage> = ({ isMobile }) => {
  return (
    <Grid
      container
      sx={{
        background: 'black',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        textAlign: isMobile ? 'center' : '',
      }}
    >
      <Grid item md={6}>
        <Box
          sx={{
            marginTop: '50px',
            display: 'grid',
            placeItems: 'center',
            margin: '20px',
          }}
        >
          <Image
            src="/traductor.jpeg"
            alt="imgHome"
            width="0"
            height="0"
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
          />
        </Box>
      </Grid>
      <Grid item md={6}>
        <Box
          sx={{
            marginTop: '50px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          <Box sx={{ margin: '20px' }}>
            <Typography variant="h4">
              Termina tus reuniones más rápidamente y automatiza los flujos de
              trabajo.
            </Typography>
          </Box>
          <Box sx={{ margin: '20px' }}>
            <Typography variant="subtitle2">
              Ahorra un tiempo precioso gracias a los resúmenes y
              transcripciones de reuniones generados automáticamente y a las
              opciones de exportación adaptables a tus necesidades de
              productividad.
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default SeccionTractor;
