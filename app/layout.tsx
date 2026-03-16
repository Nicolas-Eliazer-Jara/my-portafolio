import '../styles/globals.css';
import Nav from './components/nav';
import Footer from './components/footer';
import Providers from "./providers";
import { Merriweather_Sans, Inter } from "next/font/google";

const merriweatherSans = Merriweather_Sans({ subsets: ["latin"], variable: "--font-merriweather-sans" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: 'Nicolas Eliazer Jara',
  description: 'Portafolio Nicolas Eliazer Jara',
  icons: { icon: "/favicon.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${merriweatherSans.variable} ${inter.variable}`}>
      <body className="transition-colors duration-300">
        <Providers>
          <Nav />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}