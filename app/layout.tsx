import type { Metadata, Viewport } from 'next';
import { fraunces, poppins } from './fonts';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'Fikon Agency — Reklambyrå i Malmö',
  description:
    'Reklambyrå i Malmö. Film, foto och identitet för varumärken som vill synas utan att skrika.',
  metadataBase: new URL('https://fikonagency.se'),
  openGraph: {
    title: 'Fikon Agency — Reklambyrå i Malmö',
    description:
      'Film, foto och identitet för varumärken som vill synas utan att skrika.',
    type: 'website',
    locale: 'sv_SE',
    url: 'https://fikonagency.se',
    siteName: 'Fikon Agency',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Fikon Agency' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fikon Agency — Reklambyrå i Malmö',
    description:
      'Film, foto och identitet för varumärken som vill synas utan att skrika.',
    images: ['/og.png']
  }
};

export const viewport: Viewport = {
  themeColor: '#F0E0CC'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sv" className={`${fraunces.variable} ${poppins.variable}`}>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
