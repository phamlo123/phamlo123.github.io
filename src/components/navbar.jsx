import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Menu from "@mui/icons-material/Menu";
import { Link } from 'react-scroll';

export default function Navbar({navItems}) {
    return (
        <AppBar position="sticky" sx={{ p: 1 }}>
            <Toolbar>
                <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
                    <IconButton
                        color="inherit"
                        sx={{ mr: 2, display: { sm: 'none' } }}
                        aria-label="open drawer"
                    >
                        <Menu sx={{ fontSize: 30 }} />
                    </IconButton>
                </Box>

                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                    {navItems.map((item) => (
                        <Button key={item.name}>
                            <Link activeClass="active" to={item.to} spy={true} smooth={true} duration={500} offset={-100}>
                                <Typography color={'white'}> {item.name} </Typography>
                            </Link>
                        </Button>
                    ))}
                </Box>
            </Toolbar>
        </AppBar>
    );
}