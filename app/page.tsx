import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import Services from '@/components/Services';
import FeaturedWork from '@/components/FeaturedWork';
import PhotoStrip from '@/components/PhotoStrip';
import ContactCTA from '@/components/ContactCTA';
import { photos } from '@/lib/data';

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Services />
      <FeaturedWork />
      <PhotoStrip photos={photos} />
      <ContactCTA />
    </>
  );
}
