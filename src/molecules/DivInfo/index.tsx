import Grid from '@mui/material/Grid';
import { FC, ReactChild } from 'react';

interface DivInfoProps {
  children?: ReactChild | ReactChild[];
}

const DivInfo: FC<DivInfoProps> = ({ children }) => {
  return (
    <Grid container sx={{ background: '#2c2c30' }}>
      <Grid item>{children}</Grid>
    </Grid>
  );
};

export default DivInfo;
