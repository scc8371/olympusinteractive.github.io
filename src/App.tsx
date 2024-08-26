import Navbar from "./components/Navbar";
import NavLink from './components/NavLink'
import Hero from "./components/Hero"
import Profiles from "./components/Profiles";
import Games from "./components/Games";
import Services from "./components/Services";
import AboutUs from "./components/AboutUs"
import ContactUs from "./components/ContactUs"
import Footer from "./components/Footer";

import assets from "./assets"



const App = () => {
  return (
    <div>
      <Navbar imageLink={assets["logo-no-background"]}>
        <NavLink link={"#games-section"}>Games</NavLink>
        <NavLink link={"#profiles-section"}>Team</NavLink>
        <NavLink link={"#services-wrapper"}>Services</NavLink>
        <NavLink link={"#about-us-section"}>About</NavLink>
        <NavLink link={"#contact-us-section"}>Contact</NavLink>
      </Navbar>

      <div className="main">
        <Hero></Hero>
        <Games></Games>
        <Profiles></Profiles>
        <Services></Services>



        <AboutUs imgLink={assets["team-image"]}>
          We are a small group of individuals located around the United States. We met as a group at the Rochester Institute of Technology, where we discovered our shared passion for game development and honed our collaborative skills together. Our diverse backgrounds allowed us to work together with ease, creating innovative and top notch projects. <br></br><br></br>Our largest project is Ninjas on Trampolines, which has been funded through the MAGIC Maker Program at RIT. We have several other projects, all of which have been in development for a few days to a few months.<br></br><br></br>
          <hr></hr>

          Further developing our skills and knowledge will always be a goal we strive for. We want to make games that advance our skills and, at their core, be for the players. We are looking to provide assistance to projects that align with our goals and have a proven record of success working as a team in fast-paced enviroments. As such, we are not afraid of challenges given to us or stepping out of our comfort zones.
          <br></br><br></br>
          Our dream is to officially open a studio where we can turn our efforts into a career. We have worked hard to get to this point and will continue to do so into the far future.

        </AboutUs>
        <ContactUs></ContactUs>
        <Footer logoLink={assets["logo-no-background"]}></Footer>
      </div>

    </div>
  );
}

export default App;