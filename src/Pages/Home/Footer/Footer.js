import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Footer = () => {
  return (
    <Box
            style={{
                margin: "30px 0",
                padding: "30px 0",
                backgroundColor: "#f3e0ca"
            }}>
            <Container>
                <Box>
                    <Grid container="container" spacing={2}>
                        <Grid item="item" xs={6} md={3} xl={3}>
                            <Typography
                                variant="h5"
                                gutterBottom="gutterBottom"
                                component="div"
                                textAlign="left"
                                marginBottom="20px"
                                color="#9f7a49">
                                Information
                            </Typography>
                            <Box>
                                <ul
                                    style={{
                                        padding: "0",
                                        margin: "0",
                                        listStyle: "none",
                                        textAlign: "left",
                                        fontSize: "17px",
                                        fontWeight: "300px"
                                    }}>
                                    <li
                                        style={{
                                            margin: "10px 0",
                                            cursor: "pointer"
                                        }}>Search</li>
                                    <li
                                        style={{
                                            margin: "10px 0",
                                            cursor: "pointer"
                                        }}>Help</li>
                                    <li
                                        style={{
                                            margin: "10px 0",
                                            cursor: "pointer"
                                        }}>Shipping Details</li>
                                    <li
                                        style={{
                                            margin: "10px 0",
                                            cursor: "pointer"
                                        }}>Privacy Policy</li>
                                    <li
                                        style={{
                                            margin: "10px 0",
                                            cursor: "pointer"
                                        }}>Information</li>
                                </ul>
                            </Box>
                        </Grid>
                        <Grid item="item" xs={6} md={3} xl={3}>
                            <Typography
                                variant="h5"
                                gutterBottom="gutterBottom"
                                component="div"
                                textAlign="left"
                                marginBottom="20px"
                                color="#9f7a49">
                                My Account
                            </Typography>
                            <ul
                                style={{
                                    padding: "0",
                                    margin: "0",
                                    listStyle: "none",
                                    textAlign: "left",
                                    fontSize: "17px",
                                    fontWeight: "300px"
                                }}>
                                <li
                                    style={{
                                        margin: "10px 0",
                                        cursor: "pointer"
                                    }}>Contact Us</li>
                                <li
                                    style={{
                                        margin: "10px 0",
                                        cursor: "pointer"
                                    }}>About Us</li>
                                <li
                                    style={{
                                        margin: "10px 0",
                                        cursor: "pointer"
                                    }}>Careers</li>
                                <li
                                    style={{
                                        margin: "10px 0",
                                        cursor: "pointer"
                                    }}>Return Centre</li>
                                <li
                                    style={{
                                        margin: "10px 0",
                                        cursor: "pointer"
                                    }}>Deliveries</li>
                            </ul>
                        </Grid>
                        <Grid item="item" xs={6} md={3} xl={3}>
                            <Typography
                                variant="h5"
                                gutterBottom="gutterBottom"
                                component="div"
                                textAlign="left"
                                marginBottom="20px"
                                color="#9f7a49">
                                Help
                            </Typography>
                            <ul
                                style={{
                                    padding: "0",
                                    margin: "0",
                                    listStyle: "none",
                                    textAlign: "left",
                                    fontSize: "17px",
                                    fontWeight: "300px"
                                }}>
                                <li
                                    style={{
                                        margin: "10px 0",
                                        cursor: "pointer"
                                    }}>Search Terms</li>
                                <li
                                    style={{
                                        margin: "10px 0",
                                        cursor: "pointer"
                                    }}>Advanced Search</li>
                                <li
                                    style={{
                                        margin: "10px 0",
                                        cursor: "pointer"
                                    }}>Help & FAQs</li>
                                <li
                                    style={{
                                        margin: "10px 0",
                                        cursor: "pointer"
                                    }}>Store Locations</li>
                                <li
                                    style={{
                                        margin: "10px 0",
                                        cursor: "pointer"
                                    }}>Orders and Returns</li>
                            </ul>
                        </Grid>
                        <Grid item="item" xs={6} md={3} xl={3}>
                            <Typography
                                variant="h5"
                                gutterBottom="gutterBottom"
                                component="div"
                                textAlign="left"
                                marginBottom="20px"
                                color="#9f7a49">
                                Watches
                            </Typography>
                            <ul
                                style={{
                                    padding: "0",
                                    margin: "0",
                                    listStyle: "none",
                                    textAlign: "left",
                                    fontSize: "17px",
                                    fontWeight: "300px"
                                }}>
                                <li
                                    style={{
                                        margin: "10px 0",
                                        cursor: "pointer"
                                    }}>Hizone Watch</li>
                                <li
                                    style={{
                                        margin: "10px 0",
                                        cursor: "pointer"
                                    }}>Giordano Watch</li>
                                <li
                                    style={{
                                        margin: "10px 0",
                                        cursor: "pointer"
                                    }}>Romex Watch</li>
                                <li
                                    style={{
                                        margin: "10px 0",
                                        cursor: "pointer"
                                    }}>Smart Watches</li>
                                <li
                                    style={{
                                        margin: "10px 0",
                                        cursor: "pointer"
                                    }}>Philippe Watches</li>
                            </ul>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
  );
};

export default Footer;