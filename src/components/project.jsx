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
import tennis from "../assets/tennis.gif";
import vixx from "../assets/vixx.png";
import raft from "../assets/raft.png";
import foundher from "../assets/foundh.gif";
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
        content: "A reinforment learning agent that plays the Atari tennis game using the Arcade Learning Environment provided by OpenAI Gym. Approximate Q-learning is applied to train our agent through a large number of round iterations. Ultimately achieved a win-rate of 5% against principle agent and an average of 3 ball hits per game.",
        image: tennis,
        link: "https://github.com/phamlo123/tennis"
    },
    {
        id: 4,
        title: "VIX predictor",
        content: "The paper proposes a new way to estimate realized variance by combining the advantage the VIX provides and Machine learning model derived from historical option data. It includes new algorithm for selecting options for each trading day to be included in the calculation of synthetic VIX, as well as features for the ML model. Specifically, 30 realized variance is calculated for every trading day from 1996 to 2020 (using SPX spot price) and this will serve as lablels for our model. Each trading day is an observation in our model. And finally, the selected options for each trading day will be aggregated and standardized to be used as features in our model",
        image: vixx,
        link: "https://github.com/phamlo123/VIXModel"
    },
    {
        id: 5,
        title: "Foundher - Job Application Site",
        content: "A job application website tailored for employment-seeking women in India. The website focuses on applicants' needs and compatability with their prospective workplaces, and matches jobs based on similarity score calculated with TFIDF (Natural Language Processing).",
        image: foundher,
        link: ""
    },
    {
        id: 3,
        title: "Co-oping",
        content: "A web application for Northeastern students to annonymously review their co-op experiences, and interacting with each other through topic postings.",
        image: "img",
        link: "https://github.com/phamlo123/coping_backend"
    },
    {
        id: 5,
        title: "Concensus Distributed System with Raft Algorithm",
        content: "A distributed key-value store utilizing Raft Algorithm",
        image: raft,
        link: "https://github.com/phamlo123/CS3700/tree/master/p6"
    },


]
const Item = styled(Box)(({ theme }) => ({
    textAlign: 'center',
}));

const Project = () => {

    return(
        <Box id="Project">
            <Box sx={{ display: 'flex', alignItems: 'center', height: "90%", width: "100%" }}
                justifyContent="center">
                <Stack direction="column" width="100%">
                    <Stack
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Item><Typography align="left" variant="h5"> Apps I've built </Typography></Item>
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
                                                height="350"
                                                image={item.image}
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h6" component="div">
                                                    {item.title}
                                                </Typography>
                                                <Typography variant="subtitle2" sx={{ height: "70%" }} color="text.secondary">
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

export default Project;