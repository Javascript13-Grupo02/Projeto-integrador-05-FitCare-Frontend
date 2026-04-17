import { BrowserRouter, Route, Routes } from "react-router-dom";
import DeletarCategoria from "./components/categoria/deletarcategoria/DeletarCategoria";
import FormCategoria from "./components/categoria/formcategoria/FormCategoria";
import ListaCategorias from "./components/categoria/listacategoria/ListaCategoria";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Sobre from "./pages/sobre/Sobre";
import Equipe from "./pages/equipe/Equipe";
import Home from "./pages/home/Home";
import FormExercicio from "./components/exercicio/formexercicio/FormExercicio";
import CalculadoraPage from "./pages/calculadora/Calculadora";
import ListaExercicios from "./components/exercicio/listaexercicio/ListaExercicio";
import DeletarExercicio from "./components/exercicio/deletarexercicio/DeletarExercicio";

function App() {

  function FundoGradiente({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-linear-to-br from-black to-[#087f5b] w-full py-12 px-4 min-h-screen flex items-center justify-center">
      {children}
    </div>
  )
}

  return (
    <>
      <BrowserRouter>
      <Navbar />
        <div className="min-h-[80vh]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/equipe" element={<Equipe />} />
            <Route path="/categorias" element={<ListaCategorias />} />
            <Route path="/exercicios" element={<ListaExercicios />} />
            <Route path="/calculadora" element={<CalculadoraPage />} />
            <Route path="/deletarcategoria/:id" element={<FundoGradiente><DeletarCategoria /></FundoGradiente>} />
            <Route path="/editarcategoria/:id" element={<FundoGradiente><FormCategoria /></FundoGradiente>} />
            <Route path="/deletarexercicio/:id" element={<FundoGradiente><DeletarExercicio /></FundoGradiente>} />
            <Route path="/editarexercicio/:id" element={<FundoGradiente><FormExercicio /></FundoGradiente>} />
            <Route />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
