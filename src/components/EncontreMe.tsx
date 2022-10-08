import { FaLinkedin } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si'

export function EncontreMe(){
  return (
    <>
      <span className="flex justify-center text-4xl"> Entre em contato </span>
      <div className="flex justify-center space-x-4 p-8">
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
    </>
  )
}