import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography
} from '@mui/material';
import {Box} from '@mui/system';
import React, {useEffect, useState} from 'react';

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
    console.log(products);
    useEffect(() => {
        fetch('https://infinite-tor-54657.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const handleDelete = id => {
        const url = `https://infinite-tor-54657.herokuapp.com/products/${id}`;
        fetch(url, {method: 'DELETE'})
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    alert('Deleted')
                    const remaining = products.filter(product => product._id !== id);
                    setProducts(remaining);
                };

            });
    };
  return (
    <Box>
            <Container>
                <Grid
                    container="container"
                    spacing={{
                        xs: 2,
                        md: 3
                    }}
                    columns={{
                        xs: 4,
                        sm: 8,
                        md: 12
                    }}>
                    {
                        products.map(
                            product => <Grid key={product._id} item="item" xs={4} sm={4} md={4}>
                                <Card
                                    sx={{
                                        maxwidth: 345,
                                        backgroundColor: "rgba(193,164,130,.3)"
                                    }}>
                                    <CardMedia
                                        component="img"
                                        style={{
                                            width: '100%',
                                            height: '250px',
                                            objectFit: 'contain',
                                            marginTop: '15px'
                                        }}
                                        image={product.img}
                                        alt="green iguana"/>
                                    <CardContent>
                                        <Typography variant="h5" component="div" color="#000000">
                                            {product.name}
                                        </Typography>
                                        <Typography variant="h6" component="div" color="#808080">Price: ${product.price}
                                        </Typography>
                                    </CardContent>
                                    <CardActions
                                        style={{
                                            display: "block",
                                            alignItem: "center"
                                        }}>
                                        <Button onClick={() => handleDelete(product._id)} size="large">Delete</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        )
                    }
                </Grid>
            </Container>
        </Box>
  );
};

export default ManageProducts;