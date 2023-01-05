import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Image from 'next/image';

const SeccionPais = () => {
  return (
    <Grid
      container
      sx={{
        background: 'black',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
      }}
      md={12}
    >
      <Grid item md={6} spacing={3}>
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
            <Typography variant="h5">
              Construido para equipos globales.
            </Typography>
          </Box>
          <Box sx={{ margin: '20px' }}>
            <Typography variant="subtitle2">
              Ayuda a las personas a comunicarse fácilmente en diferentes
              idiomas.
            </Typography>
          </Box>
        </Box>
      </Grid>
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
            src="/world.jpeg"
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

export default SeccionPais;
