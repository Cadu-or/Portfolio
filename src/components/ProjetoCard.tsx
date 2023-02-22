interface ProjetoCardProps{
  descricao: string;
  logo: string;
  ferramentas: string[];
}

export function ProjetoCard({descricao, logo, ferramentas} : ProjetoCardProps){
  return(
    <div className="bg-slate-100 text-zinc-900 text-sm p-4 flex items-center flex-col justify-center">
      <div className="flex self-start -m-4 space-x-2">
        {
          ferramentas?.map(logo => (
            <i className={logo + " text-4xl text-zinc-800"} key={logo}></i>
          ))
        }
      </div>
      <img src={logo} className="w-36 pb-4"></img>
      <span className="text-justify">
        {descricao}
      </span>
    </div>
  )
}