import React from 'react'
import "../styles/Services.css";
import IconPanel from "./IconPanel"
import { faXTwitter, faInstagram, faDiscord, faYoutube } from "@fortawesome/free-brands-svg-icons";
import Button from "./Button"
import Header from "./Header"

const Services = () => {
    return (
        <>
            <div className="services-header">
                <Header subtitle='Open to Work'>Our Services</Header>
            </div>
            <div className="services">
                <IconPanel icon_definition={faXTwitter}>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</IconPanel>
                <IconPanel icon_definition={faXTwitter}>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</IconPanel>
                <IconPanel icon_definition={faXTwitter}>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</IconPanel>
                <IconPanel icon_definition={faXTwitter}>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</IconPanel>


            </div>

            <div className="services-button"><Button>Contact Us!</Button></div>

        </>
    )
}

export default Services