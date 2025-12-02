🎬 Catálogo de Filmes: Visão Geral do Projeto Nosso site é um Catálogo de Filmes moderno, desenvolvido com React + TypeScript e construído com Vite, o que garante uma aplicação de alto desempenho e carregamento rápido. O projeto é estruturado de forma modular, com 8 componentes principais que organizam a interface e a lógica de interação.

👥 Componentes por Aluno
Aluno 1 - [RAFAEL]
**Avaliacao**: Componente visual de estrelas para notas (0-5)

**Cabecalho**: Container de layout com título e busca integrada

Aluno 2 - [DIEGO]
**CardFilme**: Card clicável com todas informações do filme

**Filtro**: Sistema de filtros por categoria com botões

Aluno 3 - [JOÃO PEDRO]
**ListasFilmes**: Grid responsivo que organiza múltiplos cards

**Navegacao**: Menu principal com highlight da página ativa

Aluno 4 - [RIKELME]
**Pesquisa**: Barra de busca com estado controlado

**Rodape**: Rodapé com informações e links

📄 Páginas (5 Total)
 Home → Filmes em destaque

 Explorar → Busca + filtros

 DetalhesFilme → Informações completas de cada filme

 Minha Lista → Favoritos salvos

 Sobre → Equipe + tecnologias

⚛️ Hooks Utilizados (5 Total)
Hook	Onde Usado	Finalidade
**useState**	Pesquisa.tsx	Controlar input de busca
**useEffect**	useArmazenamentoLocal.ts	Sincronizar localStorage
**useMemo**	useGerenciadorFilmes.ts	Otimizar filtros
**useLocation**	Navegacao.tsx	Highlight menu ativo
**useArmazenamentoLocal**	App.tsx	Gerenciar favoritos (custom)
✅ 5 hooks diferentes (mínimo: 4)

🎯 Requisitos Atendidos
Requisito	Status	Detalhes
8+ componentes	✅	8 componentes em src/componentes/
5 páginas	✅	5 páginas em src/paginas/
4+ hooks	✅	5 hooks implementados
TypeScript	✅	Todos arquivos .tsx tipados
Roteamento	✅	React Router DOM
Dados estáticos	✅	Mock data sem API
GitHub público	✅	Repositório com código
🎨 Funcionalidades
✅ Sistema de Favoritos (localStorage)

✅ Busca em tempo real (título/diretor)

✅ Filtros dinâmicos por categoria

✅ Avaliação visual com estrelas

✅ Navegação completa entre páginas

✅ Design responsivo e moderno

✅ URLs amigáveis para cada filme

 🚀 Passo a Passo para Executar o Projeto

📋 Pré-requisitos
Antes de começar, você precisa ter instalado:
 ✅ **Node.js** (versão 16 ou superior)
 ✅ **npm** (vem com o Node.js)
 ✅ **Git** (para clonar o repositório)

🔧 Instalação Rápida

**Passo 1: Baixar o Projeto**
Abra o terminal (CMD no Windows) e execute:
git clone https://github.com/seu-usuario/catalogo-filmes.git

Passo 2: Entrar na Pasta
cd projeto

Passo 3: Instalar Dependências:
npm install

Passo 4: Iniciar o Servidor
npm run dev

Passo 5: Acessar no Navegador:
Acesse o navegador com usando "CTRL + CLIQUE" ou copie e cole o link que ele lhe dará"


