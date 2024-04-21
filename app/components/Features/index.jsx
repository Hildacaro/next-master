"use client";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

const cardData = [
  {
    imgSrc: "/alimentos.jpg",
    heading: "Banco de Alimentos",
    subheading:
      "Desde la crisis del COVID-19, implementamos un plan de ayuda de emergencia y establecimos un Banco de Alimentos. Entre 2021 y 2022, distribuimos más de 260 toneladas de alimentos, beneficiando a 550 familias. En el 2023, hemos entregando mensualmente 32 toneladas a 800 familias refugiadas en situación de vulnerabilidad.",
    link: "Learn more",
  },
  {
    imgSrc: "/ropero.jpg",
    heading: "Ropero",
    subheading:
      "Con nuestro ropero solidario, impactamos positivamente en la vida de numerosos refugiados y migrantes. En 2021, entregamos más de 40,000 prendas, beneficiando a 700 familias. En el 2023, recibimos donaciones de más de 50,000 prendas nuevas y usadas, así como juguetes y artículos del hogar, generando un impacto sostenible en la comunidad.",
    link: "Learn more",
  },
  {
    imgSrc: "/talleres.jpg",
    heading: "Talleres",
    subheading:
      "¡Empoderamos a través de la capacitación! Con talleres y planes de formación en oficios, facilitamos la rápida inserción laboral de refugiados y migrantes. Transformamos vidas brindando oportunidades con habilidades prácticas. ¡Únete a nuestro impulso hacia un futuro laboral sólido!",
    link: "Learn more",
  },
  {
    imgSrc: "/sociocultural.jpg",
    heading: "Integración Sociocultural",
    subheading:
      "Desarrollamos planes de formación en oficios que permitan a refugiados y migrantes una rápida inserción laboral. Fomentamos la integración cultural mediante actividades musicales y gastronómicas de manera constante. Para marzo del 2023 hemos realizado 45 conciertos con músicos refugiados y formado a más de 500 refugiados en panadería.",
    link: "Learn more",
  },

  {
    imgSrc: "/asesoria.jpg",
    heading: "Asesoria Psicólogica",
    subheading:
      "¡Cuidamos de la salud mental! Ofrecemos asesoría psicológica tanto para nuestra fundación como para migrantes durante su proceso de adaptación. Brindamos un apoyo integral, asegurando que cada paso en su nueva vida esté respaldado emocionalmente. Juntos, construimos un camino de bienestar y resiliencia.",
    link: "Learn more",
  },
  {
    imgSrc: "/derecho.jpg",
    heading: "Derechos Humanos",
    subheading:
      "Damos asesoría legal gratuita a víctimas de violación  de  DDHH,  solicitantes  de  asilo  y migrantes.Luchamos  en  contra  de  la  apatridia en niños nacidos en España sin nacionalidad.Damos apoyo psicológico y social a víctimas de conflictos y crisis humanitarias. Trabajamos con el ACNUR dinamizando la red deorganizaciones lideradas por refugiados ",
    link: "Learn more",
  },
];

const Features = () => {
  return (
    <section className="flex justify-center">
      <div className="container">
        <Fade
          direction={"up"}
          delay={400}
          cascade
          damping={1e-1}
          triggerOnce={true}
        >
          <div className="flex flex-wrap -mx-4 mt-8">
            <div className="w-full px-4">
              <div className="text-center mx-auto  max-w-[510px]">
                <h2 className="text-3xl sm:text-4xl md:text-[50px] text-blue-900 font-extrabold">
                  Te Apoyamos!
                </h2>
                <p className="text-lg text-body-color font-extrabold">
                  Conoce algunos de nuestros proyectos
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap p-10">
            {cardData.map((items, i) => (
              <div key={i} className="w-full md:w-1/2 lg:w-1/3 px-4">
                <div className="border border-blue-900 border-1 p-1 md:px-7 xl:px-10 rounded-[20px] bg-white hover:shadow-lg mb-8 h-[406px]">
                  <div className="w-full h-40 flex items-center justify-center bg-primary rounded-full md:mb-6">
                    <Image
                      className="img-feature"
                      src={items.imgSrc}
                      alt="icon"
                      width={100}
                      height={100}
                    />
                  </div>
                  <h4 className="font-extrabold text-xl text-blue-900 p-1 ">
                    {items.heading}
                  </h4>
                  <p className="text-body-color text-sm font-bold">
                    {items.subheading}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default Features;
