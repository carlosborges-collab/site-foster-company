import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { openContactModal } from '../utils/contactEvents';

export default function Navbar({ currentPath }: { currentPath: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const LangSwitcher = ({ mobile = false }: { mobile?: boolean }) => (
    <div className={`flex flex-row gap-1 bg-f-neon/5 rounded-full p-1 ${mobile ? 'mb-8 justify-center' : ''}`}>
      <button 
        onClick={() => setLanguage('pt')} 
        className={`px-2.5 py-1 rounded-full font-mono text-[11px] transition-all duration-200 ${language === 'pt' ? 'bg-f-neon/15 text-f-neon border border-f-neon/30' : 'text-f-mint/40 hover:text-f-mint/80 border border-transparent cursor-pointer'}`}
      >
        🇧🇷 PT
      </button>
      <button 
        disabled
        title="Em breve"
        className="px-2.5 py-1 rounded-full font-mono text-[11px] text-f-mint/20 border border-transparent cursor-not-allowed opacity-40"
      >
        🇪🇸 ES
      </button>
      <button 
        disabled
        title="Coming soon"
        className="px-2.5 py-1 rounded-full font-mono text-[11px] text-f-mint/20 border border-transparent cursor-not-allowed opacity-40"
      >
        🇺🇸 EN
      </button>
    </div>
  );

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
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className={`text-[14px] transition-colors duration-200 ${currentPath === '#home' ? 'text-f-neon' : 'text-f-mint/65 hover:text-f-neon'}`}>{t('nav_home')}</a>
            <a href="#gestao-youtube" className={`text-[14px] transition-colors duration-200 ${currentPath === '#gestao-youtube' ? 'text-f-neon' : 'text-f-mint/65 hover:text-f-neon'}`}>{t('nav_yt_growth')}</a>
            <a href="#build" className={`text-[14px] transition-colors duration-200 ${currentPath === '#build' ? 'text-f-neon' : 'text-f-mint/65 hover:text-f-neon'}`}>{t('nav_sites')}</a>
            <a href="#clone-digital" className={`text-[14px] transition-colors duration-200 ${currentPath === '#clone-digital' ? 'text-f-neon' : 'text-f-mint/65 hover:text-f-neon'}`}>{t('nav_clone_digital')}</a>
          </div>

          {/* Right: CTAs & Social */}
          <div className="hidden md:flex items-center gap-5">
            <LangSwitcher />
            <button 
              onClick={openContactModal} 
              className="bg-f-neon text-f-black font-display font-semibold rounded-full px-5 py-2.5 text-sm hover:glow-neon transition-all duration-300 cursor-pointer"
            >
              {t('nav_cta')} →
            </button>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-f-neon cursor-pointer p-2" onClick={() => setMobileMenuOpen(true)}>
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[1000] flex justify-end bg-black/60 backdrop-blur-sm h-screen">
          <div className="w-4/5 max-sm:w-full max-w-sm bg-f-black h-full border-l border-f-neon/20 p-8 flex flex-col overflow-y-auto">
            {/* Header Mobile Menu */}
            <div className="flex justify-between items-center mb-10 pt-4">
              <img 
                src="/Company branco.png" 
                alt="Foster Company" 
                className="h-6 w-auto object-contain"
              />
              <button onClick={() => setMobileMenuOpen(false)} className="text-f-neon cursor-pointer p-2">
                <X size={28} />
              </button>
            </div>
            
            {/* Links Container */}
            <div className="flex flex-col gap-8 text-2xl font-display mt-4">
              <a 
                href="#home" 
                onClick={() => setMobileMenuOpen(false)} 
                className={`block w-full transition-colors ${currentPath === '#home' ? 'text-f-neon' : 'text-f-mint'}`}
              >
                {t('nav_home')}
              </a>
              <a 
                href="#gestao-youtube" 
                onClick={() => setMobileMenuOpen(false)} 
                className={`block w-full transition-colors ${currentPath === '#gestao-youtube' ? 'text-f-neon' : 'text-f-mint'}`}
              >
                {t('nav_yt_growth')}
              </a>
              <a 
                href="#build" 
                onClick={() => setMobileMenuOpen(false)} 
                className={`block w-full transition-colors ${currentPath === '#build' ? 'text-f-neon' : 'text-f-mint'}`}
              >
                {t('nav_sites')}
              </a>
              <a 
                href="#clone-digital" 
                onClick={() => setMobileMenuOpen(false)} 
                className={`block w-full transition-colors ${currentPath === '#clone-digital' ? 'text-f-neon' : 'text-f-mint'}`}
              >
                {t('nav_clone_digital')}
              </a>
            </div>

            <div className="h-px w-full bg-f-neon/10 my-10"></div>
            
            <LangSwitcher mobile={true} />

            <div className="mt-auto pb-6">
              <button 
                onClick={() => { setMobileMenuOpen(false); openContactModal(); }} 
                className="block w-full text-center bg-f-neon text-f-black font-display font-bold rounded-2xl px-5 py-5 text-lg hover:glow-neon transition-all duration-300 cursor-pointer"
              >
                {t('nav_cta')} →
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}