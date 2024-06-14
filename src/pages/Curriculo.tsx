import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Resumo } from "../components/Resumo";

export function Curriculo() {
  return (
    <div className="overflow-x-hidden overflow-y-hidden">
      <Header />
      <Resumo />
      <Footer />
    </div>
  );
}
