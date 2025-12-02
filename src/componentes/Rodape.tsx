import React from 'react';

export const Rodape: React.FC = () => {
  return (
    <footer className="rodape">
      <div className="rodape-conteudo">
        <div className="info-rodape">
          <h3>🎬 Catálogo de Filmes</h3>
          <p>Seu guia para descobrir grandes histórias no cinema</p>
        </div>
        
        <div className="links-rodape">
          <div className="grupo-links">
            <h4>Navegação</h4>
            <a href="/">Home</a>
            <a href="/explorar">Explorar</a>
            <a href="/minha-lista">Minha Lista</a>
          </div>
          
          <div className="grupo-links">
            <h4>Sobre</h4>
            <a href="/sobre">O Projeto</a>
            <a href="/sobre">Desenvolvedores</a>
          </div>
        </div>
      </div>
    </footer>
  );
};