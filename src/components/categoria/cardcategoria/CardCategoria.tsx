import { Link } from "react-router-dom"
import type Categoria from "../../../models/Categoria"

interface CardCategoriaProps {
  categoria: Categoria
}

function CardCategoria({ categoria }: CardCategoriaProps) {
  return (
    <div className="flex flex-col rounded-2xl overflow-hidden bg-zinc-800 border border-white/[0.07] hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.35),0_0_0_1px_rgba(16,185,129,0.3)] transition-all duration-300">

      <div className="h-0.5 bg-linear-to-r from-emerald-500 to-transparent" />

      <div className="flex items-center justify-between px-6 py-4 border-b border-white/6">
        <h3 className="text-white font-bold uppercase tracking-widest text-lg">
          {categoria.intensidade}
        </h3>
        <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]" />
      </div>

      <p className="flex-1 px-6 py-5 text-white/55 text-sm leading-relaxed">
        {categoria.descricao}
      </p>

      <div className="grid grid-cols-2 border-t border-white/6">
        <Link
          to={`/editarcategoria/${categoria.id}`}
          className="flex items-center justify-center gap-2 py-3 text-emerald-500 text-xs font-semibold uppercase tracking-widest border-r border-white/6 hover:bg-emerald-500/10 transition-colors duration-200"
        >
          ✎ Editar
        </Link>
        <Link
          to={`/deletarcategoria/${categoria.id}`}
          className="flex items-center justify-center gap-2 py-3 text-white/40 text-xs font-semibold uppercase tracking-widest hover:bg-red-500/10 hover:text-red-400 transition-colors duration-200"
        >
          ✕ Deletar
        </Link>
      </div>

    </div>
  )
}

export default CardCategoria