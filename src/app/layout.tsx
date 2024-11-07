import ReactQueryProvider from '@/lib/ReactQueryProviders';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`),
  verification: {
    google: 'b0J4NqD2m6Y_-S1QAAOFGeQ_vZ2IEQl3PUt9tDfUUK8',
  },
  title: {
    default: 'AnyMe | All About Anime',
    template: '%s | AnyMe',
  },
  description:
    'AnyMe is your go-to anime hub, where you can explore, discover, and track your favorite shows effortlessly. Find the best recommendations and explore new anime by genre, popularity, or trends.',
  keywords: ['anime', 'anyme'],
  openGraph: {
    title: 'AnyMe | All About Anime',
    description:
      'AnyMe is your go-to anime hub, where you can explore, discover, and track your favorite shows effortlessly. Find the best recommendations and explore new anime by genre, popularity, or trends.',
    images: '/opengraph-image.jpg',
    type: 'website',
    siteName: 'Anyme',
    locale: 'id_ID',
    url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${montserrat.className}`}>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}
