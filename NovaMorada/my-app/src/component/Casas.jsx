import CasaCard from "./CasaCard";

function Casas() {

  const casas = [
    {
      titulo: "Casa Moderna",
      localizacao: "Fortaleza - CE",
      medidas: "120m² | 3 quartos | 2 banheiros",
      preco: "R$ 420.000",
      imagemPrincipal: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6",
      imagensSlide: [
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
      ]
    },
    {
      titulo: "Casa com Piscina",
      localizacao: "Aquiraz - CE",
      medidas: "180m² | 4 quartos | 3 banheiros",
      preco: "R$ 650.000",
      imagemPrincipal: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      imagensSlide: [
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
      ]
    },
    {
      titulo: "Casa Familiar",
      localizacao: "Eusébio - CE",
      medidas: "140m² | 3 quartos | 2 banheiros",
      preco: "R$ 480.000",
      imagemPrincipal: "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
      imagensSlide: [
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gray-100">
      <h2 className="text-4xl text-center font-bold mb-12">
        Imóveis em Destaque
      </h2>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 px-6">
        {casas.map((casa, index) => (
          <CasaCard key={index} casa={casa} />
        ))}
      </div>
    </section>
  )
}

export default Casas;