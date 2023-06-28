import React from "react";
import ReactDOM from "react-dom/client";
import "@fontsource-variable/inter";
import Maid from "css-maid";
// import './reset.css'
import "./index.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./src/pages/Home/Home";
import About from "./src/pages/About/About";
import Vans from "./src/pages/Vans/Vans";
import VanDetail from "./src/pages/VanDetail/VanDetail";
import Layout from "./src/components/Layout/Layout";

import Dashboard from "./src/pages/Host/Dashboard/Dashboard";
import Income from "./src/pages/Host/Income/Income";
import Reviews from "./src/pages/Host/Reviews/Reviews";
import "./server.js";
import HostLayout from "./src/pages/Host/HostLayout/HostLayout";

function App() {
  //BrowserRouter é um "Context Provider" ele provém contexto para todos os seus filhos
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
          <Route path="/vans/:id" element={<VanDetail />} />

          <Route element={<HostLayout/>}>
            <Route path="/host" element={<Dashboard/>}/>
            <Route path="/host/income" element={<Income />} />
            <Route path="/host/reviews" element={<Reviews />} />
          </Route>
        </Route>
        
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
