import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Divider from "@mui/material/Divider";
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea, Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box";
import playlist from "../assets/playlist.png";


const PROJECTS = [
    {
        id: 1,
        title: "Social Playlist Maker",
        content: "A social web application for music enthusiast to create and share their playlists with others.",
        image: playlist,
        link: "https://rate-my-playlists.netlify.app/",
    },
    {
        id: 2,
        title: "Atari Tennis AI agent",
        content: "as",
        image: "img",
        link: ""
    },
    {
        id: 4,
        title: "VIX predictor",
        content: "as",
        image: "img",
        link: "https://github.com/phamlo123/VIXModel"
    },
    {
        id: 3,
        title: "Co-oping",
        content: "as",
        image: "img",
        link: "https://github.com/phamlo123/coping_backend"
    },
    {
        id: 5,
        title: "Concensus Distributed System with Raft Algorithm",
        content: "as",
        image: "img",
        link: "https://github.com/phamlo123/CS3700/tree/master/p6"
    },
    {
        id: 5,
        title: "Foundher - Job Application Site",
        content: "as",
        image: "img",
        link: ""
    }

]
const Item = styled(Box)(({ theme }) => ({
    textAlign: 'center',
}));

export const Project = () => {
    const status = 1;

    return(
        <Box>
            <Box sx={{ display: 'flex', alignItems: 'center', height: "90%", width: "100%" }}
                justifyContent="center">
                <Stack direction="column" width="100%">
                    <Stack
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Item><Typography variant="h5" color="#A9A9A9"> </Typography></Item>
                        <Item><Typography variant="h5"> Apps I've built </Typography></Item>
                    </Stack>
                    <Divider />
                    <Box sx={{ width: "100%", paddingTop: "5vh", paddingBottom: "5vh", minWidth: "320px" }}>
                        <Grid container spacing={3} columns={{ xs: 4, sm: 6, md: 12 }}>
                            {PROJECTS.map(item =>
                                <Grid item xs={6}>
                                    <CardActionArea sx={{ margin: "auto", height: "100%", minWidth: "300px" }}
                                        href={item.link}
                                        target="_blank">
                                        <Card sx={{ height: "100%", minWidth: "300px" }}>
                                            <CardMedia
                                                component="img"
                                                height="250"
                                                image={item.image}
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h6" component="div">
                                                    {item.title}
                                                </Typography>
                                                <Typography variant="subtitle2" sx={{ height: "100%" }} color="text.secondary">
                                                    {item.content}
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </CardActionArea>
                                </Grid>
                            )}
                        </Grid>
                    </Box>
                </Stack>
            </Box>
        </Box>
    );
}