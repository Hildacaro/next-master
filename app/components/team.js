const Team = ({ dataTeam }) => {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
      <div className="text-center pb-12">
        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-blue-900">
          Nuestro increíble equipo
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {dataTeam.map((member) => (
          <div
            className="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center"
            key={member.id}
          >
            <div>
              <img
                className="object-center object-cover h-auto w-full"
                src={member.photo}
                alt="photo"
              />
            </div>
            <div className="text-center py-8 sm:py-6">
              <p className="text-xl text-gray-700 font-bold mb-2">
                {member.name} {member.lastName}
              </p>
              <p className="text-base text-gray-500 font-normal">
                {member.position}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
