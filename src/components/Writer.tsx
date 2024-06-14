import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Typewriter from "typewriter-effect";

export function Writer() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duração das animações em milissegundos
      easing: "ease-in", // Easing das animações
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <div className="flex pl-10 lg:pl-40">
      <span className="flex items-center font-serif text-xl text-mgreen-500">
        <Typewriter
          options={{
            strings: [
              'printf("Hello, World!\\n");',
              'std::cout << "Hello, World!\\n";',
              'print("Hello, World!")',
              'console.log("Hello, World!")',
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </span>
    </div>
  );
}
