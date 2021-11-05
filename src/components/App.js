import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./Menu";
import Usuarios from "./Usuarios";

const Tareas = () => <div>Tareas</div>;

const App = () => (
  <BrowserRouter>
    <Menu />
    <div className="margen">
      <Routes>
        <Route path="/" element={<Usuarios />} />
        <Route path="/tareas" element={<Tareas />} />
      </Routes>
    </div>
  </BrowserRouter>
);


export default App;