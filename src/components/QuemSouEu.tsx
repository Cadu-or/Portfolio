import Typewriter from 'typewriter-effect';

export function QuemSouEu (){
  return (
    <div>
      <span className="flex justify-center text-4xl"> Sobre mim </span>
      
      <div className="flex flex-row p-16 w-full">
        <div className='w-1/2'>
          <ul>
            <li className="p-4"> Estudante da Universidade de Brasília, atualmente no oitavo semestre de <span className='text-mgreen-500' >Ciência da Computação</span>.</li>
            <li className="p-4"> Estágiario do Supremo Tribunal Federal na área de <span className='text-mgreen-500'>Análise de Dados</span>.</li>
            <li className="p-4"> Uso diariamente <span className='text-mgreen-500 italic'>Oracle Database</span>, <span className='text-mgreen-500 italic'>SAP BusinessObjects</span>, <span className='text-mgreen-500 italic'>QlikSense</span> e <span className='text-mgreen-500 italic'>Zabbix</span>.</li>
            <li className="p-4"> Domino as linguagens <span className='text-mgreen-500 italic'>C</span>, <span className='text-mgreen-500 italic'>C++</span> e <span className='text-mgreen-500 italic'>Python</span>. </li>
            <li className="p-4"> Atualmente estudando desenvolvimento web com <span className='text-mgreen-500 italic'>React</span>, <span className='text-mgreen-500 italic'>Typescript</span> e <span className='text-mgreen-500 italic'>TailwindCSS</span>. </li>
          </ul>
        </div>

        <div className="w-1/2 flex">
          <div className="flex pl-52">
            <span className="font-serif text-xl items-center text-mgreen-500 flex">
              <Typewriter 
                options={{
                  strings: ['printf("Hello, World!\\n");', 'std::cout << "Hello, World!\\n";', 'print("Hello, World!")'],
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