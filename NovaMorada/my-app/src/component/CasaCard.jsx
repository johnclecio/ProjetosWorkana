import { useState } from "react";
import GaleriaCasa from "./GaleriaCasa";

function CasaCard({ casa }) {
  const [abrirGaleria, setAbrirGaleria] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition">

      <img
        src={casa.imagemPrincipal}
        className="w-full h-60 object-cover cursor-pointer hover:scale-105 transition"
        onClick={() => setAbrirGaleria(true)}
      />

      <div className="p-5">

        <h3 className="text-xl font-bold text-gray-800">
          {casa.titulo}
        </h3>

        <p className="text-gray-600 mt-2">
          📍 {casa.localizacao}
        </p>

        <p className="text-gray-600">
          📐 {casa.medidas}
        </p>

        <p className="text-rose-500 text-2xl font-bold mt-3">
          {casa.preco}
        </p>

      </div>

      {abrirGaleria && (
        <GaleriaCasa
          imagens={casa.imagensSlide}
          fechar={() => setAbrirGaleria(false)}
        />
      )}

    </div>
  );
}

export default CasaCard;