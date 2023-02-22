import { Link } from "react-router-dom";
import { Logo } from "./Logo";
import { useScrollPosition } from "./ScrollPosition";

export function NavBar() {
  var url = window.location.pathname

  const scrollPosition = useScrollPosition();
  
  return (
    <div className={scrollPosition > 0 ? "flex justify-between px-10 py-2" : "flex justify-between px-10 py-2 bg-zinc-800"}>
      <Logo />
      <div className="py-5 px-5 space-x-11 text-lg items-center flex">
        { url == '/' ? 
          <Link to={"/"} className="underline decoration-mgreen-600 decoration-2 underline-offset-4">Inicio</Link> : 
          <Link to={"/"}>Inicio</Link> 
        }{ 
          url == '/projetos'?
          <Link to={"/projetos"} className="underline decoration-mgreen-600 decoration-2 underline-offset-4">Projetos</Link> :
          <Link to={"/projetos"}>Projetos</Link>
        }{ 
          url == '/habilidades' ? 
          <Link to={"/habilidades"} className="underline decoration-mgreen-600 decoration-2 underline-offset-4">Habilidades</Link> : 
          <Link to={"/habilidades"}>Habilidades</Link>
        }{ 
          url == "/curriculo" ?
          <Link to={"/curriculo"} className="underline decoration-mgreen-600 decoration-2 underline-offset-4">Currículo</Link> :
          <Link to={"/curriculo"}>Currículo</Link>
        }
      </div>
    </div>
  )
}