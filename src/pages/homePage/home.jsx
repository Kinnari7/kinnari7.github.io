import React from "react";
import "./home.css";
import profileImage from "../../assets/images/kinnari_profile.jpeg";
import linkedinIcon from "../../assets/icons/linkedIn_icon.png";
import githubIcon from "../../assets/icons/github_icon.png";
import emailIcon from "../../assets/icons/email_icon.png";

const Home = () => {
  return (
    <div className="home-container">
      <img src={profileImage} className="home-img" alt="Kinnari Kotadiya" />

      <div className="home-intro">
        <p className="home-university">Welcome!! Explore My Creative Journey</p>
        <p className="home-name">I am Kinnari Kotadiya</p>
        <p className="home-university">
          MS CS Student @ California State University, Los Angeles
        </p>
        <p className="home-address">
          Ex Software Engineer - Infosys, Openxcell Technolabs
        </p>
        <p className="home-address">Los Angeles, California, USA</p>
      </div>

      <div className="home-icons-wrapper">
        <ul className="list-inline">
          <li className="list-inline-item">
            <a
              href="https://www.linkedin.com/in/kinnarik/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={linkedinIcon}
                alt="LinkedIn"
                className="home-icons"
                width="60px"
              />
            </a>
          </li>
          <li className="list-inline-item">
            <a
              href="https://github.com/Kinnari7"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={githubIcon}
                alt="GitHub"
                className="home-icons"
                width="60px"
              />
            </a>
          </li>
          <li className="list-inline-item">
            <a
              href="mailto:kinnarim.kotadiya@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={emailIcon}
                alt="Email"
                width="60px"
                className="home-icons"
              />
            </a>
          </li>
        </ul>
      </div>

      <div className="row">
        <div className="col-12 text-center">
          <a href="/kinnari_resume.pdf" className="btn btn-outline-dark">
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
