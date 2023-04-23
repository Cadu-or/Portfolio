import { useState } from "react";
import { ProjetoCard } from "./ProjetoCard";
import { ModalProjects } from "./ModalProjects";

import Miulist from "../assets/miulist/Miulist.png";
import TrabalhoPAA from "../assets/projetopaa/TrabalhoPAA.png";
import SegurancaComputacional from "../assets/seguranca/SegurancaComputacional.png";

interface ProjetoProps{
  projeto: string;
}

export function ListProjetos(){
  const [openModal, setOpenModal] = useState(0)
  return( 
    <div className="p-4 text-2xl mt-28">
      Projetos
      <div className="grid grid-cols-4 gap-10 p-6">
        <div>
          <button onClick={()=> setOpenModal(1)}>
            <ProjetoCard
              logo={Miulist}
              ferramentas={["devicon-react-original-wordmark"]}
            >
            <span className="text-justify px-4">
              A Miulist funciona como uma lista de presentes entre duas pessoas.
              A temática do site são dois personagens chamados Peach e Goma, animação feita por Bu Jue Xiao Xiao que ficou muito conhecida nas redes sociais.
            </span>
            </ProjetoCard>
          </button>
        </div>
        <div>
          <button onClick={()=> setOpenModal(2)}>
            <ProjetoCard
              logo={TrabalhoPAA}
              ferramentas={["devicon-python-plain-wordmark", "devicon-django-plain-wordmark"]}
            >
              <span className="text-justify px-4">
                O trabalho de Programação e Análise de Algoritimos consistia em criar um serviço de locomoção. Essa aplicacação lia um grafo que era representado como uma cidade,
                encontrava o carro mais próximo do passageiro, localizava os menores caminhos de acordo com origem e destino do carro considerando distancia e velocidade da via.
              </span>
            </ProjetoCard>
          </button>
          <a href="https://github.com/VitorVVO/Front-end-PAA-2021-2" target={"_blank"}>
            <button className="text-base mt-2 p-2 bg-mgreen-90">
              Ver no GitHub
            </button>
          </a>
        </div>
        <div>
          <button onClick={()=> setOpenModal(3)}>
            <ProjetoCard 
              logo={SegurancaComputacional}
              ferramentas={["devicon-cplusplus-plain-wordmark", "devicon-python-plain-wordmark"]}>
              <ul className="list-disc px-4 text-justify">
                Durante a disciplina de Segurança Computacional 3 projetos foram desenvolvidos:
                <li>Cifragem, decifragem e ataque à cifra de Vegenère.</li>
                <li>AES (Advanced Encryption Standard) implementado para a criptografia de imagens utilizando os algoritmos ECB (Electronic CodeBook) e CTR (Counter).</li>
                <li>Algoritmo para envio e recebimento de mensagem utilizando o método RSA.</li>
              </ul>
            </ProjetoCard>
          </button>
          <a href="https://github.com/Cadu-or/SC" target={"_blank"}>
            <button className="text-base mt-2 p-2 bg-mgreen-90">
              Ver no GitHub
            </button>
          </a>
        </div>
        <ModalProjects open={openModal} onClose={() => setOpenModal(0)}/>
      </div>
    </div>
  )
}