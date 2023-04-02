// imports react and App components
import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Project from './components/Project';
import Navigation from './components/Navigation';

function App() {

  const [ currentView, setCurrentView ] = useState('portfolio');

  const handlePageDisplay = (page) => setCurrentView(page);

  
  return (
    <div>
      <Header currentView={currentView} handlePageDisplay={handlePageDisplay}/>
      <Project currentView={currentView}/>
      <Footer />
    </div>
  )
}

export default App;
