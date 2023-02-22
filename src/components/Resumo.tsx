import { Check, CheckSquare, Diamond } from "phosphor-react";

export function Resumo(){
  return (
    <div className="justify-center items-center flex mt-28">
      <div className="bg-zinc-100 mt-8 mb-4 w-19/20 p-8">
        <div className="flex flex-col gap-2">
          <span className="text-purple-hunt-900 text-2xl pb-2 font-semibold">Carlos Eduardo de Oliveira Ribeiro</span>
          <div className="flex text-center items-center flex-row gap-2 text-purple-hunt-900 ml-4"> <Diamond size={14} color="#A8A4CE" weight="duotone" /> Brasília-DF </div>
          <div className="flex text-center items-center flex-row gap-2 text-purple-hunt-900 ml-4"> <Diamond size={14} color="#A8A4CE" weight="duotone" /> Telefone: (61) 99399-5745 </div>
          <div className="flex text-center items-center flex-row gap-2 text-purple-hunt-900 ml-4"> <Diamond size={14} color="#A8A4CE" weight="duotone" /> E-mail: carlos.e.o.ribeiro@gmail.com </div>
          <div className="flex text-center items-center flex-row gap-2 text-purple-hunt-900 ml-4"> <Diamond size={14} color="#A8A4CE" weight="duotone" /> Github: <a className="underline underline-offset-2" target="_blank" href="https://github.com/Cadu-or"> Cadu-or </a> </div>
        </div>

        <hr className="m-6 mx-96 opacity-80" style={{
          backgroundColor: '#C8B6E2',
          height: 2,
        }}/>

        <div className="flex flex-col gap-4">
          <div className="flex text-center items-center flex-row gap-2 text-purple-hunt-900 font-semibold"> <CheckSquare size={28} color="#A8A4CE" weight="bold" /> Experiência Profissional </div>
          <div className="flex flex-col gap-1 ml-4">
            <div className="flex text-center items-center flex-row gap-2 text-purple-hunt-900 ml-4 text-sm"> <span> <b>Max Clean</b> - Menor Aprendiz </span></div>
            <div className="flex text-center items-center flex-row gap-2 text-purple-hunt-900 ml-4 text-sm"> Abril/2016 - Julho/2016 </div>
            <div className="flex items-center flex-row gap-2 text-purple-hunt-900 ml-4 text-sm"> <b>Responsabilidades:</b> Atendimento ao cliente, suporte técnico e manuseio de planilhas.</div>
          </div>

          <div className="flex flex-col gap-1 ml-4">
            <div className="flex text-center items-center flex-row gap-2 text-purple-hunt-900 ml-4 text-sm"> <span> <b>Ministério da Saúde</b> - Pesquisador </span></div>
            <div className="flex text-center items-center flex-row gap-2 text-purple-hunt-900 ml-4 text-sm"> Setembro/2021 - Abril/2022 </div>
            <div className="flex items-center flex-row gap-2 text-purple-hunt-900 ml-4 text-sm"> <b>Responsabilidades:</b>  Desenvolvimento de aplicações no serviço em nuvem AWS e manuseio de scripts ETL (Pentaho Data Integration).</div>
          </div>

          <div className="flex flex-col gap-1 ml-4">
            <div className="flex text-center items-center flex-row gap-2 text-purple-hunt-900 ml-4 text-sm"> <span> <b>Supremo Tribunal Federal</b> - Estagiário </span></div>
            <div className="flex text-center items-center flex-row gap-2 text-purple-hunt-900 ml-4 text-sm"> Setembro/2021 - Atualmente </div>
            <div className="flex flex-row gap-2 text-purple-hunt-900 ml-4 text-sm"> <b>Responsabilidades:</b>  Suporte técnico em Banco de Dados (Oracle), manuseio em ferramentas de análise de dados (SAP BO e QLIK Sense) e automação de processos e rotinas (Rundeck e ODI).</div>
          </div>
        </div>

        <hr className="m-10 mx-96 opacity-80" style={{
          backgroundColor: '#C8B6E2',
          height: 2,
        }}/>

        <div className="flex flex-col gap-4">
          <div className="flex text-center items-center flex-row gap-2 text-purple-hunt-900 font-semibold"> <CheckSquare size={28} color="#A8A4CE" weight="bold" /> Formação Acadêmica </div>
          <div className="flex flex-col gap-1 ml-4">
            <div className="flex items-center flex-row gap-2 text-purple-hunt-900 ml-4 text-sm"> <span> <b>Graduando em Ciência da Computação</b> - Universidade de Brasília (UnB) </span></div>
            <div className="flex items-center flex-row gap-2 text-purple-hunt-900 ml-4 text-sm"> 8º Semestre </div>
            <div className="flex items-center flex-row gap-2 text-purple-hunt-900 ml-4 text-sm"> <b>Conclusão:</b> Junho/2023</div>
          </div>
        </div>

        <hr className="m-10 mx-96 opacity-80" style={{
          backgroundColor: '#C8B6E2',
          height: 2,
        }}/>

        <div className="flex flex-col gap-4">
          <div className="flex items-center flex-row gap-2 text-purple-hunt-900 font-semibold"> <CheckSquare size={28} color="#A8A4CE" weight="bold" /> Informações Complementares </div>
          
          <div className="flex flex-col gap-1 ml-4">
            <div className="flex items-center flex-row gap-2 text-purple-hunt-900 ml-4 text-sm"> <span className="text-purple-hunt-300"> Idiomas. </span></div>
            <div className="flex items-center flex-row gap-2 text-purple-hunt-900 ml-4 text-sm"> Inglês - Avançado </div>
          </div>
          
          <div className="flex flex-col gap-1 ml-4">
            <div className="flex items-center flex-row gap-2 text-purple-hunt-900 ml-4 text-sm"> <span className="text-purple-hunt-300"> Conhecimentos em Programação. </span></div>
            <div className="flex items-center flex-row gap-2 text-purple-hunt-900 ml-4 text-sm"> <b>Linguagens:</b> C, C++, Python, Ruby e SQL.</div>
          </div>

          <div className="flex flex-col gap-1 ml-4">
            <div className="flex items-center flex-row gap-2 text-purple-hunt-900 ml-4 text-sm"> <span className="text-purple-hunt-300"> Conhecimentos em Desenvolvimento Web e Mobile. </span></div>
            <div className="flex items-center flex-row gap-2 text-purple-hunt-900 ml-4 text-sm"> <b>Tecnologias:</b> HTML, CSS, Javascript, Typescript, TailwindCSS, NodeJS, React, React Native e Django.</div>
          </div>

          <div className="flex flex-col gap-1 ml-4">
            <div className="flex items-center flex-row gap-2 text-purple-hunt-900 ml-4 text-sm"> <span className="text-purple-hunt-300"> Conhecimentos em Computação Gráfica. </span></div>
            <div className="flex items-center flex-row gap-2 text-purple-hunt-900 ml-4 text-sm"> Adobe Photoshop - Avançado </div>
            <div className="flex items-center flex-row gap-2 text-purple-hunt-900 ml-4 text-sm"> Adobe Premiere - Avançado </div>
            <div className="flex items-center flex-row gap-2 text-purple-hunt-900 ml-4 text-sm"> Adobe Ilustrator - Intermediário </div>
          </div>

          <div className="flex flex-col gap-1 ml-4">
            <div className="flex items-center flex-row gap-2 text-purple-hunt-900 ml-4 text-sm"> <span className="text-purple-hunt-300"> Certificações. </span></div>
            <div className="flex items-center flex-row gap-2 text-purple-hunt-900 ml-4 text-sm"> <b> Word 2007, Excel 2007, Corel Draw, Dreamweaver,  Flash MX, Photoshop CS e Indesign.</b></div>
            <div className="flex items-center flex-row gap-2 text-purple-hunt-900 ml-4 text-sm pb-2"> New Value Informática - 2014(15 meses).</div>
            
            <div className="flex items-center flex-row gap-2 text-purple-hunt-900 ml-4 text-sm"> <b>Microsoft Power BI para Data Science, versão 2.0.</b></div>
            <div className="flex items-center flex-row gap-2 text-purple-hunt-900 ml-4 text-sm"> Data Science Academy - 2021 (72 Horas).</div>

          </div>
          
          <hr className="m-6 mx-96" style={{
            backgroundColor: '#C8B6E2',
            height: 2,
          }}/>
          
          <div className="flex flex-col gap-4">
            <div className="flex items-center flex-row gap-2 text-purple-hunt-900 font-semibold"> <CheckSquare size={28} color="#A8A4CE" weight="bold" /> Objetivo </div>
            <div className="flex flex-col gap-1 ml-4">
              <div className="flex text-justify flex-row gap-2 text-purple-hunt-900 ml-4 text-sm indent-3"> <span> Pretendo colaborar em um ambiente de trabalho onde eu consiga colocar minhas habilidades de computação em prática. Possuo conhecimento em lógica de programação devido a participações em maratonas de programação competitiva e hackathons. Portanto estou disposto a aprender e a me adaptar a trabalhar com o que a empresa estiver disposta a oferecer. </span></div>
            </div>
          </div>
        </div> 
      </div>
    </div>
  )
}