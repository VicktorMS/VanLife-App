import React from "react";
import { useRouteError } from "react-router-dom";

function Error() {
  const error = useRouteError();
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        height: "70%",
      }}
    >
      <h2 style={{ fontSize: 28 }}>Sorry, an error occured! &#128560;</h2>
      <p
        style={{ fontSize: 22, margin: 18, color: "red", textAlign: "center" }}
      >
        {error.message} <br />
        Error Status: {error.statusText} {error.status}
      </p>
    </div>
  );
}

export default Error;
