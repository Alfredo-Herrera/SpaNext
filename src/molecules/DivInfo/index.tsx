import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { FC, ReactChild } from 'react';

interface DivInfoProps {
  children?: ReactChild | ReactChild[];
}

const DivInfo: FC<DivInfoProps> = ({ children }) => {
  return (
    <Box sx={{}}>
      <Grid item sx={{ color: 'white' }}>
        {children}
      </Grid>
    </Box>
  );
};

export default DivInfo;
