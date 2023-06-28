import React from "react";
import { Outlet } from "react-router-dom";
import HostNavbar from "../../../components/HostNavbar/HostNavbar";

function HostLayout() {
  return (
    <>
      <HostNavbar />
      <Outlet />
    </>
  );
}

export default HostLayout;
