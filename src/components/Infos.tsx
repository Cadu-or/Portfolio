import { useEffect, useState } from "react";
import { API } from "./ApiGIT";
import { GitCard, GitCardProps } from "./GitCard";

export function Infos() {
  const [user, setUser] = useState<GitCardProps>()
  useEffect(() => { API.get("cadu-or").then((response) => setUser(response.data))}, []);
  return (
    <div className="flex flex-row justify-between px-20 pb-24 mt-28">
      <div className="flex flex-col gap-10 w-1/2 justify-center">
        <span className="text-3xl"> Olá,</span>
          <div className="flex space-x-1 text-3xl">
            <span> Me chamo</span>
            <span className="text-mgreen-500"> Carlos Eduardo</span>
            <span> !</span>
          </div>
          <span> Fiz essa aplicação no intuito de mostrar meus projetos e habilidades na área de computação.</span>
      </div>
      <GitCard name={user?.name} login={user?.login} company={user?.company} bio={user?.bio} followers={user?.followers} following={user?.following} public_repos={user?.public_repos} location={user?.location}/>
    </div>
  )
}