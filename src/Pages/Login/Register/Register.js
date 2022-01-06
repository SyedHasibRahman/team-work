import {
  Alert,
  Button,
  CircularProgress,
  Container,
  Grid,
  TextField,
  Typography
} from '@mui/material';
import React, {useState} from 'react';
import {NavLink, useNavigate} from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Register = () => {
  const [loginData, setLoginData] = useState({});
    const history = useNavigate();
    const {user, registerUser, isLoading, authErorr} = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {
            ...loginData
        };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match');
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }
  return (
    <Container>
            <Grid container="container" spacing={2}>
                <Grid item="item" sx={{mt: 8}}xs={12}md={6}>
                    <Typography variant="body1" gutterBottom="gutterBottom">Register</Typography>
                    {
                        !isLoading && <form onSubmit={handleLoginSubmit}>
                                <TextField sx={{ width: '75%', m: 1 }}
                                    id="standard-basic"
                                    label="Full Name"
                                    placeholder="Enter your full name"
                                    type="text"
                                    name="name"
                                    onBlur={handleOnBlur}
                                    variant="standard"/>
                                <TextField sx={{ width: '75%', m: 1 }}
                                    id="standard-basic"
                                    label="Email"
                                    placeholder="Enter your email"
                                    type="email"
                                    name="email"
                                    onBlur={handleOnBlur}
                                    variant="standard"/>
                                <TextField sx={{ width: '75%', m: 1 }}
                                    id="standard-basic"
                                    label="Password"
                                    placeholder="Enter your password"
                                    type="password"
                                    name="password"
                                    onBlur={handleOnBlur}
                                    variant="standard"/>
                                <TextField sx={{ width: '75%', m: 1 }}
                                    id="standard-basic"
                                    label="Retype Password"
                                    placeholder="Retype password"
                                    type="password"
                                    name="password2"
                                    onBlur={handleOnBlur}
                                    variant="standard"/>
                                <Button sx={{ width: '75%', m: 1 }}
                                    variant="contained"
                                    type="submit"> Register
                                </Button>
                                <NavLink style={{ textDecoration: "none" }} to="/login">
                                    <Button variant="text">Already Registered? Please Login</Button>
                                </NavLink>
                            </form>
                    }
                    {isLoading && <CircularProgress/>}
                    {
                        user?.email && <Alert severity="success">User created successfuly!</Alert>
                    }
                    {authErorr && <Alert severity="error">{authErorr}</Alert>}
                </Grid>
                <Grid item="item" xs={12} md={6}>
                    <img style={{ width: "100%" }} src="https://cdn.shopify.com/s/files/1/2496/9194/articles/blog12.jpg?v=1509972401" alt=""/>
                </Grid>
            </Grid>
        </Container>
  );
};

export default Register;