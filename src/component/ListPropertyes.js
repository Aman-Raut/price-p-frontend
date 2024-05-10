import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Rating } from '@mui/material';
import { useLocation } from 'react-router-dom';
import Grid from '@mui/material/Grid';

export default function ListPropertyes() {
  const location = useLocation();
  const responseData = location.state && location.state.responseData;
  // console.log(responseData)

  return (
    <Grid container spacing={2}>
      {responseData?.map((item, index) => (
        <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
          <Card sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardActionArea>
              <CardMedia
                style={{ objectFit: 'cover', width: '100%', height: '140px' }}
                component="img"
                height="140"
                image={item.image}
                alt={item.title} 
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h6" component="div">
                  {item.name} 
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.price} 
                </Typography>
                <Rating name="read-only" value={item.rating} readOnly />
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
