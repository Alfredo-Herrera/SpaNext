import Grid from '@mui/material/Grid';
import Navbar from '../src/molecules/Navbar';
import SeccionDiv from '../src/organisms/SeccionDiv';
import SeccionFinal from '../src/organisms/SeccionFinal';
import SeccionHome from '../src/organisms/SeccionHome';
import SeccionPais from '../src/organisms/SeccionPais';
import SeccionTractor from '../src/organisms/SeccionTraductor';
import SeccionUser from '../src/organisms/SeccionUsers';

export default function Home() {
  return (
    <Grid container>
      <Grid container md={12}>
        <Grid item md={12}>
          <Navbar />
        </Grid>
        <Grid item md={12}>
          <SeccionHome />
        </Grid>
        <Grid item md={12}>
          <SeccionDiv />
        </Grid>
        <Grid item md={12}>
          <SeccionTractor />
        </Grid>
        <Grid item md={12}>
          <SeccionPais />
        </Grid>
        <Grid item md={12}>
          <SeccionUser />
        </Grid>
        <Grid item md={12}>
          <SeccionFinal />
        </Grid>
      </Grid>
    </Grid>
  );
}
