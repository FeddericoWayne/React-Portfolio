// imports react and App components
import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Project from './components/Project';
import Navigation from './components/Navigation';

function App() {

  const [ currentView,setCurrentView ] = useState('about');

  const renderProject = () => {
    if (currentView === 'about') {
      return <Project currentView="about" />
    };
    if (currentView === 'portfolio') {
      return <Project currentView="portfolio" />
    };
    if (currentView === 'contact') {
      return <Project currentView="contact" />
    };
    if (currentView === 'resume') {
      return <Project currentView="resume" />
    };

  }

  const handlePageDisplay = (view) => setCurrentView(view);

  return (
    <div>
      <Header />
      <Navigation currentView={currentView} handlePageDisplay={handlePageDisplay}/>
      {renderProject()}
      <Footer />
    </div>
  )
}

export default App;
