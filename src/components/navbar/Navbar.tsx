import { Link } from "react-router-dom"

function Navbar() {
  return (
    <div className='w-full flex justify-center py-4 bg-zinc-900 text-white'>
      <div className="container flex justify-between text-lg mx-8">

        <Link to='/home' className="flex items-center gap-2 text-2xl font-bold">
          <img 
            src="https://ik.imagekit.io/vjqejp2vh/FitCare%20Logo%20Clara.png" 
            alt="FitCare Logo" 
            className="h-9 w-auto"
          />
          FitCare
        </Link>

        <div className='flex gap-4'>
          <Link to='/categorias' className='hover:text-emerald-500 transition-colors hidden sm:flex gap-4'>Categorias</Link>
          <Link to='/exercicios' className='hover:text-emerald-500 transition-colors hidden sm:flex gap-4'>Exercícios</Link>
          <Link to='/sobre' className='hover:text-emerald-500 transition-colors'>Sobre</Link>
          <Link to='/equipe' className='hover:text-emerald-500 transition-colors'>Equipe</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar