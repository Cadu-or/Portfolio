import { Link } from "react-router-dom";

export function NavBar() {
  var url = window.location.pathname
  console.log(url)
  
  return (
    <div className="py-5 px-16 space-x-11 text-lg flex"> 
      { url == '/' ? 
        <Link to={"/"} className="underline decoration-mgreen-600 decoration-2 underline-offset-4">Inicio</Link> : 
        <Link to={"/"}>Inicio</Link> }
      <a>Projetos</a>
      { url == '/habilidades' ? 
        <Link to={"/habilidades"} className="underline decoration-mgreen-600 decoration-2 underline-offset-4" >Habilidades</Link> : 
        <Link to={"/habilidades"}>Habilidades</Link>
      }
      { url == "/curriculo" ?
        <Link to={"/curriculo"} className="underline decoration-mgreen-600 decoration-2 underline-offset-4">Currículo</Link> :
        <Link to={"/curriculo"}>Currículo</Link>
      }
    </div>
  )
}