import Navbar from "./components/Navbar";
import NavLink from './components/NavLink'
import Hero from "./components/Hero"
import Profiles from "./components/Profiles";
import Games from "./components/Games";
import Services from "./components/Services";
import Footer from "./components/Footer";
import IconButton from "./components/IconButton"

import assets from "./assets"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter, faInstagram, faDiscord, faYoutube } from "@fortawesome/free-brands-svg-icons";



const App = () => {
  return (
    <div>
      <Navbar imageLink={assets["logo-no-background"]}>
        <NavLink link={"#"}>Games</NavLink>
        <NavLink link={"#"}>Team</NavLink>
        <NavLink link={"#"}>Services</NavLink>
        <NavLink link={"#"}>About</NavLink>
        <NavLink link={"#"}>Contact</NavLink>
      </Navbar>

      <div className="main">
        <Hero></Hero>
        <Games></Games>
        <Profiles></Profiles>
        <Services></Services>
        <Footer logoLink={assets["logo-no-background"]}>
          <IconButton link="." icon_definition={faXTwitter}></IconButton>
          <IconButton link="." icon_definition={faInstagram}></IconButton>
          <IconButton link="https://discord.gg/DgFe8qdCYG" icon_definition={faDiscord}></IconButton>
          <IconButton link="https://www.youtube.com/@OlympusInteractive" icon_definition={faYoutube}></IconButton>
        </Footer>
      </div>

    </div>
  );
}

export default App;