import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import WhyUs from '../components/sections/WhyUs';
import Services from '../components/sections/Services';
import Process from '../components/sections/Process';
import Impact from '../components/sections/Impact';
import Partners from '../components/sections/Partners';
import Gallery from '../components/sections/Gallery';
import CTA from '../components/sections/CTA';
import Contact from '../components/sections/Contact';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhyUs />
        <Services />
        <Process />
        <Impact />
        <Partners />
        <Gallery />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
