import {Alert, Button, CircularProgress, Container, Grid, TextField, Typography} from '@mui/material';
import { Box } from '@mui/system';
import React, {useState} from 'react';
import {NavLink, useLocation, useNavigate} from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import Navigation from '../../Shared/Navigation/Navigation';

const Login = () => {
  const [loginData, setLoginData] = useState({})
    const {user, loginUser, isLoading, authErorr} = useAuth();
    const location = useLocation();
    const history = useNavigate();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {
            ...loginData
        };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
      loginUser( loginData.email, loginData.password, location, history );
        e.preventDefault();
    }
  return (
      <Box>
          <Navigation></Navigation>
          <Container>
            <Grid container="container" spacing={2}>
                <Grid item="item" sx={{ mt: 8 }} xs={12} md={6}>
                    <Typography variant="body1" gutterBottom="gutterBottom">Login</Typography>
                    <form onSubmit={handleLoginSubmit}>
                        <TextField sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Email"
                            name="email"
                            type="email"
                            onChange={handleOnChange}
                            variant="standard"/>
                        <TextField sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Password"
                            type="password"
                            name="password"
                            onChange={handleOnChange}
                            variant="standard"/>
                        <Button sx={{ width: '75%', m: 1 }}
                            variant="contained"
                            type="submit">
                            Login
                        </Button>
                        <NavLink style={{ textDecoration: "none" }} to="/register">
                            <Button variant="text">New User? Please Register</Button>
                        </NavLink>
                    </form>
                    {isLoading && <CircularProgress/>}
                    {
                        user?.email && <Alert severity="success">User created successfuly!</Alert>
                    }
                    {authErorr && <Alert severity="error">{authErorr}</Alert>}
                </Grid>
                <Grid item="item" xs={12} md={6}>
                    <img
                        style={{
                            width: "100%"
                        }}
                        src="https://cdn.shopify.com/s/files/1/2496/9194/articles/blog12.jpg?v=1509972401"
                        alt=""/>
                </Grid>
            </Grid>
        </Container>
      </Box>
  );
};

export default Login;