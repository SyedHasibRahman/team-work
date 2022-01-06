import { Box } from '@mui/system';
import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AvailableClocks from '../AvailableClocks/AvailableClocks';
import ExploreProductsBanner from '../ExploreProductsBanner/ExploreProductsBanner';

const ExploreProducts = () => {
  return (
    <Box>
      <Navigation></Navigation>
      <ExploreProductsBanner></ExploreProductsBanner>
      <AvailableClocks></AvailableClocks>
    </Box>
  );
};

export default ExploreProducts;