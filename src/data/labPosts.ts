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
  },
  {
    id: "2",
    slug: "experimento-clone-voz-ia-rony-meisler",
    categoria: "/ experimento",
    titulo: "O clone de voz perfeito. Como treinamos a IA para falar como o Rony Meisler.",
    descricao: "Um mergulho técnico nos bastidores da criação do avatar do fundador da Reserva. Os desafios de entonação, sotaque e as ferramentas utilizadas.",
    tempoLeitura: "4 min",
    data: "18 Mar 2026",
    autor: "Carlos Borges",
    tags: ["IA", "Clone de Voz", "Rony Meisler", "HeyGen", "ElevenLabs"],
    imagemCapa: "https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=2340&auto=format&fit=crop",
    likes: 89,
    conteudo: `
      <p>Treinar uma Inteligência Artificial para replicar uma voz humana não é mais sobre tecnologia, é sobre nuances. Quando começamos o projeto com o Rony Meisler, o objetivo era claro: o avatar não poderia soar robótico.</p>
      
      <h2>A Ciência do Sotaque</h2>
      <p>O desafio não estava nas palavras, mas no ritmo. O sotaque carioca do Rony possui cadências específicas que os modelos padrão de IA costumam ignorar ou 'achatar' em busca de uma clareza artificial.</p>
      
      <div className="my-8">
        <img src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=2340&auto=format&fit=crop" alt="Estúdio de gravação profissional" />
        <p className="text-center font-mono text-[11px] text-f-mint/40 mt-2">Captação de áudio base para o treinamento do modelo neurônico.</p>
      </div>

      <h2>O Fluxo de Trabalho</h2>
      <p>Utilizamos uma técnica de 'finetuning' em três camadas. Primeiro, a limpeza do áudio base. Segundo, a extração de prosódia. Terceiro, o treinamento de resposta emocional.</p>
      
      <blockquote>
        "A tecnologia deve servir à essência, nunca o contrário."
      </blockquote>

      <ul>
        <li>Captura de 20 minutos de áudio em ambiente controlado.</li>
        <li>Mapeamento de expressões faciais síncronas com o áudio.</li>
        <li>Ajuste fino de 'pacing' para garantir pausas naturais entre parágrafos.</li>
      </ul>

      <h2>Conclusão</h2>
      <p>O resultado é o que você vê hoje nos canais do Rony. Uma ferramenta de escala que mantém a verdade do criador intacta.</p>
    `
  }
];