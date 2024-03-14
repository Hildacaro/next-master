"use client";
import { useEffect, useState } from "react";
import Team from "../components/team";
import { fetchTeam } from "../lib/data";
import { Fade } from "react-awesome-reveal";

const OurTeamPage = () => {
  const [team, setTeam] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchTeam();
        setTeam(data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="py-16 bg-gradient-to-br ">
        <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <Fade direction={'up'} delay={400} cascade damping={1e-1} triggerOnce={true}>
            <div className="mb-12 space-y-2 text-center">
                <h2 className="text-2xl text-black font-bold md:text-4xl mb-8">
                  ¿Quienes somos?
                </h2>
                <span
                  className="mb-4 text-xl md:text-2xl"
                >
                  Somos Refugiados Sin Fronteras la primera asociación civil creada
                  por refugiados venezolanos en defensa de los Derechos Humanos de
                  refugiados, migrantes y desplazados. Nacemos en España en mayo del
                  2019 con el propósito de ayudar a mitigar los aspectos negativos
                  de la masiva generada por violaciones de DDHH, con un criterio
                  técnico y social
                </span>
            </div>
          </Fade>
          
          <Fade direction={'up'} delay={400} cascade damping={1e-1} triggerOnce={true}>
          <div className="grid gap-12 ">
            <div className="p-1 rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
              <img
                src="/mision.png"
                alt="art cover"
                loading="lazy"
                width="50"
                height="100"
                className="ml-28h-56 sm:h-full w-full sm:w-5/12 object-cover object-top rounded-lg transition duration-500 group-hover:rounded-xl"
              />
              <div className="sm:w-7/12 pl-0 p-5">
                <div className="space-y-2">
                  <div className="space-y-4">
                    <h4 className="text-2xl font-semibold text-cyan-900">
                      Misión
                    </h4>
                    <p className="text-gray-600">
                      Nuestra misión como Asociación Civil para Refugiados en
                      España es proteger y defender los derechos humanos de los
                      refugiados, migrantes y desplazados por crisis
                      humanitarias y conflictos bélicos en sus países de origen,
                      brindándoles ayuda humanitaria y asistencia en su proceso
                      de integración en la sociedad española. Ofrecemos
                      asesoramiento legal en materia de asilo y refugio, y
                      atención psicológica para mitigar los efectos negativos de
                      la migración, proporcionamos capacitación y formación en
                      habilidades laborales para optimizar el acceso a la
                      empleabilidad. Como entidad acreditada como Banco de
                      Alimentos de Madrid, distribuimos alimentos para
                      satisfacer las necesidades básicas de las personas en
                      situaciones de vulnerabilidad. También promovemos la
                      cultura y la integración sociocultural de los refugiados a
                      través de la organización de eventos y actividades
                      culturales con músicos refugiados.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-1 rounded-xl group sm:flex bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
              <div className="sm:w-7/12 pl-0 p-5">
                <div className="space-y-2">
                  <div className="space-y-4">
                    <h4 className="text-2xl font-semibold text-cyan-900">
                      Visión
                    </h4>
                    <p className="text-gray-600">
                      Nuestra visión es ser una organización líder en la
                      promoción de los derechos humanos de los refugiados,
                      migrantes y desplazados en España y en el mundo,
                      proporcionando un apoyo integral en su proceso de
                      integración en la sociedad del país de acogida. Queremos
                      ser reconocidos como una organización comprometida en
                      brindar ayuda humanitaria, formación y capacitación para
                      mejorar la empleabilidad, asesoramiento legal y atención
                      psicológica de alta calidad a las personas refugiadas.
                      Aspiramos a seguir siendo una entidad acreditada como
                      Banco de Alimentos, distribuyendo alimentos para
                      satisfacer las necesidades básicas de las personas
                      vulnerables en todo el mundo. Además, nos esforzamos por
                      fomentar la cultura y la integración sociocultural de los
                      refugiados a través de eventos y actividades culturales
                      con músicos refugiados, contribuyendo a la construcción de
                      una sociedad más diversa e inclusiva.
                    </p>
                  </div>
                </div>
              </div>
              <img
                src="/vision.png"
                alt="art cover"
                loading="lazy"
                width="1000"
                height="667"
                className="h-56 sm:h-full w-full sm:w-5/12 object-cover object-top rounded-lg transition duration-500 group-hover:rounded-xl"
              />
            </div>
          </div>
          </Fade>
        </div>
      </div>
      <Team dataTeam={team} />
    </>
  );
}

export default OurTeamPage;