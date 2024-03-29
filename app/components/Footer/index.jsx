"use client";
import Image from "next/image";
import Weather from "../weather";
import Link from "next/link";

const socialNetworks = [
  {
    imgSrc: "/images/Footer/twitterX.png",
    imgAlt: "twitterX",
    href: "https://twitter.com/yosoyrefugiado"
  },
  {
    imgSrc: "/images/Footer/facebook.png",
    imgAlt: "facebook",
    href: "https://www.instagram.com/ongrefugiadossinfronteras/"
  },
  {
    imgSrc: "/images/Footer/instagram.png",
    imgAlt: "instagram",
    href: "https://www.instagram.com/ongrefugiadossinfronteras"
  },
];

const footer = () => {
  return (
    <div
      className="text-white text-center mt-0 w-full"
      style={{ backgroundColor: "#0B0E34" }}
    >
      <div className="mr-auto ml-auto p-4 sm:max-w-96 lg:max-w-full">
        <div className="mt-4 grid gap-10 md:grid-cols-2 lg:gap-10">
					<div className="grid place-content-center mb-10"> 
            <img src={"/logo1.svg"} alt="logo" className="max-w-80" />
            <div className="flex justify-evenly">
              {socialNetworks.map((items, index) => (
                <Link href={items.href} key={index} target="blank">
                    <Image src={items.imgSrc} alt={items.imgAlt} width={40} height={30}/>
                </Link>
              ))}
            </div>
					</div>
          <div className="grid content-center">
						<div className="flex justify-around">
            <ul className="mb-0">
              <li>
                <a href="/about-us" className="text-white">
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a href="/news" className="text-white">
                  Prensa
                </a>
              </li>
              <li>
                <a href="/contact-us" className="text-white">
                  Inscripción
                </a>
              </li>
              <li>
                <a href="/faq" className="text-white">
                  Preguntas
                </a>
              </li>
            </ul>
            <Weather />

						</div>
          </div>
        </div>
      </div>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2024 Refugiados Sin Fronteras. Todos los derechos reservados.
      </div>
    </div>
  );
};

export default footer;
