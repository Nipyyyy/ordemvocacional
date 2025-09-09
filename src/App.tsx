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
import Team from './pages/Team';
import NotFound from './pages/NotFound';
import './index.css';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gradient-to-br from-dark-blue to-dark-purple text-white">
        <Header />
        <main id="main-content" className="flex-grow" role="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/teste" element={<Test />} />
            <Route path="/resultados" element={<Results />} />
            <Route path="/rpg" element={<RPGInfo />} />
            <Route path="/tokens-e-mapas" element={<TokensAndMaps />} />
            <Route path="/o-outro-lado" element={<Team />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App