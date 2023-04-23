interface ProjetoCardProps{
  logo: string;
  ferramentas: string[];
  children: string | JSX.Element | JSX.Element[];
}

export function ProjetoCard({children, logo, ferramentas} : ProjetoCardProps){
  return(
    <div className="bg-slate-100 text-zinc-900 text-sm p-4 flex items-center flex-col h-72 overflow-y-scroll scrollbar-thin scrollbar-thumb-zinc-500 scrollbar-thumb-rounded-full">
      <div className="flex self-start -m-4 space-x-2">
        {
          ferramentas?.map(logo => (
            <i className={logo + " text-4xl text-zinc-800"} key={logo}></i>
          ))
        }
      </div>
      <img src={logo} className="w-40 pb-4"></img>
      {children}
    </div>
  )
}