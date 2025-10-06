import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, Download, Eye, X, ZoomIn } from 'lucide-react';

interface Token {
  id: string;
  name: string;
  description: string;
  imagePath: string;
}

interface Map {
  id: string;
  name: string;
  description: string;
  imagePath: string;
  details: string;
}

interface ProfessionCategory {
  id: string;
  name: string;
  description: string;
  tokens: Token[];
}

const TokensAndMaps: React.FC = () => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [selectedToken, setSelectedToken] = useState<Token | null>(null);
  const [selectedMap, setSelectedMap] = useState<Map | null>(null);

  const maps: Map[] = [
    {
      id: 'hospital',
      name: 'Posto de Saúde',
      description:
        'Mapa detalhado de um hospital com salas de emergência, consultórios e atendimento.',
      imagePath: 'https://images.pexels.com/photos/33444068/pexels-photo-33444068.png',
      details:
        'Este mapa inclui: Recepção principal, Salas de emergência, Consultórios médicos, Centro cirúrgico, UTI, Farmácia interna, Laboratórios, Salas de espera e Corredores de acesso.',
    },
    {
      id: 'office',
      name: 'Empresa TI',
      description:
        'Ambiente corporativo com salas de reunião, escritórios e áreas comuns.',
      imagePath: 'https://images.pexels.com/photos/33444067/pexels-photo-33444067.png?_gl=1*8hkknd*_ga*NjI3Njc3MTY4LjE3NTQ5MTEwNDU.*_ga_8JE65Q40S6*czE3NTUxNzk2MTYkbzckZzEkdDE3NTUxODA5NTYkajU5JGwwJGgw',
      details:
        'Este mapa inclui: Recepção corporativa, Escritórios individuais, Salas de reunião, Open space, Sala de diretoria, Copa/cozinha, Banheiros e Área de descanso.',
    },
    {
      id: 'school',
      name: 'Escola Publica',
      description:
        'Ambiente escolar completo com salas de aula, laboratórios e biblioteca.',
      imagePath: 'https://images.pexels.com/photos/33444069/pexels-photo-33444069.png',
      details:
        'Este mapa inclui: Salas de aula, Biblioteca, Laboratório de ciências, Laboratório de informática, Quadra esportiva, Pátio, Cantina, Diretoria e Sala dos professores.',
    },
    {
      id: 'courthouse',
      name: 'Sala de Jornalismo',
      description:
        'Um mapa que conduz o visitante pelos bastidores do jornalismo, mostrando redações, estúdios e áreas onde as histórias ganham vida.',
      imagePath: 'https://images.pexels.com/photos/33444072/pexels-photo-33444072.png?_gl=1*12dp8bu*_ga*NjI3Njc3MTY4LjE3NTQ5MTEwNDU.*_ga_8JE65Q40S6*czE3NTUxNzk2MTYkbzckZzEkdDE3NTUxODExMTUkajU2JGwwJGgw',
      details:
        'Este mapa inclui: "Mesas com computadores, câmeras, microfones e um quadro de pautas repleto de notícias."',
    },
    {
      id: 'laboratory',
      name: 'Zoológico',
      description:
        'Um mapa colorido que guia os visitantes pelas trilhas e recintos do zoológico, revelando cada área cheia de vida e descoberta',
      imagePath: 'https://images.pexels.com/photos/33444071/pexels-photo-33444071.png?_gl=1*139j44p*_ga*NjI3Njc3MTY4LjE3NTQ5MTEwNDU.*_ga_8JE65Q40S6*czE3NTUxNzk2MTYkbzckZzEkdDE3NTUxODEyMzUkajUxJGwwJGgw',
      details:
        'Este mapa inclui: Area de animais, utensilios, area de hidratação.',
    },
    {
      id: 'advertising_agency',
      name: 'Agência de Publicidade',
      description:
        'Escritório criativo com salas de brainstorm e estúdio de produção.',
      imagePath: 'https://images.pexels.com/photos/33444070/pexels-photo-33444070.png',
      details:
        'Este mapa inclui: Área criativa, Salas de brainstorm, Estúdio de produção, Sala de apresentação, Atendimento, Diretoria, Copa e Área de descanso.',
    },
    {
      id: 'art_studio',
      name: 'Estúdio de Arte',
      description: '',
      imagePath: '',
      details:
        'Este mapa inclui: Ateliês de pintura, Sala de escultura, Área de design digital, Galeria de exposição, Depósito de materiais, Sala de aula e Recepção.',
    },
    {
      id: 'film_studio',
      name: 'Estúdio de Cinema',
      description:
        'Complexo de produção audiovisual com sets e salas de edição.',
      imagePath: '',
      details:
        'Este mapa inclui: Sets de filmagem, Salas de edição, Estúdio de som, Camarins, Depósito de equipamentos, Sala de produção, Recepção e Área técnica.',
    },
    {
      id: 'social_center',
      name: 'Estudio Audiovisual',
      description:
        'Centro de edicao audiovisual.',
      imagePath: '',
      details:
        'Este mapa inclui: Salas de atendimento, Auditório, Salas de atividades, Cozinha comunitária, Brinquedoteca, Biblioteca, Administração e Recepção.',
    },
    {
      id: 'tech_company',
      name: 'Julgamento',
      description:
        'Escritório moderno de tecnologia com laboratórios e salas de desenvolvimento.',
      imagePath: '',
      details:
        'Este mapa inclui: ',
    },
  ];

  const professionCategories: ProfessionCategory[] = [
    {
      id: 'medicina',
      name: 'Medicina',
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
      name: 'Tecnologia da Informação',
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
      id: 'educacao',
      name: 'Educação',
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
      name: 'Artes Visuais e Design',
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
      description: 'Tokens relacionados à comunicação e mídia',
      tokens: [
        {
          id: 'jorn-1',
          name: 'Repórter de Campo',
          description: 'Jornalista fazendo cobertura externa',
          imagePath: 'https://images.pexels.com/photos/34055119/pexels-photo-34055119.png',
        },
        {
          id: 'jorn-2',
          name: 'Apresentador de TV',
          description: 'Jornalista apresentando telejornal',
          imagePath: 'https://images.pexels.com/photos/34055118/pexels-photo-34055118.png?_gl=1*4tli4r*_ga*NjI3Njc3MTY4LjE3NTQ5MTEwNDU.*_ga_8JE65Q40S6*czE3NTg5MTg1NDMkbzI0JGcxJHQxNzU4OTIwMTkyJGo0MiRsMCRoMA..',
        },
        {
          id: 'jorn-3',
          name: 'Cameraman ',
          description: 'Profissional editando matérias jornalísticas',
          imagePath: 'https://images.pexels.com/photos/34188538/pexels-photo-34188538.png',
        },
      ],
    },
    {
      id: 'publicidade',
      name: 'Publicidade e Propaganda',
      description: 'Tokens relacionados à comunicação publicitária',
      tokens: [
        {
          id: 'pub-1',
          name: 'Analista de marketing',
          description: 'Profissional criando textos publicitários',
          imagePath: 'https://images.pexels.com/photos/34188539/pexels-photo-34188539.png',
        },
        {
          id: 'pub-2',
          name: 'VideoMaker',
          description: 'Profissional dirigindo campanhas publicitárias',
          imagePath: 'https://images.pexels.com/photos/34188537/pexels-photo-34188537.png',
        },
        {
          id: 'pub-3',
          name: 'Influenciadora',
          description: 'Especialista em redes sociais',
          imagePath: 'https://images.pexels.com/photos/34188536/pexels-photo-34188536.png',
        },
      ],
    },
    {
      id: 'cinema',
      name: 'Cinema e Audiovisual',
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

  const npcTokens: Token[] = [
    {
      id: 'paciente-1',
      name: 'Paciente Machucado',
      description: 'Paciente jovem depois de sofrer um acidente',
      imagePath: 'https://images.pexels.com/photos/33442216/pexels-photo-33442216.png?_gl=1*sspd6w*_ga*NjI3Njc3MTY4LjE3NTQ5MTEwNDU.*_ga_8JE65Q40S6*czE3NTUxNjkwNTEkbzYkZzEkdDE3NTUxNjk5NTMkajIwJGwwJGgw',
    },
    {
      id: 'usuario-ti',
      name: 'Usuário com Problema',
      description: 'Funcionário com problema no computador',
      imagePath: 'https://images.pexels.com/photos/33442217/pexels-photo-33442217.png?_gl=1*1lpdk96*_ga*NjI3Njc3MTY4LjE3NTQ5MTEwNDU.*_ga_8JE65Q40S6*czE3NTUxNjkwNTEkbzYkZzEkdDE3NTUxNjk5MTQkajU5JGwwJGgw',
    },
    {
      id: 'cliente-agencia',
      name: 'Pessoa com Deficiência Visual',
      description: 'Pessoa com deficiência visual total',
      imagePath: 'https://images.pexels.com/photos/33442215/pexels-photo-33442215.png?_gl=1*1ry98kz*_ga*NjI3Njc3MTY4LjE3NTQ5MTEwNDU.*_ga_8JE65Q40S6*czE3NTUxNjkwNTEkbzYkZzEkdDE3NTUxNjk5NjgkajUkbDAkaDA.',
    },
    {
      id: 'enfermeira-1',
      name: 'Enfermeira',
      description: 'Médica utilizando oxímetro para verificar saturação',
      imagePath: 'https://images.pexels.com/photos/33414747/pexels-photo-33414747.png?_gl=1*zna0la*_ga*NjI3Njc3MTY4LjE3NTQ5MTEwNDU.*_ga_8JE65Q40S6*czE3NTQ5OTc5MjMkbzQkZzEkdDE3NTQ5OTk2OTIkajU5JGwwJGgw',
    },
    {
      id: 'gerente-ti',
      name: 'Gerente de TI',
      description: 'Supervisor da equipe de tecnologia',
      imagePath: '',
    },
    {
      id: 'aluno-1',
      name: 'Aluno Curioso',
      description: 'Estudante fazendo perguntas',
      imagePath: '',
    },
    {
      id: 'cliente-juridico',
      name: 'Cliente Jurídico',
      description: 'Pessoa buscando assistência legal',
      imagePath: '',
    },
    {
      id: 'entrevistado',
      name: 'Entrevistado',
      description: 'Pessoa sendo entrevistada',
      imagePath: '',
    },
    {
      id: 'familia-vulneravel',
      name: 'Família em Vulnerabilidade',
      description: 'Família necessitando de assistência',
      imagePath: '',
    },
    {
      id: 'visitante-zoo',
      name: 'Visitante do Zoo',
      description: 'Pessoa visitando zoológico',
      imagePath: '',
    },
  ];

  const toggleCategory = (categoryId: string) => {
    if (expandedCategory === categoryId) {
      setExpandedCategory(null);
    } else {
      setExpandedCategory(categoryId);
    }
  };

  const openTokenModal = (token: Token) => {
    setSelectedToken(token);
  };

  const closeTokenModal = () => {
    setSelectedToken(null);
  };

  const openMapModal = (map: Map) => {
    setSelectedMap(map);
  };

  const closeMapModal = () => {
    setSelectedMap(null);
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          {/* Cabeçalho */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-cinzel font-bold text-accent-gold mb-6">
              Tokens e Mapas RPG
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Explore nossa coleção de tokens de personagens organizados por
              profissão e mapas de cenários para enriquecer suas sessões de RPG.
            </p>
            <div className="flex justify-center">
              <div className="h-1 w-32 bg-accent-gold rounded-full"></div>
            </div>
          </div>

          {/* Seção de Tokens por Categoria */}
          <section className="mb-16">
            <h2 className="text-3xl font-cinzel font-bold text-accent-gold mb-8 text-center">
              Tokens por Profissão
            </h2>

            <div className="space-y-4">
              {professionCategories.map((category) => (
                <div key={category.id} className="card">
                  <button
                    onClick={() => toggleCategory(category.id)}
                    className="w-full flex items-center justify-between p-2 hover:bg-dark-purple/20 rounded-md transition-colors"
                  >
                    <div className="text-left">
                      <h3 className="text-xl font-cinzel font-semibold text-accent-gold mb-1">
                        {category.name}
                      </h3>
                      <p className="text-gray-300 text-sm">
                        {category.description} • {category.tokens.length} tokens
                        disponíveis
                      </p>
                    </div>
                    <div className="text-accent-gold">
                      {expandedCategory === category.id ? (
                        <ChevronUp size={24} />
                      ) : (
                        <ChevronDown size={24} />
                      )}
                    </div>
                  </button>

                  <AnimatePresence>
                    {expandedCategory === category.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-6 border-t border-light-purple/20 pt-6"
                      >
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 justify-center items-center mx-auto">
                          {category.tokens.map((token) => (
                            <motion.div
                              key={token.id}
                              className="bg-dark-purple/30 rounded-lg p-4 border border-light-purple/20 hover:border-accent-gold/50 transition-all duration-300 cursor-pointer group"
                              whileHover={{ scale: 1.02 }}
                              onClick={() => openTokenModal(token)}
                            >
                              <div className="aspect-square rounded-lg overflow-hidden mb-4 bg-dark-blue/50">
                                <img
                                  src={token.imagePath}
                                  alt={token.name}
                                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                                />
                              </div>
                              <h4 className="text-lg font-cinzel font-semibold text-accent-gold mb-2">
                                {token.name}
                              </h4>
                              <p className="text-gray-300 text-sm mb-4">
                                {token.description}
                              </p>
                              <div className="flex space-x-2">
                                <button className="flex-1 bg-accent-gold/20 hover:bg-accent-gold/30 text-accent-gold text-xs py-2 px-3 rounded-md transition-colors flex items-center justify-center">
                                  <Eye size={14} className="mr-1" />
                                  Ver
                                </button>
                                <button className="flex-1 bg-dark-blue/50 hover:bg-dark-blue text-white text-xs py-2 px-3 rounded-md transition-colors flex items-center justify-center">
                                  <Download size={14} className="mr-1" />
                                  Baixar
                                </button>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </section>

          {/* Seção de Tokens de NPC por Categoria */}
          <section className="mb-16">
            <div className="card">
              <h2 className="text-3xl font-cinzel font-bold text-accent-gold mb-8 text-center">
                NPCs
              </h2>
              <p className="text-gray-300 text-center mb-8 max-w-3xl mx-auto">
                NPCs (Non-Player Characters) para enriquecer suas sessões de RPG com personagens 
                secundários autênticos e diversificados.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {npcTokens.map((token) => (
                  <motion.div
                    key={token.id}
                    className="bg-dark-purple/30 rounded-lg p-4 border border-light-purple/20 hover:border-accent-gold/50 transition-all duration-300 cursor-pointer group"
                    whileHover={{ scale: 1.02 }}
                    onClick={() => openTokenModal(token)}
                  >
                    <div className="aspect-square rounded-lg overflow-hidden mb-4 bg-dark-blue/50">
                      <img
                        src={token.imagePath}
                        alt={token.name}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <h4 className="text-lg font-cinzel font-semibold text-accent-gold mb-2">
                      {token.name}
                    </h4>
                    <p className="text-gray-300 text-sm mb-4">
                      {token.description}
                    </p>
                    <div className="flex space-x-2">
                      <button className="flex-1 bg-accent-gold/20 hover:bg-accent-gold/30 text-accent-gold text-xs py-2 px-3 rounded-md transition-colors flex items-center justify-center">
                        <Eye size={14} className="mr-1" />
                        Ver
                      </button>
                      <button className="flex-1 bg-dark-blue/50 hover:bg-dark-blue text-white text-xs py-2 px-3 rounded-md transition-colors flex items-center justify-center">
                        <Download size={14} className="mr-1" />
                        Baixar
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Seção de Mapas */}
          <section>
            <h2 className="text-3xl font-cinzel font-bold text-accent-gold mb-8 text-center">
              Mapas dos Cenários
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {maps.map((map) => (
                <div key={map.id} className="card">
                  <div
                    className="aspect-video rounded-lg overflow-hidden mb-4 bg-dark-purple/50 cursor-pointer group relative"
                    onClick={() => openMapModal(map)}
                  >
                    <img
                      src={map.imagePath}
                      alt={map.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-accent-gold/90 text-dark-blue px-4 py-2 rounded-full flex items-center">
                        <ZoomIn size={18} className="mr-2" />
                        <span className="font-medium">Ver Mapa</span>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-cinzel font-semibold text-accent-gold mb-2">
                    {map.name}
                  </h3>
                  <p className="text-gray-300 mb-4">{map.description}</p>
                  <div className="flex space-x-3">
                    <button
                      onClick={() => openMapModal(map)}
                      className="btn-primary flex-1 flex items-center justify-center"
                    >
                      <Eye size={16} className="mr-2" />
                      Visualizar
                    </button>
                    <button className="btn-secondary flex items-center justify-center px-4">
                      <Download size={16} className="mr-2" />
                      Baixar
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </motion.div>
      </div>

      {/* Modal de Token */}
      <AnimatePresence>
        {selectedToken && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            onClick={closeTokenModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-dark-blue border border-light-purple/20 rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-cinzel font-bold text-accent-gold mb-2">
                    {selectedToken.name}
                  </h3>
                  <p className="text-gray-300">{selectedToken.description}</p>
                </div>
                <button
                  onClick={closeTokenModal}
                  className="text-gray-400 hover:text-white transition-colors p-1"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="mb-6">
                <img
                  src={selectedToken.imagePath}
                  alt={selectedToken.name}
                  className="w-full max-w-md mx-auto rounded-lg"
                />
              </div>

              <div className="flex space-x-4">
                <button className="btn-primary flex-1 flex items-center justify-center">
                  <Download size={18} className="mr-2" />
                  Baixar Token
                </button>
                <button
                  onClick={closeTokenModal}
                  className="btn-secondary flex-1"
                >
                  Fechar
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal de Mapa */}
      <AnimatePresence>
        {selectedMap && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
            onClick={closeMapModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-dark-blue border border-light-purple/20 rounded-lg p-6 max-w-6xl w-full max-h-[95vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-3xl font-cinzel font-bold text-accent-gold mb-2">
                    {selectedMap.name}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {selectedMap.description}
                  </p>
                  <div className="bg-dark-purple/30 p-4 rounded-lg border border-light-purple/20">
                    <h4 className="text-lg font-cinzel font-semibold text-accent-gold mb-2">
                      Detalhes do Mapa
                    </h4>
                    <p className="text-gray-300 text-sm">
                      {selectedMap.details}
                    </p>
                  </div>
                </div>
                <button
                  onClick={closeMapModal}
                  className="text-gray-400 hover:text-white transition-colors p-2 ml-4"
                >
                  <X size={28} />
                </button>
              </div>

              <div className="mb-6">
                <div className="rounded-lg overflow-hidden bg-dark-purple/20 border border-light-purple/20">
                  <img
                    src={selectedMap.imagePath}
                    alt={selectedMap.name}
                    className="w-full h-auto max-h-[60vh] object-contain"
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                <button className="btn-primary flex-1 flex items-center justify-center">
                  <Download size={18} className="mr-2" />
                  Baixar Mapa em Alta Resolução
                </button>
                <button
                  onClick={closeMapModal}
                  className="btn-secondary flex-1"
                >
                  Fechar
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TokensAndMaps;
