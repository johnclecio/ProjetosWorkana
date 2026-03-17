

function Depoimentos() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          O que nossos clientes dizem
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
            <p className="text-gray-600 mb-4">
              "Graças à Nova Morada encontrei a casa perfeita para minha família.
              Atendimento incrível do começo ao fim!"
            </p>

            <div className="flex items-center gap-3">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h4 className="font-semibold">Carlos Silva</h4>
                <p className="text-sm text-gray-500">Comprou uma casa</p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
            <p className="text-gray-600 mb-4">
              "Equipe super profissional! Encontraram exatamente o imóvel que
              eu procurava."
            </p>

            <div className="flex items-center gap-3">
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h4 className="font-semibold">Ana Costa</h4>
                <p className="text-sm text-gray-500">Comprou um apartamento</p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
            <p className="text-gray-600 mb-4">
              "Processo rápido e transparente. Hoje estou morando no imóvel dos
              meus sonhos!"
            </p>

            <div className="flex items-center gap-3">
              <img
                src="https://randomuser.me/api/portraits/men/12.jpg"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h4 className="font-semibold">Marcos Oliveira</h4>
                <p className="text-sm text-gray-500">Comprou uma casa</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Depoimentos;