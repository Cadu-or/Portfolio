import { EncontreMe } from "../components/EncontreMe";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Infos } from "../components/Infos";
import { QuemSouEu } from "../components/QuemSouEu";

export function Inicio() {
  return (
    <div className="overflow-x-hidden overflow-y-hidden">
      <Header />
      <Infos />
      <QuemSouEu />
      <EncontreMe />
      <Footer />
    </div>
  );
}
