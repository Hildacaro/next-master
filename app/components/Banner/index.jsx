const Banner = () => {
  return (
    <>
      <div id="home-section" className="bg-lightpink">
        <div className="mx-auto max-w-9xl pt-1 px-6">
          <img
            src="/grupo.png"
            alt="central"
            className="mx-auto my-auto block bg-cover bg-center"
            style={{ maxWidth: "100%", height: "70%" }}
          />
        </div>
      </div>
      <div
        className="w-full h-36 relative"
        style={{ background: "linear-gradient(to right, #0B0E34, #0B0E34)" }}
      >
        <img
          src="/banco_de_alimentos_logo.png"
          alt="Logo"
          className="mx-auto my-auto block"
          style={{ maxWidth: "70%", maxHeight: "90%" }}
        />
      </div>
    </>
  );
};

export default Banner;