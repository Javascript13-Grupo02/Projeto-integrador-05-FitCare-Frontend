import { BrowserRouter, Route, Routes } from "react-router-dom"
import ListaCategorias from "./components/categoria/listacategoria/ListaCategoria"
import DeletarCategoria from "./components/categoria/deletarcategoria/DeletarCategoria"
import FormCategoria from "./components/categoria/formcategoria/FormCategoria"


function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />
        <Route path="/cadastrarcategoria" element={<FormCategoria />} />
        <Route path="/editarcategoria/:id" element={<FormCategoria />} />
        <Route path="/categorias" element={<ListaCategorias />} />
        <Route />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
