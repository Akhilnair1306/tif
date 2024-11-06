import Image from "next/image";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Footer from "./components/Footer";
import Articles from "./components/Articles";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Articles />
      <Footer />
    </div>
  );
}
