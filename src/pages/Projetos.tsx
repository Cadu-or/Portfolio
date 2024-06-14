import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { ListProjetos } from "../components/ListProjetos";

export function Projetos() {
  return (
    <div className="overflow-x-hidden overflow-y-hidden">
      <Header />
      <ListProjetos />
      <Footer />
    </div>
  );
}
