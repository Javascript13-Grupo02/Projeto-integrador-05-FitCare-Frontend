import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ClipLoader } from 'react-spinners'
import type Exercicio from '../../../models/Exercicio'
import { buscar, deletar } from '../../../services/Service'

function DeletarExercicio() {
    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [exercicio, setExercicio] = useState<Exercicio>({} as Exercicio)

    const { id } = useParams<{ id: string }>()

    async function buscarPorId(id: string) {
        await buscar(`/exercicios/${id}`, setExercicio)
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    async function deletarExercicio() {
        setIsLoading(true)
        await deletar(`/exercicios/${id}`)
        setIsLoading(false)
        retornar()
    }

    function retornar() {
        navigate('/exercicios')
    }

    return (
        <div className="container w-1/3 mx-auto">
            <h1 className="text-4xl text-center my-4">
                Deletar Exercício
            </h1>

            <p className="text-center font-semibold mb-4">
                Você tem certeza de que deseja apagar o exercício a seguir?
            </p>

            <div className="border flex flex-col rounded-2xl overflow-hidden justify-between">
                <header className="py-2 px-6  bg-teal-900 text-white font-bold text-2xl">
                    Exercício
                </header>
                <div className="p-4">
                    <p className="text-xl h-full">
                        {exercicio.nome}
                    </p>
                    <p>{exercicio.tipo}</p>
                </div>
                <div className="flex">
                    <button
                        className="text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2"
                        onClick={retornar}
                    >
                        Não
                    </button>
                    <button
                        className="w-full text-slate-100 bg-indigo-400 hover:bg-teal-900 flex items-center justify-center"
                        onClick={deletarExercicio}
                    >
                        {isLoading ? (
                            <ClipLoader
                                color="#ffffff"
                                size={24}
                            />
                        ) : (
                            <span>Sim</span>
                        )}
                    </button>
                </div>
            </div>
        </div>
    )
}
export default DeletarExercicio