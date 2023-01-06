import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import Navbar from '../src/molecules/Navbar';
import SeccionCards from '../src/organisms/SeccionCards';
import SeccionFinal from '../src/organisms/SeccionFinal';
import SeccionPais from '../src/organisms/SeccionPais';
import SeccionTractor from '../src/organisms/SeccionTraductor';

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
            <SeccionCards isMobile={isMobile} />
          </Grid>
          <Grid item md={12}>
            <Parallax speed={-10}>
              <SeccionTractor isMobile={isMobile} />
            </Parallax>
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
