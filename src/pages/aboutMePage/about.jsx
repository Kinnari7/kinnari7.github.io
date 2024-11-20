import React from "react";
import "./about.css";

import LinkedInRecos from "../../sections/recommendation/recommendation";

const About = () => {
  return (
    <div className="container my-5 d-block">
      <div className="row">
        <div className="col-12">
          <h2 className="my-4">About Me</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <p className="about-details">
            Welcome to my portfolio! I am Kinnari Kotadiya, a passionate and
            dedicated software engineer based in Los Angeles, CA. With a robust
            educational background and diverse professional experience, I am
            currently pursuing a Master of Science in Computer Science at
            California State University, Los Angeles. I am an active member of
            GDSC, GDG, Women Techmakers, and IEEE, proudly maintaining a 4.0
            GPA.
          </p>
          <p className="about-details">
            My journey began at LDRP Institute of Technology and Research in
            Gandhinagar, Gujarat, where I earned my Bachelor of Engineering in
            Information Technology. During my undergraduate studies, I
            participated in the Smart India Hackathon and consistently achieved
            high academic honors.
          </p>
          <p className="about-details">
            Professionally, I have worked with leading companies such as
            Infosys, Openxcell Technolabs, and Cygnet Infotech, gaining valuable
            experience in software development and consultancy. My expertise
            lies in integrating web design and APIs, optimizing performance
            using RTK query in ReactJS, and managing deployments on Azure
            DevOps. I have a proven track record of enhancing efficiency and
            productivity, whether through configuring backend systems, leading
            frontend teams, or implementing robust security measures. I have
            successfully developed distributed scalable panels, reduced API
            response times, and improved task efficiency with cron jobs and
            webhooks. My proficiency extends to various technologies, including
            AWS, GCP, Docker, Jenkins, and Selenium. I am also skilled in
            multiple programming languages such as JavaScript, Python, Java, and
            TypeScript. My efforts have been recognized with several awards,
            including the AWS Certified Developer Associate and the
            Spotlight Award by Reliance.
          </p>
          <p className="about-details">
            I look forward to giving back to the community in any way possible.
            Driven by a commitment to excellence and continuous learning, I am
            always eager to take on new challenges and contribute to innovative
            solutions. Connect with me on LinkedIn or explore my projects on
            GitHub.
          </p>
          <p className="about-details">
            Besides my ability to drive innovation and collaborate, I enjoy
            listening to music and mountain hiking. I am always excited to meet
            new people and make friends. Feel free to drop me a note on
            LinkedIn, and let's arrange a coffee chat!
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <LinkedInRecos />
        </div>
      </div>
    </div>
  );
};

export default About;
