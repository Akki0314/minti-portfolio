// app/layout.tsx

import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-playfair',
});

const lato = Lato({
  subsets: ["latin"],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-lato',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/logo.png" />
        <title>Minti Creations</title>
      </head>
      <body className={`${playfair.variable} ${lato.variable}`}>
        {children}
      </body>
    </html>
  );
}
