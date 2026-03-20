import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { openContactModal } from '../utils/contactEvents';

export default function Navbar({ currentPath }: { currentPath: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* Barra de Navegação Superior */}
      <div className={`h-[68px] transition-all duration-300 ${
        scrolled ? 'bg-f-black/90 backdrop-blur-xl border-b border-f-neon/15' : 'bg-f-black/85 backdrop-blur-xl border-b border-f-neon/5'
      }`}>
        <div className="max-w-7xl mx-auto px-5 md:px-8 h-full flex items-center justify-between">
          
          {/* Left: Logo */}
          <div className="flex items-center gap-4">
            <a href="#home" className="block">
              <img 
                src="/Company branco.png" 
                alt="Foster Company" 
                className="h-7 md:h-8 w-auto object-contain"
              />
            </a>
            <span className="text-f-neon/20 hidden sm:inline">|</span>
            <span className="font-mono text-[10px] text-f-mint/40 uppercase hidden sm:inline tracking-widest">
              Creative AI Studio
            </span>
          </div>

          {/* Center: Desktop Links */}
          <div className="hidden lg:flex items-center gap-6">
            <a href="#home" className={`text-[13px] transition-colors duration-200 ${currentPath === '#home' ? 'text-f-neon' : 'text-f-mint/65 hover:text-f-neon'}`}>{t('nav_home')}</a>
            <a href="#gestao-youtube" className={`text-[13px] transition-colors duration-200 ${currentPath === '#gestao-youtube' ? 'text-f-neon' : 'text-f-mint/65 hover:text-f-neon'}`}>{t('nav_yt_growth')}</a>
            <a href="#build" className={`text-[13px] transition-colors duration-200 ${currentPath === '#build' ? 'text-f-neon' : 'text-f-mint/65 hover:text-f-neon'}`}>{t('nav_sites')}</a>
            <a href="#clone-digital" className={`text-[13px] transition-colors duration-200 ${currentPath === '#clone-digital' ? 'text-f-neon' : 'text-f-mint/65 hover:text-f-neon'}`}>{t('nav_clone_digital')}</a>
            <a href="#lab" className={`text-[13px] transition-colors duration-200 ${currentPath === '#lab' ? 'text-f-neon' : 'text-f-mint/65 hover:text-f-neon'}`}><span className="text-f-neon/40">/</span> lab</a>
          </div>

          {/* Right: CTAs */}
          <div className="hidden lg:flex items-center gap-5">
            <button 
              onClick={openContactModal} 
              className="bg-f-neon text-f-black font-display font-semibold rounded-full px-5 py-2.5 text-sm hover:glow-neon transition-all duration-300 cursor-pointer"
            >
              {t('nav_cta')} →
            </button>
          </div>

          {/* Mobile Toggle */}
          <button className="lg:hidden text-f-neon cursor-pointer p-2" onClick={() => setMobileMenuOpen(true)}>
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[1000] flex justify-end bg-black/60 backdrop-blur-sm h-screen">
          <div className="w-[75%] max-w-[300px] bg-f-black h-full border-l border-f-neon/20 p-8 flex flex-col overflow-y-auto shadow-2xl">
            <div className="flex justify-between items-center mb-10 pt-4">
              <img 
                src="/Company branco.png" 
                alt="Foster Company" 
                className="h-5 w-auto object-contain"
              />
              <button onClick={() => setMobileMenuOpen(false)} className="text-f-neon cursor-pointer p-2">
                <X size={24} />
              </button>
            </div>
            
            <div className="flex flex-col gap-6 text-lg font-display mt-4">
              <a href="#home" onClick={() => setMobileMenuOpen(false)} className={`block w-full transition-colors ${currentPath === '#home' ? 'text-f-neon' : 'text-f-mint'}`}>{t('nav_home')}</a>
              <a href="#gestao-youtube" onClick={() => setMobileMenuOpen(false)} className={`block w-full transition-colors ${currentPath === '#gestao-youtube' ? 'text-f-neon' : 'text-f-mint'}`}>{t('nav_yt_growth')}</a>
              <a href="#build" onClick={() => setMobileMenuOpen(false)} className={`block w-full transition-colors ${currentPath === '#build' ? 'text-f-neon' : 'text-f-mint'}`}>{t('nav_sites')}</a>
              <a href="#clone-digital" onClick={() => setMobileMenuOpen(false)} className={`block w-full transition-colors ${currentPath === '#clone-digital' ? 'text-f-neon' : 'text-f-mint'}`}>{t('nav_clone_digital')}</a>
              <a href="#lab" onClick={() => setMobileMenuOpen(false)} className={`block w-full transition-colors ${currentPath === '#lab' ? 'text-f-neon' : 'text-f-mint'}`}><span className="text-f-neon/40">/</span> lab</a>
            </div>

            <div className="h-px w-full bg-f-neon/10 my-8"></div>
            
            <div className="mt-auto pb-6">
              <button 
                onClick={() => { setMobileMenuOpen(false); openContactModal(); }} 
                className="block w-full text-center bg-f-neon text-f-black font-display font-bold rounded-xl px-5 py-4 text-md hover:glow-neon transition-all duration-300 cursor-pointer"
              >
                {t('nav_cta')}
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}