import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export function EncontreMe() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duração das animações em milissegundos
      easing: "ease-in", // Easing das animações
      once: false,
    });
  }, []);
  return (
    <div data-aos="fade-up">
      <span className="flex justify-center text-4xl"> Entre em contato </span>
      <div className="flex justify-center space-x-4 p-8">
        <form action="https://www.linkedin.com/in/cadu-or/" target="_blank">
          <button
            type="submit"
            className="disabled:hover:bg-brand-500 flex items-center rounded-full border-transparent bg-mgreen-700 p-2 transition-colors hover:bg-mgreen-600 focus:outline-none focus:ring-2 focus:ring-mgreen-500 focus:ring-offset-2 focus:ring-offset-zinc-900 disabled:opacity-50"
          >
            <FaLinkedin />
          </button>
        </form>

        <form action="mailto:carlos.e.o.ribeiro@gmail.com" target="_blank">
          <button
            type="submit"
            className="disabled:hover:bg-brand-500 flex items-center justify-between space-x-1 rounded-full border-transparent bg-mgreen-700 p-2 text-sm transition-colors hover:bg-mgreen-600 focus:outline-none focus:ring-2 focus:ring-mgreen-500 focus:ring-offset-2 focus:ring-offset-zinc-900 disabled:opacity-50"
          >
            <SiGmail />
          </button>
        </form>
      </div>
    </div>
  );
}
