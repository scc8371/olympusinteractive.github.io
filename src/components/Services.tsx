import React from 'react'
import "../styles/Services.css";
import IconPanel from "./IconPanel"
import { faXTwitter, faInstagram, faDiscord, faYoutube } from "@fortawesome/free-brands-svg-icons";

const Services = () => {
    return (
        <>
            <div className="services">
                <IconPanel icon_definition={faXTwitter}>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</IconPanel>
                <IconPanel icon_definition={faXTwitter}>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</IconPanel>
                <IconPanel icon_definition={faXTwitter}>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</IconPanel>
                <IconPanel icon_definition={faXTwitter}>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</IconPanel>
            </div>
        </>
    )
}

export default Services