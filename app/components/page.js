import About from "./About";
import Footer from "./Footer";
import Founders from "./Founders";
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
      <Founders></Founders>
      <Footer></Footer>
    </div>
    </div>
     
   
  );
}
