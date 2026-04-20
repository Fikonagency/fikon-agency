import type { Metadata, Viewport } from 'next';
import { poppins } from './fonts';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'Fikon Agency · Reklambyrå i Malmö',
  description:
    'Mjuka berättelser för starka varumärken. Reklambyrå i Malmö för film, foto, identitet och digital närvaro.',
  metadataBase: new URL('https://fikonagency.se'),
  openGraph: {
    title: 'Fikon Agency · Reklambyrå i Malmö',
    description:
      'Mjuka berättelser för starka varumärken. Film, foto och identitet från Malmö.',
    type: 'website',
    locale: 'sv_SE',
    url: 'https://fikonagency.se',
    siteName: 'Fikon Agency',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Fikon Agency' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fikon Agency · Reklambyrå i Malmö',
    description:
      'Mjuka berättelser för starka varumärken. Film, foto och identitet från Malmö.',
    images: ['/og.png']
  }
};

export const viewport: Viewport = {
  themeColor: '#F5F1E8'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sv" className={poppins.variable}>
      <body>
        <a
          href="#main"
          className="sr-only focus-visible:not-sr-only focus-visible:fixed focus-visible:top-4 focus-visible:left-4 focus-visible:z-[100] focus-visible:bg-plommon focus-visible:text-cream focus-visible:px-4 focus-visible:py-2 focus-visible:font-medium"
        >
          Hoppa till innehåll
        </a>
        <Nav />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
