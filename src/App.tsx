import Navbar from "./components/Navbar";
import NavLink from './components/NavLink'
import Hero from "./components/Hero"
import assets from "./assets"



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

      <Hero></Hero>
    </div>
  ); 
}

export default App;