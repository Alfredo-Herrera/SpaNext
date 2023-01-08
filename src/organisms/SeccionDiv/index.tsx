import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Box from '@mui/system/Box';
import { FC } from 'react';
import { PropsPage } from '../../../interfaces';
import ButtonCustom from '../../atoms/ButtonCustom';

const SeccionFinal: FC<PropsPage> = ({ isMobile }) => {
  return (
    <Grid container>
      <Grid
        item
        md={12}
        sx={{
          height: '400px',
          background: '#2c2c30',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          color: 'white',
          textAlign: isMobile ? 'center' : '',
        }}
      >
        <Box>
          <Typography variant="h4">
            Observa cómo Viva puede trabajar para ti.
          </Typography>
        </Box>

        <Box sx={{ marginTop: '20px' }}>
          <Typography variant="subtitle1">
            Ponte en contacto con nosotros para saber cómo nuestra tecnología de
            traducción y transcripción puede aumentar la eficacia de tu empresa.
          </Typography>
        </Box>
        <ButtonCustom>Prueba Viva</ButtonCustom>
      </Grid>
    </Grid>
  );
};

export default SeccionFinal;
