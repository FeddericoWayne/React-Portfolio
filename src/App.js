// imports react and react components
import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Project from './components/Project';
import Navigation from './components/Navigation';

// exports App component
export default function App() {

  // sets the default page upon page load
  const [ currentView,setCurrentView ] = useState('about');

  // function to render components depending on the state of currentView
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

  // function that sets currentView
  const handlePageDisplay = (view) => setCurrentView(view);

  return (
    <div>
      <Header />
      <Navigation currentView={currentView} handlePageDisplay={handlePageDisplay}/>
      {renderProject()}
      <Footer />
    </div>
  )
};

