import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import VideoGrid from '@/components/VideoGrid';
import FeaturedWork from '@/components/FeaturedWork';
import ContactCTA from '@/components/ContactCTA';

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <VideoGrid />
      <FeaturedWork />
      <ContactCTA />
    </>
  );
}
