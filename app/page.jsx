"use client";
import "./globals.css";
import Banner from "./components/Banner/index";
import Features from "./components/Features/index";
import Gallery from "./components/Gallery/index";
import Map from "./components/Map/index";
import CardInfo from "./components/Cards/index";
import Counter from "./components/Counter";
import { Fade } from "react-awesome-reveal";
import Conference from "./components/Conference";

export default function Home() {
  return (
    <main>
      <Banner />
      <Fade direction={"up"} delay={200} cascade triggerOnce={true}>
        <CardInfo />
      </Fade>
      <Features />
      <Counter finalValue={1000000} />
      <Fade direction={"up"} delay={200} cascade triggerOnce={true}>
        <Conference />
      </Fade>
      <Gallery />
      <Map />
    </main>
  );
}
