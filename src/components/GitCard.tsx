import { Briefcase, Folders, GlobeHemisphereWest } from "phosphor-react";
import { SiGithub } from "react-icons/si";
import { ButtonGit } from "./ButtonGit";

export interface GitCardProps{
  name: string | undefined,
  login: string | undefined, 
  company: string | undefined, 
  bio: string | undefined, 
  followers: string | undefined, 
  following: string | undefined, 
  public_repos: string | undefined, 
  location: string | undefined 
}

export function GitCard({ name, login, company, bio, followers, following, public_repos, location}: GitCardProps) {
  return (
    <div className="flex-col flex bg-mgreen-700 rounded-lg w-full">
      <SiGithub className="pt-2 pl-2 w-8 h-8 justify-start"/>
      <div className="h-48 w-full bg-split-mgreen-black justify-center items-center flex pt-8">
        <img className="w-32 rounded-full border-white border-4 " src="https://avatars.githubusercontent.com/u/52487636?v=4" alt="cadu-or" />
      </div>
      <div className="justify-center flex items-center flex-col bg-mgreen-90 rounded-b-lg p-6">
          <div className="text-2xl pt-2"> {name} </div>
          <span className="pb-6 text-zinc-400"> {login} </span>
          <span className="pb-8"> {bio} </span>

        <div className="flex space-x-1">
          <GlobeHemisphereWest weight="fill" className="w-5 h-5" alt="Globo"/>
          <span className="pb-2"> {location} </span>
        </div>

        <div className="flex space-x-1">
          <Briefcase weight="fill" className="w-5 h-5" alt="Empresa"/> 
          <span className="pb-6">{company}</span>
        </div>

        <div className="flex-col items-center justify-center flex gap-2">
          <div className="flex space-x-1">
            <Folders weight="fill" className="w-5 h-5" alt="Repositórios"/> 
            <span className="pb-2"> {public_repos} Repositórios </span>
          </div>

          <div className="flex space-x-8 px-4">
            <div className="flex flex-col items-center">
              <span>Seguidores</span>
              {/* <AddressBook weight="fill" className="w-5 h-5" alt="Seguidores"/>  */}
              <span className="pb-6"> {followers} </span>
            </div>
            <span> | </span>
            <div className="flex flex-col items-center">
              <span> Seguindo </span>
              {/* <PersonSimpleRun weight="fill" className="w-5 h-5" alt="Seguindo"/> */}
              <span className="pb-6"> {following}  </span>
            </div>
          </div>
        </div>
        
        <div className="py-2">
          <ButtonGit />
        </div>
      </div>
    </div>
  )
}