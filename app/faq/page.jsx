"use client";
import { useEffect, useState } from "react";
import { fetchFAQs } from "../lib/data";
import Acordion from "../components/acordion";

const FAQ = () => {
  const [dataFAQ, setDataFAQ] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchFAQs();
        setDataFAQ(data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Acordion dataFAQ={dataFAQ} />
    </div>
  );
}

export default FAQ;