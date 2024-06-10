import React from "react";
import "./home.css";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { useTheme } from "../../context/ThemeContext";
import Resume from "../../assets/docs/resume.txt";
import Typewriter from "typewriter-effect";
import Fade from "react-reveal/Fade";

const Home = () => {
  const [theme, setTheme] = useTheme();
  //handle theme
  const handleTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };
  return (
    <>
      <div className="container-fluid home-container" id="home">
        <div className="theme-btn" onClick={handleTheme}>
          {theme === "light" ? (
            <BsFillMoonStarsFill size={30} />
          ) : (
            <BsFillSunFill size={30} />
          )}
        </div>

        <div className="container home-content">
          <Fade right>
            <h2>Hi 👋🏻 I'm Nikhil Kumar</h2>
            <h1>
              <Typewriter
                options={{
                  strings: ["Web Developer!", "Mern Stack Developer!"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
          </Fade>
          <Fade bottom>
            <div className="home-buttons">
              <a
                className="btn btn-hire"
                href="https://api.whatsapp.com/send?phone=7014328326"
                rel="noreferrer"
                target="_blank"
              >
                Hire Me
              </a>
              <a
                className="btn btn-cv"
                href={Resume}
                download="Nikhil_K_resume.pdf"
              >
                My Resume
              </a>
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default Home;
