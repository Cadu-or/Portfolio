import { Footer } from "../components/Footer";
import { Header }  from "../components/Header";
import { Resumo } from "../components/Resumo";

export function Curriculo(){
  return (
    <div className="h-screen scrollbar-thin scrollbar-thumb-mgreen-700 scrollbar-track-mgreen-90 scrollbar-thumb-rounded scrollbar-track-rounded">
      <Header />
      <Resumo />
      <Footer />
    </div>
  )
}