import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';
import { ParallaxProvider } from 'react-scroll-parallax';
import Navbar from '../src/molecules/Navbar';
import SeccionFinal from '../src/organisms/SeccionFinal';
import SeccionForm from '../src/organisms/seccionForm';

export default function About() {
  const isMobile = useMediaQuery('(max-width:600px)');
  return (
    <ParallaxProvider>
      <Grid container>
        <Grid item md={12}>
          <Grid item md={12}>
            <Navbar isMobile={isMobile} />
          </Grid>
          <Grid
            item
            md={12}
            sx={{
              display: 'grid',
              placeItems: 'center',
              marginTop: '60px',
            }}
          >
            <SeccionForm isMobile={isMobile} />
          </Grid>
          <Grid item md={12}>
            <SeccionFinal isMobile={isMobile} />
          </Grid>
        </Grid>
      </Grid>
    </ParallaxProvider>
  );
}
