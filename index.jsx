import React from "react";
import ReactDOM from "react-dom/client";
import '@fontsource-variable/inter';
import Maid from 'css-maid'
// import './reset.css'
import './index.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./src/pages/Home/Home";
import About from "./src/pages/About/About";
import Header from "./src/components/Header/Header";
import Footer from "./src/components/Footer/Footer";
import Vans from "./src/pages/Vans/Vans";
import "./server.js"
import VanDetail from "./src/pages/VanDetail/VanDetail";

function App() {
  //BrowserRouter é um "Context Provider" ele provém contexto para todos os seus filhos
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
        <Route path="/vans/:id" element={<VanDetail />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}


ReactDOM.createRoot(document.getElementById("root")).render(<App />);
