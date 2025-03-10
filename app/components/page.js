import About from "./About";
import Offers from "./Offers";
import Partner from "./Partner";

export default function Page() {
  return (
    <div>
      <Navbar/>
      <div className="pt-[64px]">  
      <About></About>
      <Partner></Partner>
      <Offers></Offers>
      
    </div>
    </div>
     
   
  );
}
