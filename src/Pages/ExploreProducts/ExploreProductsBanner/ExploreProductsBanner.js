import { Grid } from '@mui/material';
import React from 'react';

const ExploreProductsBanner = () => {
  return (
    <Grid container spacing={0}>
      <Grid item xs={12} md={6}> 
      <img style={{width:'100%'}} src="https://cdn.shopify.com/s/files/1/2496/9194/files/img1_fd29a0af-d3d1-4196-a870-038c137ebdaf_1060x.jpg?v=1509356009" alt="" />
      </Grid>
      <Grid item xs={12} md={6}> 
        <img style={{width:'100%'}} src="https://cdn.shopify.com/s/files/1/2496/9194/files/img2_0b6fbb1b-4374-4875-a7ff-93f41dce689e_1060x.jpg?v=1509365437" alt="" />
      </Grid>
    </Grid>
  );
};

export default ExploreProductsBanner;