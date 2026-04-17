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
        } else {
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
        <div className="flex flex-col gap-6 p-8 w-full max-w-2xl mx-auto">

            <h1 className="text-white font-bold uppercase tracking-widest text-2xl text-center">
                {id ? 'Editar Exercício' : 'Cadastrar Exercício'}
            </h1>

            <form className="flex flex-col gap-6 w-full max-w-2xl mx-auto" onSubmit={gerarNovaExercicio}>

                <div className="flex flex-col rounded-2xl overflow-hidden bg-zinc-900 border border-white/7">

                    <div className="h-0.5 bg-linear-to-r from-emerald-500 to-transparent" />

                    {/* Nome */}
                    <div className="flex flex-col gap-2 p-6">
                        <label htmlFor="nome" className="text-white/55 text-xs font-semibold uppercase tracking-widest">
                            Nome
                        </label>
                        <input
                            type="text"
                            placeholder="Nome do exercício"
                            name="nome"
                            required
                            className="bg-transparent text-white placeholder:text-white/20 placeholder:text-sm placeholder:tracking-normal placeholder:normal-case placeholder:font-normal outline-none border-b border-white/6 font-bold uppercase tracking-widest text-lg py-3"
                            value={exercicio.nome || ''}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        />
                    </div>

                    {/* Duração */}
                    <div className="flex flex-col gap-2 p-6 pt-0">
                        <label htmlFor="duracao" className="text-white/55 text-xs font-semibold uppercase tracking-widest">
                            Duração (minutos)
                        </label>
                        <input
                            type="number"
                            placeholder="Insira a duração do exercício em minutos"
                            name="duracao"
                            required
                            className="bg-transparent text-white placeholder:text-white/20 placeholder:text-sm placeholder:tracking-normal placeholder:normal-case placeholder:font-normal outline-none border-b border-white/6 text-sm py-3 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                            value={exercicio.duracao || undefined}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        />
                    </div>

                    {/* Tipo */}
                    <div className="flex flex-col gap-2 p-6 pt-0">
                        <label htmlFor="tipo" className="text-white/55 text-xs font-semibold uppercase tracking-widest">
                            Tipo
                        </label>
                        <input
                            type="text"
                            placeholder="Digite o tipo do exercício"
                            name="tipo"
                            required
                            className="bg-transparent text-white placeholder:text-white/20 placeholder:text-sm placeholder:tracking-normal placeholder:normal-case placeholder:font-normal outline-none border-b border-white/6 text-sm py-3"
                            value={exercicio.tipo || ''}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        />
                    </div>

                    {/* Foto */}
                    <div className="flex flex-col gap-2 p-6 pt-0">
                        <label htmlFor="foto" className="text-white/55 text-xs font-semibold uppercase tracking-widest">
                            Foto (URL)
                        </label>
                        <input
                            type="text"
                            placeholder="Insira o link da imagem"
                            name="foto"
                            required
                            className="bg-transparent text-white placeholder:text-white/20 placeholder:text-sm placeholder:tracking-normal placeholder:normal-case placeholder:font-normal outline-none border-b border-white/6 text-sm py-3"
                            value={exercicio.foto || ''}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        />
                    </div>

                    {/* Categoria */}
                    <div className="flex flex-col gap-2 p-6 pt-0">
                        <label htmlFor="categoria" className="text-white/55 text-xs font-semibold uppercase tracking-widest">
                            Categoria
                        </label>
                        <select
                            name="categoria"
                            id="categoria"
                            className="bg-transparent text-white text-sm outline-none border-b border-white/6 py-3 cursor-pointer"
                            onChange={(e) => selecionarCategoria(e.currentTarget.value)}
                            value={categoria.id || '0'}
                        >
                            <option value="0" disabled className="bg-zinc-900 text-white/40">
                                Selecione uma categoria
                            </option>
                            {categorias.map((cat) => (
                                <option key={cat.id} value={cat.id} className="bg-zinc-900 text-white">
                                    {cat.intensidade}
                                </option>
                            ))}
                        </select>
                    </div>

                </div>

                <button
                    type="submit"
                    disabled={carregandoCategoria}
                    className="rounded-xl text-emerald-500 text-xs font-semibold uppercase tracking-widest bg-zinc-900 border border-white/7 hover:bg-emerald-500/10 py-3 flex justify-center transition-colors duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                    {isLoading
                        ? <ClipLoader color="#10b981" size={16} />
                        : <span>{id ? 'Atualizar' : 'Cadastrar'}</span>
                    }
                </button>

            </form>
        </div>
    )
}

export default FormExercicio
