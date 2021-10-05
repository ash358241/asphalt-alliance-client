import React, { useState } from "react";
import "./Contact.css";
import Fade from "react-reveal/Fade";
import emailjs from "emailjs-com";
import Swal from 'sweetalert2';

const Contact = () => {

  const sendMail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_6v7vgrw",
        "template_sjiz1ci",
        e.target,
        "user_pFdMTqasHCdyMKEK0zDSl"
      )
      .then(
        (result) => {
          console.log(result.text);
        //   setEmail(true);
        if (result.text === "OK") {
            // reset();
             return Swal.fire({
                icon: 'success',
                title: 'Thank you!", "Your message was sent successfully.',
                showConfirmButton: true,
                timer: 5000
              })
        }
        },
        (error) => {
          console.log(error.text);
          return Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
          })
        }
      );
    e.target.reset();
  };
  return (
    <div className="contact">
      <section id="contact-section">
        <Fade bottom duration={2500}>
          <div className="form-container">
            <h2>Contact Us</h2>
            <p>Email us and keep upto date with our latest news</p>
            <div className="contactForm">
              <div>
                <i className="fa fa-map-marker"></i>
                <span className="form-info"> 192 City Boston Amercia #345</span>
                <br />
                <i className="fa fa-phone"> </i>
                <span className="form-info"> +92 00034567890</span>
                <br />
                <i className="fa fa-envelope"></i>
                <span className="form-info"> JhonDoe12@Gmail.com</span>
              </div>
              <div className="form-fields">
                <form onSubmit={sendMail}>
                  <input type="text" placeholder="Your Name" required />
                  <input type="text" placeholder="Last Name" />
                  <br />
                  <input type="Email" placeholder="Email" required />
                  <br />
                  <input type="text" placeholder="Subject of this message" />
                  <br />
                  <textarea
                    name="message"
                    placeholder="Message"
                    rows="5"
                    required
                  ></textarea>
                  <br />
                  <button className="submit">Send Message</button>
                </form>
              </div>
            </div>
          </div>
        </Fade>
      </section>
    </div>
  );
};

export default Contact;
