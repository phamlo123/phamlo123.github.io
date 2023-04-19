import { Box, Divider, Typography } from "@mui/material"
import React from "react"
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Padding } from "@mui/icons-material";

const EXPERIENCE = [
    {
        id: 1,
        title: "Software Technical Lead @ Northeastern Generate Build Studio",
        company: "Northeastern Generate Build Studio",
        location: "Boston, MA",
        period: "Dec. 2022 - present",
        description: [
            "- Leading a team of 6 engineers to develop a women-centric job application platform that empowers women in India to search for employment; featuring a job-applicant matching algorithm inputting from user survey response to enhance compatibility.",
            "- Guiding team development progress through ticket assignments, mentoring, and pair-programming.",
            "- Utilizing Python FastAPI, SQLAlchemy, PostgreSQL, React Typescript, Redux, and Docker for application development."
        ]
    },
    {
        id: 2,
        title: "Software Engineer @ Northeastern Generate Build Studio",
        company: "Northeastern Generate Build Studio",
        location: "Boston, MA",
        period: "Sep. 2022 - Dec. 2022",
        description: [
            "- Worked with a team of 5 engineers to build a full-stack mobile platform facilitating customer loyalty program through education on brand's story for sustainable small businesses on Shopify.",
            "- Applied Agile methodologies for development in Node.js, GraphQL, React, PostgreSQL, and Docker."
        ]
    },
    {
        id: 3,
        title: "Software Development Co-op @ Smartleaf Inc.",
        company: "Smartleaf Inc.",
        location: "Boston, MA",
        period: "Jan. - Jun. 2022",
        description: [
            "- Utilized Ruby on Rails for backend development to improve the efficiency of the application internal logic and to create better workflows for users.",
            "- Led the technical design and implementation of four new RESTful API endpoints used by client firms to aid our customization portfolio targets for upwards of one million accounts.",
            "- Spearheaded initiatives to improve performance of three API endpoints through parallelization and bulk insertion, resulting in approximately 2 to 5 times reduction in the endpoints processing time.",
            "- Improved the application infrastructure through bug fixes and addition of monitors, notably developing new dequeue queries to resolve daemon contentions in our internal queueing processor.",
            "- Collaborated with other developers through conducting code review and pair programming.",
            "- Participated in the application database transition efforts from Oracle to Postgres."
        ]
    },
    {
        id: 4,
        title: "Derivative Analyst Co-op @ John Hancock/Manulife Financial",
        company: "John Hancock/Manulife Financial",
        location: "Boston, MA",
        period: "Jan. - Jun. 2020",
        description: [
            "- Processed daily initial and variable margin calls for Cleared, Bilateral Swaps, and Futures products between counterparties and Manulife, collaborated with brokers and custodians to ensure end-of-day trade settlements.",
            "- Designed automated spreadsheets managing Initial Margin requirements for Cleared Products that offsets collateral value differences, enhances efficiency, and eliminates calculation errors, saving 45 minutes on a daily task.",
            "- Programmed VBA models to streamline daily enterprise-wide collateral summary reports and investigated discrepancy."
        ]
    }

]

const Item = (exp) => {
    return (
        <div>
            {exp.description}
        </div>
    )
}

const Experience = () => {
    return (
        <Box id="experience">
            <Typography sx={{paddingTop: "20px"}} variant="h4"> Experience </Typography>
            <Divider />
            <Typography align="left" variant="h6"> Software Technical Lead @ Northeastern Generate Build Studio </Typography> 
            <List>
                <ListItem sx={{padding: "1px"}}> - Leading a team of 6 engineers to develop a women-centric job application platform that empowers women in India to search for employment; featuring a job-applicant matching algorithm inputting from user survey response to enhance compatibility. </ListItem>
                <ListItem sx={{padding: "1px"}}> - Guiding team development progress through ticket assignments, mentoring, and pair-programming. </ListItem>
                <ListItem sx={{padding: "1px"}}> - Utilizing Python FastAPI, SQLAlchemy, PostgreSQL, React Typescript, Redux, and Docker for application development. </ListItem>
            </List>
            
            <Typography align="left" variant="h6"> Software Engineer @ Northeastern Generate Build Studio </Typography> 
            <List >
                <ListItem sx={{padding: "1px"}}> - Worked with a team of 5 engineers to build a full-stack mobile platform facilitating customer loyalty program through education on brand's story for sustainable small businesses on Shopify. </ListItem>
                <ListItem sx={{padding: "1px"}}> - Applied Agile methodologies for development in Node.js, GraphQL, React, PostgreSQL, and Docker. </ListItem>
            </List>

            <Typography align="left" variant="h6"> Software Development Co-op @ Smartleaf Inc. </Typography> 
            <List>
                <ListItem sx={{padding: "1px"}}> - Utilized Ruby on Rails for backend development to improve the efficiency of the application internal logic and to create better workflows for users. </ListItem>
                <ListItem sx={{padding: "1px"}}> - Led the technical design and implementation of four new RESTful API endpoints used by client firms to aid our customization portfolio targets for upwards of one million accounts. </ListItem>
                <ListItem sx={{padding: "1px"}}> - Spearheaded initiatives to improve performance of three API endpoints through parallelization and bulk insertion, resulting in approximately 2 to 5 times reduction in the endpoints processing time.</ListItem>
                <ListItem sx={{padding: "1px"}}> - Improved the application infrastructure through bug fixes and addition of monitors, notably developing new dequeue queries to resolve daemon contentions in our internal queueing processor.</ListItem>
                <ListItem sx={{padding: "1px"}}> - Collaborated with other developers through conducting code review and pair programming.</ListItem>
                <ListItem sx={{padding: "1px"}}> - Participated in the application database transition efforts from Oracle to Postgres.</ListItem>
            </List>


            <Typography align="left" variant="h6"> Derivative Analyst Co-op @ John Hancock/Manulife Financial </Typography> 
            <List>
                <ListItem sx={{padding: "1px"}}> - Processed daily initial and variable margin calls for Cleared, Bilateral Swaps, and Futures products between counterparties and Manulife, collaborated with brokers and custodians to ensure end-of-day trade settlements.</ListItem>
                <ListItem sx={{padding: "1px"}}> - Designed automated spreadsheets managing Initial Margin requirements for Cleared Products that offsets collateral value differences, enhances efficiency, and eliminates calculation errors, saving 45 minutes on a daily task.</ListItem>
                <ListItem sx={{padding: "1px"}}> - Programmed VBA models to streamline daily enterprise-wide collateral summary reports and investigated discrepancy.</ListItem>
            </List>

        </Box>
    )
}
export default Experience;