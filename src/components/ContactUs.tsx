import React from 'react'
import "../styles/ContactUs.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import Button from './Button';
import Header from './Header';

const ContactUs = () => {
    return (
        <>
            <div className="contact-us-wrapper">
                <Header subtitle="">Contact Us</Header>
                <div className="contact-us">
                    <div className="email-information">
                        <div className="email-wrapper">
                            <FontAwesomeIcon icon={faEnvelope} className="email-icon" />
                            <h2 className="email">contact@olympusinteractive.com</h2>
                        </div>

                    </div>

                    <form className="olympus-contact-form">
                        <div className="form-group email-form">
                            <input type="email" className="form-control" id="emailForm" placeholder="name@example.com" />
                        </div>
                        <div className="form-group subject-form">
                            <input type="text" className="form-control" id="subjectForm" placeholder="Subject" />
                        </div>
                        <div className="form-group">
                            <textarea className="form-control" id="textarea" rows={5} placeholder="Email Body"></textarea>
                        </div>

                        <Button>Send Message</Button>
                    </form>


                </div>
            </div>
        </>
    )
}

export default ContactUs