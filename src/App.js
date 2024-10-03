import React from 'react';
import './index.css';
import { HashRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import PageTransitionWrapper from './components/PageTransitionWrapper';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <PageTransitionWrapper />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
