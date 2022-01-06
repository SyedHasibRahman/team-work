import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// First, create the thunk
export const fetchProducts = createAsyncThunk(
  'product/fetchProducts',
  async () => {
    const response = await fetch('https://infinite-tor-54657.herokuapp.com/products')
    .then(res=> res.json())
    return response
  }
)

export const productSlices = createSlice({
  name: 'product',
  initialState: {
    discover: [],
  },
  extraReducers: (builder) =>{
    builder.addCase(fetchProducts.fulfilled, (state, action) =>
    {
      state.discover = action.payload;
    })
  }
})


export default productSlices.reducer;