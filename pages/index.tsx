import Grid from '@mui/material/Grid';
import Navbar from '../src/molecules/Navbar';
import SeccionHome from '../src/organisms/SeccionHome';

export default function Home() {
  return (
    <Grid container>
      <Grid container md={12}>
        <Grid item>
          <Navbar />
        </Grid>
        <Grid>
          <SeccionHome />
        </Grid>
      </Grid>
    </Grid>
  );
}
