import Typewriter from "typewriter-effect";

export function QuemSouEu() {
  return (
    <div>
      <span className="flex justify-center text-4xl"> Sobre mim </span>

      <div className="flex w-full flex-row p-16">
        <div className="w-full sm:w-1/2">
          <ul>
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
              <span className="italic text-mgreen-500">TypesCript</span>,{" "}
              <span className="italic text-mgreen-500">JavaScript</span>,{" "}
              <span className="italic text-mgreen-500">C++</span> e{" "}
              <span className="italic text-mgreen-500">Python</span>.
            </li>
            <li className="p-4">
              Atualmente estudando desenvolvimento web com{" "}
              <span className="italic text-mgreen-500">React</span>,{" "}
              <span className="italic text-mgreen-500">Typescript</span> e{" "}
              <span className="italic text-mgreen-500">TailwindCSS</span>.
            </li>
          </ul>
        </div>

        <div className="hidden w-1/2 sm:flex">
          <div className="flex pl-10 lg:pl-40">
            <span className="flex items-center font-serif text-xl text-mgreen-500">
              <Typewriter
                options={{
                  strings: [
                    'printf("Hello, World!\\n");',
                    'std::cout << "Hello, World!\\n";',
                    'print("Hello, World!")',
                    'console.log("Hello, World!")',
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
