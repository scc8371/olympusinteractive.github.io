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
                    <IconPanel icon_definition={faGamepad} icon_title="Fast Game Prototyping">We have many years of experience developing successful prototypes for gaming projects. We have experience using a range of game development and art applications.<br></br><br></br>Unity and Unreal Engine are our specialties, however, we can adapt to any framework given to us.</IconPanel>
                    <IconPanel icon_definition={faCode} icon_title="Programming Assistance">We are here to assist with all your programming needs, whether they relate to game development or other areas!<br></br><br></br>Our team has a diverse technical skillset, including scripting gameplay mechanics, creating web applications, implementing server and networking modules, and developing technical art and graphical solutions.</IconPanel>

                    <IconPanel icon_definition={faPen} icon_title="Design Assistance">Need a hand at designing a new project? Our games wouldn't be possible without our dilligent design work. We can assist with creating and updating design documentation, and create new designs on existing ideas.</IconPanel>
                    <IconPanel icon_definition={faPaintbrush} icon_title="Art, Music, and Asset Creation">Our team has exellent artists; able to compose music and create 2D and 3D assets for projects. We can help you generate high-quality assets quickly.</IconPanel>
                </div>

                <div className="services-button"><Button link="#contact-us-section">Contact Us!</Button></div>
                <Divider hasBgImage={false} color="primary" position="relative"></Divider>
            </div>

            
        </>
    )
}

export default Services