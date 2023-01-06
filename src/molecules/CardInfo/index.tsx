import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { FC } from 'react';
import ButtonCustom from '../../atoms/ButtonCustom/index';

interface CardsProps {
  img: string;
  title: string;
  description: string;
  url: string;
  isMobile: boolean;
}

const CardInfo: FC<CardsProps> = ({ img, title, description, url }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" alt="green iguana" height="140" image={img} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {url && (
          <ButtonCustom href={url} size="large">
            Prueba Viva
          </ButtonCustom>
        )}
      </CardActions>
    </Card>
  );
};

export default CardInfo;
