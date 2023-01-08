import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { FC } from 'react';

interface CardsProps {
  img: string;
  title: string;
  description: string;
}

const CardAvatar: FC<CardsProps> = ({ img, title, description }) => {
  return (
    <Card sx={{ maxWidth: 345, height: 350 }}>
      <Box
        sx={{
          display: 'flex',
          alignContent: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '20px',
        }}
      >
        <Avatar alt={title} src={img} sx={{ width: 86, height: 86 }} />
      </Box>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardAvatar;
