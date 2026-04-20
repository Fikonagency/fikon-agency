import Portfolio from '@/components/Portfolio';
import ContactCTA from '@/components/ContactCTA';

export const metadata = {
  title: 'Portfolio · Fikon Agency',
  description:
    'Ett urval av våra arbeten. Flawlessface Clinic, Sigma Connectivity, Currylicious och fler.'
};

export default function PortfolioPage() {
  return (
    <>
      <Portfolio />
      <ContactCTA />
    </>
  );
}
