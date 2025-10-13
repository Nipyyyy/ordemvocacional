import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Briefcase, FileText, Image, Save } from 'lucide-react';
import { professionCategories, Token } from '../data/tokensData';

export interface Character {
  id: string;
  name: string;
  age: number;
  profession: string;
  characteristics: string;
  token_url: string;
  token_name: string;
  created_at: string;
}

interface CharacterCreationFormProps {
  onCharacterCreated: (character: Character) => void;
}


const CharacterCreationForm: React.FC<CharacterCreationFormProps> = ({ onCharacterCreated }) => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    profession: '',
    characteristics: '',
    tokenUrl: '',
    tokenName: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [availableTokens, setAvailableTokens] = useState<Token[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      const character: Character = {
        id: Math.random().toString(36).substring(2, 15),
        name: formData.name,
        age: parseInt(formData.age),
        profession: formData.profession,
        characteristics: formData.characteristics,
        token_url: formData.tokenUrl,
        token_name: formData.tokenName,
        created_at: new Date().toISOString()
      };

      onCharacterCreated(character);
    } catch (err) {
      console.error('Error creating character:', err);
      setError('Erro ao criar personagem. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    if (name === 'profession') {
      const category = professionCategories.find(cat => cat.name === value);
      setAvailableTokens(category ? category.tokens : []);
      setFormData({
        ...formData,
        [name]: value,
        tokenUrl: '',
        tokenName: ''
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleTokenSelect = (token: Token) => {
    setFormData({
      ...formData,
      tokenUrl: token.imagePath,
      tokenName: token.name
    });
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
      className="card max-w-3xl mx-auto"
    >
      <h2 className="text-3xl font-cinzel font-bold text-accent-gold mb-8 text-center">
        Criar Personagem
      </h2>

      {error && (
        <div className="bg-red-500/20 border border-red-500/50 text-red-300 px-4 py-3 rounded-lg mb-6">
          {error}
        </div>
      )}

      <div className="space-y-6">
        <div>
          <label className="flex items-center text-white font-medium mb-2">
            <User size={18} className="mr-2 text-accent-gold" />
            Nome do Personagem *
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-dark-blue/50 border border-light-purple/30 rounded-lg text-white placeholder-gray-400 focus:border-accent-gold focus:outline-none transition-colors"
            placeholder="Ex: João Silva"
          />
        </div>

        <div>
          <label className="flex items-center text-white font-medium mb-2">
            <User size={18} className="mr-2 text-accent-gold" />
            Idade *
          </label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
            min="16"
            max="100"
            className="w-full px-4 py-3 bg-dark-blue/50 border border-light-purple/30 rounded-lg text-white placeholder-gray-400 focus:border-accent-gold focus:outline-none transition-colors"
            placeholder="Ex: 25"
          />
        </div>

        <div>
          <label className="flex items-center text-white font-medium mb-2">
            <Briefcase size={18} className="mr-2 text-accent-gold" />
            Profissão *
          </label>
          <select
            name="profession"
            value={formData.profession}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-dark-blue/50 border border-light-purple/30 rounded-lg text-white focus:border-accent-gold focus:outline-none transition-colors [&>option]:bg-dark-blue [&>option]:text-white"
          >
            <option value="" className="bg-dark-blue text-gray-400">Selecione uma profissão</option>
            {professionCategories.map((category) => (
              <option key={category.id} value={category.name} className="bg-dark-blue text-white">
                {category.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="flex items-center text-white font-medium mb-2">
            <FileText size={18} className="mr-2 text-accent-gold" />
            Características *
          </label>
          <textarea
            name="characteristics"
            value={formData.characteristics}
            onChange={handleChange}
            required
            rows={4}
            className="w-full px-4 py-3 bg-dark-blue/50 border border-light-purple/30 rounded-lg text-white placeholder-gray-400 focus:border-accent-gold focus:outline-none transition-colors resize-none"
            placeholder="Descreva as características, personalidade e história do seu personagem..."
          />
        </div>

        {formData.profession && (
          <div>
            <label className="flex items-center text-white font-medium mb-3">
              <Image size={18} className="mr-2 text-accent-gold" />
              Token de Personagem *
            </label>
            {availableTokens.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {availableTokens.map((token) => (
                  <div
                    key={token.id}
                    onClick={() => handleTokenSelect(token)}
                    className={`cursor-pointer rounded-lg overflow-hidden border-2 transition-all ${
                      formData.tokenUrl === token.imagePath
                        ? 'border-accent-gold ring-2 ring-accent-gold/50'
                        : 'border-light-purple/30 hover:border-light-purple/60'
                    }`}
                  >
                    <div className="aspect-square bg-dark-blue/50">
                      <img
                        src={token.imagePath}
                        alt={token.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="p-3 bg-dark-blue/70">
                      <h4 className="text-sm font-semibold text-accent-gold mb-1">{token.name}</h4>
                      <p className="text-xs text-gray-300">{token.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-400 text-sm">Selecione uma profissão para ver os tokens disponíveis.</p>
            )}
          </div>
        )}


        <button
          type="submit"
          disabled={isSubmitting || !formData.tokenUrl}
          className="w-full btn-primary inline-flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Save size={18} className="mr-2" />
          {isSubmitting ? 'Criando Personagem...' : 'Criar Personagem'}
        </button>
      </div>
    </motion.form>
  );
};

export default CharacterCreationForm;
