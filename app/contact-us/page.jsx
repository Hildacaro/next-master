const ComponentContact = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div
        className="w-1/4 h-auto"
        style={{
          backgroundImage: "url('/Blue-circles.jpg')",
          backgroundSize: "cover",
          borderRadius: "20px",
        }}
      >
        <div className="flex justify-between items-center p-8">
          <h1 className="text-2xl mb-4">
            BANCO DE <br />
            <strong>ALIMENTOS</strong>
            <br />
            INSCRIPCIÓN
          </h1>
          <img
            src="/logo1.svg"
            alt="Logo"
            className="h-36 w-36 flex-shrink-0"
          />
        </div>
        <div className="text-black text-center p-8">
          <p>
            Solo escribir por Whatsapp de lunes a viernes al número 602492982
          </p>
          <p>la siguiente información:</p>
          <p>Nombres y apellidos completos</p>
          <p>Número de identificación (DNI, NIE o Pasaporte)</p>
          <p>Correo electrónico</p>
          <br />
          <p>
            Deben esperar la respuesta y ser citados para llevar la
            documentación
          </p>
          <p>solicitada en original y copia de manera presencial</p>
          <br />
          <p>
            Solo respondemos mensajes por whatsapp de
            <br />
            lunes a viernes de 8:00 am a 10:00 pm
          </p>
          <br />
        </div>
        <div className="text-white bg-blue-950 text-center p-0">
          <p>
            @ongrefugiadossinfronteras <br /> Calle Matilde Landa 26, local A
          </p>
        </div>
      </div>
    </div>
  );
};

export default ComponentContact;
