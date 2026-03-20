export interface LabPost {
  id: string;
  slug: string;
  categoria: string;
  titulo: string;
  descricao: string;
  tempoLeitura: string;
  data: string;
  autor: string;
  imagemCapa: string;
  tags: string[];
  conteudo: string;
  likes: number;
}

export const labPosts: LabPost[] = [
  {
    id: "1",
    slug: "caso-abba-pai-church-100k-700k-youtube",
    categoria: "/ caso",
    titulo: "De 100k para 700k. O que realmente aconteceu com a Abba Pai Church no YouTube.",
    descricao: "Como a gestão estratégica de YouTube levou o canal de 100 mil para 700 mil inscritos em menos de 2 anos — SEO, thumbnails, títulos e dados por trás do resultado.",
    tempoLeitura: "6 min",
    data: "20 Mar 2026",
    autor: "Carlos Borges",
    tags: ["gestão YouTube", "caso real", "crescimento orgânico", "igrejas"],
    imagemCapa: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    likes: 124,
    conteudo: `
      <p>O crescimento exponencial no YouTube não acontece por sorte. É uma combinação de timing, autoridade e, acima de tudo, compreensão do algoritmo. No caso da Abba Pai Church, herdamos um canal com uma base sólida de 100 mil inscritos, mas com um potencial de retenção inexplorado.</p>
      
      <h2>O Diagnóstico Inicial</h2>
      <p>Identificamos que, embora o conteúdo fosse de extrema qualidade, as thumbnails não comunicavam a urgência do tema e os títulos eram excessivamente descritivos, falhando em gerar o clique inicial (CTR).</p>
      
      <div className="my-8">
        <img src="https://images.unsplash.com/photo-1551288049-bbda38a5f452?q=80&w=2340&auto=format&fit=crop" alt="Gráficos de Analytics demonstrando crescimento" />
        <p className="text-center font-mono text-[11px] text-f-mint/40 mt-2">Dados extraídos diretamente do YouTube Analytics durante o pico de crescimento.</p>
      </div>

      <h2>A Estratégia de Redundância</h2>
      <p>Implementamos o que chamamos de "Método de Redundância Estratégica". Em vez de apostar em um único vídeo viral, criamos trilhas de conteúdo que forçavam o algoritmo a recomendar o próximo vídeo do mesmo canal imediatamente após o término do anterior.</p>
      
      <blockquote>
        "A dominância digital não é sobre ser visto uma vez, é sobre ser impossível de ignorar."
      </blockquote>

      <ul>
        <li>Otimização de metadados em vídeos antigos com alto volume de busca.</li>
        <li>Criação de capas (thumbnails) focadas em contraste cromático e expressões humanas.</li>
        <li>Uso de IA para análise de sentimentos nos comentários e ajuste de pauta em tempo real.</li>
      </ul>

      <h2>Resultados Documentados</h2>
      <p>Em menos de 24 meses, ultrapassamos a marca de 700 mil inscritos de forma totalmente orgânica. O faturamento via AdSense e a conversão em membros da comunidade cresceram proporcionalmente, transformando o canal no maior ativo de mídia da instituição.</p>
    `
  }
];