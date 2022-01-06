import React from 'react';
import { Box } from '@mui/material';
import {
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import Home from './Pages/Home/Home/Home';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import ExploreProducts from './Pages/ExploreProducts/ExploreProducts/ExploreProducts';
import AuthProvider from './Contexts/AuthProvider/AuthProvider';

function App() {
  return (
    <Box>
        <AuthProvider>
        <BrowserRouter>
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exploreProducts" element={ 
            <ExploreProducts />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/productDetails/:ProductId" element={<ProductDetails />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </Box>
  );
}

export default App;
