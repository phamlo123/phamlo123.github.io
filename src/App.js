import './App.css';
import React from 'react';
import Project from './components/project';
import About from './components/about';
import Experience from './components/experience';
import { Box, Stack} from '@mui/material';
import Navbar from './components/navbar';

function App() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box className="App">
        <Navbar navItems={[
            { name: 'About', to: 'About' },
            { name: 'Experience', to: 'experience'},
            { name: 'Projects', to: "Project" }]} />
        <About/>
        <Experience/>
        <Project/>
    </Box>
  );
}

export default App;
