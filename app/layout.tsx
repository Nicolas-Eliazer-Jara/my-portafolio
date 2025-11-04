import '../styles/globals.css';
import Nav from './components/nav';
import Footer from './components/footer';
import "./i18n";
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
        <Nav />
        <div className="absolute top-4 right-4">

        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
