import React from 'react';
import './App.css';
import About from './component/About';
import Contact from './component/Contact';
import Project from './component/Projects';
import Header from './component/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Project />
      <Contact />
    </div>
  );
}

export default App;

