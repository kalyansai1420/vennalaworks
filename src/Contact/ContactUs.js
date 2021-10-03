import React, { useRef } from 'react';
import './ContactUs.css'
import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';
init("user_0ggBS8Oxule52AEBUsjUV");
export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_pq7erlg', 'template_p8i2k5i', form.current, 'user_0ggBS8Oxule52AEBUsjUV')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Phone Number</label>
      <input type="tel" name="user_number" />
      <label>Message</label>
      <textarea name="message" />
      {/* <input type="submit" value="Send" /> */}
      <button type="submit" value="Send"  class="btn">Send Mail</button>
    </form>
  );
};