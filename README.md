# Nova Morada - Site de Imobiliária

**Nova Morada** é um projeto de site de imobiliária desenvolvido com **React**, **Tailwind CSS** e componentes reutilizáveis.  
O site permite exibir imóveis com cards interativos, galerias de imagens, slides de plantas baixas e informações detalhadas de cada casa.

---

## 🏠 Funcionalidades

- Cards de imóveis com:
  - Foto principal
  - Preço
  - Localização
  - Medidas do imóvel
- Galeria modal para cada casa:
  - Slide de fotos independentes
  - Visualização de plantas baixas
  - Fotos de fachada com família feliz
- Seção de **depoimentos** de clientes
- Formulário de contato integrado
- Layout responsivo e moderno com **Tailwind CSS**
- Tipografia elegante com fontes **Poppins (títulos)** e **Inter (textos)**

---

## ⚡ Tecnologias

- **React** – Biblioteca de front-end
- **Tailwind CSS** – Estilização rápida e responsiva
- **JavaScript / JSX** – Lógica do projeto
- **Vite** – Bundler moderno para React
- **Git** – Controle de versão

---

## 🖼 Estrutura do Projeto

```text
        src/
        ├ components/
        │   ├ CasaCard.jsx      # Card individual do imóvel
        │   ├ Casas.jsx         # Grid de cards
        │   ├ GaleriaCasa.jsx   # Modal / slideshow das imagens
        │   ├ Plantas.jsx       # Slides grandes de plantas baixas
        │   ├ Main.jsx          # Hero / topo do site
        │   ├ Depoimentos.jsx   # Cards de depoimentos
        │   ├ Form.jsx          # Formulário de contato
        │   └ Footer.jsx        # Rodapé
        ├ App.jsx               # Componente principal
        └ output.css            # Tailwind + customizações


 🚀 Como rodar o projeto

    Clone o repositório:

    git clone <url-do-repositorio>
    cd <nome-do-projeto>

    Instale dependências:

    npm install

    Rode o servidor de desenvolvimento:

    npm run dev

    Abra no navegador:

    http://localhost:5173