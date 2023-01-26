import {Icon} from "./Icon"
import {NavBar} from "./NavBar"

export function HeaderFixed(){
  return (
    <div className="items-center flex justify-between fixed w-screen top-0 overflow-hidden ">
      <div className="pt-2 px-8 flex flex-col justify-center items-center">
        <Icon/>
        <span className="items-center text-xl -mt-0.5"> Cadu-or </span>
      </div>
      <NavBar/>
    </div>

  )
}

export function Header(){
  return (
    <div className="items-center flex justify-between w-screen">
      <div className="pt-2 px-8 flex flex-col justify-center items-center">
        <Icon/>
        <span className="items-center text-xl -mt-0.5"> Cadu-or </span>
      </div>
      <NavBar/>
    </div> 
  ) 
}