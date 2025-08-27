import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Test from './pages/Test';
import Results from './pages/Results';
import RPGInfo from './pages/RPGInfo';
import TokensAndMaps from './pages/TokensAndMaps';
import NotFound from './pages/NotFound';
import './index.css';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gradient-to-br from-dark-blue to-dark-purple text-white">
        {/* Skip Links para acessibilidade */}
        <a href="#main-content" className="skip-link">
          Pular para o conteúdo principal
        </a>
        <a href="#navigation" className="skip-link">
          Pular para a navegação
        </a>
        
        <Header />
        <main id="main-content" className="flex-grow" role="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/teste" element={<Test />} />
            <Route path="/resultados" element={<Results />} />
            <Route path="/rpg" element={<RPGInfo />} />
            <Route path="/tokens-e-mapas" element={<TokensAndMaps />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App