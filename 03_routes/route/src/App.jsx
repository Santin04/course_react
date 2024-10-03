import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Info from "./pages/Info";

function App() {
    return (
        <div className="App">
            <h1>React Router</h1>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    {/* Rota dinâmica */}
                    <Route path="/product/:id" element={<Product />} />
                    <Route path="/product/:id/info" element={<Info />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
