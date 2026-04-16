import type Exercicio from "./Exercicio";

export default interface Tema{
  id: number;
  intensidade: string;
  descricao: string;
  exercicio?: Exercicio[] | null
}