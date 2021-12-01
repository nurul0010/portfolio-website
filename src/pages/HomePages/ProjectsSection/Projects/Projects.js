import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import moto from '../../../../Coventic Webpage images/motovillage.PNG';
import orange from '../../../../Coventic Webpage images/eorange.PNG';
import portal from '../../../../Coventic Webpage images/doctors.PNG';
import { Button, CardActionArea, CardActions } from '@mui/material';


const Projects = () => {
    return (
        <div style={{ width: "100%", height: "auto", backgroundColor: "#34495e" }}>
            <div style={{ padding: '100px' }}>
                <h2 style={{ fontWeight: 'bold', color: 'white' }}>MY PROJECTS</h2>
                <h5 style={{ marginBottom: "40px", color: 'white', letterSpacing: '1.2px' }}>Hare are few projects that i have build recently</h5>
                <div>
                    <Box style={{ maxWidth: "80%", margin: "auto" }} sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={4}>
                                <Card sx={{ maxWidth: 345, p: 2 }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            image={moto}
                                            alt="green iguana"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                Moto Village
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                This website is a full stack website base on MERN.Technologies - React Js Node Js Express MongoDB Material UI Css React-Router Firebase Heroku
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <a target="_blank" rel="noreferrer" href="https://moto-village.web.app/"><Button size="small" color="primary">
                                            Live
                                        </Button></a>
                                        <a target="_blank" rel="noreferrer" href="-https://github.com/nurul0010/moto-village-website"><Button size="small" color="primary">
                                            Front Code
                                        </Button></a>
                                        <a target="_blank" rel="noreferrer" href="https://github.com/nurul0010/moto-village-web-server"><Button size="small" color="primary">
                                            Server Code
                                        </Button></a>
                                    </CardActions>
                                </Card>
                            </Grid>
                            <Grid item xs={12} md={4}>

                                <Card sx={{ maxWidth: 345, p: 2 }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            image={orange}
                                            alt="green iguana"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                E Orange Shopping
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                This website a simple calculation related website.Hare i am trying to build the cart added and live calculation system.Technologies- Html,Css,Bootstrap,Vanilla Javascript
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <a target="_blank" rel="noreferrer" href="https://stupefied-engelbart-82c2a7.netlify.app/"><Button size="small" color="primary">
                                            Live
                                        </Button></a>
                                        <a target="_blank" rel="noreferrer" href="https://github.com/nurul0010/e-orangeshopping-web-assi7"><Button size="small" color="primary">
                                            Code
                                        </Button></a>
                                    </CardActions>
                                </Card>

                            </Grid>
                            <Grid item xs={12} md={4}>

                                <Card sx={{ maxWidth: 345, p: 2 }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            image={portal}
                                            alt="green iguana"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                Doctors Portal
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                This website is a full stack website base on MERN.Technologies - React Js Node Js Express MongoDB Material UI Css React-Router Firebase Heroku
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <a target="_blank" rel="noreferrer" href="https://doctors-portal-1059b.web.app/home"><Button size="small" color="primary">
                                            Live
                                        </Button></a>
                                        <a target="_blank" rel="noreferrer" href="https://github.com/nurul0010/doctors-portal-clientside"><Button size="small" color="primary">
                                            Front Code
                                        </Button></a>
                                        <a target="_blank" rel="noreferrer" href="https://github.com/nurul0010/doctors-portal-serverside"><Button size="small" color="primary">
                                            Server Code
                                        </Button></a>
                                    </CardActions>
                                </Card>

                            </Grid>
                        </Grid>
                    </Box>
                </div>
            </div>
        </div>
    );
};

export default Projects;