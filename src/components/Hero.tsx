import React from 'react'
import "../styles/Hero.css"
import assets from "../assets"
import Button from "../components/Button"

const Hero = () => {
    return (
        <div className="hero">
            <>
                <div className="hero-text">
                    <img src={assets['logo-no-background']} id="c-logo"></img>
                    <h2>An Indie Studio Founded by RIT Graduates</h2>
                    <Button link="">Placeholder</Button>
                </div>
                <img id="pantheon" src={assets["logo-pantheon"]}></img>            
            </>
        </div>
    )
}

export default Hero