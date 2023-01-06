import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import Navbar from '../src/molecules/Navbar';
import SeccionCards from '../src/organisms/SeccionCards';
import SeccionDiv from '../src/organisms/SeccionDiv';
import SeccionFinal from '../src/organisms/SeccionFinal';
import SeccionHome from '../src/organisms/SeccionHome';
import SeccionPais from '../src/organisms/SeccionPais';
import SeccionTractor from '../src/organisms/SeccionTraductor';
import SeccionUser from '../src/organisms/SeccionUsers';

export default function Home() {
  const isMobile = useMediaQuery('(max-width:600px)');
  return (
    <ParallaxProvider>
      <Grid container>
        <Grid container md={12}>
          <Grid item md={12}>
            <Navbar isMobile={isMobile} />
          </Grid>
          <Grid item md={12}>
            <Parallax speed={-10}>
              <SeccionHome isMobile={isMobile} />
            </Parallax>
          </Grid>
          <Grid item md={12}>
            <SeccionDiv isMobile={isMobile} />
          </Grid>
          <Grid item md={12}>
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
            <Parallax speed={-10}>
              <SeccionUser isMobile={isMobile} />
            </Parallax>
          </Grid>
          <Grid item md={12}>
            <SeccionFinal isMobile={isMobile} />
          </Grid>
        </Grid>
      </Grid>
    </ParallaxProvider>
  );
}
