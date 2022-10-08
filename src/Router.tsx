import { Route, Routes } from "react-router-dom";
import { Curriculo } from "./pages/Curriculo";
import { Habilidades } from "./pages/Habilidades";
import { Inicio } from "./pages/Inicio";

export function Router(){
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/curriculo" element={<Curriculo/>} />
      <Route path="/habilidades" element={<Habilidades />} />
    </Routes>
  )
}