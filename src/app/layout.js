import Footer from "@/component/Footer";
import Header from "@/component/Header";
import NavBar from "@/component/NavBar";
import SearchBox from "@/component/SearchBox";
import { Inter } from "next/font/google";
import Providers from "./Providers";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IMDB Clone",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
          <NavBar />
          <SearchBox />
          {children}
          <div id="bottom-trigger"></div> {/* Trigger for the footer */}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
