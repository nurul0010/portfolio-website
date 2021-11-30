import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import profile from '../../../Coventic Webpage images/profile-01.png';
import Typography from '@mui/material/Typography';

const About = () => {
    return (
        <div style={{ background: '#2ecc71', width: '100%', height: 'auto' }}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item md={6} sm={12}>
                        <img style={{ width: '400px' }} src={profile} alt="" />
                    </Grid>
                    <Grid style={{ display: 'flex', alignItems: 'center', padding: '80px' }} item md={6} sm={12}>

                        <div>
                            <Typography variant="h3" gutterBottom component="div">
                                MD NURUL HUDA
                            </Typography>
                            <Typography variant="h6" gutterBottom component="div">
                                Front-End Web Developer
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                I worked for over a year on frontend web development and have knowledge about modern SPA website. I am an expert in MongoDB, Express, React, Node js (MERN). I am good at learning new things and am also a quick learner.

                            </Typography>
                        </div>

                    </Grid>
                </Grid>
            </Box>
        </div>
    );
};

export default About;