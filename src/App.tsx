import "./pop.css";

import ScrollBat from "./sections/ScrollBat";
import TopBar from "./sections/TopBar";
import Hero from "./sections/Hero";
import Marquee from "./sections/Marquee";
import About from "./sections/About";
import Tracks from "./sections/Tracks";
import Schedule from "./sections/Schedule";
import Register from "./sections/Register";
import Faq from "./sections/Faq";
import Footer from "./sections/Footer";

export default function App() {
  return (
    <div className="pop-root">
      <ScrollBat />
      <TopBar />
      <main id="main" tabIndex={-1}>
        <Hero />
        <Marquee />
        <About />
        <Tracks />
        <Schedule />
        <Register />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
