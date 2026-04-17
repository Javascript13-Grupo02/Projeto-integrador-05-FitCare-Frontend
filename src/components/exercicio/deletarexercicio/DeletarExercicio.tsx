import { useEffect, useState,} from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import type Exercicio from "../../../models/Exercicio";
import { buscar, deletar } from "../../../services/Service";
import { CheckIcon, XIcon } from "@phosphor-icons/react";

function DeletarExercicio() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [exercicio, setExercicio] = useState<Exercicio>({} as Exercicio);

  const { id } = useParams<{ id: string }>();

  async function buscarPorId(id: string) {
    await buscar(`/exercicios/${id}`, setExercicio);
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  async function deletarExercicio() {
    setIsLoading(true);
    await deletar(`/exercicios/${id}`);
    setIsLoading(false);
    retornar();
  }

  function retornar() {
    navigate("/exercicios");
  }

  return (

    <div className="bg-linear-to-br from-black to-[#087f5b] text-white">
    <div className="container w-1/3 mx-auto">
      <h1 className="text-4xl text-center my-4">Deletar Exercício</h1>

      <p className="text-center font-semibold mb-4">
        Você tem certeza de que deseja apagar o exercício a seguir?
      </p>

      <div className="border border-black/20 flex flex-col overflow-hidden justify-between">
        <header className="py-2 px-6  bg-teal-900 text-white font-bold text-2xl">
          Exercício
        </header>
        <div className="p-4">
          <p className="text-xl h-full">{exercicio.nome}</p>
          <p>{exercicio.tipo}</p>
        </div>
        
        <div className="flex">

        <div className="grid grid-cols-2 border-t border-white/6 w-full">
          <a
            className="flex items-center justify-center gap-2 py-3 text-xs text-white/40 font-semibold uppercase tracking-widest border-white bg-red-800/50 hover:bg-red-700/70  hover:text-white transition-colors duration-200"
            onClick={retornar}>
            <XIcon size={32} color="#ffffff" /> Não
          </a>
          
          <a
            className="flex items-center justify-center gap-2 py-3 text-white/40 text-xs font-semibold uppercase tracking-widest hover:bg-emerald-400/70 hover:text-white transition-colors duration-200"
            onClick={deletarExercicio}>
            <CheckIcon size={32} color="#ffffff"/>
              {isLoading ? (
                <ClipLoader color="#ffffff" size={24} />
              ) : (
                <span>Sim</span>
              )}
          </a>
        </div>        
        </div>
      </div>
    </div>  
    </div>
  );
}
export default DeletarExercicio;
