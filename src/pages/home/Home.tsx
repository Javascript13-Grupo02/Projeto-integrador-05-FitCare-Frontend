import { Link } from "react-router-dom"
import FormContato from "../../components/form/Form"


function Home() {
  return (
    <>
      <section className="bg-orange-100 flex flex-col items-center justify-center pt-8 bg-[url('https://plus.unsplash.com/premium_photo-1679938885972-180ed418f466')] bg-cover bg-center relative h-dvh">
        <div className="absolute inset-0 bg-black/50">
        </div>
        <div className="z-10 flex flex-col items-center justify-center gap-4">
          <h1 className="text-3xl md:text-5xl font-bold  text-white text-center m-2">Movendo de acordo com a sua necessidade</h1>
          <p className="text-2xl md:text-3xl font-medium leading-snug text-white text-center m-2">Treinos rápidos e eficientes na palma da sua mão, a qualquer momento do seu dia</p>
          <Link 
            to="/categorias" 
            className="bg-emerald-500 hover:bg-emerald-400 text-white text-lg font-semibold px-8 py-3 rounded-full transition-colors duration-300"
            >
            Começar agora
          </Link>
        </div>
      </section>
    <div className="bg-linear-to-br from-black to-[#087f5b] w-full py-12 px-4 min-h-screen flex flex-col items-center">
      <FormContato />
    </div>
      
    </>
  )
}

export default Home