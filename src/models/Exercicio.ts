import type Categoria from "./Categoria";

export default interface Exercicio {
  id: number;
  nome: string;
  duracao: number;
  tipo: string;
  foto: string;
  categoria: Categoria | null;
}