import { Ferramentas } from "../components/Ferramentas";
import { Footer } from "../components/Footer";
import { Header }  from "../components/Header";

export function Habilidades(){
  return (
    <div className="h-screen scrollbar-thin scrollbar-thumb-mgreen-700 scrollbar-track-mgreen-90 scrollbar-thumb-rounded scrollbar-track-rounded">
      <Header />
      <Ferramentas />
      <Footer />
    </div>
  )
}