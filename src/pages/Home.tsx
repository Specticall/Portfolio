import React from "react";
import About from "../components/home/About";
import ContactMe from "../components/home/ContactMe";
import Footer from "../components/home/Footer";
import Hero from "../components/home/Hero";
import RecentWork from "../components/home/RecentWork";

import { ReactLenis, useLenis } from "@studio-freight/react-lenis";

export default function Home() {
  return (
    <ReactLenis root>
      <main className="bg-bg [&>section]:relative [&>section]:z-10 min-h-screen relative overflow-x-hidden">
        <Hero />
        <About />
        <RecentWork />
        <ContactMe />
        <Footer />
      </main>
    </ReactLenis>
  );
}
