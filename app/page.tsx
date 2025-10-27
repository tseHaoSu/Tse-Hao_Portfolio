import Header from '@/app/sections/Header';
import Hero from '@/app/sections/Hero';
import Projects from '@/app/sections/Projects';
import Tape from '@/app/sections/Tape';
import Testimonials from '@/app/sections/Testimonials';
import About from '@/app/sections/About';
import Contact from '@/app/sections/Contact';

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Projects />
      <Tape />
      <Testimonials />
      <About />
      <Contact />
    </div>
  );
}
