import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
interface ProjetoCardProps {
  logo: string;
  ferramentas: string[];
  children: string | JSX.Element | JSX.Element[];
}

export function ProjetoCard({ children, logo, ferramentas }: ProjetoCardProps) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in",
      once: false,
    });
  });
  return (
    <div
      data-aos="zoom-in"
      className="flex h-72 flex-col items-center overflow-y-scroll bg-slate-100 p-4 text-sm text-zinc-900"
    >
      <div className="-m-4 flex space-x-2 self-start">
        {ferramentas?.map((logo) => (
          <i className={logo + " text-4xl text-zinc-800"} key={logo}></i>
        ))}
      </div>
      <img src={logo} className="w-40 py-4"></img>
      {children}
    </div>
  );
}
