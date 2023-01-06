import { Box, Grid } from '@mui/material';
import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';

const SeccionParallax = () => {
  return (
    <Grid
      md={12}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        color: 'white',
      }}
    >
      <ParallaxProvider>
        <ParallaxBanner
          layers={[{ image: '/cuestions.jpeg', speed: -20 }]}
          className="aspect-[2/1]"
          style={{ height: '100%' }}
        >
          <div className="inset-0 flex items-center justify-center">
            <Box
              className="text-8xl text-white font-thin"
              sx={{ zIndex: '50' }}
            >
              Hello World!
            </Box>
          </div>
        </ParallaxBanner>
      </ParallaxProvider>
    </Grid>
  );
};

export default SeccionParallax;
