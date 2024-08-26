import "../styles/ContactUs.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import Button from './Button';
import Header from './Header';

import Swal from 'sweetalert2'

const ContactUs = () => {
    const handleSubmit = async (event: any) => {
        event.preventDefault(); // Prevent the default form submission

        const formData = new FormData(event.target); // Get form data

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                Swal.fire({
                    title: "Message Sent!",
                    text: "We will get back to you shortly.",
                    icon: "success"
                });
                event.target.reset(); // Reset the form after successful submission
            } else {
                Swal.fire({
                    title: "An error occured.",
                    text: "Please try again later.",
                    icon: "error"
                });
            }
        } catch (error) {
            Swal.fire({
                title: "An error occured.",
                text: "Please try again later.",
                icon: "error"
            });
        }
    };

    return (
        <>
            <div className="contact-us-wrapper" id="contact-us-section">
                <Header subtitle="">Contact Us</Header>
                <div className="contact-us">
                    <div className="email-information">
                        <div className="email-wrapper">
                            <FontAwesomeIcon icon={faEnvelope} className="email-icon" />
                            <a href="mailto:contact@olympusinteractive.com"><h2 className="email">contact@olympusinteractive.com</h2></a>
                        </div>

                    </div>

                    <form className="olympus-contact-form" onSubmit={handleSubmit}>

                        <input type="hidden" name="access_key" value="5c7944d2-30d4-4c29-8687-20f312f70ba6"></input>
                        <div className="form-group email-form">
                            <input type="email" name="email" className="form-control" id="emailForm" placeholder="name@example.com" required />
                        </div>
                        <div className="form-group subject-form">
                            <input type="text" name="subject" className="form-control" id="subjectForm" placeholder="Subject" required/>
                        </div>
                        <div className="form-group">
                            <textarea className="form-control" name="message" id="textarea" rows={5} placeholder="Email Body" required></textarea>
                        </div>

                        <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none', position: 'absolute' }}></input>

                        <Button link="">Send Message</Button>
                    </form>


                </div>
            </div>
        </>
    )
}

export default ContactUs