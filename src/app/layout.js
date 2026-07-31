import { Inter } from 'next/font/google';
import "./globals.css";
import SmoothScrollWrapper from '../components/SmoothScrollWrapper';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata = {
  title: "Gautam Singh Jadon — Full Stack Web Developer",
  description: "Portfolio of Gautam Singh Jadon, a Full Stack Web Developer with 2+ years experience building scalable React, Next.js, Node.js, NestJS microservices, and ERP integrations.",
  keywords: [
    "Gautam Singh Jadon",
    "Full Stack Developer",
    "React Developer",
    "Next.js Portfolio",
    "Node.js Microservices",
    "NestJS",
    "PostgreSQL",
    "Vadodara Developer"
  ],
  authors: [{ name: "Gautam Singh Jadon" }],
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' }
    ]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} dark`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="bg-[#030304] text-zinc-100 antialiased font-sans selection:bg-zinc-100 selection:text-zinc-950">
        <SmoothScrollWrapper>
          {children}
        </SmoothScrollWrapper>
      </body>
    </html>
  );
}
