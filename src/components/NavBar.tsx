import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { List, X } from "phosphor-react";
import { Logo } from "./Logo";

interface NavigationProps {
  name: string;
  href: string;
}

const navigation: NavigationProps[] = [
  { name: "Inicio", href: "/" },
  { name: "Projetos", href: "/projetos" },
  { name: "Habilidades", href: "/habilidades" },
  { name: "Currículo", href: "/curriculo" },
];

export function NavBar() {
  let url = window.location.pathname;

  return (
    <>
      <Disclosure as="nav" className="bg-zinc-800">
        {({ open }: { open: boolean }) => (
          <>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  {open ? <X size={32} /> : <List size={32} />}
                </DisclosureButton>
              </div>
              <div className="flex justify-center sm:justify-between">
                <Logo />
                <div className="hidden sm:flex">
                  <div className="flex items-center space-x-8 px-5 py-5 text-lg">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={
                          `${
                            url == item.href
                              ? "underline decoration-mgreen-600 decoration-2 underline-offset-4"
                              : "text-gray-300 hover:bg-gray-700"
                          }` + " rounded-md px-2 py-2 text-lg"
                        }
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <DisclosurePanel className="sm:hidden">
              <div className="flex flex-col">
                {navigation.map((item) => (
                  <DisclosureButton
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={
                      `${
                        url == item.href
                          ? "underline decoration-mgreen-600 decoration-2 underline-offset-4"
                          : "text-gray-300 hover:bg-gray-700"
                      }` + " rounded-md px-2 py-2 text-lg"
                    }
                  >
                    {item.name}
                  </DisclosureButton>
                ))}
              </div>
            </DisclosurePanel>
          </>
        )}
      </Disclosure>
    </>
  );
}
