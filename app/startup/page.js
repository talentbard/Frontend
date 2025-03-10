
import Footer from "../components/Footer";
import HowWeDoIt from "../components/HowWeDoIt";
import Navbar from "../components/Navbar";
import StartupHiring from "./StartUpHiring";
import Hero from "./Hero";
import FreelanceExperience from "./FreelancingExperience";
import Simplified from "./Simplified";
import TalentBardHiring from "./TalentBardHiring";
import ITTalentAttraction from "./ITTalentAttraction";

export default function Page() {
  return (
    <div>
      <Navbar/>
      <div className="pt-[64px]">  
        <Hero></Hero>
        <FreelanceExperience></FreelanceExperience>
        <Simplified></Simplified>
        <TalentBardHiring></TalentBardHiring>
        <ITTalentAttraction></ITTalentAttraction>
       
    </div>
    <Footer/>
    </div>
     
   
  );
}
