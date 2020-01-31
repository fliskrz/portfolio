import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Technologies from './components/Technologies';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Hobbies from './components/Hobby';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='container'>
        <About/>
        <Education/>
        <Technologies/>
        <Experience/>
        <Projects/>
        <Hobbies/>
      </div>
      <Footer/>      
    </div>
  );
}

export default App;
