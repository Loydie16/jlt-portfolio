import { Inter, Bodoni_Moda, Bruno_Ace_SC } from "next/font/google";
import localFont from "next/font/local"
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

const bodoni_moda = Bodoni_Moda({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bodoni-moda",
});

const bisdak = localFont({
  src: "./assets/Bisdak.ttf",
  display: "swap",
  variable: "--font-bisdak",
});

const bruno_ace  = Bruno_Ace_SC({
  subsets: ["latin"],
  display: "swap",
  weight: ['400'],
  style: "normal",
  variable: "--font-bruno-ace",
});

export const metadata = {
  title: "JLT Dev Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${bodoni_moda.variable} ${bruno_ace.variable} ${bisdak.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
