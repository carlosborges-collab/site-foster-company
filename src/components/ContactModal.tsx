"use client";

import React, { useState, useEffect, FormEvent } from 'react';
import { X, Send, CheckCircle2, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../i18n/LanguageContext';

export default function ContactModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'create',
    message: ''
  });

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('open-foster-contact', handleOpen);
    return () => window.removeEventListener('open-foster-contact', handleOpen);
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    // Validação básica de telefone (mínimo 10 dígitos)
    const phoneDigits = formData.phone.replace(/\D/g, '');
    if (phoneDigits.length < 10) {
      alert("Por favor, insira um WhatsApp válido com DDD.");
      return;
    }

    setLoading(true);

    // Simulação de envio com log dos dados reais
    console.log("Enviando lead para contato@fosterprodutora.com.br:", formData);

    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
    }, 1500);
  };

  const close = () => {
    setIsOpen(false);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', phone: '', email: '', service: 'create', message: '' });
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 md:p-6">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={close} className="absolute inset-0 bg-f-black/80 backdrop-blur-md" />
          <motion.div initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 20 }} className="relative w-full max-w-[600px] bg-[#030D09] border border-f-neon/20 rounded-[32px] overflow-hidden shadow-[0_0_80px_rgba(80,242,167,0.15)]">
            <button onClick={close} className="absolute top-6 right-6 p-2 rounded-full bg-f-neon/5 text-f-mint/40 hover:text-f-neon hover:bg-f-neon/15 transition-all z-10"><X size={20} /></button>

            {!isSubmitted ? (
              <div className="p-8 md:p-12">
                <div className="mb-8">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-f-neon/10 border border-f-neon/20 text-f-neon font-mono text-[10px] uppercase tracking-widest mb-4"><Zap size={12} /> Solicitar Orçamento</div>
                  <h2 className="font-display font-bold text-3xl md:text-4xl text-f-mint leading-tight">{t('contact_title_1')} <br /><span className="text-f-neon">{t('contact_title_2')}</span></h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-2">
                    <label className="text-[11px] font-mono text-f-mint/40 uppercase tracking-widest ml-1">{t('contact_label_name')}</label>
                    <input required type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} placeholder="Ex: Carlos Borges" className="w-full bg-f-black border border-f-neon/10 rounded-2xl px-5 py-3.5 text-f-mint placeholder:text-f-mint/20 focus:outline-none focus:border-f-neon/40 transition-colors" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-[11px] font-mono text-f-mint/40 uppercase tracking-widest ml-1">{t('contact_label_phone')}</label>
                      <input required type="tel" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} placeholder="(00) 00000-0000" className="w-full bg-f-black border border-f-neon/10 rounded-2xl px-5 py-3.5 text-f-mint placeholder:text-f-mint/20 focus:outline-none focus:border-f-neon/40 transition-colors" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[11px] font-mono text-f-mint/40 uppercase tracking-widest ml-1">{t('contact_label_email')}</label>
                      <input required type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} placeholder="contato@empresa.com" className="w-full bg-f-black border border-f-neon/10 rounded-2xl px-5 py-3.5 text-f-mint placeholder:text-f-mint/20 focus:outline-none focus:border-f-neon/40 transition-colors" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[11px] font-mono text-f-mint/40 uppercase tracking-widest ml-1">{t('contact_label_service')}</label>
                    <select value={formData.service} onChange={e => setFormData({...formData, service: e.target.value})} className="w-full bg-f-black border border-f-neon/10 rounded-2xl px-5 py-3.5 text-f-mint appearance-none focus:outline-none focus:border-f-neon/40 transition-colors">
                      <option value="create">Foster Create (Produção & Avatar)</option>
                      <option value="build">Foster Build (Sites & Plataformas)</option>
                      <option value="grow">Foster Grow (Gestão YouTube)</option>
                      <option value="ifoster">iFoster (Acesso Plataforma)</option>
                      <option value="music">Selo Musical</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[11px] font-mono text-f-mint/40 uppercase tracking-widest ml-1">{t('contact_label_msg')}</label>
                    <textarea required rows={3} value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} placeholder="Quais seus objetivos principais?" className="w-full bg-f-black border border-f-neon/10 rounded-2xl px-5 py-3.5 text-f-mint placeholder:text-f-mint/20 focus:outline-none focus:border-f-neon/40 transition-colors resize-none"></textarea>
                  </div>

                  <button disabled={loading} type="submit" className="w-full bg-f-neon text-f-black font-display font-bold py-4 rounded-2xl flex items-center justify-center gap-3 hover:glow-neon hover:scale-[1.01] transition-all disabled:opacity-50">
                    {loading ? <div className="w-6 h-6 border-2 border-f-black/30 border-t-f-black rounded-full animate-spin"></div> : <>{t('contact_btn')} <Send size={18} /></>}
                  </button>
                </form>
              </div>
            ) : (
              <div className="p-12 text-center flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-f-neon/10 flex items-center justify-center text-f-neon mb-8"><CheckCircle2 size={40} /></div>
                <h2 className="font-display font-bold text-3xl text-f-mint mb-4">{t('contact_success_title')}</h2>
                <p className="text-f-mint/60 mb-10 leading-relaxed">{t('contact_success_desc')}</p>
                <button onClick={close} className="bg-f-neon/10 border border-f-neon/30 text-f-neon font-display font-bold px-8 py-3 rounded-xl hover:bg-f-neon hover:text-f-black transition-all">Fechar</button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}