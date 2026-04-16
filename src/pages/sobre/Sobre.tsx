function Sobre() {
  return (
   <div className="bg-linear-to-br from-black to-[#087f5b] w-full py-12 px-4 min-h-screen flex flex-col items-center">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="max-w-7xl mx-auto space-y-16"></div>
        <div className="text-center space-y-8">
          <h1 className="text-3xl md:text-5xl font-bold  text-gray-300">
            FitCare
          </h1>
          <h2 className="text-2xl md:text-4xl font-bold  text-gray-300">
            Movendo de acordo com a sua necessidade
          </h2>
          <p className="text-2xl font-medium leading-snug text-gray-300">
            Treinos rápidos e eficientes na palma da sua mão, a qualquer momento do seu dia.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch w-full">
          <div className="flex flex-col items-center w-full h-full">
            <img
              src="https://ik.imagekit.io/vjqejp2vh/proj03/FitCare%20Logo%20Clara.png"
              alt="Logo FitCare"
              className="w-64 md:w-80 h-auto drop-shadow-lg mb-8"
            />

            <div className="bg-zinc-800 p-10 md:p-14 rounded-3xl shadow-md shadow-black/80 text-center w-full mt-auto">
              <h3 className="text-3xl font-bold mb-6 text-gray-300">
                Nossa Missão
              </h3>
              <p className="text-lg leading-relaxed text-gray-300 ">
                O FitCare nasceu para descomplicar o bem-estar de quem vive uma
                rotina acelerada. O aplicativo centraliza programas de
                exercícios curtos e eficientes (de 10 a 30 minutos), divididos
                por modalidades como Yoga, Pilates, Musculação e HIIT. Através
                de filtros intuitivos, o usuário escolhe a atividade ideal para
                o seu momento, garantindo que a sua evolução aconteça onde
                estiver, sem complicações e sem a necessidade de equipamentos
                complexos.
              </p>
            </div>
          </div>

          <div className="flex flex-col w-full h-full">
            <div className="bg-zinc-800  p-10 md:p-14 rounded-3xl shadow-md shadow-black/80 mt-auto">
              <h3 className="text-3xl font-bold mb-6  text-gray-300  text-center">
                Funcionalidades do Projeto
              </h3>

              <p className="text-lg leading-relaxed mb-8 text-center text-gray-300">
                O sistema foi desenhado para oferecer uma experiência
                inteligente e segura tanto na gestão quanto na consulta de
                produtos:
              </p>

              <div className="space-y- text-left">
                <div>
                  <h4 className="text-xl font-bold mb-3  text-emerald-500 ">
                    Gestão e Buscas
                  </h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-300">
                    <li>
                      <strong>Gerenciamento de Atividades:</strong> Cadastro,
                      consulta, atualização e remoção de exercícios.
                    </li>
                    <li>
                      <strong>Filtros Dinâmicos:</strong> Sistema de busca
                      flexível com filtro direto por Modalidade (yoga, pilates,
                      musculação, hiit).
                    </li>
                    <li>
                      <strong>Pesquisar exercícios por nome:</strong> Sistema de
                      busca flexível para encontrar rapidamente seus exercícios
                      favoritos.
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-bold mb-3  text-emerald-500 ">
                    Inteligência e Segurança
                  </h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-300">
                    <li>
                      <strong>Sistema de Cálculo de IMC:</strong>Cálculo do
                      Índice de Massa Corporal (IMC) com base no peso e altura,
                      facilitando o acompanhamento da evolução física e da saúde
                      do usuário.
                    </li>

                    <li>
                      <strong>Validação de Dados:</strong>Garantia de
                      integridade com class-validator e class-transformer.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Sobre;