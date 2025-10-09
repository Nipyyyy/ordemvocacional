export interface Token {
  id: string;
  name: string;
  description: string;
  imagePath: string;
}

export interface ProfessionCategory {
  id: string;
  name: string;
  displayName: string;
  description: string;
  tokens: Token[];
}

export const professionCategories: ProfessionCategory[] = [
  {
    id: 'medicina',
    name: 'Medicina',
    displayName: 'Medicina',
    description: 'Tokens relacionados à área médica e de saúde',
    tokens: [
      {
        id: 'medico-1',
        name: 'Médico Clínico',
        description: 'Médico com tablet realizando consulta',
        imagePath: 'https://images.pexels.com/photos/33414744/pexels-photo-33414744.png?_gl=1*1fpxd2y*_ga*NjI3Njc3MTY4LjE3NTQ5MTEwNDU.*_ga_8JE65Q40S6*czE3NTQ5OTc5MjMkbzQkZzEkdDE3NTQ5OTkyNzUkajYwJGwwJGgw',
      },
      {
        id: 'medico-2',
        name: 'Médico de Emergência',
        description: 'Médico com máscara e prancheta em situação de emergência',
        imagePath: 'https://images.pexels.com/photos/33414748/pexels-photo-33414748.png?_gl=1*9y6ye2*_ga*NjI3Njc3MTY4LjE3NTQ5MTEwNDU.*_ga_8JE65Q40S6*czE3NTQ5OTc5MjMkbzQkZzEkdDE3NTQ5OTk1NzkkajU4JGwwJGgw',
      },
      {
        id: 'medica-1',
        name: 'Médica com Seringa',
        description: 'Médica preparando aplicação de vacina ou medicamento',
        imagePath: 'https://images.pexels.com/photos/33414743/pexels-photo-33414743.png?_gl=1*1pl1ekh*_ga*NjI3Njc3MTY4LjE3NTQ5MTEwNDU.*_ga_8JE65Q40S6*czE3NTQ5OTc5MjMkbzQkZzEkdDE3NTQ5OTkxNjUkajQwJGwwJGgw',
      },
    ],
  },
  {
    id: 'informatica',
    name: 'Informática',
    displayName: 'Tecnologia da Informação',
    description: 'Tokens relacionados à área de TI e desenvolvimento',
    tokens: [
      {
        id: 'dev-1',
        name: 'Desenvolvedor Frontend',
        description: 'Desenvolvedor trabalhando em código front-end',
        imagePath: 'https://images.pexels.com/photos/33455098/pexels-photo-33455098.png?_gl=1*180pqvz*_ga*NjI3Njc3MTY4LjE3NTQ5MTEwNDU.*_ga_8JE65Q40S6*czE3NTUyNTI2NTgkbzkkZzEkdDE3NTUyNTI5NDQkajckbDAkaDA.',
      },
      {
        id: 'dev-2',
        name: 'Analista de Sistemas',
        description: 'Profissional analisando códigos e sistemas',
        imagePath: 'https://images.pexels.com/photos/33838602/pexels-photo-33838602.png?_gl=1*dnp9e7*_ga*NjI3Njc3MTY4LjE3NTQ5MTEwNDU.*_ga_8JE65Q40S6*czE3NTc0MTk2NTYkbzExJGcxJHQxNzU3NDE5Nzc0JGo0NyRsMCRoMA..',
      },
      {
        id: 'dev-3',
        name: 'Cientista de Dados',
        description: 'Profissional trabalhando com big data e machine learning',
        imagePath: 'https://images.pexels.com/photos/33838600/pexels-photo-33838600.png?_gl=1*1flxxqq*_ga*NjI3Njc3MTY4LjE3NTQ5MTEwNDU.*_ga_8JE65Q40S6*czE3NTc0MTk2NTYkbzExJGcxJHQxNzU3NDIwNDQ1JGo1OSRsMCRoMA..',
      },
    ],
  },
  {
    id: 'professor',
    name: 'Professor',
    displayName: 'Educação',
    description: 'Tokens relacionados ao ensino e pedagogia',
    tokens: [
      {
        id: 'prof-1',
        name: 'Professora de Matematica',
        description: 'Professora do Senac tomando um café',
        imagePath: 'https://images.pexels.com/photos/33414745/pexels-photo-33414745.png?_gl=1*lmpxd9*_ga*NjI3Njc3MTY4LjE3NTQ5MTEwNDU.*_ga_8JE65Q40S6*czE3NTQ5OTc5MjMkbzQkZzEkdDE3NTUwMDAyMDgkajUwJGwwJGgw',
      },
      {
        id: 'prof-2',
        name: 'Professor de Artes',
        description: 'Professor dando aula pratica',
        imagePath: 'https://images.pexels.com/photos/33414746/pexels-photo-33414746.png?_gl=1*1su5pck*_ga*NjI3Njc3MTY4LjE3NTQ5MTEwNDU.*_ga_8JE65Q40S6*czE3NTQ5OTc5MjMkbzQkZzEkdDE3NTUwMDAyNzgkajYwJGwwJGgw',
      },
      {
        id: 'prof-3',
        name: 'Professora de Portugues',
        description: 'Professora explicando a matéria',
        imagePath: 'https://images.pexels.com/photos/33414958/pexels-photo-33414958.png?_gl=1*nc0wqp*_ga*NjI3Njc3MTY4LjE3NTQ5MTEwNDU.*_ga_8JE65Q40S6*czE3NTQ5OTc5MjMkbzQkZzEkdDE3NTUwMDA0MjIkajU5JGwwJGgw',
      },
    ],
  },
  {
    id: 'direito',
    name: 'Direito',
    displayName: 'Direito',
    description: 'Tokens relacionados à área jurídica',
    tokens: [
      {
        id: 'adv-1',
        name: 'Advogado',
        description: 'Advogado especializado em direito criminal',
        imagePath: 'https://images.pexels.com/photos/34026378/pexels-photo-34026378.png',
      },
      {
        id: 'adv-2',
        name: 'Juiza',
        description: 'Magistrada presidindo audiência',
        imagePath: 'https://images.pexels.com/photos/33964120/pexels-photo-33964120.png?_gl=1*5k4u7l*_ga*NjI3Njc3MTY4LjE3NTQ5MTEwNDU.*_ga_8JE65Q40S6*czE3NTgyODk2ODQkbzE4JGcxJHQxNzU4Mjg5NzI0JGoyMCRsMCRoMA..',
      },
      {
        id: 'adv-3',
        name: 'Promotor',
        description: 'Promotor de justiça em tribunal',
        imagePath: 'https://images.pexels.com/photos/34026379/pexels-photo-34026379.png',
      },
    ],
  },
  {
    id: 'artes',
    name: 'Artes Visuais / Design',
    displayName: 'Artes Visuais e Design',
    description: 'Tokens relacionados à criação artística e design',
    tokens: [
      {
        id: 'art-1',
        name: 'Designer Gráfico',
        description: 'Designer criando identidade visual',
        imagePath: 'https://images.pexels.com/photos/34026381/pexels-photo-34026381.png',
      },
      {
        id: 'art-2',
        name: 'Pintor(a)',
        description: 'Artista criando ilustrações digitais',
        imagePath: 'https://images.pexels.com/photos/34026382/pexels-photo-34026382.png',
      },
      {
        id: 'art-3',
        name: 'Designer de Moda',
        description: 'Designer criando interfaces de usuário',
        imagePath: 'https://images.pexels.com/photos/34026380/pexels-photo-34026380.png',
      },
    ],
  },
  {
    id: 'administracao',
    name: 'Administração',
    displayName: 'Administração',
    description: 'Tokens relacionados à gestão e negócios',
    tokens: [
      {
        id: 'adm-1',
        name: 'Gestor de Projetos',
        description: 'Profissional gerenciando equipes e projetos',
        imagePath: 'https://images.pexels.com/photos/33838599/pexels-photo-33838599.png?_gl=1*1vfftlm*_ga*NjI3Njc3MTY4LjE3NTQ5MTEwNDU.*_ga_8JE65Q40S6*czE3NTc0MTk2NTYkbzExJGcxJHQxNzU3NDIwNTYyJGoyJGwwJGgw',
      },
      {
        id: 'adm-2',
        name: 'Analista Financeiro',
        description: 'Profissional analisando dados financeiros',
        imagePath: 'https://images.pexels.com/photos/33964119/pexels-photo-33964119.png?_gl=1*1y9814s*_ga*NjI3Njc3MTY4LjE3NTQ5MTEwNDU.*_ga_8JE65Q40S6*czE3NTgyODk2ODQkbzE4JGcxJHQxNzU4Mjg5Nzc4JGo1OSRsMCRoMA..',
      },
      {
        id: 'adm-3',
        name: 'Empreendedora',
        description: 'Profissional de recursos humanos',
        imagePath: 'https://images.pexels.com/photos/33838601/pexels-photo-33838601.png?_gl=1*15abzcp*_ga*NjI3Njc3MTY4LjE3NTQ5MTEwNDU.*_ga_8JE65Q40S6*czE3NTc0MTk2NTYkbzExJGcxJHQxNzU3NDIwNTMxJGozMyRsMCRoMA..',
      },
    ],
  },
  {
    id: 'jornalismo',
    name: 'Jornalismo',
    displayName: 'Jornalismo',
    description: 'Tokens relacionados à comunicação e mídia',
    tokens: [
      {
        id: 'jorn-1',
        name: 'Repórter de Campo',
        description: 'Jornalista fazendo cobertura externa',
        imagePath: '/src/assets/reporter_campo.png',
      },
      {
        id: 'jorn-2',
        name: 'Apresentador de TV',
        description: 'Jornalista apresentando telejornal',
        imagePath: '/src/assets/apresentador_tv.png',
      },
      {
        id: 'jorn-3',
        name: 'Cameraman ',
        description: 'Profissional editando matérias jornalísticas',
        imagePath: '/src/assets/editor_conteudo.png',
      },
    ],
  },
  {
    id: 'publicidade',
    name: 'Publicidade',
    displayName: 'Publicidade e Propaganda',
    description: 'Tokens relacionados à comunicação publicitária',
    tokens: [
      {
        id: 'pub-1',
        name: 'Analista de marketing',
        description: 'Profissional criando textos publicitários',
        imagePath: '/src/assets/redator_publicitario.png',
      },
      {
        id: 'pub-2',
        name: 'VideoMaker',
        description: 'Profissional dirigindo campanhas publicitárias',
        imagePath: '/src/assets/diretor_criativo.png',
      },
      {
        id: 'pub-3',
        name: 'Influenciadora',
        description: 'Especialista em redes sociais',
        imagePath: '/src/assets/social_media_manager.png',
      },
    ],
  },
  {
    id: 'cinema',
    name: 'Cinema / Audiovisual',
    displayName: 'Cinema e Audiovisual',
    description: 'Tokens relacionados à produção audiovisual',
    tokens: [
      {
        id: 'cin-1',
        name: 'Diretor de Cinema',
        description: 'Diretor comandando filmagem',
        imagePath: '/src/assets/diretor_cinema.png',
      },
      {
        id: 'cin-2',
        name: 'Ator',
        description: 'Profissional operando câmera de cinema',
        imagePath: '/src/assets/cinegrafista.png',
      },
      {
        id: 'cin-3',
        name: 'Atriz',
        description: 'Profissional editando material audiovisual',
        imagePath: '/src/assets/editor_video.png',
      },
    ],
  },
  {
    id: 'zoologia',
    name: 'Zoologia',
    displayName: 'Zoologia',
    description: 'Tokens relacionados ao estudo e cuidado animal',
    tokens: [
      {
        id: 'zoo-1',
        name: 'Bióloga Terrestre',
        description: 'Pesquisador estudando animais na natureza',
        imagePath: '/src/assets/zoologo_campo.png',
      },
      {
        id: 'zoo-2',
        name: 'Biólogo Marinho',
        description: 'Especialista em vida aquática',
        imagePath: '/src/assets/biologo_marinho.png',
      },
      {
        id: 'zoo-3',
        name: 'Guia',
        description: 'Profissional trabalhando na preservação animal',
        imagePath: '/src/assets/conservacionista.png',
      },
    ],
  },
];

export const getProfessionTokens = (profession: string): Token[] => {
  const category = professionCategories.find(
    cat => cat.name.toLowerCase() === profession.toLowerCase()
  );
  return category ? category.tokens : [];
};
