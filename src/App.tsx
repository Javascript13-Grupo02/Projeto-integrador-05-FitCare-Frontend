import { BrowserRouter, Route, Routes } from "react-router-dom";
import DeletarCategoria from "./components/categoria/deletarcategoria/DeletarCategoria";
import FormCategoria from "./components/categoria/formcategoria/FormCategoria";
import ListaCategorias from "./components/categoria/listacategoria/ListaCategoria";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Sobre from "./pages/sobre/Sobre";
import Equipe from "./pages/equipe/Equipe";
import CalculadoraPage from "./pages/calculadora/Calculadora";

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <div className="min-h-[80vh]">
          <Routes>
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/equipe" element={<Equipe />} />
            <Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />
            <Route path="/cadastrarcategoria" element={<FormCategoria />} />
            <Route path="/editarcategoria/:id" element={<FormCategoria />} />
            <Route path="/categorias" element={<ListaCategorias />} />
            <Route path="/calculadora" element={<CalculadoraPage />} />

            <Route />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
