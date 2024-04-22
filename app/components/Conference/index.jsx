"use client";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

const Conference = () => {
  return (
    <div className="relative" id="info-section">
      <div className="mx-auto max-w-7xl px-6 sm:pb-10 lg:pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 mt-20 space-x-5">
          <div className="col-span-6 flex justify-start">
            <Image src="/colegio.jpg" alt="colegio" width={636} height={600} />
          </div>
          <div className="col-span-6 flex flex-col justify-center">
            <Fade
              direction={"up"}
              delay={400}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              <h2 className="text-pink text-lg font-normal mb-3 ls-51 uppercase text-start">
                Un ejemplo de ello
              </h2>
            </Fade>
            <Fade
              direction={"up"}
              delay={800}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              <h3 className="text-4xl lg:text-3xl font-semibold text-blue-900 text-start">
                LLegamos a la comunidad
              </h3>
            </Fade>
            <Fade
              direction={"up"}
              delay={1000}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              <p className="text-grey md:text-lg font-normal mb-10 text-start mt-2">
                Durante una charla en el Colegio Virgen de Europa con alumnos de
                1º de Bachillerato Internacional Programa Diploma, se abordaron
                temas como el valor del voluntariado y las dificultades que
                enfrentan los refugiados en el mundo, especialmente en países
                como Venezuela, Cuba, Nicaragua, Centroamérica, Ucrania, Oriente
                Medio y África.{" "}
              </p>
              <p className="text-grey md:text-lg font-normal mb-10 text-start mt-1">
                Se destacó la importancia de promover el voluntariado a través
                de la asignatura CAS (Creatividad, Actividad y Servicio), que
                brinda a los estudiantes la oportunidad de colaborar con otros y
                experimentar la satisfacción del trabajo solidario.
              </p>
              <p className="text-grey md:text-lg font-normal mb-10 text-start mt-1">
                La charla se centró en el deseo de construir una sociedad más
                justa, integrada, diversa y solidaria, y en la importancia del
                voluntariado como medio para lograr este objetivo.
              </p>
              <div className="flex align-middle justify-center md:justify-start">
                <button className="text-xl font-medium rounded-full text-white py-5 px-6 bg-pink lg:px-10 mr-6">
                  Learn more
                </button>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conference;
