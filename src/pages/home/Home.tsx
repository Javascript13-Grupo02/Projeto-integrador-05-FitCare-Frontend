import { Link } from "react-router-dom"
import FormContato from "../../components/form/Form"


function Home() {
  return (
    <>
      <section className="bg-orange-100 flex flex-col items-center justify-center pt-8 bg-[url('https://images.unsplash.com/photo-1758274536471-912e9d20d4fc')] bg-cover bg-center relative h-dvh">
        <div className="absolute inset-0 bg-black/50">
        </div>
        <div className="z-10 flex flex-col items-center justify-center gap-4">
          <h1 className="text-3xl md:text-5xl font-bold  text-white text-center m-2">Movendo de acordo com a sua necessidade</h1>
          <p className="text-2xl md:text-3xl font-medium leading-snug text-white text-center m-2">Treinos rápidos e eficientes na palma da sua mão, a qualquer momento do seu dia</p>
          <Link 
            to="/exercicios" 
            className="bg-emerald-500 hover:bg-emerald-400 text-white text-lg font-semibold px-8 py-3 rounded-full transition-colors duration-300"
            >
            Começar agora
          </Link>
        </div>
      </section>
    <div className="bg-linear-to-br from-black to-[#087f5b] w-full py-12 px-4 min-h-screen flex flex-col items-center">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8 p-12 pb-16">

          <Link
            to="/categorias"
            className="flex-1 flex flex-col rounded-2xl overflow-hidden bg-zinc-800 border border-white/7 hover:-translate-y-1.5 hover:shadow-[0_24px_48px_rgba(0,0,0,0.4),0_0_0_1px_rgba(16,185,129,0.35)] transition-all duration-300"
          >
            <div className="h-0.5 bg-linear-to-r from-emerald-500 to-transparent" />
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/6">
              <span className="text-white font-bold uppercase tracking-widest text-lg">Categorias</span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]" />
            </div>
            <div className="w-full h-48 bg-zinc-700 flex items-center justify-center text-white/20 text-sm">
              <img src="https://images.unsplash.com/photo-1731325632687-51e90609e700" alt="Categorias" className="w-full h-48 object-cover" />
            </div>
            <div className="flex-1 px-6 py-5 text-white/55 text-sm leading-relaxed">
              Explore nossas categorias de treino — do iniciante ao extremo. Cada nível foi pensado para respeitar o seu ritmo e te levar mais longe, com segurança e consistência.
            </div>
            <div className="flex items-center justify-between px-6 py-4 border-t border-white/6">
              <span className="text-emerald-500 text-xs font-semibold uppercase tracking-widest">Ver categorias</span>
              <span className="text-emerald-500/50 text-lg transition-transform duration-200 group-hover:translate-x-1">→</span>
            </div>
          </Link>

          <Link
            to="/exercicios"
            className="flex-1 flex flex-col rounded-2xl overflow-hidden bg-zinc-800 border border-white/7 hover:-translate-y-1.5 hover:shadow-[0_24px_48px_rgba(0,0,0,0.4),0_0_0_1px_rgba(16,185,129,0.35)] transition-all duration-300"
          >
            <div className="h-0.5 bg-linear-to-r from-emerald-500 to-transparent" />
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/6">
              <span className="text-white font-bold uppercase tracking-widest text-lg">Exercícios</span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]" />
            </div>
            <div className="w-full h-48 bg-zinc-700 flex items-center justify-center text-white/20 text-sm">
               <img src="https://images.unsplash.com/photo-1575052814074-c05122e0a17a" alt="Categorias" className="w-full h-48 object-cover" />
              
            </div>
            <div className="flex-1 px-6 py-5 text-white/55 text-sm leading-relaxed">
              Dos movimentos mais básicos aos mais desafiadores — força, mobilidade e resistência sem sair de casa. Encontre o exercício certo para o seu objetivo.
            </div>
            <div className="flex items-center justify-between px-6 py-4 border-t border-white/6">
              <span className="text-emerald-500 text-xs font-semibold uppercase tracking-widest">Ver exercícios</span>
              <span className="text-emerald-500/50 text-lg transition-transform duration-200 group-hover:translate-x-1">→</span>
            </div>
          </Link>

        </div>
      <FormContato />
        <div className="max-w-5xl mx-auto w-full mt-12 flex flex-col md:flex-row items-center justify-between gap-6 px-8 py-10 rounded-2xl bg-white/3 border border-white/7">
          <div className="flex-1">
            <p className="text-white font-bold text-lg mb-1">Acompanhe sua evolução</p>
            <p className="text-white/75 text-sm leading-relaxed">
              Quer medir o seu progresso ao longo da jornada FitCare? Conheça nossa calculadora de IMC e mantenha o foco nos seus resultados.
            </p>
          </div>
          <Link
            to="/calculadora"
            className="shrink-0 w-full md:w-auto text-center px-8 py-3 rounded-xl bg-zinc-800 border border-white/7 text-white text-xs font-semibold uppercase tracking-widest hover:bg-emerald-500/10 hover:border-emerald-500/40 hover:text-emerald-500 transition-all duration-200"
          >
            Calcular IMC
          </Link>
        </div>
      </div>
      
    </>
  )
}

export default Home