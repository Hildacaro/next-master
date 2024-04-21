"use client";
import { Fade } from "react-awesome-reveal";
import Carosel from "../carosel";

const Gallery = () => {
  return (
    <div id="gallery-section">
      <div className="mx-auto max-w-2xl lg:max-w-7xl sm:py-4">
        <div className="text-center">
          <Fade
            direction={"up"}
            delay={400}
            cascade
            damping={1e-1}
            triggerOnce={true}
          >
            <h2 className="text-pink text-lg font-normal mb-3 tracking-widest uppercase ls-51">
              Nuestra Sede
            </h2>
          </Fade>
          <Fade
            direction={"up"}
            delay={800}
            cascade
            damping={1e-1}
            triggerOnce={true}
          >
            <h3 className="text-3xl lg:text-5xl font-semibold text-blue-900">
              Momentos memorables
            </h3>
          </Fade>
        </div>
        <Carosel />
      </div>
    </div>
  );
};

export default Gallery;
