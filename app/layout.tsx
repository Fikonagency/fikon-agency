import type { Metadata, Viewport } from 'next';
import { fraunces, poppins } from './fonts';
import './globals.css';

export const metadata: Metadata = {
  title: 'Fikon Agency',
  description: 'Film, foto och identitet. Malmö.',
  metadataBase: new URL('https://fikonagency.se'),
  openGraph: {
    title: 'Fikon Agency',
    description: 'Film, foto och identitet. Malmö.',
    type: 'website',
    locale: 'sv_SE',
    url: 'https://fikonagency.se',
    siteName: 'Fikon Agency'
  }
};

export const viewport: Viewport = {
  themeColor: '#1E0A12'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sv" className={`${fraunces.variable} ${poppins.variable}`}>
      <body>{children}</body>
    </html>
  );
}
