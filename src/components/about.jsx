
import Box from "@mui/material/Box";
import { Stack } from "@mui/material";
import React from "react";
import Typography from "@mui/material/Typography";
import me from "../assets/me.jpeg";


const About = () => {
    return(
    <Box sx={{ display: 'flex', alignItems: 'center', width: "80%", margin: "auto" }}
        justifyContent="center" id="About">
    <Stack>
        <Stack direction="column" spacing={2} sx={{ padding: "40px" }}>
            <Typography variant="h6">Thank you for visiting my page. My name is</Typography>
            <Typography variant="h4" >Long (Terence) Pham</Typography>
            <Typography>I am a fullstack software developer. My goal is to foster the application of technology to improve productivity and living standard of people around the world. 
                During my time at Northeastern University as a Computer Science major, I have taken courses in Object Oriented Design, Database, Computer Systems, Networks, Distributed System, Artificial Intelligence, and more.
            </Typography>
            <Typography variant="subtitle2">
                I am excited to discuss any employment opportunities.
            </Typography>
        </Stack>
        <Box>
            <Box
                component="img"
                src={me}
                sx={{
                    maxWidth: "350px",
                    width: "350px",
                    height: "350px",
                    objectFit: "cover",
                    borderRadius: "50%",
                }}
                alt="Portrait"/>
            </Box>
    </Stack>
    </Box>
    )
}
export default About;
