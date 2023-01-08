import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { FC } from 'react';
import { PropsPage } from '../../../interfaces';
import ButtonCustom from '../../atoms/ButtonCustom';

const SeccionHome: FC<PropsPage> = ({ isMobile }) => {
  return (
    <Grid
      container
      sx={{
        background: 'black',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Grid item md={6}>
        <Box
          sx={{
            marginTop: '50px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            textAlign: isMobile ? 'center' : '',
          }}
        >
          <Box sx={{ margin: '20px' }}>
            <Typography variant="h3">
              Traducción de videollamadas en tiempo real.
            </Typography>
          </Box>
          <Box sx={{ margin: '20px' }}>
            <Typography variant="subtitle1">
              Viva Translate ayuda a personas de todo el mundo a comunicarse en
              inglés, español y portugués en tiempo real. Ahorra tiempo en notas
              de reuniones y traducciones con Viva.
            </Typography>
          </Box>
          <Box sx={{ marginTop: '20px' }}>
            <ButtonCustom>Prueba Viva en Google Meets - es gratis</ButtonCustom>
            <ButtonCustom sx={{ marginLeft: '20px' }}>
              Comunícate con ventas
            </ButtonCustom>
          </Box>
        </Box>
      </Grid>
      <Grid item md={6}>
        <Box
          sx={{
            marginTop: '50px',
            display: 'grid',
            placeItems: 'center',
          }}
        >
          <Image
            src="/imgHomeMobile.jpeg"
            alt="imgHome"
            width="0"
            height="0"
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default SeccionHome;
