import React from "react"

const EXPERIENCE = [
    {
        id: 1,
        title: "Software Technical Lead",
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
        title: "Software Engineer",
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
        title: "Software Development Co-op ",
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
        title: "Derivative Analyst Co-op",
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


export const Experience = () => {
    return(
        <>
            {EXPERIENCE.map(item => 
            <>
                {item.description}
            </>
            )}
        </>
    )
}