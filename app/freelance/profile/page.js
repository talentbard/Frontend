import About from "./about/Abouttalent";
import Education from "./education/education"
import Certificate from "./certificate/certificate"
import Skills from "./skills_and_launguage/skill"
import Project from "./project/project"
import Footer from "./footer/footer"

export default function Page() {
  return (
    <div>
      <About />
      <Education/>
      {/* <Certificate></Certificate> */}
      <Skills></Skills>
      <Project></Project>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
      <Footer></Footer>
    </div>
  );
}
