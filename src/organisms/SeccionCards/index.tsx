import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { FC } from 'react';
import { PropsPage } from '../../../interfaces';
import CardInfo from '../../molecules/CardInfo/index';

const infoCards = [
  {
    title: 'Añade Viva a Chrome de forma gratuita',
    description:
      'Ancla la extensión Viva para acceder fácilmente a todas nuestras funciones.',
    url: 'https://app.vivatranslate.com/welcome',
    img: '/card1.jpeg',
  },
  {
    title: 'Únete a una llamada de Google Meets',
    description:
      'Inicia una reunión instantánea o haz una llamada con un colega para probar Viva.',
    url: '',
    img: '/card2.jpeg',
  },
  {
    title: 'Experimenta la magia',
    description:
      'Siéntete seguro en reuniones multilingües con transcripciones y traducciones en tiempo real.',
    url: '',
    img: '/card3.jpeg',
  },
];

const SeccionCards: FC<PropsPage> = ({ isMobile }) => {
  return (
    <Grid container>
      <Grid
        md={12}
        sx={{
          background: 'black',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          color: 'white',
        }}
      >
        <Box sx={{ margin: '40px' }}>
          <Typography variant="h4">Ofrecemos</Typography>
        </Box>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 2, sm: 8, md: 12 }}
        >
          {infoCards.map((itemCard, index) => (
            <Grid
              item
              xs={2}
              sm={4}
              md={4}
              key={index}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                marginBottom: '30px',
              }}
            >
              <CardInfo {...itemCard} isMobile={isMobile} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SeccionCards;
