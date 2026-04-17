import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Manifest from '@/components/Manifest';
import Portfolio from '@/components/Portfolio';
import About from '@/components/About';
import Clients from '@/components/Clients';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Manifest />
        <Portfolio />
        <About />
        <Clients />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
