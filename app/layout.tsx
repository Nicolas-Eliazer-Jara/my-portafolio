import '../styles/globals.css';
import Nav from './components/nav';
import Footer from './components/footer';
import "./i18n"; 
import { ThemeProvider } from 'next-themes';
import { Merriweather_Sans } from "next/font/google";

const merriweatherSans = Merriweather_Sans({
  subsets: ["latin"],
  variable: "--font-merriweather-sans",
});
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});



export const metadata = {
  title: 'Nicolas Eliazer Jara',
  description: 'Portafolio Nicolas Eliazer Jara',
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${merriweatherSans.variable} ${inter.variable}`}>
    <body className=" text-[#030503]">
      <ThemeProvider enableSystem={true} defaultTheme="system">
        <Nav  />
        {children}
        <Footer />
      </ThemeProvider>
    </body>
  </html>
  );
}
