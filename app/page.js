import Navbar from "./components/Navbar";
import About from "./components/About";
import Partner from "./components/Partner";
import Offers from "./components/Offers";
import Founders from "./components/Founders";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="pt-[64px]">  
        <About />
        <Partner />
        <Offers />
        <Founders />
        
       
        <Footer />
      </div>
    </div>
  );
}
