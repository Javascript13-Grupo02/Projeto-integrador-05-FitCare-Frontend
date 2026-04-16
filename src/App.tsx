import { BrowserRouter } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer"


function App() {

  return (
    <>
          <BrowserRouter>
                  <Navbar />
                          <div className="min-h-[80vh]">

        </div>

                    <Footer />

            </BrowserRouter>

    </>
  )
}

export default App
