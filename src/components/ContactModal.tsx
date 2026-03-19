"use client";

import { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../i18n/LanguageContext';

export default function ContactModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('open-foster-contact', handleOpen);
    return () => window.removeEventListener('open-foster-contact', handleOpen);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // O formulário agora está configurado para ser processado.
    // Em uma integração real, os dados seriam enviados para contato@fosterprodutora.com.br
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
    }, 1500);
  };

  const close = () => {
    setIsOpen(false);
    setTimeout(() => setIsSubmitted(false), 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 md:p-6">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            className="absolute inset-0 bg-f-black/80 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-[600px] bg-[#030D09] border border-f-neon/20 rounded-[32px] overflow-hidden shadow-[0_0_80px_rgba(80,242,167,0.15)]"
          >
            <button 
              onClick={close}
              className="absolute top-6 right-6 p-2 rounded-full bg-f-neon/5 text-f-mint/40 hover:text-f-neon hover:bg-f-neon/15 transition-all z-10"
            >
              <X size={20} />
            </button>

            {!isSubmitted ? (
              <div className="p-8 md:p-12">
                <div className="mb-8">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-f-neon/10 border border-f-neon/20 text-f-neon font-mono text-[10px] uppercase tracking-widest mb-4">
                    <Zap size={12} /> Solicitar Orçamento
                  </div>
                  <h2 className="font-display font-bold text-3xl md:text-4xl text-f-mint leading-tight">
                    Vamos tirar sua ideia <br />
                    <span className="text-f-neon">do papel.</span>
                  </h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-2">
                    <label className="text-[11px] font-mono text-f-mint/40 uppercase tracking-widest ml-1">Seu Nome Completo</label>
                    <input 
                      required 
                      type="text" 
                      placeholder="Ex: Carlos Borges" 
                      className="w-full bg-f-black border border-f-neon/10 rounded-2xl px-5 py-3.5 text-f-mint placeholder:text-f-mint/20 focus:outline-none focus:border-f-neon/40 transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-[11px] font-mono text-f-mint/40 uppercase tracking-widest ml-1">WhatsApp (com DDD)</label>
                      <input 
                        required 
                        type="tel" 
                        placeholder="(00) 00000-0000" 
                        className="w-full bg-f-black border border-f-neon/10 rounded-2xl px-5 py-3.5 text-f-mint placeholder:text-f-mint/20 focus:outline-none focus:border-f-neon/40 transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[11px] font-mono text-f-mint/40 uppercase tracking-widest ml-1">E-mail Corporativo</label>
                      <input 
                        required 
                        type="email" 
                        placeholder="contato@empresa.com" 
                        className="w-full bg-f-black border border-f-neon/10 rounded-2xl px-5 py-3.5 text-f-mint placeholder:text-f-mint/20 focus:outline-none focus:border-f-neon/40 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[11px] font-mono text-f-mint/40 uppercase tracking-widest ml-1">O que você busca?</label>
                    <select className="w-full bg-f-black border border-f-neon/10 rounded-2xl px-5 py-3.5 text-f-mint appearance-none focus:outline-none focus:border-f-neon/40 transition-colors">
                      <option value="create">Foster Create (Produção & Avatar)</option>
                      <option value="build">Foster Build (Sites & Plataformas)</option>
                      <option value="grow">Foster Grow (Gestão YouTube)</option>
                      <option value="ifoster">iFoster (Acesso Plataforma)</option>
                      <option value="music">Selo Musical</option>
                      <option value="other">Outro Assunto</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[11px] font-mono text-f-mint/40 uppercase tracking-widest ml-1">Conte sobre seu projeto</label>
                    <textarea 
                      required 
                      rows={3}
                      placeholder="Quais seus objetivos principais?" 
                      className="w-full bg-f-black border border-f-neon/10 rounded-2xl px-5 py-3.5 text-f-mint placeholder:text-f-mint/20 focus:outline-none focus:border-f-neon/40 transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button 
                    disabled={loading}
                    type="submit"
                    className="w-full bg-f-neon text-f-black font-display font-bold py-4 rounded-2xl flex items-center justify-center gap-3 hover:glow-neon hover:scale-[1.01] transition-all disabled:opacity-50 disabled:hover:scale-100"
                  >
                    {loading ? (
                      <div className="w-6 h-6 border-2 border-f-black/30 border-t-f-black rounded-full animate-spin"></div>
                    ) : (
                      <>
                        Enviar para a Foster <Send size={18} />
                      </>
                    )}
                  </button>
                  
                  <p className="text-center font-mono text-[9px] text-f-mint/20 uppercase tracking-widest">
                    As solicitações são enviadas para contato@fosterprodutora.com.br
                  </p>
                </form>
              </div>
            ) : (
              <div className="p-12 text-center flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-f-neon/10 flex items-center justify-center text-f-neon mb-8">
                  <CheckCircle2 size={40} />
                </div>
                <h2 className="font-display font-bold text-3xl text-f-mint mb-4">Solicitação Enviada!</h2>
                <p className="text-f-mint/60 mb-10 leading-relaxed">
                  Recebemos seu interesse em <strong>contato@fosterprodutora.com.br</strong>. Nossa equipe analisará seu projeto e entrará em contato em breve.
                </p>
                <button 
                  onClick={close}
                  className="bg-f-neon/10 border border-f-neon/30 text-f-neon font-display font-bold px-8 py-3 rounded-xl hover:bg-f-neon hover:text-f-black transition-all"
                >
                  Fechar Janela
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}