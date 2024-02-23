import React from "react";
import ReactDOM from "react-dom/client";
import { Nav } from "./componentes/Nav.jsx";
import { Informacion } from "./componentes/Informacion.jsx";
import { Inventario } from "./componentes/Inventario.jsx";
import "./index.css";
import { NextUIProvider } from "@nextui-org/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NextUIProvider>
      <Inventario />
    </NextUIProvider>
  </React.StrictMode>
);
