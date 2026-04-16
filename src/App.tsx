import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListaExercicios from "./components/exercicio/listaexercicio/ListaExercicio";
import ListaCategorias from "./components/categoria/listacategoria/ListaCategoria";

import FormContato from "./components/form/Form";
import DeletarExercicio from "./components/exercicio/deletarexercicio/DeletarExercicio";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/exercicios" element={<ListaExercicios />} />
        <Route path="/categorias" element={<ListaCategorias />} />
        <Route path="/contato" element={<FormContato />} />
        <Route path="/" element={<ListaExercicios />} />
                <Route path="/deletarexercicio/:id" element={<DeletarExercicio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
