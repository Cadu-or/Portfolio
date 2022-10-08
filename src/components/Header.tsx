import {Icon} from "./Icon"
import {NavBar} from "./NavBar"

export function HeaderFixed(){
  return (
    <div className="items-center flex justify-between fixed w-screen top-0 overflow-hidden ">
      <div className="pt-2 px-8 flex flex-col">
        <Icon/>
        <span className="items-center text-lg"> Cadu-or </span>
      </div>
      <NavBar/>
    </div>

  )
}

export function Header(){
  return (
    <div className="items-center flex justify-between w-screen">
      <div className="pt-2 px-8 flex flex-col">
        <Icon/>
        <span className="items-center text-lg"> Cadu-or </span>
      </div>
      <NavBar/>
    </div> 
  ) 
}