import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Ifoster from './pages/Ifoster';
import Grow from './pages/Grow';
import Create from './pages/Create';
import Build from './pages/Build';
import Production from './pages/Production';
import Platforms from './pages/Platforms';
import Channels from './pages/Channels';
import Music from './pages/Music';
import ConversionPopup from './components/ConversionPopup';

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.hash || '#home');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayPath, setDisplayPath] = useState(currentPath);

  useEffect(() => {
    const handleHashChange = () => {
      const newHash = window.location.hash || '#home';
      if (newHash !== currentPath) {
        setIsTransitioning(true);
        setTimeout(() => {
          setCurrentPath(newHash);
          setDisplayPath(newHash);
          window.scrollTo(0, 0);
          setIsTransitioning(false);
        }, 200);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [currentPath]);

  const renderPage = () => {
    switch (displayPath) {
      case '#ifoster': return <Ifoster />;
      case '#grow': return <Grow />;
      case '#create': return <Create />;
      case '#build': return <Build />;
      case '#production': return <Production />;
      case '#plataformas': return <Platforms />;
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
