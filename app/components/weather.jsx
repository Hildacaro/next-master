import React, { useEffect, useState } from "react";
import Icons from "./icons";
import { getWeatherData } from "../lib/data";
import Image from "next/image";

export default function Weather() {
  const [values, setValues] = useState("");
  const [icon, setIcon] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getWeatherData();
        if (data.cod > 400) {
          setValues(data.message);
        } else {
          setValues(data);
          setIcon(data.weather[0].main);
        }
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {values ? (
        <div className="card-weather">
          <div className="card-container-weather">
            <h1 className="city-name">{values.name}</h1>
            <p className="temp-weather" style={{ color: "white" }}>
              {Math.round(values.main.temp)}°C
            </p>
            <Image
              className="icon-weather"
              src={Icons(icon)}
              alt="weather icon"
              width={50}
              height={50}
            />
          </div>
        </div>
      ) : (
        <span className="loader"></span>
      )}
    </>
  );
}
