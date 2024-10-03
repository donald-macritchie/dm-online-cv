import React from 'react';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import PageTransitionWrapper from './components/PageTransitionWrapper';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        {/* The page transitions are handled inside PageTransitionWrapper */}
        <PageTransitionWrapper />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
