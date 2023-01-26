import { Simbolo } from "./Simbolo";
import zabbix from '../assets/zabbix.png'
import rundeck from '../assets/rundeck.png'
import qliksense from '../assets/qliksense.png'
import { Briefcase } from "phosphor-react";

export function Ferramentas(){
  return(
		<div>
			<div>
				<h1 className="mt-6 p-4 text-3xl">Ferramentas</h1>
				<div className="grid grid-cols-6 gap-10 p-6">
					<Simbolo simbolo="devicon-python-plain" texto="Python" trabalhando={true} estudando={true}/>
					<Simbolo simbolo="devicon-oracle-original" texto="Oracle Database" trabalhando={true} estudando={false}/>
					<Simbolo simbolo="devicon-postgresql-plain" texto="PostgreSQL" trabalhando={true} estudando={false}/>
					<Simbolo simbolo="devicon-linux-plain" texto="Linux" trabalhando={true} estudando={false}/>
					<div className="flex flex-col items-center">
						<img src={zabbix} className="w-12"></img>
						<h3>Zabbix</h3>
						<div className="rounded-full bg-yellow-200 px-2 text-yellow-950 mb-2 flex items-center gap-1"> <Briefcase size={20} color="#947b00"/> Trabalhando </div>
					</div>
					<div className="flex flex-col items-center">
						<img src={rundeck} className="w-12"></img>
						<h3>Rundeck</h3>
						<div className="rounded-full bg-yellow-200 px-2 text-yellow-950 mb-2 flex items-center gap-1"> <Briefcase size={20} color="#947b00"/> Trabalhando </div>
					</div>
					<div className="flex flex-col items-center">
						<img src={qliksense} className="w-12"></img>
						<h3>Qlik Sense</h3>
						<div className="rounded-full bg-yellow-200 px-2 text-yellow-950 mb-2 flex items-center gap-1"> <Briefcase size={20} color="#947b00"/> Trabalhando </div>
					</div>
					<Simbolo simbolo="devicon-nodejs-plain" texto="NodeJS" trabalhando={false} estudando={true}/>
					<Simbolo simbolo="devicon-nextjs-original" texto="NextJS" trabalhando={false} estudando={true}/>
					<Simbolo simbolo="devicon-javascript-plain" texto="JavaScript" trabalhando={false} estudando={true}/>
					<Simbolo simbolo="devicon-typescript-plain" texto="TypeScript" trabalhando={false} estudando={true}/>
					<Simbolo simbolo="devicon-html5-plain" texto="HTML" trabalhando={false} estudando={true}/>
					<Simbolo simbolo="devicon-css3-plain" texto="CSS" trabalhando={false} estudando={true}/>
					<Simbolo simbolo="devicon-react-original" texto="React" trabalhando={false} estudando={true}/>
					<Simbolo simbolo="devicon-tailwindcss-plain" texto="TailwindCSS" trabalhando={false} estudando={true}/>
					<Simbolo simbolo="devicon-c-plain-wordmark" texto="C" trabalhando={false} estudando={false}/>
					<Simbolo simbolo="devicon-cplusplus-plain-wordmark" texto="C++" trabalhando={false} estudando={false}/>
					<Simbolo simbolo="devicon-django-plain" texto="Django" trabalhando={false} estudando={false}/>
					<Simbolo simbolo="devicon-haskell-plain" texto="Haskell" trabalhando={false} estudando={false}/>
					<Simbolo simbolo="devicon-elixir-plain" texto="Elixir" trabalhando={false} estudando={false}/>
					<Simbolo simbolo="devicon-git-plain" texto="Git" trabalhando={false} estudando={false}/>
					<Simbolo simbolo="devicon-mysql-plain" texto="MySQL" trabalhando={false} estudando={false}/>
				</div>
			</div>
		</div>
	)
}