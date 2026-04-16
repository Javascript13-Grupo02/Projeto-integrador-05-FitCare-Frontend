import { Link } from "react-router-dom"
import type Categoria from "../../../models/Categoria"

interface CardCategoriaProps {
  categoria: Categoria
}

function CardCategoria({ categoria }: CardCategoriaProps) {
  return (
    <div className="border flex flex-col rounded-xl overflow-hidden justify-between">
      <header className="py-2 px-6 bg-emerald-700 text-white font-bold text-2xl">
        {categoria.intensidade}
      </header>
      <p className="p-8 text-3xl bg-zinc-800 h-full text-white">
        {categoria.descricao}
      </p>
      <div className="flex">
        <Link to={`/editarcategoria/${categoria.id}`} className="w-full text-slate-100 bg-emerald-600 hover:bg-indigo-800 flex items-center justify-center py-2">
          <button>Editar</button>
        </Link>
        <Link to={`/deletarcategoria/${categoria.id}`} className="text-slate-200 bg-red-700 hover:bg-red-800 w-full flex items-center justify-center">
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  )
}

export default CardCategoria