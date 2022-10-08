import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export function Footer() {
  return (
    <>
      <div className="bg-zinc-800 w-screen h-12 justify-between items-center flex p-8">
        <span> Feito por <a className="underline underline-offset-2" target="_blank" href="https://github.com/Cadu-or"> Carlos Eduardo </a></span>
        <div className="flex space-x-4">
          <form action="https://www.linkedin.com/in/cadu-or/" target="_blank">
            <button
              type="submit"
              className="p-2 bg-mgreen-700 rounded-full border-transparent flex items-center hover:bg-mgreen-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-mgreen-500 transition-colors disabled:hover:bg-brand-500 disabled:opacity-50"
            >
              <FaLinkedin />
            </button>
          </form>

          <form action="mailto:carlos.e.o.ribeiro@gmail.com" target="_blank">
            <button
              type="submit"
              className="p-2 bg-mgreen-700 rounded-full border-transparent flex justify-between space-x-1 items-center text-sm hover:bg-mgreen-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-mgreen-500 transition-colors disabled:hover:bg-brand-500 disabled:opacity-50"
            >
              <SiGmail />
            </button>
          </form>
        </div>
      </div>
    </>
  )
}