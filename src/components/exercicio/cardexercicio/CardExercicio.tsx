import { Link } from "react-router-dom";
import type Exercicio from "../../../models/Exercicio";

interface CardExerciciosProps {
  exercicio: Exercicio;
}

function CardExercicio({ exercicio }: CardExerciciosProps) {
  return (
    <div className="flex flex-col rounded-2xl overflow-hidden bg-zinc-800 border border-white/[0.07] hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.35),0_0_0_1px_rgba(16,185,129,0.3)] transition-all duration-300 justify-between h-full">
      <div className="flex flex-col flex-1">
        <div className="h-0.5 bg-gradient-to-r from-emerald-500 to-transparent" />

        <div className="w-full h-48 border-b border-white/6 overflow-hidden">
          <video
            src={exercicio.foto}
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>

        <div className="px-6 py-5 flex flex-col flex-1">
          <div className="flex-1 flex flex-col gap-2">
            <h4 className="text-emerald-500 text-sm font-semibold uppercase tracking-widest min-h-[40px] flex items-center">
              {exercicio.nome}
            </h4>

            <div className="min-h-[50px] flex flex-col justify-center">
              <p className="text-white/55 text-sm leading-relaxed">
                {`${exercicio.duracao} minutos`}
              </p>
              <p className="text-white/55 text-sm leading-relaxed">
                {exercicio.tipo}
              </p>
            </div>

            <p className="text-white/55 text-sm leading-relaxed line-clamp-4 mt-2">
              {exercicio.categoria?.descricao}
            </p>
          </div>

          {exercicio.categoria && (
            <p className="text-white/55 text-sm leading-relaxed mt-4 pt-3 border-t border-white/6 flex justify-between">
              <span className="font-semibold text-white/70">Categoria:</span>
              <span className="text-emerald-500/90">
                {exercicio.categoria.intensidade}
              </span>
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-2 border-t border-white/6">
        <Link
          to={`/editarexercicio/${exercicio.id}`}
          className="flex items-center justify-center gap-2 py-3 text-emerald-500 text-xs font-semibold uppercase tracking-widest border-r border-white/6 hover:bg-emerald-500/10 transition-colors duration-200"
        >
          ✎ Editar
        </Link>
        <Link
          to={`/deletarexercicio/${exercicio.id}`}
          className="flex items-center justify-center gap-2 py-3 text-white/40 text-xs font-semibold uppercase tracking-widest hover:bg-red-500/10 hover:text-red-400 transition-colors duration-200"
        >
          ✕ Deletar
        </Link>
      </div>
    </div>
  );
}

export default CardExercicio;
