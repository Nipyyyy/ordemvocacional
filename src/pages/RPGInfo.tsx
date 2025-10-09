import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Book, Download, Scroll, ExternalLink, Dices, User, Play } from 'lucide-react';
import CharacterCreationForm, { Character } from '../components/CharacterCreationForm';
import CharacterSheet from '../components/CharacterSheet';

const RPGInfo: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('regras');
  const [diceResult, setDiceResult] = useState<number | null>(null);
  const [isRolling, setIsRolling] = useState(false);
  const [createdCharacter, setCreatedCharacter] = useState<Character | null>(null);
  const [showCharacterForm, setShowCharacterForm] = useState(false);

  const rulesBookPdfUrl = "https://www.canva.com/design/DAGsAhQQ8K0/AAGBQeGrluop_b0baleG4A/view?utm_content=DAGsAhQQ8K0&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h80bd9183f0";

  const rollDice = () => {
    setIsRolling(true);
    setDiceResult(null);

    setTimeout(() => {
      const result = Math.floor(Math.random() * 6) + 1;
      setDiceResult(result);
      setIsRolling(false);
    }, 600);
  };
  
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          {/* Cabeçalho */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-cinzel font-bold text-accent-gold mb-6">
              RPG Ordem Vocacional
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Descubra um universo único onde sua vocação se transforma em uma 
              jornada épica de autodescoberta e aventura.
            </p>
            <div className="flex justify-center">
              <div className="h-1 w-32 bg-accent-gold rounded-full"></div>
            </div>
          </div>

          {/* Tabs de Navegação */}
          <div className="flex flex-wrap justify-center mb-8 gap-2">
            <button
              className={`px-4 py-2 rounded-full flex items-center transition-colors ${
                activeTab === 'regras'
                  ? 'bg-accent-gold text-dark-blue font-medium'
                  : 'bg-dark-blue/50 text-white hover:bg-dark-blue/70 hover:text-accent-gold'
              }`}
              onClick={() => setActiveTab('regras')}
            >
              <Book size={18} className="mr-2" />
              Regras
            </button>
            <button
              className={`px-4 py-2 rounded-full flex items-center transition-colors ${
                activeTab === 'mestre'
                  ? 'bg-accent-gold text-dark-blue font-medium'
                  : 'bg-dark-blue/50 text-white hover:bg-dark-blue/70 hover:text-accent-gold'
              }`}
              onClick={() => setActiveTab('mestre')}
            >
              <Scroll size={18} className="mr-2" />
              Guia do Mestre
            </button>
            <button
              className={`px-4 py-2 rounded-full flex items-center transition-colors ${
                activeTab === 'criacao'
                  ? 'bg-accent-gold text-dark-blue font-medium'
                  : 'bg-dark-blue/50 text-white hover:bg-dark-blue/70 hover:text-accent-gold'
              }`}
              onClick={() => setActiveTab('criacao')}
            >
              <User size={18} className="mr-2" />
              Criação de Personagem
            </button>
            <button
              className={`px-4 py-2 rounded-full flex items-center transition-colors ${
                activeTab === 'introducao'
                  ? 'bg-accent-gold text-dark-blue font-medium'
                  : 'bg-dark-blue/50 text-white hover:bg-dark-blue/70 hover:text-accent-gold'
              }`}
              onClick={() => setActiveTab('introducao')}
            >
              <Play size={18} className="mr-2" />
              Introdução
            </button>
            <button
              className={`px-4 py-2 rounded-full flex items-center transition-colors ${
                activeTab === 'materiais'
                  ? 'bg-accent-gold text-dark-blue font-medium'
                  : 'bg-dark-blue/50 text-white hover:bg-dark-blue/70 hover:text-accent-gold'
              }`}
              onClick={() => setActiveTab('materiais')}
            >
              <Download size={18} className="mr-2" />
              Materiais
            </button>
          </div>

          {/* Conteúdo da Tab Ativa */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === 'regras' && (
              <div className="card">
                <h2 className="text-2xl font-cinzel font-bold text-accent-gold mb-6">
                  Livro de Regras
                </h2>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                  {/* Capa do Livro */}
                  <div className="order-2 lg:order-1">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-cinzel font-semibold text-white mb-3">
                          Visão Geral
                        </h3>
                        <p className="text-gray-300 mb-4">
                          O RPG Ordem Vocacional é um jogo de interpretação de papéis baseado em 
                          narrativa, onde os jogadores exploram diferentes profissões e situações 
                          do dia a dia em um contexto imersivo e educativo.
                        </p>
                      </div>
                      
                      <div className="bg-dark-blue/70 p-4 rounded-lg border border-light-purple/30">
                        <h3 className="text-lg font-cinzel font-semibold text-accent-gold mb-2">
                          Acesse o Livro de Regras Completo
                        </h3>
                        <p className="text-gray-300 mb-4">
                          Para acessar todas as regras, mecânicas e detalhes do sistema, consulte 
                          nosso livro de regras completo em PDF.
                        </p>
                        <a 
                          href={rulesBookPdfUrl}
                          className="btn-primary inline-flex items-center"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Book size={18} className="mr-2" />
                          Acessar Livro de Regras
                          <ExternalLink size={16} className="ml-2" />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Capa do Livro - Clicável */}
                  <div className="order-1 lg:order-2">
                    <div className="relative group">
                      <a 
                        href={rulesBookPdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <div className="relative overflow-hidden rounded-lg shadow-2xl border-2 border-accent-gold/30 hover:border-accent-gold transition-all duration-300 group-hover:scale-105">
                          {/* Placeholder para a capa do livro - você pode substituir esta URL */}
                          <img 
                            src="https://images.pexels.com/photos/34055027/pexels-photo-34055027.png"
                            alt="Capa do Livro de Regras - Ordem Vocacional"
                            className="w-full h-auto aspect-[3/4] object-cover"
                          />
                          
                          {/* Overlay com efeito hover */}
                          <div className="absolute inset-0 bg-gradient-to-t from-dark-blue/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="absolute bottom-4 left-4 right-4">
                              <div className="bg-accent-gold/90 text-dark-blue px-4 py-2 rounded-full flex items-center justify-center font-medium">
                                <Book size={18} className="mr-2" />
                                Abrir PDF
                                <ExternalLink size={16} className="ml-2" />
                              </div>
                            </div>
                          </div>
                          
                          {/* Brilho sutil */}
                          <div className="absolute inset-0 bg-gradient-to-br from-accent-gold/10 via-transparent to-transparent"></div>
                        </div>
                      </a>
                      
                      {/* Título da capa */}
                      <div className="mt-4 text-center">
                        <h3 className="text-xl font-cinzel font-bold text-accent-gold mb-1">
                          Livro de Regras
                        </h3>
                        <p className="text-gray-300 text-sm">
                          Ordem Vocacional RPG
                        </p>
                        <p className="text-gray-400 text-xs mt-1">
                          Clique para abrir o PDF
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'mestre' && (
              <div className="card">
                <h2 className="text-2xl font-cinzel font-bold text-accent-gold mb-6">
                  Guia do Mestre
                </h2>

                <div className="space-y-6">
                  <p className="text-gray-300 text-lg">
                    O Mestre é o coração de qualquer sessão de RPG. Aqui estão algumas dicas essenciais para conduzir aventuras memoráveis no universo de Ordem Vocacional.
                  </p>

                  <div className="bg-dark-purple/30 p-6 rounded-lg border border-light-purple/20">
                    <h3 className="text-xl font-cinzel font-semibold text-accent-gold mb-4">
                      Preparação da Sessão
                    </h3>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start">
                        <span className="text-accent-gold mr-3 mt-1">•</span>
                        <span><strong className="text-white">Conheça as profissões:</strong> Antes da sessão, leia sobre as profissões escolhidas pelos jogadores. Entenda seus desafios, ambientes de trabalho e responsabilidades.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent-gold mr-3 mt-1">•</span>
                        <span><strong className="text-white">Prepare cenários realistas:</strong> Use situações do dia a dia que façam sentido para cada profissão. A autenticidade torna a experiência mais imersiva.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent-gold mr-3 mt-1">•</span>
                        <span><strong className="text-white">Tenha NPCs prontos:</strong> Crie personagens secundários com personalidades distintas: clientes difíceis, colegas de trabalho, chefes exigentes, etc.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-dark-purple/30 p-6 rounded-lg border border-light-purple/20">
                    <h3 className="text-xl font-cinzel font-semibold text-accent-gold mb-4">
                      Conduzindo a Narrativa
                    </h3>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start">
                        <span className="text-accent-gold mr-3 mt-1">•</span>
                        <span><strong className="text-white">Equilibre realismo e diversão:</strong> Embora baseado em profissões reais, o jogo deve ser divertido. Não se prenda demais a detalhes técnicos.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent-gold mr-3 mt-1">•</span>
                        <span><strong className="text-white">Use a regra do "Sim, mas...":</strong> Quando os jogadores propõem soluções criativas, tente aceitar com consequências interessantes.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent-gold mr-3 mt-1">•</span>
                        <span><strong className="text-white">Varie os desafios:</strong> Alterne entre problemas técnicos, dilemas éticos, interações sociais e situações de pressão.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-dark-purple/30 p-6 rounded-lg border border-light-purple/20">
                    <h3 className="text-xl font-cinzel font-semibold text-accent-gold mb-4">
                      Gerenciando Dificuldade
                    </h3>
                    <div className="grid md:grid-cols-3 gap-4 mb-4">
                      <div className="bg-green-500/10 p-4 rounded-lg border border-green-500/30">
                        <h4 className="text-green-400 font-semibold mb-2">Fácil</h4>
                        <p className="text-gray-300 text-sm">Situações cotidianas, 1-2 obstáculos simples, tempo adequado para resolver.</p>
                      </div>
                      <div className="bg-yellow-500/10 p-4 rounded-lg border border-yellow-500/30">
                        <h4 className="text-yellow-400 font-semibold mb-2">Médio</h4>
                        <p className="text-gray-300 text-sm">Múltiplos fatores complicadores, pressão de tempo, recursos limitados.</p>
                      </div>
                      <div className="bg-red-500/10 p-4 rounded-lg border border-red-500/30">
                        <h4 className="text-red-400 font-semibold mb-2">Difícil</h4>
                        <p className="text-gray-300 text-sm">Crises graves, decisões éticas complexas, alto risco de consequências negativas.</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-dark-purple/30 p-6 rounded-lg border border-light-purple/20">
                    <h3 className="text-xl font-cinzel font-semibold text-accent-gold mb-4">
                      Improvisação
                    </h3>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start">
                        <span className="text-accent-gold mr-3 mt-1">•</span>
                        <span><strong className="text-white">Escute os jogadores:</strong> As melhores histórias surgem da colaboração. Use as ideias dos jogadores para enriquecer a narrativa.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent-gold mr-3 mt-1">•</span>
                        <span><strong className="text-white">Tenha uma lista de complicações:</strong> Mantenha à mão problemas que podem surgir: equipamento quebra, pessoa adicional precisa de ajuda, prazo encurta, etc.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent-gold mr-3 mt-1">•</span>
                        <span><strong className="text-white">Não tenha medo de pausar:</strong> Se precisar de um momento para pensar, está tudo bem. "Vamos fazer uma pausa de 5 minutos" mantém a qualidade.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-dark-blue/50 p-6 rounded-lg border border-accent-gold/30">
                    <h3 className="text-lg font-cinzel font-semibold text-accent-gold mb-3">
                      Dica
                    </h3>
                    <p className="text-gray-300">
                      Lembre-se: o objetivo é que todos se divirtam e aprendam sobre diferentes profissões.
                      A melhor sessão é aquela onde todos saem com um sorriso no rosto e curiosidade sobre carreiras que talvez não conheciam antes.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'criacao' && (
              <>
                {!showCharacterForm && !createdCharacter && (
                  <div className="card">
                    <h2 className="text-2xl font-cinzel font-bold text-accent-gold mb-6 flex items-center">
                      <User className="mr-3" size={28} />
                      Criação de Personagem
                    </h2>

                    <div className="space-y-6">
                      <p className="text-gray-300 text-lg">
                        Crie seu personagem e comece sua aventura no mundo das profissões!
                      </p>

                      <div className="bg-dark-purple/30 p-6 rounded-lg border border-light-purple/20">
                        <h3 className="text-xl font-cinzel font-semibold text-accent-gold mb-4">
                          Profissões Disponíveis
                        </h3>
                        <p className="text-gray-300 mb-4">
                          Escolha entre diversas profissões inspiradas em cursos do SENAC:
                        </p>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="flex items-center bg-dark-blue/30 p-4 rounded-lg border border-blue-500/20">
                            <span className="text-3xl mr-3">💻</span>
                            <span className="text-white font-medium">Informática</span>
                          </div>
                          <div className="flex items-center bg-dark-blue/30 p-4 rounded-lg border border-red-500/20">
                            <span className="text-3xl mr-3">⚕️</span>
                            <span className="text-white font-medium">Medicina</span>
                          </div>
                          <div className="flex items-center bg-dark-blue/30 p-4 rounded-lg border border-green-500/20">
                            <span className="text-3xl mr-3">🐾</span>
                            <span className="text-white font-medium">Zoologia</span>
                          </div>
                          <div className="flex items-center bg-dark-blue/30 p-4 rounded-lg border border-purple-500/20">
                            <span className="text-3xl mr-3">🎨</span>
                            <span className="text-white font-medium">Artes Visuais / Design</span>
                          </div>
                          <div className="flex items-center bg-dark-blue/30 p-4 rounded-lg border border-cyan-500/20">
                            <span className="text-3xl mr-3">📰</span>
                            <span className="text-white font-medium">Jornalismo</span>
                          </div>
                          <div className="flex items-center bg-dark-blue/30 p-4 rounded-lg border border-yellow-500/20">
                            <span className="text-3xl mr-3">📢</span>
                            <span className="text-white font-medium">Publicidade</span>
                          </div>
                          <div className="flex items-center bg-dark-blue/30 p-4 rounded-lg border border-orange-500/20">
                            <span className="text-3xl mr-3">📊</span>
                            <span className="text-white font-medium">Administração</span>
                          </div>
                          <div className="flex items-center bg-dark-blue/30 p-4 rounded-lg border border-amber-500/20">
                            <span className="text-3xl mr-3">⚖️</span>
                            <span className="text-white font-medium">Direito</span>
                          </div>
                          <div className="flex items-center bg-dark-blue/30 p-4 rounded-lg border border-pink-500/20">
                            <span className="text-3xl mr-3">🎬</span>
                            <span className="text-white font-medium">Cinema / Audiovisual</span>
                          </div>
                          <div className="flex items-center bg-dark-blue/30 p-4 rounded-lg border border-teal-500/20">
                            <span className="text-3xl mr-3">🍎</span>
                            <span className="text-white font-medium">Professor</span>
                          </div>
                        </div>
                      </div>

                      <div className="text-center">
                        <button
                          onClick={() => setShowCharacterForm(true)}
                          className="btn-primary inline-flex items-center text-lg px-8 py-4"
                        >
                          <User size={20} className="mr-2" />
                          Criar Meu Personagem
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {showCharacterForm && !createdCharacter && (
                  <CharacterCreationForm
                    onCharacterCreated={(character) => {
                      setCreatedCharacter(character);
                      setShowCharacterForm(false);
                    }}
                  />
                )}

                {createdCharacter && (
                  <CharacterSheet
                    character={createdCharacter}
                    onBack={() => {
                      setCreatedCharacter(null);
                      setShowCharacterForm(false);
                    }}
                  />
                )}
              </>
            )}

            {activeTab === 'introducao' && (
              <div className="card">
                <h2 className="text-2xl font-cinzel font-bold text-accent-gold mb-6 flex items-center">
                  <Play className="mr-3" size={28} />
                  Introdução
                </h2>

                <div className="space-y-6">
                  <p className="text-gray-300 text-lg">
                    Para começar a jogar, siga esses passos simples e mergulhe em aventuras vocacionais únicas!
                  </p>

                  <div className="bg-dark-purple/30 p-6 rounded-lg border border-light-purple/20">
                    <h3 className="text-xl font-cinzel font-semibold text-accent-gold mb-4">
                      Como Começar
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="bg-accent-gold text-dark-blue rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                          1
                        </div>
                        <div>
                          <h4 className="text-white font-medium mb-1">Faça o teste vocacional</h4>
                          <p className="text-gray-300 text-sm">
                            Ele define sua área e profissão dentro do jogo. Acesse o teste na página inicial.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-accent-gold text-dark-blue rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                          2
                        </div>
                        <div>
                          <h4 className="text-white font-medium mb-1">Anote o resultado</h4>
                          <p className="text-gray-300 text-sm">
                            Seu resultado guiará suas escolhas durante toda a partida. Guarde-o bem!
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-accent-gold text-dark-blue rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                          3
                        </div>
                        <div>
                          <h4 className="text-white font-medium mb-1">Partir para a aventura!</h4>
                          <p className="text-gray-300 text-sm">
                            Com seu personagem criado, é só começar a jogar e viver histórias incríveis.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-light-purple/20 to-dark-purple/20 p-6 rounded-lg border border-light-purple/30">
                    <div className="flex items-start">
                      <div className="bg-light-purple/30 rounded-full p-3 mr-4">
                        <Dices className="text-accent-gold" size={24} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-cinzel font-semibold text-white mb-2">
                          Quer jogar apenas o RPG?
                        </h3>
                        <p className="text-gray-300">
                          Se você quiser jogar apenas o RPG (sem o teste vocacional), pode ir direto para a criação do
                          personagem escolhendo uma profissão e começar a história imediatamente!
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-dark-purple/30 p-6 rounded-lg border border-light-purple/20">
                    <h3 className="text-xl font-cinzel font-semibold text-accent-gold mb-4 flex items-center">
                      <Dices className="mr-3" size={24} />
                      Regras Básicas
                    </h3>

                    <div className="space-y-4 mb-6">
                      <div className="bg-dark-blue/50 p-4 rounded-lg">
                        <h4 className="text-white font-medium mb-2">Sistema de Rolagem D6</h4>
                        <p className="text-gray-300 text-sm mb-3">
                          As ações são decididas na rolagem de um dado de seis lados (D6):
                        </p>
                        <div className="grid md:grid-cols-2 gap-3">
                          <div className="flex items-center bg-green-500/10 p-3 rounded border border-green-500/30">
                            <span className="text-2xl mr-3">🎲</span>
                            <div>
                              <div className="text-green-400 font-medium text-sm">Número Alto</div>
                              <div className="text-gray-400 text-xs">Sucesso na ação</div>
                            </div>
                          </div>
                          <div className="flex items-center bg-red-500/10 p-3 rounded border border-red-500/30">
                            <span className="text-2xl mr-3">💥</span>
                            <div>
                              <div className="text-red-400 font-medium text-sm">Número Baixo</div>
                              <div className="text-gray-400 text-xs">Falha na ação</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-accent-gold/10 p-6 rounded-lg border border-accent-gold/30">
                        <h4 className="text-accent-gold font-cinzel font-semibold mb-4 text-center text-lg">
                          Rolagem Virtual de D6
                        </h4>
                        <div className="flex flex-col items-center">
                          <motion.div
                            animate={isRolling ? { rotate: 360 } : {}}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                            className="mb-4"
                          >
                            <div className="bg-white rounded-lg shadow-2xl p-8 border-4 border-accent-gold">
                              <Dices
                                size={64}
                                className={`${isRolling ? 'text-gray-400' : 'text-dark-blue'}`}
                              />
                            </div>
                          </motion.div>

                          {diceResult && !isRolling && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="mb-4"
                            >
                              <div className={`text-6xl font-bold ${
                                diceResult >= 4 ? 'text-green-400' : 'text-red-400'
                              }`}>
                                {diceResult}
                              </div>
                              <div className="text-center mt-2">
                                <span className={`text-sm font-medium ${
                                  diceResult >= 4 ? 'text-green-400' : 'text-red-400'
                                }`}>
                                  {diceResult >= 4 ? 'Sucesso!' : 'Falha!'}
                                </span>
                              </div>
                            </motion.div>
                          )}

                          <button
                            onClick={rollDice}
                            disabled={isRolling}
                            className="btn-primary inline-flex items-center disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            <Dices size={18} className="mr-2" />
                            {isRolling ? 'Rolando...' : 'Rolar Dado'}
                          </button>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-start bg-dark-blue/30 p-4 rounded-lg">
                          <span className="text-accent-gold mr-3 mt-1">•</span>
                          <div>
                            <span className="text-white font-medium">Interprete sua profissão!</span>
                            <p className="text-gray-300 text-sm mt-1">
                              Agir de acordo com sua profissão deixa o jogo mais imersivo e divertido para todos.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start bg-dark-blue/30 p-4 rounded-lg">
                          <span className="text-accent-gold mr-3 mt-1">•</span>
                          <div>
                            <span className="text-white font-medium">O papel do Mestre</span>
                            <p className="text-gray-300 text-sm mt-1">
                              O mestre pode dar dicas quando o grupo estiver perdido ou aumentar a dificuldade
                              se o desafio estiver fácil demais.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-dark-blue/50 p-6 rounded-lg border border-accent-gold/30">
                    <h3 className="text-lg font-cinzel font-semibold text-accent-gold mb-3">
                      Pronto para Começar?
                    </h3>
                    <p className="text-gray-300 mb-4">
                      Agora que você conhece as regras básicas, está pronto para mergulhar no universo de Ordem Vocacional!
                      Consulte o Livro de Regras para detalhes completos do sistema.
                    </p>
                    <a
                      href={rulesBookPdfUrl}
                      className="btn-primary inline-flex items-center"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Book size={18} className="mr-2" />
                      Acessar Livro de Regras Completo
                      <ExternalLink size={16} className="ml-2" />
                    </a>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'materiais' && (
              <div className="card">
                <h2 className="text-2xl font-cinzel font-bold text-accent-gold mb-6">
                  Fichas e Materiais
                </h2>

                <p className="text-gray-300 mb-8">
                  Baixe os materiais necessários para jogar Ordem Vocacional. Fichas de personagem, mapas e recursos adicionais para enriquecer suas sessões.
                </p>

                <div className="space-y-6">
                  <div className="bg-dark-purple/30 p-6 rounded-lg border border-light-purple/20">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-cinzel font-semibold text-white mb-2">
                          Ficha de Personagem
                        </h3>
                        <p className="text-gray-300 text-sm mb-4">
                          Ficha completa para criar e acompanhar a evolução do seu personagem ao longo das sessões.
                          Inclui espaços para habilidades, histórico profissional e anotações.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="text-xs bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full">PDF</span>
                          <span className="text-xs bg-green-500/20 text-green-400 px-3 py-1 rounded-full">Editável</span>
                        </div>
                      </div>
                      <button className="ml-4 btn-primary inline-flex items-center whitespace-nowrap">
                        <Download size={16} className="mr-2" />
                        Baixar
                      </button>
                    </div>
                  </div>

                  <div className="bg-dark-purple/30 p-6 rounded-lg border border-light-purple/20">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-cinzel font-semibold text-white mb-2">
                          Livro de Regras Completo
                        </h3>
                        <p className="text-gray-300 text-sm mb-4">
                          Manual completo com todas as regras do sistema, incluindo mecânicas de teste,
                          combate (se aplicável) e progressão de personagem.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="text-xs bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full">PDF</span>
                          <span className="text-xs bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full">80 páginas</span>
                        </div>
                      </div>
                      <a
                        href={rulesBookPdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-4 btn-primary inline-flex items-center whitespace-nowrap"
                      >
                        <Download size={16} className="mr-2" />
                        Baixar
                      </a>
                    </div>
                  </div>

                  <div className="bg-dark-purple/30 p-6 rounded-lg border border-light-purple/20">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-cinzel font-semibold text-white mb-2">
                          Tokens de Personagem
                        </h3>
                        <p className="text-gray-300 text-sm mb-4">
                          Conjunto de tokens digitais representando as diferentes profissões para uso em
                          plataformas online ou impressão para jogos presenciais.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="text-xs bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full">PNG</span>
                          <span className="text-xs bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full">Alta Resolução</span>
                        </div>
                      </div>
                      <button className="ml-4 btn-primary inline-flex items-center whitespace-nowrap">
                        <Download size={16} className="mr-2" />
                        Baixar
                      </button>
                    </div>
                  </div>

                  <div className="bg-dark-purple/30 p-6 rounded-lg border border-light-purple/20">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-cinzel font-semibold text-white mb-2">
                          Mapas de Cenários
                        </h3>
                        <p className="text-gray-300 text-sm mb-4">
                          Coleção de mapas de ambientes profissionais: escritórios, hospitais, escolas,
                          laboratórios e mais. Perfeito para sessões que usam miniaturas ou tokens.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="text-xs bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full">PDF</span>
                          <span className="text-xs bg-green-500/20 text-green-400 px-3 py-1 rounded-full">15 mapas</span>
                        </div>
                      </div>
                      <button className="ml-4 btn-primary inline-flex items-center whitespace-nowrap">
                        <Download size={16} className="mr-2" />
                        Baixar
                      </button>
                    </div>
                  </div>

                  <div className="bg-dark-purple/30 p-6 rounded-lg border border-light-purple/20">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-cinzel font-semibold text-white mb-2">
                          Tela do Mestre
                        </h3>
                        <p className="text-gray-300 text-sm mb-4">
                          Painel de referência rápida com tabelas, modificadores e informações essenciais
                          para o Mestre conduzir a sessão com fluidez.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="text-xs bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full">PDF</span>
                          <span className="text-xs bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full">4 painéis</span>
                        </div>
                      </div>
                      <button className="ml-4 btn-primary inline-flex items-center whitespace-nowrap">
                        <Download size={16} className="mr-2" />
                        Baixar
                      </button>
                    </div>
                  </div>

                  <div className="bg-dark-purple/30 p-6 rounded-lg border border-light-purple/20">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-cinzel font-semibold text-white mb-2">
                          Aventuras Prontas
                        </h3>
                        <p className="text-gray-300 text-sm mb-4">
                          Pacote com 5 aventuras completas, cada uma focada em uma profissão diferente.
                          Inclui NPCs, dilemas e resoluções alternativas.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="text-xs bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full">PDF</span>
                          <span className="text-xs bg-red-500/20 text-red-400 px-3 py-1 rounded-full">Premium</span>
                        </div>
                      </div>
                      <button className="ml-4 btn-primary inline-flex items-center whitespace-nowrap">
                        <Download size={16} className="mr-2" />
                        Baixar
                      </button>
                    </div>
                  </div>
                </div>

                <div className="mt-8 bg-dark-blue/50 p-6 rounded-lg border border-accent-gold/30">
                  <div className="flex items-center mb-4">
                    <div className="w-3 h-3 bg-accent-gold rounded-full mr-3 animate-pulse"></div>
                    <h3 className="text-lg font-cinzel font-semibold text-accent-gold">
                      Materiais em Desenvolvimento
                    </h3>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Os downloads marcados acima estão sendo preparados e serão disponibilizados em breve.
                    O Livro de Regras já está disponível para acesso imediato. Fique atento para as próximas atualizações!
                  </p>
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default RPGInfo;