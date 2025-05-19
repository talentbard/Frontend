import FreelancePage from "./FreelancePage";
import Layout from "../layout"; // Import Layout
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "./Hero";
import Simplified from "./Simplified";
import Application from "./Application";
import { FreelancingStats, HiringStats } from "./FreelancingStats";


export default function Page() {
  return (
    <div>
      <Navbar/>
      <div className="pt-[64px]">  
        <Hero></Hero>
        
        <HiringStats/>
        <FreelancingStats/>
        <Simplified/>
      
        <Application></Application>
       <Footer/>
    </div>
    </div>
     
   
  );
}
