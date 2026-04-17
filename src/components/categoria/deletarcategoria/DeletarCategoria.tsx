import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type Categoria from "../../../models/Categoria";
import { buscar, deletar } from "../../../services/Service";
import { ClipLoader } from "react-spinners";

function DeletarCategoria() {

  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);

  const {id} = useParams<{id: string}>()

  async function buscarCategoriaPorId(){
    try{
      setIsLoading(true)
      await buscar(`/categorias/${id}`, setCategoria)
    }catch(error: any){
      if(error.toString().includes('401')){
        alert('Erro ao buscar categorias')
      }
    } finally {
      setIsLoading(false);
    }
  }

  useEffect( () => {
    if(id !== undefined) {
      buscarCategoriaPorId()
    }
  }, [id])

  function retornar() {
    navigate("/categorias");
  }

  async function deletarCategoria(){
    setIsLoading(true);
    try {
      await deletar(`/categorias/${id}`);
      alert('Categoria deletado com sucesso!')
    }catch(error: any){
      if(error.toString().includes('404')){
        alert('Erro')
      }
    }
    setIsLoading(false);
    retornar();
  }

  return (
    <div className="container w-1/3 mx-auto">
      <h1 className="text-4xl text-center text-white font-bold uppercase tracking-widest my-4">
        Deletar categoria
      </h1>
      <p className="text-center text-white/55 text-sm font-semibold mb-4">
        Você tem certeza de que deseja apagar o categoria a seguir?
      </p>

      <div className="flex flex-col rounded-2xl overflow-hidden bg-zinc-800 border border-white/7">

        <div className="h-0.5 bg-linear-to-r from-red-500 to-transparent" />

        <header className="flex items-center justify-between px-6 py-4 border-b border-white/6">
          <span className="text-white font-bold uppercase tracking-widest text-lg">
            {categoria.intensidade}
          </span>
          <span className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_8px_#ef4444]" />
        </header>

        <p className="p-8 text-white/55 text-sm leading-relaxed h-full">
          {categoria.descricao}
        </p>

        <div className="flex">
          <button
            className="w-full flex items-center justify-center py-3 text-red-400 text-xs font-semibold uppercase tracking-widest border-t border-r border-white/6 hover:bg-red-500/10 transition-colors duration-200"
            onClick={retornar}
          >
            Não
          </button>
          <button
            className="w-full flex items-center justify-center py-3 text-emerald-500 text-xs font-semibold uppercase tracking-widest border-t border-white/6 hover:bg-emerald-500/10 transition-colors duration-200"
            onClick={deletarCategoria}
          >
            {isLoading
              ? <ClipLoader color="#10b981" size={16} />
              : <span>Sim</span>
            }
          </button>
        </div>

      </div>
    </div>
  )
}

export default DeletarCategoria
