import Grid from '@mui/material/Grid';
import Navbar from '../src/molecules/Navbar';
import SeccionDiv from '../src/organisms/SeccionDiv';
import SeccionHome from '../src/organisms/SeccionHome';

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
      </Grid>
    </Grid>
  );
}
