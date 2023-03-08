import React from "react";
import { BsFillPersonFill } from "react-icons/bs";
import "./contact.css";
// import image2 from "../video/image2";

import { FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <section className="contact">
        <div className="co">
          <div className="content">
            <h1> Contact Us</h1>
          </div>
          <div className="container">
            <div className="contactInfo">
              <div className="box">
                <div className="icon"></div>
                <div className="text">
                  <h4>
                    {" "}
                    <FaMapMarkerAlt className="icon" />
                    Adress
                  </h4>
                  <p>Route de Ouardanine-4070 M`saken </p>
                </div>
              </div>
              {/* <input className="box" type="box" name="adress" required /> */}
              <div className="box">
                <div className="icon"></div>
                <div className="text">
                  <h4>
                    {" "}
                    <FaPhone className="icon" />
                    Phone Number
                  </h4>
                  <p>73398476</p>
                </div>
              </div>
              {/* <input className="box" type="box" name="phone" required /> */}
              <div className="box">
                <div className="icon"></div>
                <div className="text">
                  <h4>
                    <HiOutlineMail className="icon" /> Email
                  </h4>
                  <p>Brohers@hotmail.com</p>
                </div>
              </div>
            </div>

            {/* <input className="icon" type="box" name="email" required /> */}
            <div className="contactForm">
              <form onSubmit={handleSubmit}>
                <h2>Send Message </h2>
                <div className="inputBox">
                  <span>
                    <BsFillPersonFill className="icon" /> Full Name
                  </span>
                  <input type="box" name="message" required></input>
                </div>
                <div className="inputBox">
                  <span>
                    <HiOutlineMail className="icon" /> Email
                  </span>
                  <input type="box" name="" required></input>
                </div>
                <div className="inputBox">
                  <textarea required="required"></textarea>
                  <span>Type your Message...</span>
                  {/* <input type="box" name="message" required></input> */}
                </div>
                <div className="inputBox">
                  <input className="btn-primary" type="submit" name="" value="send"></input>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
