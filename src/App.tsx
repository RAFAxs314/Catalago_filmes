<<<<<<< HEAD
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Navegacao}  from './componentes/Navegacao';
import {Rodape}  from './componentes/Rodape';
import { Home } from './paginas/Home';
import { Explorar } from './paginas/Explorar';
import { DetalhesFilme } from './paginas/DetalhesFilme';
import { MinhaLista } from './paginas/MinhaLista';
import { Sobre } from './paginas/Sobre';
import { useArmazenamentoLocal } from './hooks/useArmazenamentoLocal';

import './App.css';

function App() {
  const { favoritos, adicionarFavorito, removerFavorito, ehFavorito } = 
    useArmazenamentoLocal('favoritos', []);

 

  const alternarFavorito = (filme: any) => {
    if (ehFavorito(filme.id)) {
      removerFavorito(filme.id);
    } else {
      adicionarFavorito(filme);
    }
  };

  return (
    <Router>
      <div className="App">
        <Navegacao />
        
        <main className="conteudo-principal">
          <Routes>
            <Route path="/" element={
              <Home
              favoritos={favoritos}
                aoAlternarFavorito={alternarFavorito}
                ehFavorito={ehFavorito}
              />
            } />
            <Route path="/explorar" element={
              <Explorar 
                aoAlternarFavorito={alternarFavorito}
                ehFavorito={ehFavorito}
              />
            } />
            <Route path="/filme/:id" element={
              <DetalhesFilme 
                aoAlternarFavorito={alternarFavorito}
                ehFavorito={ehFavorito}
              />
            } />
            <Route path="/minha-lista" element={
              <MinhaLista 
                favoritos={favoritos}
                aoAlternarFavorito={alternarFavorito}
              />
            } />
            <Route path="/sobre" element={<Sobre />} />
          </Routes>
        </main>
        <Rodape />
      </div>
    </Router>
  );
}

export default App;
=======
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
>>>>>>> 6f788616c33d485f189b7c2aab55f0a49a2abed8
