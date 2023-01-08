import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';
import { ParallaxProvider } from 'react-scroll-parallax';
import Navbar from '../src/molecules/Navbar';
import SeccionFinal from '../src/organisms/SeccionFinal';
import SeccionPais from '../src/organisms/SeccionPais';
import SeccionUser from '../src/organisms/SeccionUsers';

export default function About() {
  const isMobile = useMediaQuery('(max-width:600px)');
  return (
    <ParallaxProvider>
      <Grid container>
        <Grid item md={12}>
          <Grid item md={12}>
            <Navbar isMobile={isMobile} />
          </Grid>
          <Grid item md={12} sx={{ marginTop: '30px' }}>
            <SeccionUser isMobile={isMobile} />
          </Grid>
          <Grid item md={12}>
            <SeccionPais isMobile={isMobile} />
          </Grid>
          <Grid item md={12}>
            <SeccionFinal isMobile={isMobile} />
          </Grid>
        </Grid>
      </Grid>
    </ParallaxProvider>
  );
}
