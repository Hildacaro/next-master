import "./globals.css";
import Banner from "./components/Banner/index";
import Features from "./components/Attendance/index";
import Cook from "./components/Cook/index";
import Gallery from "./components/Gallery/index";
import Map from "./components/Map/index";
import CardInfo from "./components/Cards/index";

export default function Home() {
  return (
    <main>
      <Banner />
      <CardInfo/>
      <Features />
      <Cook />
      <Gallery />
      <Map />
    </main>
  );
}
