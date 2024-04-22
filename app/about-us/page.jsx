"use client";
import { useEffect, useState } from "react";
import Team from "../components/team";
import { fetchTeam } from "../lib/data";
import { Fade } from "react-awesome-reveal";

const dataVisionMision = [
  {
    imgSrc: "/mision.png",
    title: "Mision",
    description:
      "Como Asociación Civil para Refugiados en España nuestra misión es proteger y defender los derechos humanos de los refugiados, migrantes y desplazados por crisishumanitarias y conflictos bélicos en sus países deorigen, brindándoles ayuda humanitaria y asistencia en su proceso de integración en la sociedad española.Ofrecemos asesoramiento legal en materia de asilo yrefugio, y atención psicológica para mitigar los efectosnegativos de la migración, proporcionamos capacitación y formación en habilidades laborales para optimizar el acceso a la empleabilidad. Como entidad acreditada como Banco de Alimentos de Madrid, distribuimos alimentospara satisfacer las necesidades básicas de las personas en situaciones de vulnerabilidad. También promovemos la cultura y la integración sociocultural de los refugiadosa través de la organización de eventos y actividadesculturales con músicos refugiados.",
  },
  {
    imgSrc: "/vision.png",
    title: "Vision",
    description:
      "Como Asociación Civil para Refugiados en España nuestra misión es proteger y defender los derechos humanos de los refugiados, migrantes y desplazados por crisishumanitarias y conflictos bélicos en sus países de origen, brindándoles ayuda humanitaria y asistencia en su proceso de integración en la sociedad española.Ofrecemos asesoramiento legal en materia de asilo yrefugio, y atención psicológica para mitigar los efectosnegativos de la migración, proporcionamos capacitación y formación en habilidades laborales para optimizar el acceso a la empleabilidad. Como entidad acreditada como Banco de Alimentos de Madrid, distribuimos alimentos para satisfacer las necesidades básicas de las personas en situaciones de vulnerabilidad. También promovemos lacultura y la integración sociocultural de los refugiadosa través de la organización de eventos y actividadesculturales con músicos refugiados.",
  }
];

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
      <div className="py-16 bg-gradient-to-br">
        <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <Fade
            direction={"up"}
            delay={400}
            cascade
            damping={1e-1}
            triggerOnce={true}
          >
            <div className="mb-12 space-y-2 text-center">
              <h2 className="text-3xl text-blue-900 font-extrabold md:text-4xl mb-8">
                Somos Refugiados Sin Fronteras
              </h2>
              <span className="m-8 text-xl md:text-2xl text-justify block">
                Somos Refugiados Sin Fronteras la primera asociación civil
                creada por refugiados venezolanos en defensa de los Derechos
                Humanos de refugiados, migrantes y desplazados. Nacemos en
                España en mayo del 2019 con el propósito de ayudar a mitigar los
                aspectos negativos de la masiva generada por violaciones de
                DDHH, con un criterio técnico y social
              </span>
            </div>
          </Fade>

          <Fade
            direction={"up"}
            delay={400}
            cascade
            damping={1e-1}
            triggerOnce={true}
          >
            <div className="grid gap-12">
              {dataVisionMision.map(data => (

              <div key={data.title} className="p-1 rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
                <img
                  src={data.imgSrc}
                  alt={data.title}
                  loading="lazy"
                  width="50"
                  height="50"
                  className="ml-28h-56 w-full object-cover object-top rounded-lg transition duration-500 group-hover:rounded-xl h-1/3 w-1/3 sm:ml-9 lg:h-1/2 lg:w-2/5 xl:h-full xl:w-3/12"
                />
                <div className="sm:w-7/12 pl-0 p-5">
                  <div className="space-y-2">
                    <div className="space-y-4">
                      <h4 className="text-4xl font-semibold text-cyan-900 ml-4">
                        {data.title}
                      </h4>
                      <p className="text-gray-600 text-lg text-justify ml-5">
                        {data.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              ))}
            </div>
          </Fade>
        </div>
      </div>
      <Team dataTeam={team} />
    </>
  );
};

export default OurTeamPage;
