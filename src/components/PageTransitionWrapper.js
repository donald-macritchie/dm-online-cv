import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import Home from './Home/Home';
import Projects from './Projects/Projects';
import About from './About/About';
import Contact from './Contact/Contact';
import Skills from './Skills/Skills';

const PageTransitionWrapper = () => {
  const location = useLocation();

  return (
    <div className="relative flex-grow">
      <SwitchTransition>
        <CSSTransition
          key={location.key}       // Use location key for transitions
          classNames="fade"         // CSS class prefix for animations
          timeout={500}             // Duration of animation
          unmountOnExit             // Unmounts the previous component on exit
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
};

export default PageTransitionWrapper;
