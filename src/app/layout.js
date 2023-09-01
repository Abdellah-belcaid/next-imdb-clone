import Footer from "@/component/Footer";
import Header from "@/component/Header";
import NavBar from "@/component/NavBar";
import SearchBox from "@/component/SearchBox";
import { Inter } from "next/font/google";
import Providers from "./Providers";

import "../styles/globals.css";
import Transition from "@/component/UI/Transition";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IMDb Clone",
  description: "a demo for an imdb clone app",
};

export default function RootLayout({ children }) {
  return (
    /*  add this to html or body tag "suppressHydrationWarning={true}" 
     if this error showed up : "Extra attributes from the server: data-new-gr-c-s-check-loaded" */
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
          <NavBar />
          <SearchBox />
          <Transition/>
          {children}
          <div id="bottom-trigger"></div> {/* Trigger for the footer */}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
