import Typewriter from 'typewriter-effect';

export function QuemSouEu (){
  return (
    <div>
      <span className="flex justify-center text-4xl"> Sobre mim </span>
      
      <div className="flex flex-row p-16 w-full">
        <div className='w-1/2'>
          <ul>
            <li className="p-4"> 
              Estudante da Universidade de Brasília, atualmente cursando <span className='text-mgreen-500' >Ciência da Computação</span>.
            </li>
            <li className="p-4"> 
              <span className='text-mgreen-500'>Desenvolvedor Full-Stack</span> na empresa Gomide Contabilidade.
            </li>
            <li className="p-4">
              Uso diariamente <span className='text-mgreen-500 italic'>Python</span>, <span className='text-mgreen-500 italic'>Rabbitmq</span>, <span className='text-mgreen-500 italic'>Docker</span> e <span className='text-mgreen-500 italic'>MongoDB</span>.
            </li>
            <li className="p-4">
              Domino as linguagens <span className='text-mgreen-500 italic'>TypesCript</span>, <span className='text-mgreen-500 italic'>JavaScript</span>, <span className='text-mgreen-500 italic'>C++</span> e <span className='text-mgreen-500 italic'>Python</span>.
            </li>
            <li className="p-4">
              Atualmente estudando desenvolvimento web com <span className='text-mgreen-500 italic'>React</span>, <span className='text-mgreen-500 italic'>Typescript</span> e <span className='text-mgreen-500 italic'>TailwindCSS</span>. 
            </li>
          </ul>
        </div>

        <div className="w-1/2 flex">
          <div className="flex pl-52">
            <span className="font-serif text-xl items-center text-mgreen-500 flex">
              <Typewriter 
                options={{
                  strings: ['printf("Hello, World!\\n");', 'std::cout << "Hello, World!\\n";', 'print("Hello, World!")', 'console.log("Hello, World!")'],
                  autoStart: true,
                  loop: true,
                }}/>
            </span>
          </div>
        </div>

      </div>
    </div>
  )
}