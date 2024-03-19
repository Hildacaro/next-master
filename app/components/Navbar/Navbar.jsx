import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import React, { useState } from "react";
import Drawer from "./Drawer";
import MobileNavbarData from "./MobileNavbarData";
import Image from "next/image";

const navigation = [
  { name: "Inicio", href: "/", current: false },
  { name: "Sobre Nosotros", href: "/about-us", current: false },
  { name: "Prensa", href: "/news", current: false },
  { name: "Inscripción", href: "/contact-us", current: false },
  { name: "Preguntas", href: "/faq", current: false },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Disclosure
      as="nav"
      className="navbar"
      style={{ backgroundColor: "#0B0E34" }}
    >
      <>
        <div className="mx-auto max-w-9xl p-3 md:p-6 lg:px-8">
          <div className="relative flex h-12 sm:h-20 items-center">
            <div className="flex flex-1 items-center sm:justify-between">
              {/* LOGO */}
              <div className="flex sm:hidden flex-shrink-0 items-center border-right">
                <Link
                  href="/"
                  className="text-2xl font-semibold text-white ml-4"
                >
                  <Image src="/logo1.svg" alt="logo" width={100} height={100} />
                </Link>
              </div>
              <div className="hidden sm:flex flex-shrink-0 items-center border-right">
                <Link
                  href="/"
                  className="text-2xl font-semibold text-white ml-4"
                >
                  <Image src="/logo1.svg" alt="logo" width={200} height={200} />
                </Link>
              </div>

              {/* LINKS */}

              <div className="hidden lg:flex items-center border-right ">
                <div className="flex justify-end space-x-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="navlinks hover:opacity-100 px-3 py-4 rounded-md text-xl font-normal text-white opacity-50 hover:text-white space-links"
                      aria-current={"page"}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="hidden lg:flex items-center flex-col gap-4">
                <div className="lg:flex items-center">
                  <Image
                    src={"/images/Navbar/phone.png"}
                    alt="phone-image"
                    width={19}
                    height={19}
                  />
                  <p className="text-base font-normal text-white pl-3">
                    +34 123-4567
                  </p>
                </div>
                <div className="lg:flex items-center">
                  <Image
                    src={"/images/Navbar/email.png"}
                    alt="email-image"
                    width={25}
                    height={20}
                  />
                  <p className="text-base font-normal text-white pl-3">
                    Contacto@refugiadossinfronteras.org
                  </p>
                </div>
              </div>
            </div>

            {/* MOBILE VIEW */}

            {/* ICON */}

            <div className="block h-6 w-6 lg:hidden" aria-hidden="true" onClick={() => setIsOpen(true)}>
              <Image
                src={"/images/Navbar/menu_burger.png"}
                alt="menu_burger-image"
                width={25}
                height={20}
              />
            </div>

            {/* LINKS DATA */}

            <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
              <MobileNavbarData data={navigation} />
            </Drawer>
          </div>
        </div>
      </>
    </Disclosure>
  );
};

export default Navbar;
