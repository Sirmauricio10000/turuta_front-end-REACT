import React from 'react';
import { HashRouter  as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/navbar/Navbar";
import Footer from './components/footer/Footer';
import Home from './components/Home/Home';
import About from './components/about/About';
import ConsultarNodos from './components/consultar-nodos/ConsultarNodos';
import ConsultarRutas from './components/consultar-rutas/ConsultarRutas';
import ConsultarRutasDetalle from './components/consultar-rutas-detalle/ConsultarRutasDetalle';
import Buscador from './components/buscador-de-rutas/Buscador';
import ResultadoBusqueda from './components/resultado-busqueda/ResultadoBusqueda';

function App() {
  return (
    <Router>
        <Navbar/>
        <Routes>
          <Route path="/turuta_front-end-REACT/" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/paradas" element={<ConsultarNodos />} />
          <Route path="/rutas" element={<ConsultarRutas />} />
          <Route path="/ruta-detalle/:id" element={<ConsultarRutasDetalle />} />
          <Route path="/buscador" element={<Buscador />} />
          <Route path="/resultados/:origen/:destino" element={<ResultadoBusqueda />} />
        </Routes>
        <Footer/>
    </Router>
  );
}

export default App;