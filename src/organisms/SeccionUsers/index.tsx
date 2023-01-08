import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Box from '@mui/system/Box';
import { FC } from 'react';
import { PropsPage } from '../../../interfaces';
import CardPerson from '../../molecules/CardPerson';

const infoCards = [
  {
    img: '/person1.png',
    title: 'David Levesque, fundador de @Brite ',
    description:
      'Me he pasado los últimos cuatro años intentando coordinar equipos desde Ucrania hasta Zimbabue y Pakistán. Poder comunicarme directamente con los ingenieros de Viva cambia mi forma de trabajar',
  },
  {
    img: '/person2.png',
    title:
      'Alexandra Rodríguez, freelance de marketing de rendimiento y crecimiento',
    description:
      'Me he pasado los últimos cuatro años intentando coordinar equipos desde Ucrania hasta Zimbabue y Pakistán. Poder comunicarme directamente con los ingenieros de Viva cambia mi forma de trabajar',
  },
  {
    img: '/person3.png',
    title: 'Gustavo Moreno, CTO @Kiwi',
    description:
      '"La conversión de voz a texto me pareció bastante precisa y la traducción muy comprensible. Se pueden mantener conversaciones fluidas".',
  },
];

const SeccionUser: FC<PropsPage> = ({ isMobile }) => {
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
        item
      >
        <Box sx={{ marginTop: '40px', textAlign: isMobile ? 'center' : '' }}>
          <Typography variant="h4">
            Expepriencia de nuestro Usuarios.
          </Typography>
        </Box>
        <Box sx={{ marginTop: '20px' }}>
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
                <CardPerson {...itemCard} />
              </Grid>
            ))}
          </Grid>
        </Box>{' '}
      </Grid>
    </Grid>
  );
};

export default SeccionUser;
