import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Briefcase, FileText, Image, Download, ArrowLeft, Dices } from 'lucide-react';
import { Character } from './CharacterCreationForm';

interface CharacterSheetProps {
  character: Character;
  onBack: () => void;
}

const CharacterSheet: React.FC<CharacterSheetProps> = ({ character, onBack }) => {
  const [diceResult, setDiceResult] = useState<number | null>(null);
  const [isRolling, setIsRolling] = useState(false);

  const handlePrint = () => {
    window.print();
  };

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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto"
    >
      <div className="mb-6 flex justify-between items-center print:hidden">
        <button onClick={onBack} className="btn-secondary inline-flex items-center">
          <ArrowLeft size={18} className="mr-2" />
          Voltar
        </button>
        <button onClick={handlePrint} className="btn-primary inline-flex items-center">
          <Download size={18} className="mr-2" />
          Imprimir/Salvar Ficha
        </button>
      </div>

      <div className="card bg-gradient-to-br from-dark-purple/50 to-dark-blue/50 border-2 border-accent-gold/50">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-cinzel font-bold text-accent-gold mb-2">
            Ficha de Personagem
          </h1>
          <div className="h-1 w-32 bg-accent-gold rounded-full mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <div className="bg-dark-blue/70 p-6 rounded-lg border border-light-purple/30">
              <div className="flex items-center mb-3">
                <User size={20} className="mr-2 text-accent-gold" />
                <h3 className="text-lg font-cinzel font-semibold text-white">Informações Básicas</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <span className="text-gray-400 text-sm">Nome:</span>
                  <p className="text-white text-xl font-medium">{character.name}</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-gray-400 text-sm">Idade:</span>
                    <p className="text-white text-lg">{character.age} anos</p>
                  </div>
                  <div>
                    <span className="text-gray-400 text-sm">ID:</span>
                    <p className="text-white text-xs font-mono">{character.id.slice(0, 8)}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-dark-blue/70 p-6 rounded-lg border border-light-purple/30">
              <div className="flex items-center mb-3">
                <Briefcase size={20} className="mr-2 text-accent-gold" />
                <h3 className="text-lg font-cinzel font-semibold text-white">Profissão</h3>
              </div>
              <p className="text-white text-2xl font-cinzel font-bold text-accent-gold">
                {character.profession}
              </p>
            </div>

            <div className="bg-dark-blue/70 p-6 rounded-lg border border-light-purple/30">
              <div className="flex items-center mb-3">
                <FileText size={20} className="mr-2 text-accent-gold" />
                <h3 className="text-lg font-cinzel font-semibold text-white">Características</h3>
              </div>
              <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                {character.characteristics}
              </p>
            </div>

            <div className="bg-gradient-to-r from-light-purple/20 to-dark-purple/20 p-6 rounded-lg border border-light-purple/30">
              <h3 className="text-sm font-cinzel font-semibold text-accent-gold mb-2">
                Sistema de Jogo
              </h3>
              <p className="text-gray-300 text-sm">
                RPG Ordem Vocacional - Sistema D6
              </p>
              <p className="text-gray-400 text-xs mt-2">
                Criado em: {new Date(character.created_at).toLocaleDateString('pt-BR')}
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {character.token_url && (
              <div className="bg-dark-blue/70 p-6 rounded-lg border border-light-purple/30">
                <div className="flex items-center mb-3">
                  <Image size={20} className="mr-2 text-accent-gold" />
                  <h3 className="text-lg font-cinzel font-semibold text-white">Token</h3>
                </div>
                <div className="rounded-lg overflow-hidden border-2 border-accent-gold/30">
                  <img
                    src={character.token_url}
                    alt={`Token de ${character.name}`}
                    className="w-full h-auto object-contain"
                  />
                </div>
                {character.token_name && (
                  <p className="text-gray-300 text-sm text-center mt-2">{character.token_name}</p>
                )}
              </div>
            )}

            <div className="bg-dark-blue/70 p-6 rounded-lg border border-light-purple/30">
              <h3 className="text-lg font-cinzel font-semibold text-white mb-4 flex items-center">
                <Dices size={20} className="mr-2 text-accent-gold" />
                Rolagem de Dado D6
              </h3>
              <div className="bg-dark-blue/10 p-4 rounded-lg border border-dark-blue/30">
                <div className="flex flex-col items-center">
                  <motion.div
                    animate={isRolling ? { rotate: 360 } : {}}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="mb-4"
                  >
                    <div className="bg-white rounded-lg shadow-2xl p-6 border-4 border-accent-gold">
                      <Dices
                        size={48}
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
                      <div className={`text-5xl font-bold ${
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
            </div>

            <div className="bg-gradient-to-br from-accent-gold/10 to-light-purple/10 p-6 rounded-lg border border-accent-gold/30">
              <p className="text-gray-300 text-sm text-center italic">
                "Descubra sua vocação através da aventura"
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media print {
          body * {
            visibility: hidden;
          }
          .card, .card * {
            visibility: visible;
          }
          .card {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
          }
        }
      `}</style>
    </motion.div>
  );
};

export default CharacterSheet;
