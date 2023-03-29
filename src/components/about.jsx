
import Box from "@mui/material/Box";
import { Stack } from "@mui/material";
import React from "react";
import Typography from "@mui/material/Typography";

export const About = () => {
    return(
<Box sx={{ display: 'flex', alignItems: 'center', minHeight: "100vh", width: "80%", margin: "auto" }}
justifyContent="center">
<Stack>
    <Stack direction="column" spacing={2} sx={{ padding: "40px" }}>
        <Typography variant="subtitle1">Thank you for visiting my page. My name is</Typography>
        <Typography variant="heroName">Long (Terence) Pham</Typography>
        <Typography>I am a fullstack software developer. My goal is to foster the application of technology to improve productivity and living standard of people around the world. 
            During my time at Northeastern University as a Computer Science major, I have taken courses in Object Oriented Design, Database, Computer Systems, Networks, Distributed System, Artificial Intelligence, and more.
        </Typography>
        <Typography sx={{ width: "70%", minWidth: "320px", height: "auto" }} variant="subtitle2">
             
            
            I am excited to discuss any employment opportunities.
        </Typography>
    </Stack>
    <Box>
        <Box
            component="img"
            sx={{
                maxWidth: "320px",
                width: "300px",
                height: "300px",
                objectFit: "cover",
                borderRadius: "50%",
            }}
            alt="Portrait"
        />
    </Box>
</Stack>
</Box>
    )
}