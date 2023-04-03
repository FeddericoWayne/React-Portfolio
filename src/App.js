// imports react and App components
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Project from './components/Project';
import Navigation from './components/Navigation';

function App() {

  return (
    <div>
      <Header />
      <Navigation />
      <Project />
      <Footer />
    </div>
  )
}

export default App;
