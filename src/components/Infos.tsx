import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { API } from "./ApiGIT";
import { GitCard, GitCardProps } from "./GitCard";

export function Infos() {
  const [user, setUser] = useState<GitCardProps>();
  useEffect(() => {
    API.get("cadu-or").then((response) => setUser(response.data));
    AOS.init({
      duration: 1000, // Duração das animações em milissegundos
      easing: "ease-in", // Easing das animações
    });
  }, []);
  return (
    <div
      className="mt-28 flex flex-col justify-between gap-10 pb-24 sm:flex-row sm:px-5 md:gap-5 md:px-10 lg:px-20"
      data-aos="fade-up"
    >
      <div className="flex w-full flex-col justify-center gap-10 space-x-2 px-5 sm:w-1/2">
        <div className="px-2 text-3xl"> Olá,</div>
        <div className="flex flex-wrap gap-1 text-3xl">
          <span className="text-nowrap"> Me chamo</span>
          <span className="text-nowrap text-mgreen-500"> Carlos Eduardo</span>
          <span>!</span>
        </div>
        <span>
          Fiz essa aplicação no intuito de mostrar meus projetos e habilidades
          na área de computação.
        </span>
      </div>
      <div
        className="mx-0 flex w-full justify-center px-5 sm:w-1/2 xl:mx-28"
        data-aos="fade-up"
      >
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
  );
}
