import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Project } from './components/project';
import { About } from './components/about';
import { Experience } from './components/experience';
function App() {
  return (
    <div className="App">
      <About/>
      <Experience/>
      <Project/>
    </div>
  );
}

export default App;
