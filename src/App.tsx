import { BrowserRouter, Route, Routes } from "react-router-dom"
import ListaCategorias from "./components/categoria/listacategoria/ListaCategoria"
import DeletarCategoria from "./components/categoria/deletarcategoria/DeletarCategoria"


function App() {

  return (
    <>
    <BrowserRouter>
      < ListaCategorias />
      <Routes>
        <Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />
        <Route />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
