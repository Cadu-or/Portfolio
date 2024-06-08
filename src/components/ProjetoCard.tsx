interface ProjetoCardProps {
  logo: string;
  ferramentas: string[];
  children: string | JSX.Element | JSX.Element[];
}

export function ProjetoCard({ children, logo, ferramentas }: ProjetoCardProps) {
  return (
    <div className="flex h-72 flex-col items-center overflow-y-scroll bg-slate-100 p-4 text-sm text-zinc-900 scrollbar-thin scrollbar-thumb-rounded-full scrollbar-thumb-zinc-500">
      <div className="-m-4 flex space-x-2 self-start">
        {ferramentas?.map((logo) => (
          <i className={logo + " text-4xl text-zinc-800"} key={logo}></i>
        ))}
      </div>
      <img src={logo} className="w-40 py-4"></img>
      {children}
    </div>
  );
}
