import type Categoria from "./Categoria";

export default interface Postagem{
  id: number;
  nome: string;
  duracao: number;
  tipo: string;
  foto: string;
  categoria: Categoria | null;
}