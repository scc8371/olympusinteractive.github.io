import React from 'react'
import "../styles/AboutUs.css"
import Panel from "./Panel"
import Header from "./Header"
import Divider from './Divider'

interface Props {
    children: string,
    imgLink: string

}

const AboutUs: React.FC<Props> = ({ children, imgLink }) => {
    return (
        <>
            <div className="about-us-wrapper" id="about-us-section">
                <Header subtitle=''>About Us</Header>
                <div className="about-us">
                    <div className="about-us-desc">
                        <Panel title="THE OLYMPUS INTERACTIVE TEAM">{children}</Panel>
                    </div>
                    <img className="about-us-img" src={imgLink}>
                    </img>
                    
                </div>
                <Divider hasBgImage={false} color="secondary" position="relative"></Divider>
                
            </div>



        </>
    )
}

export default AboutUs