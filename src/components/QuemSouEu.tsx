import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Writer } from "./Writer";

export function QuemSouEu() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duração das animações em milissegundos // Easing das animações
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <div>
      <span data-aos="fade-up" className="flex justify-center text-4xl">
        Sobre mim
      </span>
      <div className="flex w-full flex-row p-5 py-24 sm:px-20">
        <div className="w-full sm:w-1/2">
          <ul data-aos="fade-right">
            <li className="p-4">
              Estudante da Universidade de Brasília, atualmente cursando{" "}
              <span className="text-mgreen-500">Ciência da Computação</span>.
            </li>
            <li className="p-4">
              <span className="text-mgreen-500">Desenvolvedor Full-Stack</span>{" "}
              na empresa Gomide Contabilidade.
            </li>
            <li className="p-4">
              Uso diariamente{" "}
              <span className="italic text-mgreen-500">Python</span>,{" "}
              <span className="italic text-mgreen-500">Rabbitmq</span>,{" "}
              <span className="italic text-mgreen-500">Docker</span> e{" "}
              <span className="italic text-mgreen-500">MongoDB</span>.
            </li>
            <li className="p-4">
              Domino as linguagens{" "}
              <span className="italic text-mgreen-500">TypeScript</span>,{" "}
              <span className="italic text-mgreen-500">JavaScript</span>,{" "}
              <span className="italic text-mgreen-500">C++</span> e{" "}
              <span className="italic text-mgreen-500">Python</span>.
            </li>
            <li className="p-4">
              Atualmente estudando desenvolvimento fullstack com o foco em microsserviços utilizando
              <span className="italic text-mgreen-500">NestJS</span>,
              <span className="italic text-mgreen-500">RabbitMQ</span>,
              <span className="italic text-mgreen-500">Python</span>,
              <span className="italic text-mgreen-500">GoLang</span>,
              <span className="italic text-mgreen-500">NextJS</span> e
              <span className="italic text-mgreen-500">TailwindCSS</span>.
            </li>
          </ul>
        </div>
        <div data-aos="fade-left" className="hidden w-1/2 sm:flex">
          <Writer />
        </div>
      </div>
    </div>
  );
}
