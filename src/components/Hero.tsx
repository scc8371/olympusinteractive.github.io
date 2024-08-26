import "../styles/Hero.css"
import assets from "../assets.ts"
import IconList from "./IconList.tsx"
import data from "../data.ts"

const Hero = () => {
    return (
        <div className="hero">
            <>
                <div className="hero-text">
                    <img src={assets['logo-no-background']} id="c-logo"></img>
                    <h2>An Indie Studio Founded by RIT Graduates</h2>
                    <IconList icons={data.socialIcons}></IconList>
                </div>

                <img id="pantheon" src={assets["logo-pantheon"]}></img>
            </>
        </div>
    )
}

export default Hero