import React from 'react';
import AnimatedSection from './AnimatedSection';

export default function FAQ() {
  const faqData = [
    {
      q: "O que é a Foster Company?",
      a: "A Foster Company é um Creative AI Studio em Balneário Camboriú, Santa Catarina, que une estratégia de conteúdo, produção audiovisual e as ferramentas de IA mais avançadas do mundo. Não é agência. Não é produtora. É a empresa que coloca IA para trabalhar dentro do seu negócio."
    },
    {
      q: "Quais serviços a Foster Company oferece?",
      a: "A Foster opera em três verticais: Foster Create (produção audiovisual com IA e avatares digitais), Foster Build (sites e plataformas com IA integrada) e Foster Grow (gestão de YouTube com Método 3Ps). Também oferece as plataformas proprietárias iFoster (Super Agentes de IA) e Instate (Knowledge Management e Playbooks)."
    },
    {
      q: "O que é o Clone Digital IA?",
      a: "É um avatar ultra-realista criado com IA, com voz e imagem clonadas, que garante presença digital 24/7 sem depender de agenda. A Foster foi pioneira nesse serviço no Brasil, com cases como Rony Meisler."
    },
    {
      q: "O que é o iFoster?",
      a: "O iFoster é uma plataforma de Super Agentes de IA instalada no servidor da própria empresa do cliente, treinada com seu conteúdo e processos. Inclui Roteirista IA, Copywriter IA, Estrategista de Conteúdo e Arquiteto de Prompts — disponíveis 24h, dentro do seu ambiente."
    },
    {
      q: "Como contratar a Foster Company?",
      a: "A primeira conversa é gratuita e sem compromisso. Entre em contato pelo site fostercompany.com.br para agendar uma conversa. A Foster atende presencialmente em Balneário Camboriú e remotamente para todo o Brasil."
    },
    {
      q: "Quais resultados a Foster já gerou?",
      a: "Mais de +1 bilhão de visualizações geradas, canal Abba Pai Church cresceu de 100k para 700k inscritos em 2 anos (+600%), pioneiros em avatares de IA no Brasil e mais de 500 projetos de comunicação entregues em 15 anos."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-f-black border-t border-f-neon/10" aria-label="Perguntas Frequentes">
      <div className="max-w-4xl mx-auto px-5 md:px-8">
        <AnimatedSection className="mb-16 text-center">
          <h2 className="font-display font-bold text-4xl text-f-mint mb-4">Perguntas Frequentes</h2>
          <p className="text-f-mint/50 font-mono text-sm uppercase tracking-widest">Tudo o que você precisa saber sobre a Foster</p>
        </AnimatedSection>
        
        <div className="space-y-4" itemScope itemType="https://schema.org/FAQPage">
          {faqData.map((item, index) => (
            <AnimatedSection key={index} delay={index * 100}>
              <details 
                className="group bg-f-dark/20 border border-f-neon/10 rounded-2xl overflow-hidden"
                itemScope 
                itemProp="mainEntity" 
                itemType="https://schema.org/Question"
              >
                <summary className="p-6 cursor-pointer list-none flex justify-between items-center font-display font-bold text-lg text-f-mint group-open:text-f-neon transition-colors">
                  <span itemProp="name">{item.q}</span>
                  <span className="group-open:rotate-180 transition-transform text-f-neon/50">▼</span>
                </summary>
                <div 
                  className="px-6 pb-6 text-f-mint/60 border-t border-f-neon/5 pt-4 leading-relaxed"
                  itemScope 
                  itemProp="acceptedAnswer" 
                  itemType="https://schema.org/Answer"
                >
                  <p itemProp="text">{item.a}</p>
                </div>
              </details>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}