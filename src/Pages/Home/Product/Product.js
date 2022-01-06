import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Product = (props) => {
  const {_id, name, price, img} = props.product;
  return (
    <Grid item xs={4} sm={4} md={4}>
      <Card sx={{ maxwidth: 345, backgroundColor: "rgba(193,164,130,.3)"}}>
      <CardMedia
        component="img"
        style={{width:'100%', height:'250px', objectFit:'contain', marginTop:'15px'}}
        image={img}
        alt="green iguana"
      />
      <CardContent>
        <Typography variant="h5" component="div" color="#000000">
          {name}
        </Typography>
        <Typography variant="h6" component="div" color="#808080">
          Price: ${price}
        </Typography>
      </CardContent>
      <CardActions style={{display: "block",alignItem:"center"}}>
      <Link style={{textDecoration:"none", color:"rgb(243, 224, 202)"}} to={`/productDetails/${_id}`}>
        <Button size="large">Details</Button>
        </Link>
      </CardActions>
    </Card>
    </Grid>
  );
};

export default Product;