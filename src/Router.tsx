import { Route, Routes } from "react-router-dom";
import { Curriculo } from "./pages/Curriculo";
import { Habilidades } from "./pages/Habilidades";
import { Inicio } from "./pages/Inicio";
import { Projetos } from "./pages/Projetos";

export function Router(){
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/projetos" element={<Projetos />} />
      <Route path="/curriculo" element={<Curriculo/>} />
      <Route path="/habilidades" element={<Habilidades />} />
    </Routes>
  )
}