import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const POPUP_KEY = 'foster_popup_shown';

export default function ConversionPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const showPopup = () => {
    if (sessionStorage.getItem(POPUP_KEY)) return;
    sessionStorage.setItem(POPUP_KEY, 'true');
    setIsVisible(true);
  };

  const closePopup = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsVisible(false);
      setIsClosing(false);
    }, 350);
  };

  useEffect(() => {
    // Timer trigger (20s)
    const timer = setTimeout(() => {
      if (!sessionStorage.getItem(POPUP_KEY)) {
        showPopup();
      }
    }, 20000);

    // Scroll trigger
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(showPopup, 2000);
        }
      });
    }, { threshold: 0.5 });

    const casesSection = document.querySelector('#cases');
    const numerosSection = document.querySelector('#numeros');
    if (casesSection) observer.observe(casesSection);
    if (numerosSection) observer.observe(numerosSection);

    // Exit intent trigger (desktop only)
    const handleMouseLeave = (e: MouseEvent) => {
      if (window.innerWidth > 768 && e.clientY < 10) {
        showPopup();
      }
    };
    document.addEventListener('mouseleave', handleMouseLeave);

    // ESC key to close
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closePopup();
    };
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  if (!isVisible && !isClosing) return null;

  if (isMobile) {
    return (
      <div className={`fixed bottom-0 left-0 right-0 z-[9999] bg-[#030D09]/95 backdrop-blur-xl border-t border-f-neon/20 px-5 py-3 flex items-center justify-between transition-all duration-350 ${isClosing ? 'translate-y-full opacity-0' : 'translate-y-0 opacity-100'}`}>
        <button onClick={closePopup} className="absolute top-2 right-2 text-f-mint/40 hover:text-f-mint">
          <X size={14} />
        </button>
        <span className="font-display font-semibold text-[14px] text-f-mint pr-4">
          {t('popup_mobile_text')}
        </span>
        <a 
          href="https://wa.me/5547999999999?text=Olá Foster! Vi o site de vocês e quero um site assim para minha empresa."
          target="_blank"
          rel="noopener noreferrer"
          onClick={closePopup}
          className="bg-f-neon text-f-black font-display font-semibold rounded-full px-4 py-2 text-[13px] whitespace-nowrap hover:glow-neon transition-all"
        >
          {t('popup_mobile_cta')}
        </a>
      </div>
    );
  }

  return (
    <div className={`fixed inset-0 z-[9999] bg-[#030D09]/85 backdrop-blur-sm flex items-center justify-center transition-opacity duration-350 ${isClosing ? 'opacity-0' : 'opacity-100'}`}>
      <div 
        className={`w-[90%] max-w-[520px] bg-[#030D09] border border-f-neon/25 rounded-3xl p-10 shadow-[0_0_80px_rgba(80,242,167,0.12),0_32px_64px_rgba(0,0,0,0.5)] relative transition-transform duration-350 ease-[cubic-bezier(0.16,1,0.3,1)] ${isClosing ? 'scale-95' : 'scale-100'}`}
      >
        <button 
          onClick={closePopup}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-f-neon/10 border border-f-neon/20 rounded-full text-f-mint/50 hover:text-f-mint hover:bg-f-neon/20 transition-all"
        >
          <X size={16} />
        </button>

        <div className="flex items-center justify-between mb-5">
          <div className="font-mono text-[11px] text-f-neon bg-f-neon/10 border border-f-neon/30 rounded-full px-3 py-1">
            ✦ Foster Build
          </div>
          <div className="font-mono text-[11px] text-f-mint/40">
            Creative AI Studio
          </div>
        </div>

        <h2 className="font-display font-bold text-[32px] text-f-mint leading-[1.1] mb-3">
          <span className="block">{t('popup_headline_1')}</span>
          <span className="block">{t('popup_headline_2')}</span>
          <span className="block text-f-neon drop-shadow-[0_0_12px_rgba(80,242,167,0.4)]">{t('popup_headline_3')}</span>
        </h2>

        <p className="font-body text-[15px] text-f-mint/60 leading-[1.55] mb-5">
          {t('popup_subtitle')}
        </p>

        <div className="h-px w-full bg-f-neon/10 my-5"></div>

        <div className="flex flex-wrap gap-3 mb-6">
          <div className="bg-f-neon/5 border border-f-neon/15 rounded-full px-3 py-1 text-[13px] text-f-mint/80">
            {t('popup_feature_1')}
          </div>
          <div className="bg-f-neon/5 border border-f-neon/15 rounded-full px-3 py-1 text-[13px] text-f-mint/80">
            {t('popup_feature_2')}
          </div>
          <div className="bg-f-neon/5 border border-f-neon/15 rounded-full px-3 py-1 text-[13px] text-f-mint/80">
            {t('popup_feature_3')}
          </div>
        </div>

        <div className="flex flex-col items-center gap-4">
          <a 
            href="https://wa.me/5547999999999?text=Olá Foster! Vi o site de vocês e quero um site assim para minha empresa."
            target="_blank"
            rel="noopener noreferrer"
            onClick={closePopup}
            className="w-full bg-f-neon text-f-black font-display font-bold text-[16px] py-4 rounded-full text-center hover:shadow-[0_0_32px_rgba(80,242,167,0.35)] hover:scale-[1.02] transition-all duration-300"
          >
            {t('popup_cta_primary')}
          </a>
          
          <a 
            href="#build"
            onClick={(e) => {
              closePopup();
              // Smooth scroll handled by CSS, just need to close popup
            }}
            className="font-body text-[13px] text-f-mint/40 hover:text-f-mint/70 underline underline-offset-4 transition-colors"
          >
            {t('popup_cta_secondary')}
          </a>
        </div>

        <div className="text-center font-mono text-[10px] text-f-mint/20 mt-6">
          Foster Company · Creative AI Studio · Balneário Camboriú, Brasil 🇧🇷
        </div>
      </div>
    </div>
  );
}
