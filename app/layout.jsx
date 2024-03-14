
import { Montserrat } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/index';

const montserrat = Montserrat ({ subsets: ['latin'], weight: '400'})

export const metadata = {
  title: "Refugiados sin Fronteras",
  description: "Refugiados Sin Fronteras en Madrid",
};

export default function RootLayout({
  children
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  );
}
