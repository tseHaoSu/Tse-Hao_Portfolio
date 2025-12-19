import Header from "@/app/sections/Header";
import Hero from "@/app/sections/Hero";
import VideoIntro from "@/app/sections/VideoIntro";
import Projects from "@/app/sections/Projects";
import Tape from "@/app/sections/Tape";
import Testimonials from "@/app/sections/Testimonials";
import About from "@/app/sections/About";
import Contact from "@/app/sections/Contact";
import Footer from "@/app/sections/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <VideoIntro />
      <Projects />
      <Tape />
      <Testimonials />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
