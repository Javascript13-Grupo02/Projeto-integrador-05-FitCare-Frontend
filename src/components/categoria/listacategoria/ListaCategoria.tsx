import { useEffect, useState } from "react";
import type Categoria from "../../../models/Categoria";
import { SyncLoader } from "react-spinners";
import CardCategoria from "../cardcategoria/CardCategoria";
import { buscar } from "../../../services/Service";


function ListaCategorias() {

  //Estado para configurar o loader (animação de carregamento)
  const [isLoading, setIsLoading] = useState<boolean>(false);


  // Estado para receber todos os categorias presentes no backend
  const [categorias, setCategorias] = useState<Categoria[]>([]);


  // Cria um useEffect para inicializar a função buscarCategorias
  useEffect( () => {
    buscarCategorias()
  }, [categorias.length]);


  // Função para buscar todos os categorias no backend
  async function buscarCategorias(){
    try{
      setIsLoading(true)


      await buscar('/categorias/all', setCategorias)
    }catch(error: any){
      if(error.toString().includes('401')){
        alert('Nenhuma categoria encontrada')


      }
    } finally {
      setIsLoading(false);
    }
  }


  return  (
    <>
      {
       isLoading && (
        <div className="flex justify-center w-full my-8">
          <SyncLoader
            color="#e9ecef"
            size={32}
          />
        </div>
       )
      }
      <div className="flex justify-center w-full my-4">
        <div className="container flex flex-col">


          {
            (!isLoading && categorias.length === 0) &&(
              <span className="text-3xl text-center my-8 text-white/55 uppercase tracking-widest font-semibold">
                Nenhuma categoria encontrada.
              </span>
            )
          }
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {
              categorias.map((categoria) => (
                <CardCategoria key={categoria.id} categoria={categoria}/>
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}


export default ListaCategorias;