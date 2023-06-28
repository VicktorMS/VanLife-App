import React from "react";
import ReactDOM from "react-dom/client";
import "@fontsource-variable/inter";
import "./server.js";
import "css-maid";
// import './reset.css'
import "./index.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./src/pages/Home/Home";
import About from "./src/pages/About/About";
import Vans from "./src/pages/Vans/Vans";
import VanDetail from "./src/pages/VanDetail/VanDetail";
import Layout from "./src/components/Layout/Layout";

import HostLayout from "./src/components/HostLayout/HostLayout";
import Dashboard from "./src/pages/Host/Dashboard/Dashboard";
import Income from "./src/pages/Host/Income/Income";
import Reviews from "./src/pages/Host/Reviews/Reviews";
import HostVans from './src/pages/Host/HostVans/HostVans'
import HostVanDetail from "./src/pages/Host/HostVanDetail/HostVanDetail";

function App() {
  //BrowserRouter é um "Context Provider" ele provém contexto para todos os seus filhos
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetail />} />

          <Route path="host" element={<HostLayout/>}>
            <Route index element={<Dashboard/>}/>
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="vans" element={<HostVans />} />
            <Route path="vans/:id" element={<HostVanDetail />} />
          </Route>
        </Route>
        
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
