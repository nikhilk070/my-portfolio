import React, { useState } from "react";
import "./contact.css";
import Rotate from "react-reveal/Rotate";
import LightSpeed from "react-reveal/LightSpeed";
import { toast } from "react-toastify";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import axios from "axios";
// import emailjs from "@emailjs/browser";
const Contact = () => {
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    // your email public key , templates
    const serviceId = "service_z18z33j";
    const templateId = "template_23f4wcd";
    const publicKey = "tFFOeG9F_xi-zeV0-";

    const data = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        from_name: name,
        from_email: email,
        to_name: "Nikhil",
        message: msg,
      },
    };
    try {
      if (!name || !email || !msg) {
        toast.error("Please Provide all fields");
      }
      await axios.post("https://api.emailjs.com/api/v1.0/email/send", data);
      toast.success("Email send Successfully");
      setname("");
      setEmail("");
      setMsg("");
    } catch (e) {
      toast.error(e);
    }
  };
  return (
    <>
      <div className=" contact" id="contact">
        <div className="card card0 border-0">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
              <div className="card1">
                <div className="row border-line">
                  <LightSpeed>
                    <img
                      src="https://img.freepik.com/free-photo/hot-line-contact-us-call-center-search-interface_53876-124009.jpg?w=2000"
                      alt="ocontact"
                      className="image"
                    />
                  </LightSpeed>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <Rotate>
                <div className="card2 d-flex card border-0 px-4 py-5">
                  <div className="row">
                    <div className="row">
                      <h6>
                        Contact With
                        <a href="https://www.linkedin.com/in/nikhil-kumar-7a8097292/">
                          <BsLinkedin color="blue" size={30} className="ms-2" />
                        </a>
                        <a href="https://github.com/nikhilk070">
                          <BsGithub color="black" size={30} className="ms-2" />
                        </a>
                        <a href="https://www.instagram.com/7_nikhil_k/">
                          <BsInstagram
                            color="blue"
                            size={30}
                            className="ms-2"
                          />
                        </a>
                      </h6>
                    </div>

                    <div className="row px-3 mb-4">
                      <div className="line" />
                      <small className="or text-center">OR</small>
                      <div className="line" />
                    </div>
                    <form onSubmit={handleSubmit} className="emailForm">
                      <div className="row px-3">
                        <input
                          type="text"
                          name="name"
                          placeholder="Enter your Name"
                          className="mb-3"
                          value={name}
                          onChange={(e) => setname(e.target.value)}
                        />
                      </div>
                      <div className="row px-3">
                        <input
                          type="email"
                          name="email"
                          placeholder="Enter Your Email Address"
                          className="mb-3"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="row px-3">
                        <textarea
                          type="text"
                          name="msg"
                          placeholder="Write your message"
                          className="mb-3"
                          value={msg}
                          onChange={(e) => setMsg(e.target.value)}
                        />
                      </div>
                      <div className="row px-3">
                        <button type="submit" className="button">
                          SEND MESSAGE
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </Rotate>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
