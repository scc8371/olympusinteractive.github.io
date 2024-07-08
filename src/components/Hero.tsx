import React from 'react'
import "../styles/Hero.css"
import assets from "../assets"
import Button from "../components/Button"

const Hero = () => {
    return (
        <div className="hero">
            <>
                <div className="hero-text">
                    <h1>We are Olympus Interactive</h1>
                    <h2>An Indie Studio Founded by RIT Graduates</h2>
                    <Button>Join our Newsletter</Button>
                </div>
                <img src={assets["logo-pantheon"]}></img>            
            </>
        </div>
    )
}

export default Hero