import { configureStore } from "@reduxjs/toolkit";
import productsReducer from '../Redux/Slices/ProductSlices';

export const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});
