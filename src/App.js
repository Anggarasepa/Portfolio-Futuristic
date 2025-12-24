import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './styles/main.css';
import './styles/animations.css';

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile on mount and resize
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className={`app ${isMobile ? 'mobile' : 'desktop'}`}>
      {/* Floating Background Shapes */}
      <div className="floating-shapes">
        {[...Array(8)].map((_, i) => (
          <div key={i} className={`shape shape-${i % 4}`}></div>
        ))}
      </div>
      
      {/* Particles Container */}
      <div id="particles-js" className="particles-loading"></div>
      
      {/* Main Content */}
      <Header />
      <Hero />
      <Projects />
      <Contact />
      
      {/* Scroll to Top Button - Show only on desktop or based on scroll */}
      <button 
        className="scroll-top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scroll to top"
      >
        ↑
      </button>
    </div>
  );
}

export default App;