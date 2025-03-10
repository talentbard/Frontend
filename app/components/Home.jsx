"use client"; // Required for client-side rendering

import Navbar from "./Navbar";
import About from "./About";
import Partner from "./Partner";
import Offers from "./Offers";
import Founders from "./Founders";
import FreelancePage from "./FreelancePage";
import StartupHiring from "./StartUpHiring";
import HowWeDoIt from "./HowWeDoIt";
import Footer from "./Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="pt-[64px]">  
        <About />
        <Partner />
        <Offers />
        <Founders />
        <FreelancePage />
      <StartupHiring />
    <HowWeDoIt />
        <Footer />
      </div>
    </div>
  );
}
