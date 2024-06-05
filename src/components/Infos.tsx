import { useEffect, useState } from "react";
import { API } from "./ApiGIT";
import { GitCard, GitCardProps } from "./GitCard";

export function Infos() {
  const [user, setUser] = useState<GitCardProps>()
  useEffect(() => { API.get("cadu-or").then((response) => setUser(response.data))}, []);
  return (
    <div className="flex flex-col justify-between md:gap-5 gap-10 lg:px-20 pb-24 mt-28 md:px-10 sm:px-5 sm:flex-row">
      <div className="flex flex-col gap-10 justify-center space-x-2 w-full sm:w-1/2 px-5 pt-10">
        <div className="text-3xl px-2"> Olá,</div>
          <div className="flex flex-wrap space-x-1 text-3xl">
            <span className="text-nowrap"> Me chamo</span>
            <span className="text-mgreen-500 text-nowrap"> Carlos Eduardo</span>
            <span>!</span>
          </div>
          <span> Fiz essa aplicação no intuito de mostrar meus projetos e habilidades na área de computação.</span>
      </div>
      <div className="flex justify-center w-full mx-0 xl:mx-28 sm:w-1/2 px-5">
        <GitCard 
          name={user?.name} 
          login={user?.login} 
          company={user?.company} 
          bio={user?.bio} 
          followers={user?.followers} 
          following={user?.following} 
          public_repos={user?.public_repos} 
          location={user?.location}
        />
      </div>
    </div>
  )
}