import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../../Redux/Slices/ProductSlices';
import AvailableClock from '../AvailableClock/AvailableClock';

const AvailableClocks = () => {
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(fetchProducts())
    }, []);
  const availableClocks = useSelector(state => state.products.discover)
  return (
    <Box sx={{ flexGrow: 1 }}>
  <Container>
      <Typography
          sx={{
              fontWeight: 600,
              mt: 8
          }}
          variant="h4"
          component="div">
          Available Clocks
      </Typography>
      <Grid style={{margin: '50px 0'}}
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
              availableClocks.map(
                  availableClock => <AvailableClock key={availableClock._id} availableClock={availableClock}></AvailableClock>
              )
          }
      </Grid>
  </Container>
</Box>
  );
};

export default AvailableClocks;