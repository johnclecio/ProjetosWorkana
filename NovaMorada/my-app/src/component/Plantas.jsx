import { useState } from "react";

function Plantas() {

  const plantas = [
    "https://i.pinimg.com/736x/f6/be/5c/f6be5c00dedabccce784b10d6005edcf.jpg",
    "https://i.pinimg.com/1200x/6d/61/29/6d6129550402ab63f88b7c962a63afb6.jpg",
    "https://i.pinimg.com/736x/f5/b3/13/f5b313e3d3e6129cb597937b3278e576.jpg"
  ];

  const [index, setIndex] = useState(0);

  const proximo = () => {
    setIndex((index + 1) % plantas.length);
  };

  const anterior = () => {
    setIndex((index - 1 + plantas.length) % plantas.length);
  };

  return (
    <section className="py-20 bg-white">

      <h2 className="text-4xl font-bold text-center mb-12">
        Plantas dos Imóveis
      </h2>

      <div className="max-w-6xl mx-auto relative">

        <img
        src={plantas[index]}
        className="max-h-125 w-auto mx-auto rounded-2xl shadow-2xl"
        />

        <button
          onClick={anterior}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 px-4 py-2 rounded-full text-2xl"
        >
          ‹
        </button>

        <button
          onClick={proximo}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 px-4 py-2 rounded-full text-2xl"
        >
          ›
        </button>

      </div>

    </section>
  );
}

export default Plantas;