import { Inter, Bodoni_Moda, Bruno_Ace_SC, Nunito_Sans } from "next/font/google";
import localFont from "next/font/local"
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

const bodoni_moda = Bodoni_Moda({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bodoni-moda",
});

const nunito_sans = Nunito_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito-sans",
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
  description:
    "Welcome to Jon Loyd T. Talagtag's professional portfolio. Explore my projects, skills, and experience in IT and web development. A recent graduate with a Bachelor's degree in Computer Engineering, I bring a strong foundation in technology and a passion for continuous learning and innovation.",
  openGraph: {
    title: "JLT Dev Portfolio",
    description:
      "Welcome to Jon Loyd T. Talagtag's professional portfolio. Explore my projects, skills, and experience in IT and web development. A recent graduate with a Bachelor's degree in Computer Engineering, I bring a strong foundation in technology and a passion for continuous learning and innovation.",
    images: [
      {
        url: "https://jltdevportfolio.vercel.app/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "JLT Dev Portfolio Thumbnail",
      },
    ],
    type: "website",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${bodoni_moda.variable} ${bruno_ace.variable} ${bisdak.variable} ${nunito_sans.variable} `}
      >
        {children}
      </body>
    </html>
  );
}
