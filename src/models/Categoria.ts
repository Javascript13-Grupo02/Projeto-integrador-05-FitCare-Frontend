import type Exercicio from "./Exercicio";

export default interface Categoria {
  id: number;
  intensidade: string;
  descricao: string;
  exercicio?: Exercicio[] | null;
}
