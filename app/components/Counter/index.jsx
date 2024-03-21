"use client";
import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

const Counter = () => {
  const [counting, setCounting] = useState(false);
  const { ref, inView } = useInView();

  useEffect(() => {
    let timeoutId;
    if (inView && !counting) {
      // Agregar un pequeño retraso antes de comenzar el conteo
      timeoutId = setTimeout(() => {
        setCounting(true);
      }, 500); // 500 milisegundos de retraso
    }

    return () => clearTimeout(timeoutId); // Limpiar el timeout si el componente se desmonta antes de que se ejecute
  }, [inView, counting]);

  const { number } = useSpring({
    number: counting ? 1000000 : 0,
    from: { number: 0 },
    config: { duration: 2000 },
  });

  return (
    <div
      className="relative flex flex-col items-center justify-center min-h-screen text-gray-700"
      style={{ height: "50vh" }}
    >
      <div className="absolute inset-0 style={{ height: '50vh' }}">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url(kg.jpg)",
            backgroundSize: "cover",
            opacity: 0.3,
          }}
        ></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div
            ref={ref}
            style={{
              textAlign: "center",
              fontSize: "5rem",
              fontWeight: "bold",
              fontFamily: "Montserrat",
              zIndex: 10,
            }}
          >
            <p className="text-blue-900 font-extrabold">
              Hemos Repartido más de
            </p>
            <animated.span>{number.to((val) => Math.floor(val))}</animated.span>
            <p style={{ color: "#105295" }}>Kg de Alimentos</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
