"use client";

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
    const handleResize = () => setIsMobile(window.innerWidth < 768);
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
    const timer = setTimeout(() => {
      if (!sessionStorage.getItem(POPUP_KEY)) showPopup();
    }, 20000);

    const handleMouseLeave = (e: MouseEvent) => {
      if (window.innerWidth > 768 && e.clientY < 10) showPopup();
    };
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  if (!isVisible && !isClosing) return null;

  const waLink = t('whatsapp_link');

  if (isMobile) {
    return (
      <div className={`fixed bottom-0 left-0 right-0 z-[9999] bg-[#030D09]/95 backdrop-blur-xl border-t border-f-neon/20 px-5 py-3 flex items-center justify-between transition-all duration-350 ${isClosing ? 'translate-y-full opacity-0' : 'translate-y-0 opacity-100'}`}>
        <button onClick={closePopup} className="absolute top-2 right-2 text-f-mint/40 hover:text-f-mint"><X size={14} /></button>
        <span className="font-display font-semibold text-[14px] text-f-mint pr-4">{t('popup_mobile_text')}</span>
        <a href={waLink} target="_blank" rel="noopener noreferrer" onClick={closePopup} className="bg-f-neon text-f-black font-display font-semibold rounded-full px-4 py-2 text-[13px] whitespace-nowrap hover:glow-neon transition-all">{t('popup_mobile_cta')}</a>
      </div>
    );
  }

  return (
    <div className={`fixed inset-0 z-[9999] bg-[#030D09]/85 backdrop-blur-sm flex items-center justify-center transition-opacity duration-350 ${isClosing ? 'opacity-0' : 'opacity-100'}`}>
      <div className={`w-[90%] max-w-[520px] bg-[#030D09] border border-f-neon/25 rounded-3xl p-10 shadow-2xl relative transition-transform duration-350 ${isClosing ? 'scale-95' : 'scale-100'}`}>
        <button onClick={closePopup} className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-f-neon/10 border border-f-neon/20 rounded-full text-f-mint/50 hover:text-f-mint transition-all"><X size={16} /></button>
        <h2 className="font-display font-bold text-[32px] text-f-mint leading-[1.1] mb-3">
          <span className="block">{t('popup_headline_1')}</span>
          <span className="block">{t('popup_headline_2')}</span>
          <span className="block text-f-neon">{t('popup_headline_3')}</span>
        </h2>
        <p className="font-body text-[15px] text-f-mint/60 mb-8">{t('popup_subtitle')}</p>
        <a href={waLink} target="_blank" rel="noopener noreferrer" onClick={closePopup} className="w-full block bg-f-neon text-f-black font-display font-bold text-[16px] py-4 rounded-full text-center hover:shadow-2xl hover:scale-[1.02] transition-all">{t('popup_cta_primary')}</a>
      </div>
    </div>
  );
}