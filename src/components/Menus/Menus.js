import React from "react";
import {
  FcAbout,
  FcBiotech,
  FcBusinessContact,
  FcHome,
  FcPortraitMode,
  FcReadingEbook,
  FcVideoProjector,
} from "react-icons/fc";
import { Link } from "react-scroll";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import Nikhil from "../../assets/images/Nikhil.jpg";

import "./Menus.css";
const Menus = ({ toggle }) => {
  return (
    <>
      {toggle ? (
        <>
          <Zoom>
            <div className="navbar-profile-pic">
              <img src={Nikhil} alt="Profile pic" />
            </div>
          </Zoom>
          <Fade left>
            <div className="nav-items">
              <div className="nav-item">
                <div className="nav-link">
                  <Link to="home" spy={true} offset={-100} duration={100}>
                    <FcHome /> Home
                  </Link>
                </div>
              </div>
              <div className="nav-item">
                <div className="nav-link">
                  <Link to="about" spy={true} offset={-100} duration={100}>
                    <FcAbout /> About
                  </Link>
                </div>
              </div>
              <div className="nav-item">
                <div className="nav-link">
                  <Link to="education" spy={true} offset={-100} duration={100}>
                    <FcReadingEbook /> Education
                  </Link>
                </div>
              </div>
              <div className="nav-item">
                <div className="nav-link">
                  <Link to="techstack" spy={true} offset={-100} duration={100}>
                    <FcBiotech /> Tech Stack
                  </Link>
                </div>
              </div>
              <div className="nav-item">
                <div className="nav-link">
                  <Link to="project" spy={true} offset={-100} duration={100}>
                    <FcVideoProjector /> Projects
                  </Link>
                </div>
              </div>
              <div className="nav-item">
                <div className="nav-link">
                  <Link to="work" spy={true} offset={-100} duration={100}>
                    <FcPortraitMode /> Work Experince
                  </Link>
                </div>
              </div>
              <div className="nav-item">
                <div className="nav-link">
                  <Link to="contact" spy={true} offset={-100} duration={100}>
                    <FcBusinessContact />
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </Fade>
        </>
      ) : (
        <>
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                {" "}
                <Link to="home" spy={true} offset={-100} duration={100}>
                  <FcHome title="Home " />
                </Link>
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                {" "}
                <Link to="about" spy={true} offset={-100} duration={100}>
                  <FcAbout title="About" />{" "}
                </Link>
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                {" "}
                <Link to="education" spy={true} offset={-100} duration={100}>
                  <FcReadingEbook title="Education" />{" "}
                </Link>
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                {" "}
                <Link to="techstack" spy={true} offset={-100} duration={100}>
                  <FcBiotech title="Tech stack" />{" "}
                </Link>
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                {" "}
                <Link to="project" spy={true} offset={-100} duration={100}>
                  <FcVideoProjector title="Project" />{" "}
                </Link>
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                {" "}
                <Link to="work" spy={true} offset={-100} duration={100}>
                  <FcPortraitMode title="Work Experience" />{" "}
                </Link>
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                <Link to="contact" spy={true} offset={-100} duration={100}>
                  <FcBusinessContact title="Contact" />
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Menus;
