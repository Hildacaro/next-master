"use client";
import Image from "next/image";
import Weather from "../weather";

const footer = () => {
  return (
    <div
      className="text-white text-center mt-0"
      style={{ backgroundColor: "#0B0E34" }}
    >
      <div className="mr-auto ml-auto p-4 sm:max-w-96 lg:max-w-full">
        <div className="mt-10 grid gap-10 md:grid-cols-2 lg:gap-10">
					<div className="grid place-content-center mb-10"> 
            <img src={"/logo1.svg"} alt="logo" className="max-w-80" />
            <div className="flex justify-center">
              <Image
                src={"/images/Footer/insta.svg"}
                alt={"items.imgSrc"}
                width={40}
                height={20}
              />
              <Image
                src={"/images/Footer/insta.svg"}
                alt={"items.imgSrc"}
                width={40}
                height={20}
              />
              <Image
                src={"/images/Footer/insta.svg"}
                alt={"items.imgSrc"}
                width={40}
                height={20}
              />
              <Image
                src={"/images/Footer/insta.svg"}
                alt={"items.imgSrc"}
                width={40}
                height={20}
              />
            </div>

					</div>

          <div className="grid content-center">
						<div className="flex justify-around">
            <ul className="mb-0">
              <li>
                <a href="#empresa" className="text-white">
                  Empresa
                </a>
              </li>
              <li>
                <a href="#equipo" className="text-white">
                  Nosotras
                </a>
              </li>
              <li>
                <a href="#galeria" className="text-white">
                  Expo
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  Obras
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
