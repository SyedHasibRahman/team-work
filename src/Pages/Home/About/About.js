import {Box, Container, Typography} from '@mui/material';
import Grid from '@mui/material/Grid';
import React from 'react';

const About = () => {
  return (
    <Box style={{backgroundColor:"#f3e0ca", padding:"30px 0"}}>
            <Container>
                <Box>
                    <Typography variant="subtitle1" gutterBottom="gutterBottom" component="div" fontWeight="500" fontSize="20px">
                        NEW ERA OF YOUR TIME
                    </Typography>
                    <Typography variant="h4" gutterBottom="gutterBottom" component="div" fontWeight="600" fontSize="36px">
                        Super Luxury, Super Watches
                    </Typography>
                    <Grid container="container" spacing={2} style={{display:"flex", justifyContent:"center", alignItems:"center", padding:"20px 0"}}>
                        <Grid item="item" xs={12} md={4} xl={4} textAlign="left">
                            <Typography variant="h6" gutterBottom="gutterBottom" component="div" fontSize="24px">
                                Accurate Watch
                            </Typography>
                            <Typography variant="body2" gutterBottom="gutterBottom" fontSize="18px">
                                Quisque sed lectus rhoncus, auctor dui sed, mattis metus. Donec ac quam eu sem
                                blandit tincidunt ut nec lectus. Nunc et consequat mi. Duis et justo sedt porta
                                lobortis sit amet nec turpis. Nam fringill.
                            </Typography>
                        </Grid>
                        <Grid item="item" xs={12} md={4} xl={4}>
                          <Box height="465px">
                            <img style={{width:"100%", height:"100%", objectFit:"contain"}} src="https://cdn.shopify.com/s/files/1/2496/9194/files/img4_793904ac-dcfd-41c0-87d9-67f40c1fa0a6_800x.jpg?v=1510127673" alt=""></img>
                          </Box>
                        </Grid>
                        <Grid item="item" xs={12} md={4} xl={4}>
                          <ul style={{padding: "0",margin:"0", listStyle:"none", textAlign:"left", fontSize:"20px"}}>
                            <li style={{margin:"10px 0"}}>Stainless Steel</li>
                            <li style={{margin:"10px 0"}}>Sapphire glass</li>
                            <li style={{margin:"10px 0"}}>Quartz movement</li>
                            <li style={{margin:"10px 0"}}>Water resistance</li>
                            <li style={{margin:"10px 0"}}>Beautiful Finish</li>
                          </ul>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
  );
};

export default About;