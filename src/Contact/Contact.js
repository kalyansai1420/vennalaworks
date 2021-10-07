import React from 'react';
import './Contact.css';
import { ContactUs } from './ContactUs';

const Contact = () => {
    return (
        <div className="contact">
            <div className="contact__left">
                <h2 className="contact-title"> Get In Touch</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ab asperiores esse harum sed totam debitis minima nostrum repellat quibusdam sapiente voluptate omnis consectetur sunt est ipsum, impedit dignissimos odit.</p>
                <br />
                <div className="contact__details">
                    <h3>Phone</h3>
                    <a href="tel:+7337356899">+91 54868-24568</a>
                    <br />
                    <h3>Email</h3>
                    <a href="mailto:vennelaworks25@gmail.com">vennelaworks25@gmail.com</a>
                </div>
                

            </div>
            <div className="contact__right">
                <h2 className="contact-title"> Contact Form</h2>
                <ContactUs/>
            </div>
            
        </div>
    )
}

export default Contact
