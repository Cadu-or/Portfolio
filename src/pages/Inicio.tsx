import { HeaderFixed } from "../components/Header"
import { QuemSouEu } from "../components/QuemSouEu"
import { EncontreMe } from "../components/EncontreMe"
import { Footer } from "../components/Footer"
import { Infos } from "../components/Infos"

export function Inicio() {
  return (
    <div className="snap-y snap-mandatory h-screen scrollbar-thin scrollbar-thumb-mgreen-700 scrollbar-track-mgreen-90 scrollbar-thumb-rounded scrollbar-track-rounded">
      <HeaderFixed />
      <div className="snap-start">
        <Infos/>
      </div>
      
      <div className="snap-start">
        <QuemSouEu />
        <EncontreMe />
        <Footer />
      </div>
    </div>
  ) 
}