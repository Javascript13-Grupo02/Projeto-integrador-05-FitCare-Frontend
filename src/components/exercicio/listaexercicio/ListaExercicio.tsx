import { useEffect, useState } from "react";
import CardExercicio from "../cardexercicio/CardExercicio";
import type Exercicio from "../../../models/Exercicio";
import { buscar } from "../../../services/Service";
import { SyncLoader } from "react-spinners";

function ListaExercicios() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [exercicios, setExercicios] = useState<Exercicio[]>([]);

  useEffect(() => {
    buscarExercicios();
  }, [exercicios.length]);

  async function buscarExercicios() {
    setIsLoading(true);
    try {
      await buscar("/exercicios/all", setExercicios);
    } catch (error: any) {
      if (error.toString().includes("401")) {
        alert("Nenhum exercício encontrado");
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      {isLoading && (
        <div className="flex justify-center w-full my-8">
          <SyncLoader color="#e9ecef" size={32} />
        </div>
      )}
      <div className="flex justify-center w-full my-4">
        <div className="container flex flex-col">
          {!isLoading && exercicios.length === 0 && (
            <span className="text-3xl text-center my-8 text-white/55 uppercase tracking-widest font-semibold">
              Nenhum exercício encontrado.
            </span>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {exercicios.map((exercicio) => (
              <CardExercicio key={exercicio.id} exercicio={exercicio} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ListaExercicios;
