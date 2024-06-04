import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { ListProjetos } from "../components/ListProjetos";

export function Projetos(){
  return (
    <div className="h-full scrollbar-thin scrollbar-thumb-mgreen-700 scrollbar-track-mgreen-90 scrollbar-thumb-rounded scrollbar-track-rounded">
      <Header />
      <ListProjetos />
      <Footer />
    </div>
  )
}