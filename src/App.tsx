import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Ifoster from './pages/Ifoster';
import Grow from './pages/Grow';
import Create from './pages/Create';
import Build from './pages/Build';
import Channels from './pages/Channels';
import Music from './pages/Music';
import CloneDigital from './pages/CloneDigital';
import YoutubeGrowth from './pages/YoutubeGrowth';
import ConversionPopup from './components/ConversionPopup';

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.hash || '#home');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayPath, setDisplayPath] = useState(currentPath);

  useEffect(() => {
    const handleHashChange = () => {
      const newHash = window.location.hash || '#home';
      
      // Normalize prefixes
      let baseHash = newHash;
      if (newHash.startsWith('#create')) baseHash = '#create';
      if (newHash.startsWith('#build')) baseHash = '#build';
      if (newHash.startsWith('#grow')) baseHash = '#grow';
      
      if (baseHash !== currentPath) {
        setIsTransitioning(true);
        setTimeout(() => {
          setCurrentPath(baseHash);
          setDisplayPath(baseHash);
          
          if (newHash.includes('-')) {
             const elementId = newHash.split('-')[1];
             setTimeout(() => {
               const el = document.getElementById(elementId);
               if (el) el.scrollIntoView({ behavior: 'smooth' });
             }, 100);
          } else {
             window.scrollTo(0, 0);
          }
          
          setIsTransitioning(false);
        }, 200);
      } else if (newHash.includes('-')) {
        const elementId = newHash.split('-')[1];
        const el = document.getElementById(elementId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [currentPath]);

  const renderPage = () => {
    if (displayPath.startsWith('#create')) return <Create />;
    if (displayPath.startsWith('#build')) return <Build />;
    if (displayPath.startsWith('#grow')) return <Grow />;
    
    switch (displayPath) {
      case '#gestao-youtube': return <YoutubeGrowth />;
      case '#clone-digital': return <CloneDigital />;
      case '#ifoster': return <Ifoster />;
      case '#canais': return <Channels />;
      case '#musica': return <Music />;
      case '#home':
      default: return <Home />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col relative bg-f-black text-f-mint font-body">
      <Navbar currentPath={currentPath} />
      <main 
        className={`flex-grow transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isTransitioning ? 'opacity-0 -translate-y-5' : 'opacity-100 translate-y-0'
        }`}
      >
        {renderPage()}
      </main>
      <Footer />
      <ConversionPopup />
    </div>
  );
}