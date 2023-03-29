import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Divider from "@mui/material/Divider";
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box";

const PROJECTS = [
    {
        id: 1,
        title: "Social Playlist Maker",
        content: "as",
        image: "img",
        link: ""
    },
    {
        id: 2,
        title: "Atari Tennis AI agent",
        content: "as",
        image: "img",
        link: ""
    },
    {
        id: 3,
        title: "Co-oping",
        content: "as",
        image: "img",
        link: ""
    },
    {
        id: 4,
        title: "VIX predictor",
        content: "as",
        image: "img",
        link: ""
    },

    {
        id: 5,
        title: "Concensus Distributed System with Raft Algorithm",
        content: "as",
        image: "img",
        link: ""
    },

    {
        id: 5,
        title: "Foundher - Job Application Site",
        content: "as",
        image: "img",
        link: ""
    }

]

export const Project = () => {
    const status = 1;

    return(
    <div>
        <Box>
            <Grid container spacing={3} columns={{ xs: 4, sm: 6, md: 12 }}>
                {PROJECTS.map(item => 
                    <Grid item xs={8}>
                        <CardActionArea sx={{ margin: "auto", height: "100%", minWidth: "300px" }}>
                            href={item.link}
                            <Card sx={{ height: "100%", minWidth: "400px" }}>
                                <CardMedia component="img" height="250" image={item.img}/> 
                                <CardContent> 
                                    <Typography gutterBottom  component="div"> {item.title} </Typography>
                                    <Typography sx={{ height: "100%" }} color="text.secondary"> {item.content} </Typography>
                                </CardContent>
                            </Card>
                        </CardActionArea>
                    </Grid>
                )}
            </Grid>
        </Box>
    </div>)

}