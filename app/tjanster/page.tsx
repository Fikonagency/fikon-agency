import ContactCTA from '@/components/ContactCTA';
import ServicesPage from '@/components/ServicesPage';

export const metadata = {
  title: 'Tjänster · Fikon Agency',
  description:
    'Strategi, identitet, film, foto och digital närvaro för mellanstora B2B-varumärken som vill modernisera.'
};

export default function TjansterPage() {
  return (
    <>
      <ServicesPage />
      <ContactCTA />
    </>
  );
}
