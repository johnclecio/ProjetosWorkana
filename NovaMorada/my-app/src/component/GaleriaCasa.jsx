import { useState } from "react";

function GaleriaCasa({ imagens, fechar }) {
  const [index, setIndex] = useState(0);

  const proxima = () => {
    setIndex((index + 1) % imagens.length);
  };

  const anterior = () => {
    setIndex((index - 1 + imagens.length) % imagens.length);
  };

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">

      <button
        className="absolute top-6 right-10 text-white text-3xl"
        onClick={fechar}
      >
        ✕
      </button>

      <button
        onClick={anterior}
        className="text-white text-4xl absolute left-10"
      >
        ‹
      </button>

      <img
        src={imagens[index]}
        className="max-h-[80vh] rounded-xl shadow-lg object-contain"
      />

      <button
        onClick={proxima}
        className="text-white text-4xl absolute right-10"
      >
        ›
      </button>

    </div>
  );
}

export default GaleriaCasa;