import qliksense from "../assets/qliksense.png";
import rundeck from "../assets/rundeck.png";
import zabbix from "../assets/zabbix.png";
import { Simbolo } from "./Simbolo";

export function Ferramentas() {
  return (
    <div className="mt-28">
      <h1 className="mt-6 px-8 text-3xl">Ferramentas</h1>
      <div className="grid grid-cols-2 gap-4 px-8 py-6 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        <Simbolo
          simbolo="devicon-python-plain"
          texto="Python"
          trabalhando={true}
          estudando={true}
        />
        <Simbolo
          simbolo="devicon-rabbitmq-original"
          texto="RabbitMQ"
          trabalhando={true}
          estudando={true}
        />
        <Simbolo
          simbolo="devicon-docker-plain"
          texto="Docker"
          trabalhando={true}
          estudando={true}
        />
        <Simbolo
          simbolo="devicon-postgresql-plain"
          texto="PostgreSQL"
          trabalhando={true}
          estudando={false}
        />
        <Simbolo
          simbolo="devicon-linux-plain"
          texto="Linux"
          trabalhando={true}
          estudando={false}
        />
        <Simbolo
          simbolo="devicon-oracle-original"
          texto="Oracle Database"
          trabalhando={true}
          estudando={false}
        />
        <Simbolo
          simbolo="devicon-mysql-plain"
          texto="MySQL"
          trabalhando={true}
          estudando={false}
        />
        <Simbolo
          simbolo="devicon-git-plain"
          texto="Git"
          trabalhando={true}
          estudando={false}
        />
        <Simbolo
          simbolo="devicon-nodejs-plain"
          texto="NodeJS"
          trabalhando={false}
          estudando={true}
        />
        <Simbolo
          simbolo="devicon-nextjs-original"
          texto="NextJS"
          trabalhando={false}
          estudando={true}
        />
        <Simbolo
          simbolo="devicon-javascript-plain"
          texto="JavaScript"
          trabalhando={false}
          estudando={true}
        />
        <Simbolo
          simbolo="devicon-typescript-plain"
          texto="TypeScript"
          trabalhando={false}
          estudando={true}
        />
        <Simbolo
          simbolo="devicon-html5-plain"
          texto="HTML"
          trabalhando={false}
          estudando={true}
        />
        <Simbolo
          simbolo="devicon-css3-plain"
          texto="CSS"
          trabalhando={false}
          estudando={true}
        />
        <Simbolo
          simbolo="devicon-react-original"
          texto="React"
          trabalhando={false}
          estudando={true}
        />
        <Simbolo
          simbolo="devicon-tailwindcss-plain"
          texto="TailwindCSS"
          trabalhando={false}
          estudando={true}
        />
        <div className="flex h-44 flex-col items-center justify-center rounded-lg border-2 border-zinc-400 p-4">
          <img src={zabbix} className="w-12"></img>
          <h3>Zabbix</h3>
        </div>
        <div className="flex h-44 flex-col items-center justify-center rounded-lg border-2 border-zinc-400 p-4">
          <img src={rundeck} className="w-12"></img>
          <h3>Rundeck</h3>
        </div>
        <div className="flex h-44 flex-col items-center justify-center rounded-lg border-2 border-zinc-400 p-4">
          <img src={qliksense} className="w-12"></img>
          <h3>Qlik Sense</h3>
        </div>
        <Simbolo
          simbolo="devicon-c-plain-wordmark"
          texto="C"
          trabalhando={false}
          estudando={false}
        />
        <Simbolo
          simbolo="devicon-cplusplus-plain-wordmark"
          texto="C++"
          trabalhando={false}
          estudando={false}
        />
        <Simbolo
          simbolo="devicon-django-plain"
          texto="Django"
          trabalhando={false}
          estudando={false}
        />
        <Simbolo
          simbolo="devicon-haskell-plain"
          texto="Haskell"
          trabalhando={false}
          estudando={false}
        />
        <Simbolo
          simbolo="devicon-elixir-plain"
          texto="Elixir"
          trabalhando={false}
          estudando={false}
        />
      </div>
    </div>
  );
}
