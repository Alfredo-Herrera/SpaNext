import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Box from '@mui/system/Box';
import { FC } from 'react';
import { PropsPage } from '../../../interfaces';
import ButtonCustom from '../../atoms/ButtonCustom';

const SeccionDiv: FC<PropsPage> = ({ isMobile }) => {
  return (
    <Grid container>
      <Grid
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
            Viva Translate para profesionales.
          </Typography>
        </Box>

        <Box sx={{ marginTop: '20px' }}>
          <Typography variant="subtitle1">
            La forma moderna de comunicarse, desde subtítulos hasta los
            resúmenes de tus reuniones.
          </Typography>
        </Box>
        <ButtonCustom>Prueba Viva</ButtonCustom>
      </Grid>
    </Grid>
  );
};

export default SeccionDiv;
