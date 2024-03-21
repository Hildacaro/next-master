const dataInfo = [
  {
    title: "¿Quíenes somos?",
    description:
      "Somos una Asociación Civil en defensa de los Derechos Humanos de Refugiados, Migrantes y Desplazados. Brindamos ayuda humanitaria e integramos.",
  },
  {
    title: "¿Qué hacemos?",
    description:
      "Promovemos los Derechos Humanos, generamos conciencia ciudadana y brindamos apoyo social a familias vulnerables. Gestionamos ayuda humanitaria para migrantes y personas refugiadas, tanto en zonas de conflicto como en España. Nuestras actividades incluyen proyectos socio-culturales para la integración de refugiados, asilados y migrantes, destacando nuestro compromiso constante con la defensa de la dignidad y los valores fundamentales.",
  },
  {
    title: "¿Cómo ayudamos?",
    description:
      "Brindamos asesoría de forma gratuita en materia de Derechos Humanos así como para los venezolanos que hayan solicitado Protección Internacional, refugiados y desplazados.",
  },
];

const CardInfo = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-10 text-gray-700md:p-20">
      <div className="flex flex-wrap items-center justify-center w-full max-w-7xl mt-8">
        {dataInfo.map((data, index) =>
          index % 2 === 0 ? (
            <div
              key={index}
              className="flex flex-col flex-grow mt-8 overflow-hidden bg-white rounded-lg shadow-lg lg:w-2/6"
            >
              <div
                className="flex flex-col items-center p-10 bg-gray-200"
                style={{ backgroundColor: "#1A94F3" }}
              >
                <div className="flex items-center text-center">
                  <span className="text-3xl font-bold">{data.title}</span>
                </div>
              </div>
              <div className="flex items-center justify-center p-10 text-center">
                <p className="text-sm font-bold"> {data.description} </p>
              </div>
            </div>
          ) : (
            <div
              key={index}
              className="z-10 flex flex-col flex-grow mt-8 overflow-hidden transform bg-white rounded-lg shadow-lg md:scale-110 lg:w-2/6"
            >
              <div
                className="flex flex-col items-center p-10 bg-gray-200"
                style={{ backgroundColor: "#42CCB8" }}
              >
                <div className="flex items-center">
                  <span className="text-3xl font-bold">{data.title}</span>
                </div>
              </div>
              <div className="flex items-center justify-center p-10 text-center">
                <p className="text-sm font-bold "> {data.description} </p>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default CardInfo;
