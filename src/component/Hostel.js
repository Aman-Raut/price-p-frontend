import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';

import seater1 from "../component/image/1_seater.jpg" 
import seater2 from "../component/image/2_seater.jpg"
import seater3 from "../component/image/3_seater.jpg"
import seater4 from "../component/image/4_seater.jpg"


export default function Hostel() {
  const responseData = [
    { name: 'Apartment', price: '140,000 pa', image: seater1 },
    { name: '1st seater AC', price: '130,000 pa', image: seater1 },
    { name: '1st seater ', price: '120,000 pa', image: seater1 },
    { name: '2nd seater AC', price: '105,000 pa', image: seater2 },
    { name: '2nd seater ', price: '95,000 pa', image: seater2 },
    { name: '3nd seater AC', price: '85,000 pa', image: seater3 },
    { name: '3nd seater', price: '80,000 pa', image: seater3  },
    { name: '4nd seater AC', price: '75,000 pa', image: seater4 },
    { name: '4nd seater', price: '65,000 pa', image: seater4 },
    { name: 'dormitory', price: '50,000 pa', image: seater1 },
    // Add more data as needed
  ];

  return (
    <Grid container spacing={2}>
      {responseData.map((item, index) => (
        <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
          <Card sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardActionArea>
              <CardMedia
                style={{ objectFit: 'cover', width: '100%', height: '140px' }}
                component="img"
                height="140"
                image={item.image}
                alt={item.name} 
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h6" component="div">
                  {item.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.price}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
