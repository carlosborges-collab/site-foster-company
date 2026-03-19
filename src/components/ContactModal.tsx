"use client";

import { useState } from 'react';
import { X, Send, CheckCircle2, MessageSquare, User, Mail, Smartphone, Layers } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useContact } from '../context/ContactContext';

export default function ContactModal() {
  const { isContactOpen, closeContact } = useContact();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    try {
      await fetch("https://formsubmit.co/ajax/contato@fosterprodutora.com.br", {
        method: "POST",
        body: formData
      });
      setSubmitted(true);
    } catch (error) {
      console.error("Erro ao enviar formulário", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isContactOpen && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={closeContact} className="absolute inset-0 bg-f-black/80 backdrop-blur-md"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-[500px] bg-f-black border border-f-neon/30 rounded-3xl overflow-hidden shadow-[0_0_100px_rgba(80,242,167,0.15)]"
          >
            <button onClick={closeContact} className="absolute top-5 right-5 text-f-mint/40 hover:text-f-neon transition-colors z-10">
              <X size={24} />
            </button>
            <div className="p-8 md:p-10">
              {!submitted ? (
                <>
                  <div className="mb-8">
                    <div className="inline-flex items-center gap-2 bg-f-neon/10 border border-f-neon/20 rounded-full px-3 py-1 mb-4">
                      <span className="w-1.5 h-1.5 rounded-full bg-f-neon animate-pulse"></span>
                      <span className="font-mono text-[10px] text-f-neon uppercase tracking-widest">Fale com a Foster</span>
                    </div>
                    <h2 className="font-display font-bold text-3xl text-f-mint leading-tight">Pronto para elevar seu <br/> <span className="text-f-neon text-glow-sm">posicionamento?</span></h2>
                  </div>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input type="hidden" name="_subject" value="Novo contato via Site Foster!" />
                    <input type="text" name="nome" placeholder="Nome completo" required className="w-full bg-f-dark/30 border border-f-neon/10 rounded-2xl py-4 px-4 text-f-mint focus:outline-none focus:border-f-neon/50 transition-all font-body" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input type="email" name="email" placeholder="E-mail" required className="w-full bg-f-dark/30 border border-f-neon/10 rounded-2xl py-4 px-4 text-f-mint focus:outline-none focus:border-f-neon/50 transition-all font-body" />
                      <input type="tel" name="whatsapp" placeholder="WhatsApp" required className="w-full bg-f-dark/30 border border-f-neon/10 rounded-2xl py-4 px-4 text-f-mint focus:outline-none focus:border-f-neon/50 transition-all font-body" />
                    </div>
                    <select name="servico" required className="w-full bg-f-dark/30 border border-f-neon/10 rounded-2xl py-4 px-4 text-f-mint focus:outline-none focus:border-f-neon/50 transition-all font-body appearance-none">
                      <option value="" disabled selected>Serviço de interesse</option>
                      <option value="Avatar de IA">Foster Create — Avatar de IA</option>
                      <option value="Produção Audiovisual">Foster Create — Produção</option>
                      <option value="Sites e Plataformas">Foster Build — Tecnologia</option>
                      <option value="Gestão de YouTube">Foster Grow — YouTube</option>
                      <option value="iFoster Plataforma">iFoster — Plataforma</option>
                      <option value="Outros">Outros</option>
                    </select>
                    <textarea name="mensagem" placeholder="Como podemos ajudar?" rows={4} required className="w-full bg-f-dark/30 border border-f-neon/10 rounded-2xl py-4 px-4 text-f-mint focus:outline-none focus:border-f-neon/50 transition-all font-body resize-none" />
                    <button type="submit" disabled={isSubmitting} className="w-full bg-f-neon text-f-black font-display font-bold py-4 rounded-2xl flex items-center justify-center gap-2 hover:glow-neon transition-all">
                      {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                    </button>
                  </form>
                </>
              ) : (
                <div className="py-12 flex flex-col items-center text-center">
                  <CheckCircle2 size={48} className="text-f-neon mb-6" />
                  <h2 className="font-display font-bold text-3xl text-f-mint mb-4">Mensagem Enviada!</h2>
                  <p className="text-f-mint/60 mb-10">Recebemos seu contato e retornaremos em breve.</p>
                  <button onClick={closeContact} className="border border-f-neon/30 text-f-neon font-display font-bold px-8 py-3 rounded-full hover:bg-f-neon/10 transition-all">Fechar</button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}