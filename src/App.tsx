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

          <h1>OUR THUNDER</h1>

          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita distinctio ad corporis, beatae molestiae nobis nulla officiis assumenda, sint quod culpa ex aliquam non minima nemo! Distinctio, corrupti? In enim culpa, quod hic aspernatur nobis excepturi deleniti, voluptas cumque voluptate autem eos blanditiis omnis illo mollitia et sunt, accusantium dicta. Sint praesentium dolores non dicta similique iste ducimus qui, repellendus voluptate aliquid officia inventore id quam tenetur facilis. Nulla quas reiciendis cumque ut, iure culpa amet mollitia a nam veniam, accusantium distinctio laborum delectus sequi illo laboriosam maiores magnam nesciunt quidem dolorum eaque repudiandae minus hic! Cumque voluptatem natus nesciunt.
        </AboutUs>
        <ContactUs></ContactUs>
        <Footer logoLink={assets["logo-no-background"]}></Footer>
      </div>

    </div>
  );
}

export default App;