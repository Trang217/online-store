import Container from '@/components/global/Container';
import NavBar from '@/components/navbar/NavBar';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Providers from './providers';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Online Store',
  description: 'A nifty store built with Next.js',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning >
      <body className={inter.className}>
        <Providers>
          <NavBar />
          <Container className="py-20">{children}</Container>
        </Providers>
      </body>
    </html>
  );
}
