import React from 'react';
import Navbar from './Navbar';


const Contact = () => {
    return (
        <main>
            <Navbar />
            <section className="contact-wrapper">
      <h2 className="common-heading">Contact Us</h2>

      <div className="contact-container">
        <div className="contact-form">
          <form action="https://formspree.io/f/mjkbrzpg" method="POST">
            <h1>Contact Us</h1>
            <input
              type="text"
              placeholder="Username"
              name="username"
              required
              autoComplete="off"
            />
            <input
              type="email"
              placeholder="Email"
              name="Email"
              required
              autoComplete="off"
            />
            <textarea
              name="Message"
              cols="30"
              rows="10"
              required
              autoComplete="off"
              placeholder="Enter your message"
            ></textarea>

            <input type="submit" value="Send" />
          </form>
        </div>

        <div className="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121059.04711156077!2d73.78056543154413!3d18.524598599502376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1723243870755!5m2!1sen!2sin"
            width="100%"
            height="100%"
            // style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>

            
        </main>
    );
};

export default Contact;