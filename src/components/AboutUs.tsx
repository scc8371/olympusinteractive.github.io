import React from 'react'
import "../styles/AboutUs.css"
import IconPanel from "./IconPanel"
import Header from "./Header"

interface Props {
    children: string,
    imgLink: string

}

const AboutUs: React.FC<Props> = ({ children, imgLink }) => {
    return (
        <>
            <div className="about-us-wrapper" id="about-us-section">
                <Header subtitle='Our Pantheon'>About Us</Header>
                <div className="about-us">
                    <div className="about-us-desc">
                        <IconPanel>{children}</IconPanel>
                    </div>
                    <img className="about-us-img" src={imgLink}>
                    </img>
                </div>
            </div>

        </>
    )
}

export default AboutUs