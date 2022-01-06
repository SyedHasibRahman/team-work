import { Box, Button, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import OrderModal from '../ExploreProducts/OrderModal/OrderModal';

const ProductDetails = () => {
  const {ProductId} = useParams();
    const [product, setProduct] = useState({});
    const {img, name, discription, price} = product;
    useEffect(() => {
        fetch(`https://infinite-tor-54657.herokuapp.com/products/${ProductId}`)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, []);

    const [openOrder, setOpenOrder] = useState(false);
    const handleOrderOpen = () => setOpenOrder(true);
    const handleOrderClose = () => setOpenOrder(false);
  return (
    <> < Box >
        <Container>
            <Box>
                <Box
                    margin="0 auto"
                    sx={{
                        width: 3 / 4,
                        mt:8
                    }}>
                    <Grid container="container" spacing={0}>
                        <Grid item="item" xs={12} md={6} xl={6} height="580px" backgroundColor="rgba(193,164,130,.3)">
                            <img
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover"
                                }}
                                src={img}
                                alt=""/>
                        </Grid>
                        <Grid item="item" xs={12} md={6} xl={6}>
                            <Box textAlign="left" padding="0 16px">
                                <Typography
                                    variant="h4"
                                    fontWeight="700"
                                    lineHeight="1.5"
                                    fontSize="38px"
                                    gutterBottom="gutterBottom"
                                    component="div">
                                    {name}
                                </Typography>
                                <Typography variant="body2" fontSize="20px" gutterBottom="gutterBottom">
                                    {discription}
                                </Typography>
                                <Typography
                                    variant="h6"
                                    fontSize="22px"
                                    margin="20px 0"
                                    gutterBottom="gutterBottom"
                                    component="div">
                                    Price: ${price}
                                </Typography>
                                <Button onClick={handleOrderOpen} variant="outlined">Order Now</Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    </Box>
    <OrderModal
        product={product}
        openOrder={openOrder}
        handleOrderClose={handleOrderClose}></OrderModal>
</>
  );
};

export default ProductDetails;