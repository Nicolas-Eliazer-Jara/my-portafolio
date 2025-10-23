import '../styles/globals.css';
import Nav from './components/nav';
import Footer from './components/footer';
import "./i18n"; 
import { ThemeProvider } from 'next-themes';
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
    <html
      lang="en"
      suppressHydrationWarning
      className={`${merriweatherSans.variable} ${inter.variable}`}
    >
      <body className="text-[#030503]">
        <ThemeProvider attribute="class" enableSystem defaultTheme="system">
          <Nav />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
