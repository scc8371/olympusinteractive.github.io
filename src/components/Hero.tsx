import "../styles/Hero.css"
import assets from "../assets"
import IconButton from './IconButton'
import { faXTwitter, faInstagram, faDiscord, faYoutube } from "@fortawesome/free-brands-svg-icons";


const Hero = () => {
    return (
        <div className="hero">
            <>
                <div className="hero-text">
                    <img src={assets['logo-no-background']} id="c-logo"></img>
                    <h2>An Indie Studio Founded by RIT Graduates</h2>
                    <div className="footer-logos">
                        <IconButton link="." icon_definition={faXTwitter}></IconButton>
                        <IconButton link="." icon_definition={faInstagram}></IconButton>
                        <IconButton link="https://discord.gg/DgFe8qdCYG" icon_definition={faDiscord}></IconButton>
                        <IconButton link="https://www.youtube.com/@OlympusInteractive" icon_definition={faYoutube}></IconButton>
                    </div>
                </div>

                <img id="pantheon" src={assets["logo-pantheon"]}></img>
            </>
        </div>
    )
}

export default Hero