const ComponentContact = () => {
  const whatsappNumber = "+34 123-4567";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <div className="flex items-center justify-center h-screen">
      <div
        className="h-auto"
        style={{
          backgroundImage: "url('/fondo-blue.jpg')",
          backgroundSize: "cover",
          borderRadius: "20px",
        }}
      >
        <div className="flex justify-between items-center p-8">
          <h1 className="text-2xl">
            BANCO DE <br />
            <strong>ALIMENTOS</strong>
            <br />
            INSCRIPCIÓN
          </h1>
          <img src="/asoc.png" alt="Logo" className="h-40 w-40 flex-shrink-0" />
        </div>
        <div className="text-black text-center p-4">
          <h1 className="text-xl mb-8">
            Procedimiento para darse de alta en el Banco de Alimentos de
            Refugiados Sin Fronteras
          </h1>
          <p></p>
          <p>
            Paso 1: Escribir por Whatsapp de lunes a viernes al número{" "}
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              +34 123-4567
            </a>{" "}
            la siguiente información:
          </p>

          <p>- Nombres y apellidos completos</p>
          <p>- Número de identificación (DNI, NIE o Pasaporte)</p>
          <p>- Correo electrónico</p>
          <br />
          <p>
            Paso2: Deben esperar la respuesta para ser citados y llevar la
            documentación los días viernes de 5:00 pm a 8:00 pm
          </p>
          <p>
            deberá asistir a nuestra sede ubicada en Matilde Lanasa, 26 donde
            les haremos formalmente el registro
          </p>
          <p></p>
          <br />
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
