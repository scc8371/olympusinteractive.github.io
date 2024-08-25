import "../styles/Services.css"
import IconPanel from "./IconPanel"
import { faGamepad, faCode, faPen, faPaintbrush } from "@fortawesome/free-solid-svg-icons"
import Button from "./Button"
import Header from "./Header"
import Divider from "./Divider"

const Services = () => {
    return (
        <>
            <div id="services-wrapper">
                <div className="services-header" id="services-section">
                    <Header subtitle='Open to Work'>Our Services</Header>
                </div>
                <div className="services">
                    <IconPanel icon_definition={faGamepad} icon_title="Fast Software and Game Prototyping">We have many years of experience developing successful prototypes for gaming projects.</IconPanel>
                    <IconPanel icon_definition={faCode} icon_title="Programming Assistance">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic perferendis harum sed illo, eius voluptate sunt esse eligendi praesentium doloremque!</IconPanel>
                    <IconPanel icon_definition={faPen} icon_title="Design Assistance">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta porro consequuntur, quasi praesentium libero quam temporibus voluptas deleniti minus. Quo?</IconPanel>
                    <IconPanel icon_definition={faPaintbrush} icon_title="Art, Music, and Asset Creation">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum perspiciatis rem harum, possimus explicabo sunt culpa molestias vel beatae cum!</IconPanel>
                </div>

                <div className="services-button"><Button link="#contact-us-section">Contact Us!</Button></div>
                <Divider hasBgImage={false} color="primary" position="relative"></Divider>
            </div>

            
        </>
    )
}

export default Services