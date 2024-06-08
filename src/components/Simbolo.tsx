import { Briefcase, Notebook } from "phosphor-react";

interface SimboloProps {
  simbolo: string;
  texto: string;
  trabalhando: boolean;
  estudando: boolean;
}

export function Simbolo({
  simbolo,
  texto,
  trabalhando,
  estudando,
}: SimboloProps) {
  let style = simbolo + " text-5xl";

  return (
    <div className="flex h-44 flex-col items-center justify-center rounded-lg border-2 border-zinc-400 p-4">
      <i className={style}> </i>
      <h3 className="pb-1"> {texto} </h3>
      {trabalhando ? (
        <div className="mb-2 flex items-center gap-1 rounded-full bg-yellow-200 px-2 text-yellow-950">
          <Briefcase size={20} color="#947b00" /> Trabalhando
        </div>
      ) : (
        <h1> </h1>
      )}
      {estudando ? (
        <div className="mb-2 flex items-center gap-1 rounded-full bg-blue-200 px-2 text-blue-150">
          <Notebook size={20} color="#009194" /> Estudando
        </div>
      ) : (
        <h1> </h1>
      )}
    </div>
  );
}
