import React from 'react'
import IconButton from './IconButton'
import { faXTwitter, faInstagram, faDiscord, faYoutube } from "@fortawesome/free-brands-svg-icons";

const IconList = () => {
    return (
        <>
            <div className="footer-logos">
                <IconButton link="." icon_definition={faXTwitter}></IconButton>
                <IconButton link="." icon_definition={faInstagram}></IconButton>
                <IconButton link="https://discord.gg/DgFe8qdCYG" icon_definition={faDiscord}></IconButton>
                <IconButton link="https://www.youtube.com/@OlympusInteractive" icon_definition={faYoutube}></IconButton>
            </div>
        </>
    )
}

export default IconList