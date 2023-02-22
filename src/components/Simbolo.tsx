import { Briefcase, Notebook } from "phosphor-react";
import React from "react";

interface SimboloProps {
  simbolo: string
  texto: string
  trabalhando: boolean
  estudando: boolean
}

export function Simbolo( {simbolo, texto, trabalhando, estudando} : SimboloProps){
  let style = simbolo + " text-5xl"

  return (
    <div className="flex flex-col items-center border-2 border-zinc-400 p-4 rounded-lg">
      <i className = {style}> </i>
      <h3> {texto} </h3>
      { trabalhando ?
        <div className="rounded-full bg-yellow-200 px-2 text-yellow-950 mb-2 flex items-center gap-1"> <Briefcase size={20} color="#947b00"/> Trabalhando </div> : <h1> </h1>
      }
      { estudando ?
        <div className="rounded-full bg-blue-200 px-2 text-blue-150 mb-2 flex items-center gap-1"> <Notebook size={20} color="#009194" /> Estudando </div> : <h1> </h1>
      }
    </div>
  );
}