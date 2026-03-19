export type Language = 'pt' | 'es' | 'en';

const CONTACT_WA = "5547992520857";
const CONTACT_LINK = `https://wa.me/${CONTACT_WA}?text=Ol%C3%A1+Foster%21+Vim+pelo+site+e+gostaria+de+saber+mais+sobre+as+solu%C3%A7%C3%B5es+de+IA.`;

export const translations = {
  pt: {
    // Global
    whatsapp_number: CONTACT_WA,
    whatsapp_link: CONTACT_LINK,
    platform_url: "https://ifoster.com.br",
    
    // Navbar
    nav_solutions: "Soluções",
    nav_ifoster: "iFoster",
    nav_clone_digital: "Clone Digital",
    nav_yt_growth: "Gestão de YouTube",
    nav_platforms: "Plataformas",
    nav_channels: "Canais",
    nav_music: "Música",
    nav_work: "Work",
    nav_about: "Sobre",
    nav_contact: "Contato",
    nav_carlos: "Carlos Borges",
    nav_cta: "Falar com a Foster",

    // Home
    hero_badge: "Creative AI Studio",
    hero_headline_1: "Criatividade",
    hero_headline_2: "amplificada por",
    hero_headline_3: "inteligência",
    hero_headline_4: "artificial.",
    hero_subtitle: "A Foster Company é um estúdio de inovação que une estratégia de conteúdo, produção audiovisual e as ferramentas de IA mais avançadas do mundo.",
    hero_cta_1: "Conhecer a Foster",
    hero_cta_2: "Ver cases",
    hero_metric_3_val: "+1B",
    hero_metric_3_lbl: "views geradas",
    
    // Create Page
    create_hero_badge: "◈ Foster Create",
    create_hero_title_1: "Criamos o que sua marca",
    create_hero_title_2: "precisa para existir",
    create_hero_title_3: "no digital.",
    create_hero_desc: "Da produção cinematográfica ao seu clone digital. Tudo potencializado por IA, com qualidade técnica de 15 anos de mercado.",
    create_sec1_badge: "🎬 Produção Cinematográfica com IA",
    create_sec1_title: "Vídeos que param o scroll. <br/><span class='text-f-neon'>Com velocidade de IA.</span>",
    create_sec1_desc: "Transformamos 15 anos de experiência em sets de filmagem em um fluxo de trabalho 100% digital e inteligente. Resultados de cinema com uma fração do custo e tempo tradicional.",
    
    // Build Page
    build_hero_badge: "⬡ Foster Build",
    build_hero_title_1: "Construímos a infraestrutura",
    build_hero_title_2: "digital que sua marca",
    build_hero_title_3: "precisa.",
    build_hero_desc: "Desenvolvimento de alta performance, de landing pages exclusivas a ecossistemas complexos integrados com IA.",
    
    // Contact Modal
    contact_title_1: "Vamos tirar sua ideia",
    contact_title_2: "do papel.",
    contact_label_name: "Seu Nome Completo",
    contact_label_phone: "WhatsApp (com DDD)",
    contact_label_email: "E-mail Corporativo",
    contact_label_service: "O que você busca?",
    contact_label_msg: "Conte sobre seu projeto",
    contact_btn: "Enviar para a Foster",
    contact_success_title: "Solicitação Enviada!",
    contact_success_desc: "Recebemos seu interesse. Nossa equipe analisará seu projeto e entrará em contato em breve.",

    // Meta
    meta_title: "Foster Company — Creative AI Studio",
    meta_description: "Criatividade amplificada por IA. Produção audiovisual, canais de YouTube e plataformas digitais.",
    og_title: "Foster Company — Creative AI Studio",
    
    // Popups
    popup_mobile_text: "Quer um site como este?",
    popup_mobile_cta: "Falar com a Foster →",
    popup_headline_1: "Quer um site",
    popup_headline_2: "nesse nível para",
    popup_headline_3: "sua empresa?",
    popup_subtitle: "O que você está vendo agora foi criado pela Foster. Fazemos isso para empresas que recusam ser genéricas.",
    popup_feature_1: "⚡ Entrega rápida",
    popup_feature_2: "✦ Design exclusivo",
    popup_feature_3: "🤖 IA no processo",
    popup_cta_primary: "Quero um site assim →",
    popup_cta_secondary: "Ver nosso portfólio de sites",
  },
  es: {
    whatsapp_number: CONTACT_WA,
    whatsapp_link: CONTACT_LINK,
    platform_url: "https://ifoster.com.br",
    nav_solutions: "Soluciones",
    nav_cta: "Hablar con Foster",
    meta_title: "Foster Company — Creative AI Studio",
    meta_description: "Creatividad amplificada por IA. Producción audiovisual, canales de YouTube y plataformas digitales.",
  },
  en: {
    whatsapp_number: CONTACT_WA,
    whatsapp_link: CONTACT_LINK,
    platform_url: "https://ifoster.com.br",
    nav_solutions: "Solutions",
    nav_cta: "Talk to Foster",
    meta_title: "Foster Company — Creative AI Studio",
    meta_description: "Creativity amplified by AI. Audiovisual production, YouTube channels and digital platforms.",
  }
};