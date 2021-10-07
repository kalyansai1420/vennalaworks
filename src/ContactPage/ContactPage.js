import React from 'react'
import { ContactUs } from '../Contact/ContactUs'
import './ContactPage.css'

const ContactPage = () => {
    return (
        <div className="contactpage">
            <div className="contact__title">
                <h2>Contact Us</h2>
            </div>
            <div className="contact__top">
                <div className="contact__top__left">
                    <h2>Registered Office</h2>
                    <h3>
                        lorem, <br />
                        Lorem ipsum dolor,
                        <br />
                        Hyderabad,Telangana
                    </h3>
                </div>
                <div className="contact__top__right">
                    <a href="mailto:vennalaworks@gmail.com"><p>vennalaworks@gmail.com</p></a>
                    <a href="tel:+91 93921 66345">
                        <p>
                            <i class="fa fa-phone" aria-hidden="true"></i> +91 73373 56899
                        </p>
                    </a>
                    <a href="tel:+91 95335 56056">
                        <p>
                            <i class="fa fa-phone" aria-hidden="true"></i> +91 73373 56899
                        </p>
                    </a>
                </div>
            </div>
            <div className="contact__title">
                <h2>Reach Us</h2>
            </div>
            <div className="contact__bottom">
                <div className="contact__bottom__left">
                    <div className="contact__img-box" >
                        <img src="https://bn02pap001files.storage.live.com/y4pFOdjl7QB65vXYQWWN21-0tkfEkfpF3I46mFnGRpiHtbAFMKXG3SASJQ4jSdkNT-qqeiI1orJHtSIR8TKSG4VfY2dQ7kTzAp7NaXxuyW26-kGwiq8rES7U7hWQINBJ8zr7_fqNMWiaSrilV1nAxDzKj6vD6rvuCXDg26ApV-Dg9g18t7Wxoa3Spw2vO9Hfspfi5yxkyLrq7YPAPJHLyMHjQ4shPz0ymsPQjAhuRgGSps/f_1%20%284%29.jpeg?psid=1&width=1024&height=691" alt="" />
                    </div >
                </div>
                <div className="contact__bottom__right">
                    <ContactUs/>
                </div>
            </div>
        </div>
    )
}

export default ContactPage
