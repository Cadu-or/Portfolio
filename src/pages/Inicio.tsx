import { EncontreMe } from "../components/EncontreMe"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { Infos } from "../components/Infos"
import { QuemSouEu } from "../components/QuemSouEu"

export function Inicio() {
  return (
    <div className="h-screen scrollbar-thin scrollbar-thumb-mgreen-700 scrollbar-track-mgreen-90 scrollbar-thumb-rounded scrollbar-track-rounded">
      <Header/>
      <Infos />
      <QuemSouEu />
      <EncontreMe />
      <Footer />
    </div>
  ) 
}