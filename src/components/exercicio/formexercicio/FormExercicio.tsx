
import { useEffect, useState, type ChangeEvent, type SyntheticEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { atualizar, buscar, cadastrar } from "../../../services/Service";
import { ClipLoader } from "react-spinners";
import type Categoria from "../../../models/Categoria";
import type Exercicio from "../../../models/Exercicio";


function FormExercicio() {

    const navigate = useNavigate();
    
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [categorias, setCategorias] = useState<Categoria[]>([])
    
    const [categoria, setCategoria] = useState<Categoria>({ id: 0, intensidade: '', descricao: '',})
    const [exercicio, setExercicio] = useState<Exercicio>({ id: 0,
                                                            nome: '',
                                                            duracao: 0,
                                                            tipo: '',
                                                            foto: '',
                                                            categoria: null
                                                        } as any);

    const { id } = useParams<{ id: string }>();


    async function buscarExercicioPorId(id: string) {
    try {
        await buscar(`/exercicios/${id}`, (dados: Exercicio) => {
            setExercicio(dados);
            if (dados.categoria) {
                setCategoria(dados.categoria);
            }
        });
    } catch (error: any) {
        alert('Erro ao buscar o exercício');
    }
}


     async function buscarCategorias() {
        
        try{
            await buscar(`/categorias/all`, setCategorias)

        }catch(error: any){
            alert('erro ao recuperar as categorias')
        }
    }

        useEffect(() => {
           
            buscarCategorias()

            if(id !== undefined){
              buscarExercicioPorId(id)
            }
        },[id])


    function atualizarEstado(e: ChangeEvent<HTMLInputElement>){
        setExercicio({
            ...exercicio,
            [e.target.name]: e.target.value,
            categoria: categoria,
        })
    }

    async function selecionarCategoria(id: string) {
    try {
        await buscar(`/categorias/${id}`, (dados: Categoria) => {
            setCategoria(dados);
            setExercicio({ ...exercicio, categoria: dados });
        });
    } catch (error: any) {
        alert('Erro ao buscar a categoria');
    }
}

    function retornar(){
        navigate('/exercicios')
    }

    async function gerarNovaExercicio(e: SyntheticEvent<HTMLFormElement>){
        
        e.preventDefault()
        setIsLoading(true)

        if (id !== undefined) {
            try{
                await atualizar(`/exercicios/atualizar/`, exercicio, setExercicio)
                alert('Exercicio atualizado com sucesso!')

            }catch(error: any){
                alert('Erro ao atualizar o Exercício.')
                   
            }
        }else {
            try {
                await cadastrar(`/exercicios/cadastrar`, exercicio, setExercicio)
                alert('Exercício cadastrado com sucesso!')

            }catch(error: any){
                alert('Erro ao cadastrar o Exercício.')
                   
            }
        }

    setIsLoading(false)
    retornar()
}

const carregandoCategoria = !categoria || categoria.id === 0;


  return (
    <div className="container flex flex-col mx-auto text-black items-center bg-white w-2xl ">
        <h1 className="text-4xl text-center my-8">
            { id ? 'Editar Exercicio' : 'Cadastrar Exercicio'}
        </h1>

        <form className="flex flex-col w-1/2 gap-4 mb-8"
                onSubmit={gerarNovaExercicio}>
        
            <div className="flex flex-col gap-2">
                <label htmlFor="nome">Nome</label>
                <input 
                    type="text" 
                    placeholder="Nome do exercício"
                    name="nome"
                    required
                    className="border-2 border-slate-700 rounded p-2"
                    value={exercicio.nome || ''}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                />
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="duracao">Duração</label>
                <input 
                    type="number"
                    placeholder="Insira a duração do exercício em minutos"
                    name="duracao"
                    required
                    className="border-2 border-slate-700 rounded p-2 
                                [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none 
                                [&::-webkit-inner-spin-button]:appearance-none"
                    value={exercicio.duracao || undefined}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                />
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="tipo">Tipo</label>
                <input 
                    type="text" 
                    placeholder="Digite o tipo do exercício"
                    name="tipo"
                    required
                    className="border-2 border-slate-700 rounded p-2"
                    value={exercicio.tipo || ''}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                />
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="foto">Foto</label>
                <input 
                    type="text" 
                    placeholder="Insira o link da imagem"
                    name="foto"
                    required
                    className="border-2 border-slate-700 rounded p-2"
                    value={exercicio.foto || ''}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                />
            </div>

            <div className="flex flex-col gap-2">
                <p>Categoria</p>
                <select name="categoria" id="categoria" className="border p-2 border-slate-800 rounded text-black"
                        onChange={(e) => selecionarCategoria(e.currentTarget.value)}
                        value={categoria.id || '0'}>

                    <option value="0" disabled>Selecione uma categoria</option>

                    {categorias.map((categoria) => (
                        <option key={categoria.id} value={categoria.id}>
                                {categoria.intensidade}
                        </option>
                    ))}

                </select>
            </div>
            <button 
                type="submit"
                className="rounded disabled:bg-slate-200 bg-indigo-400 hover:bg-indigo-800
                           text-white font-bold w-1/2 mx-auto py-2 flex justify-center"
                           disabled={carregandoCategoria}>
                { isLoading ?
				    <ClipLoader 
                        color="#ffffff"
                        size={24}
					/> :
					<span>{id ? 'Atualizar' : 'Cadastrar'}</span>
				}
            </button>

        </form>
    </div>
  )
}

export default FormExercicio