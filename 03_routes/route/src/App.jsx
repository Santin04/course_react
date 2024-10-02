import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home"; // Importe as páginas para serem usadas nas rotas
import About from "./pages/About";

function App() {
    return (
        <div className="App">
            <h1>React Router</h1>
            <BrowserRouter>
                <Navbar /> {/* Navbar permanece fora das rotas */}
                
                {/* Defina as rotas aqui */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;