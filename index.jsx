import React from "react";
import ReactDOM from "react-dom/client";
import "@fontsource-variable/inter";
import "./server.js";
import "css-maid";
// import './reset.css'
import "./index.css";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { requireAuth } from "./utils.js";

import Home from "./src/pages/Home/Home";
import About from "./src/pages/About/About";
import Vans from "./src/pages/Vans/Vans";
import VanDetail from "./src/pages/VanDetail/VanDetail";
import Layout from "./src/components/Layout/Layout";
import Login from "./src/pages/Login/Login.jsx";

import HostLayout from "./src/components/HostLayout/HostLayout";
import Dashboard from "./src/pages/Host/Dashboard/Dashboard";
import Income from "./src/pages/Host/Income/Income";
import Reviews from "./src/pages/Host/Reviews/Reviews";
import HostVans from "./src/pages/Host/HostVans/HostVans";

import HostVanDetail, {
  loader as hostVanDetailPageLoader,
} from "./src/pages/Host/HostVanDetail/HostVanDetail";
import HostVanInfo from "./src/pages/Host/HostVanInfo/HostVanInfo";
import HostVanPhotos from "./src/pages/Host/HostVanPhotos/HostVanPhotos";
import HostVanPricing from "./src/pages/Host/HostVanPricing/HostVanPricing";
import NotFound from "./src/components/NotFound/NotFound.jsx";

import Error from "./src/components/Error/Error.jsx";
import { loader as vansPageLoader } from "./src/components/GenerateVansCard/GenerateVansCards.jsx";
import { loader as hostVansPageLoader } from "./src/components/GenerateHostVansList/GenerateHostVansList.jsx";
import { loader as vanDetailPageLoader } from "./src/pages/VanDetail/VanDetail.jsx";
import {
  loader as loginPageLoader,
  action as loginPageAction,
} from "./src/pages/Login/Login.jsx";

function App() {
  //BrowserRouter é um "Context Provider" ele provém contexto para todos os seus filhos

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="login"
          element={<Login />}
          loader={loginPageLoader}
          action={loginPageAction}
        />
        <Route path="about" element={<About />} />
        <Route
          path="vans"
          element={<Vans />}
          loader={vansPageLoader}
          errorElement={<Error />}
        />
        <Route
          path="vans/:id"
          element={<VanDetail />}
          loader={vanDetailPageLoader}
        />

        <Route
          path="host"
          element={<HostLayout />}
          loader={async ({ request }) => await requireAuth(request)}
        >
          <Route
            index
            element={<Dashboard />}
            loader={async ({ request }) => await requireAuth(request)}
          />
          <Route
            path="income"
            element={<Income />}
            loader={async ({ request }) => await requireAuth(request)}
          />
          <Route
            path="reviews"
            element={<Reviews />}
            loader={async ({ request }) => await requireAuth(request)}
          />
          <Route
            path="vans"
            element={<HostVans />}
            loader={hostVansPageLoader}
          />

          <Route
            path="vans/:id"
            element={<HostVanDetail />}
            loader={hostVanDetailPageLoader}
          >
            <Route index element={<HostVanInfo />} />
            <Route path="photos" element={<HostVanPhotos />} />
            <Route path="pricing" element={<HostVanPricing />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
