"use client";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

const cardData = [
  {
    imgSrc: "/psicologica.jpg",
    heading: "Banco de Alimentos",
    subheading:
      "Desde la crisis del covid, implementamos un plan de ayuda de emergencia convirtiéndonos en un Banco de Alimentos. Entre 2021 y 2022, entregamos más de 260 toneladas beneficiando a 550 familias; a partir de 2023, distribuimos mensualmente 32 toneladas a 800 familias refugiadas en situación de vulnerabilidad.",
    link: "Learn more",
  },
  {
    imgSrc: "/ropero.png",
    heading: "Ropero",
    subheading:
      "¡Transformamos vidas a través de la moda solidaria! Con nuestro ropero para refugiados y migrantes, entregamos más de 40,000 prendas en 2021, beneficiando a 700 familias. Ya en 2023, hemos gestionado donaciones de más de 50,000 prendas nuevas, usadas, juguetes y artículos del hogar, marcando un impacto sostenible en la comunidad.",
    link: "Learn more",
  },
  {
    imgSrc: "/talleres.png",
    heading: "Talleres",
    subheading:
      "¡Empoderamos a través de la capacitación! Con talleres y planes de formación en oficios, facilitamos la rápida inserción laboral de refugiados y migrantes. Transformamos vidas brindando oportunidades con habilidades prácticas. ¡Únete a nuestro impulso hacia un futuro laboral sólido!",
    link: "Learn more",
  },
  {
    imgSrc: "/integracion.png",
    heading: "Integración Sociocultural",
    subheading:
      "¡Cultura que une corazones! Hemos realizado 45 vibrantes conciertos con músicos refugiados y capacitado a más de 500 en panadería para fomentar la integración. En marzo de 2023, seguimos transformando vidas a través de experiencias musicales y gastronómicas. Únete a nuestra misión de construir puentes a través del arte y la cocina.",
    link: "Learn more",
  },

  {
    imgSrc: "/psicologica.jpg",
    heading: "Asesoria Psicólogica",
    subheading:
      "¡Cuidamos de la salud mental! Ofrecemos asesoría psicológica tanto para nuestra fundación como para migrantes durante su proceso de adaptación. Brindamos un apoyo integral, asegurando que cada paso en su nueva vida esté respaldado emocionalmente. Juntos, construimos un camino de bienestar y resiliencia.",
    link: "Learn more",
  },
  {
    imgSrc: "/images/Features/featureFour.svg",
    heading: "Derechos Humanos",
    subheading:
      "¡Defendemos derechos esenciales! Ofrecemos asesoría legal gratuita a víctimas de violación de DDHH y apoyamos a solicitantes de asilo. Combatimos la apatridia en niños nacidos en España y brindamos apoyo psicológico a víctimas de conflictos en colaboración con el ACNUR.",
    link: "Learn more",
  },
];

const Features = () => {
  return (
    <section className="flex justify-center lg:pt-[120px] pb-12 lg:pb-[90px]">
      <div className="container">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            <div className="text-center mx-auto mb-12 lg:mb-20 max-w-[510px]">
              <Fade
                direction={"up"}
                delay={400}
                cascade
                damping={1e-1}
                triggerOnce={true}
              >
                <h2 className="font-bold text-3xl sm:text-4xl md:text-[40px] text-dark mb-4">
                  Te Apoyamos!
                </h2>
                <p className="text-base text-body-color">
                  Conoce algunas de nuestras proyectos
                </p>
              </Fade>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap p-10">
          {cardData.map((items, i) => (
            <div key={i} className="w-full md:w-1/2 lg:w-1/3 px-4">
              <div className="border p-1 md:px-7 xl:px-10 rounded-[20px] bg-white hover:shadow-lg mb-8">
                <div className="w-[100px] h-[100px] flex items-center justify-center bg-primary rounded-2xl mb-8">
                  {/* <svg
                                width="32"
                                height="32"
                                viewBox="0 0 32 32"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <path
                                    d="M18.6746 0.26779C10.0637 -1.33065 1.86522 4.39279 0.266779 13.0037C-0.506658 17.1803 0.421467 21.3568 2.79334 24.8631C5.21678 28.3693 8.82615 30.6897 12.9512 31.4631C13.9308 31.6178 14.859 31.7209 15.7871 31.7209C23.2637 31.7209 29.9668 26.3584 31.359 18.6756C32.9574 10.0647 27.234 1.81466 18.6746 0.26779ZM29.6574 18.3662C29.5543 18.8819 29.4512 19.449 29.2965 19.9131L16.7668 15.2209V1.81466C17.2824 1.86623 17.8496 1.91779 18.3652 2.02091C25.9449 3.4131 30.998 10.735 29.6574 18.3662ZM14.9105 1.81466V14.9115H1.86522C1.91678 14.3959 1.96834 13.8287 2.07147 13.3131C3.20584 6.86779 8.67147 2.22716 14.9105 1.81466ZM13.3121 29.6584C9.65115 28.9881 6.45428 26.9256 4.28865 23.8318C2.79334 21.7178 1.96834 19.2428 1.81365 16.7678H15.6324L28.5746 21.6147C26.048 27.3381 19.7574 30.8443 13.3121 29.6584Z"
                                    fill="white"
                                    />
                            </svg> */}
														<Image src={items.imgSrc} alt="icon" width={100} height={100} />
                </div>
                <h4 className="font-semibold text-xl text-dark mb-3">
                  {items.heading}
                </h4>
                <p className="text-body-color">{items.subheading}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
