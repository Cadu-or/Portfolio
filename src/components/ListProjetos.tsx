import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { ModalProjects } from "./ModalProjects";
import { ProjetoCard } from "./ProjetoCard";

import { HandTap } from "@phosphor-icons/react";
import SeaTecnlogia from "../assets/SeaTecnologia.png";
import Miulist from "../assets/miulist/Miulist.png";
import TrabalhoPAA from "../assets/projetopaa/TrabalhoPAA.png";
import SegurancaComputacional from "../assets/seguranca/SegurancaComputacional.png";
interface ProjetoProps {
  projeto: string;
}

export function ListProjetos() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in",
      once: false,
    });
  });
  const [openModal, setOpenModal] = useState(0);

  return (
    <div className="mt-28 px-8 text-3xl">
      Projetos
      <div className="grid grid-cols-1 gap-10 py-6 md:grid-cols-2 lg:grid-cols-4">
        <div data-aos="zoom-in">
          <button onClick={() => setOpenModal(1)}>
            <ProjetoCard
              logo={Miulist}
              ferramentas={["devicon-react-original-wordmark"]}
            >
              <span className="px-4 text-justify">
                A Miulist funciona como uma lista de presentes entre duas
                pessoas. A temática do site são dois personagens chamados Peach
                e Goma, animação feita por Bu Jue Xiao Xiao que ficou muito
                conhecida nas redes sociais.
              </span>
              <HandTap
                size={24}
                className="absolute bottom-4 right-4 text-zinc-800"
              />
            </ProjetoCard>
          </button>
        </div>
        <div>
          <div data-aos="zoom-in">
            <ProjetoCard
              logo={TrabalhoPAA}
              ferramentas={[
                "devicon-python-plain-wordmark",
                "devicon-django-plain-wordmark",
              ]}
            >
              <span className="px-4 text-justify">
                O trabalho de Programação e Análise de Algoritimos consistia em
                criar um serviço de locomoção. Essa aplicacação lia um grafo que
                era representado como uma cidade, encontrava o carro mais
                próximo do passageiro, localizava os menores caminhos de acordo
                com origem e destino do carro considerando distancia e
                velocidade da via.
              </span>
            </ProjetoCard>
          </div>
          <a
            data-aos="fade-up"
            data-aos-easing="ease-in-back"
            data-aos-delay="600"
            href="https://github.com/VitorVVO/Front-end-PAA-2021-2"
            target={"_blank"}
          >
            <button className="mt-2 bg-mgreen-90 p-2 text-base">
              Ver no GitHub
            </button>
          </a>
        </div>
        <div>
          <div data-aos="zoom-in">
            <ProjetoCard
              logo={SegurancaComputacional}
              ferramentas={[
                "devicon-cplusplus-plain-wordmark",
                "devicon-python-plain-wordmark",
              ]}
            >
              <ul className="list-disc px-4 text-justify">
                Durante a disciplina de Segurança Computacional 3 projetos foram
                desenvolvidos:
                <li>Cifragem, decifragem e ataque à cifra de Vegenère.</li>
                <li>
                  AES (Advanced Encryption Standard) implementado para a
                  criptografia de imagens utilizando os algoritmos ECB
                  (Electronic CodeBook) e CTR (Counter).
                </li>
                <li>
                  Algoritmo para envio e recebimento de mensagem utilizando o
                  método RSA.
                </li>
              </ul>
            </ProjetoCard>
          </div>
          <a
            data-aos="fade-up"
            data-aos-easing="ease-in-back"
            data-aos-delay="600"
            href="https://github.com/Cadu-or/SC"
            target={"_blank"}
          >
            <button className="mt-2 bg-mgreen-90 p-2 text-base">
              Ver no GitHub
            </button>
          </a>
        </div>
        <ModalProjects open={openModal} onClose={() => setOpenModal(0)} />
        <div>
          <div data-aos="zoom-in">
            <ProjetoCard
              logo={SeaTecnlogia}
              ferramentas={["devicon-react-original-wordmark"]}
            >
              <span className="px-4 text-justify text-sm">
                O desafio da SEA Tecnologia consistia em criar uma plataforma
                web capaz de adicionar funcionários em um sistema web. Seu front
                precisava ser em react, a persistência de dados feita utilizando
                json server, a biblioteca principal utilizada para os
                componentes foi o AntDesign e era necessário a utilização de
                Redux. O desafio foi concluído com sucesso e trabalhei 6 meses
                na SEA Tecnologia como desenvolvedor front-end.
              </span>
            </ProjetoCard>
          </div>
          <a
            data-aos="fade-up"
            data-aos-easing="ease-in-back"
            data-aos-delay="600"
            href="https://github.com/Cadu-or/seatec"
            target={"_blank"}
          >
            <button className="mt-2 bg-mgreen-90 p-2 text-base">
              Ver no GitHub
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
