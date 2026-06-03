import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import RevenueSystems from './pages/RevenueSystems';
import Solutions from './pages/Solutions';
import About from './pages/About';
import Contact from './pages/Contact';
import { PhoneCall } from 'lucide-react';

function App() {
  const [currentRoute, setCurrentRoute] = useState('#home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash || '#home';
      setCurrentRoute(hash);
      window.scrollTo(0, 0);
      setIsMobileMenuOpen(false);
    };

    // Initialize route on load
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (hash) => {
    window.location.hash = hash;
  };

  const renderPage = () => {
    switch (currentRoute) {
      case '#home':
        return <Home navigateTo={navigateTo} />;
      case '#revenue-systems':
        return <RevenueSystems navigateTo={navigateTo} />;
      case '#solutions':
        return <Solutions navigateTo={navigateTo} />;
      case '#about':
        return <About navigateTo={navigateTo} />;
      case '#contact':
        return <Contact navigateTo={navigateTo} />;
      default:
        return <Home navigateTo={navigateTo} />;
    }
  };

  return (
    <div className="app-container">
      <Navbar 
        currentRoute={currentRoute} 
        navigateTo={navigateTo} 
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      
      <main style={{ flex: 1, position: 'relative', width: '100%' }}>
        {renderPage()}
      </main>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/916301667440" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="whatsapp-float"
        aria-label="Chat on WhatsApp"
      >
        <svg 
          viewBox="0 0 24 24" 
          width="24" 
          height="24" 
          stroke="currentColor" 
          strokeWidth="2" 
          fill="none" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
        >
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
        </svg>
      </a>

      <Footer navigateTo={navigateTo} />
    </div>
  );
}

export default App;
