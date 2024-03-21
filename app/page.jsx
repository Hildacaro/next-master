"use client";
import "./globals.css";
import Banner from "./components/Banner/index";
import Features from "./components/Features/index";
import Gallery from "./components/Gallery/index";
import Map from "./components/Map/index";
import CardInfo from "./components/Cards/index";
import Counter from "./components/Counter/index";
import { Fade } from "react-awesome-reveal";
import Info from "./components/info/index"; // Fix the casing of the import statement

export default function Home() {
  return (
    <main>
      <Banner />
      <Counter finalValue={1000000} />
      <Fade direction={"up"} delay={200} cascade triggerOnce={true}>
        <CardInfo />
      </Fade>
      <Features />
      <Fade direction={"up"} delay={200} cascade triggerOnce={true}>
        <Info />
      </Fade>
      <Gallery />
      <Map />
    </main>
  );
}
