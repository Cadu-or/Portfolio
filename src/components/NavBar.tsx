import { Link } from "react-router-dom";

export function NavBar() {
  return (
    <div className="py-5 px-16 space-x-11 text-lg flex"> 
      <Link to={"/"} >Inicio</Link>
      <a>Projetos</a>
      <Link to={"/habilidades"}>Habilidades</Link>
      <Link to={"/curriculo"}>Currículo</Link>
    </div>
  )
}