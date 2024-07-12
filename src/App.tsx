import Navbar from "./components/Navbar";
import NavLink from './components/NavLink'
import Hero from "./components/Hero"
import Profiles from "./components/Profiles";
import Games from "./components/Games";
import Panel from "./components/Panel";
import Footer from "./components/Footer";
import assets from "./assets"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";



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
        <Footer logoLink={assets["logo-no-background"]}>
          <FontAwesomeIcon icon={"fa-brands fa-x-twitter" as IconProp} />

        </Footer>
      </div>

    </div>
  );
}

export default App;