import { useEffect, useState, type ChangeEvent, type SyntheticEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type Categoria from "../../../models/Categoria";
import { buscar, cadastrar, atualizar} from "../../../services/Service";
import { ClipLoader } from "react-spinners";

function FormCategoria() {

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
        alert('Erro')
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

  function atualizarEstado(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value
    })
  }

  async function gerarNovoCategoria(e: SyntheticEvent<HTMLFormElement>){
    e.preventDefault();
    setIsLoading(true);
    
    if(id !== undefined) {
      try{
        await atualizar('/categorias/atualizar', categoria, setCategoria);
        alert('Categoria atualizado com sucesso!')
      }catch(error: any){
        if(error.toString().includes('401')){
          alert('Erro')
        } else {
          alert('Erro ao atualizar o Categoria')
        }
      }
    } else {
      try{
        await cadastrar('/categorias/cadastrar', categoria, setCategoria);
        alert('Categoria cadastrado com sucesso!')
      }catch(error: any){
        if(error.toString().includes('401')){
          alert('Erro')
        } else {
          alert('Erro ao Cadastrar o Categoria')
        }
      }
    }

    setIsLoading(false);
    retornar() 
  }

  function retornar() {
    navigate('/categorias')
  }

  return (
    <div className="flex flex-col gap-6 p-8">

      <h1 className="text-white font-bold uppercase tracking-widest text-2xl text-center">
        {id === undefined ? "Cadastrar" : "Editar"} Categoria
      </h1>

      <form className="flex flex-col gap-6" onSubmit={gerarNovoCategoria}>

        <div className="flex flex-col rounded-2xl overflow-hidden bg-zinc-900 border border-white/7">

          <div className="h-0.5 bg-linear-to-r from-emerald-500 to-transparent" />

          <div className="flex flex-col gap-2 p-6">
            <label
              htmlFor="intensidade"
              className="text-white/55 text-xs font-semibold uppercase tracking-widest"
            >
              Intensidade Categoria
            </label>
            <input
              placeholder="Digite a intensidade da categoria"
              name="intensidade"
              className="bg-transparent text-white placeholder:text-white/20 placeholder:text-sm placeholder:tracking-normal placeholder:normal-case placeholder:font-normal outline-none border-b border-white/6 font-bold uppercase tracking-widest text-lg py-3"
              value={categoria.intensidade}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>

          <div className="flex flex-col gap-2 p-6 pt-0">
            <label
              htmlFor="descricao"
              className="text-white/55 text-xs font-semibold uppercase tracking-widest"
            >
              Descrição da Categoria
            </label>
            <textarea
              placeholder="Descreva aqui a sua categoria"
              name="descricao"
              rows={8}
              className="bg-transparent text-white text-sm leading-relaxed placeholder:text-white/20 outline-none resize-none border-b border-white/6 py-3"
              value={categoria.descricao}
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) => atualizarEstado(e)}
            />
          </div>

        </div>

        <button
          className="rounded-xl text-emerald-500 text-xs font-semibold uppercase tracking-widest bg-zinc-900 border border-white/7 hover:bg-emerald-500/10 py-3 flex justify-center transition-colors duration-200"
          type="submit"
        >
          {isLoading
            ? <ClipLoader color="#10b981" size={16} />
            : <span>{id === undefined ? "Cadastrar" : "Atualizar"}</span>
          }
        </button>

      </form>
    </div>
  )
}

export default FormCategoria
