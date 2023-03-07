import { ProjetoCard } from "./ProjetoCard";
import Miulist from '../assets/miulist/Miulist.png';
import { useState } from 'react';
import { ModalProjects } from "./ModalProjects";

interface ProjetoProps{
  projeto: string;
}

export function ListProjetos(){
  const [openModal, setOpenModal] = useState(0)
  return( 
    <div className="p-4 text-2xl mt-28">
      Projetos
      <div className="grid grid-cols-4 gap-10 p-6">
        <button onClick={()=> setOpenModal(1)}>
          <ProjetoCard
            descricao="A Miulist funciona como uma lista de presentes entre duas pessoas.
            A temática do site são dois personagens chamados Peach e Goma, animação feita por Bu Jue Xiao Xiao que ficou muito conhecida nas redes sociais." 
            logo={Miulist}
            ferramentas={["devicon-react-original-wordmark"]}
          />
        </button>
        <ModalProjects open={openModal} onClose={() => setOpenModal(0)}/>
      </div>
    </div>
  )
}