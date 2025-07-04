// IMPORT LIBRARIES
import React, { useEffect, useState } from "react";

// IMPORT STYLES
import "./resume.css";

const Resume = () => {
  const [showExperience, setShowExperience] = useState(false);
  const [showEducation, setShowEducation] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowExperience(true), 200);
    setTimeout(() => setShowEducation(true), 700);
  }, []);

  const experiences = [
    {
      id: 1,
      company: "Xedu.app, Maryland, USA",
      title: "Software Engineer Intern",
      date: "January 2025 - May 2025",
      skills:
        "(Node.js, Prisma ORM, SQL, Stripe, 100ms streaming, Cron jobs)",
      content: "Revamped the entire backend database, integrated Stripe payments and 100ms live streaming, and implemented backend cron jobs using Node.js with Prisma and SQL.",
      link: "https://www.linkedin.com/company/xedu-app/posts/?feedView=all",
    },
    {
      id: 2,
      company: "Infosys, Pune, India",
      title: "Senior Software Engineer",
      date: "September 2023 - January 2024",
      skills:
        "(ReactJS, Typescript, Unite Testing, Redux, Web Design, Azure DevOps)",
      content: "Engineering frontend services in Fintech domain",
      link: "https://www.linkedin.com/company/infosys/",
    },
    {
      id: 3,
      company: "Openxcell Technolabs (CMMI Level 3), Gujarat, India",
      title: "Senior Software Engineer",
      date: "June 2022 - August 2023",
      skills: "(NodeJS, ReactJS, AWS lambda, S3, Sonarqube, NextJS, CI/CD)",
      content:
        "Developed a scalable web panel, configured cron jobs, integrated SonarQube and ESLint, and utilized AWS services, leading a frontend team to double productivity.",
      link: "https://www.linkedin.com/company/openxcell/",
    },
    {
      id: 4,
      company: "Openxcell Technolabs (CMMI Level 3), Gujarat, India",
      title: " Associate Software Engineer",
      date: "September 2019 - May 2022",
      skills: "(ReactJS, Redux, Postman APIs, CMS, AWS, GraphQL, MongoDB)",
      content:
        "Build a version-controlled APIs for multiple platforms, integrated QuickBooks for improved financial management, migrated a ReactJS website to Next.js for better SEO, and achieved a 40% revenue growth by launching key features.",
      link: "https://www.linkedin.com/company/openxcell/",
    },
    {
      id: 5,
      company: "Cygnet Infotech, Gujarat, India",
      title: "Software Developer Intern",
      date: "January 2019 - June 2019",
      skills: "(Python, Angular, Java, Django, SQLite, Bash, Testing)",
      content:
        "Designed innovative APIs using Django and Angular, enabling real-time bidding, multi-sport support, and comprehensive admin management for 500+ employees.",
      link: "https://www.linkedin.com/company/cygnet-one/",
    },
  ];

  const education = [
    {
      id: 1,
      school: "California State University, Los Angeles",
      degree: "Master of Science, Computer Science",
      date: "January 2024 - December 2025",
      cgpa: "4.0 / 4.0",
      content: "Graduate Teaching Assistant (TA), Orientation Leader (Student Assistant)",
      link: "https://www.calstatela.edu/",
    },
    {
      id: 2,
      school: "LDRP Institute of Technology and Research, Gujarat, India",
      degree: "Bachelor of Engineering, Information Technology",
      date: "August 2015 - May 2019",
      cgpa: "8.51 / 10.0",
      content:
        "Scholarship winner of Shri Maneklal M. Patel Memorial Merit Scholarship for exceptional academic performance during undergraduate studies - Batch of 2019. Member at GDG.",
      link: "https://www.ldrp.ac.in/",
    },
    {
      id: 3,
      school: "Sahajanand Vidhyalaya, Ahmedabad, Gujarat, India",
      degree: "Higher Secondary school",
      date: "March 2013 - May 2015",
    },
  ];

  return (
    <div className="container my-5 d-block">
      <div className="row">
        <div className="col-12 text-center my-4">
          <a
            href="/kinnari_resume.pdf"
            className="btn btn-outline-dark btn-lg animate__animated animate__pulse"
          >
            Download Resume
          </a>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <h2 className="text-center mb-4">Professional Experience</h2>
        </div>
      </div>

      <div className="timeline">
        {experiences.map((job, idx) => (
          <div
            className={`timeline-item transition-fade-up ${showExperience ? "show" : ""}`}
            key={job.id}
            style={{ transitionDelay: `${idx * 120}ms` }}
          >
            <div className="timeline-icon"></div>
            <div className="timeline-content">
              <h5 className="timeline-title">
                <a href={job.link} target="_blank" rel="noopener noreferrer">
                  {job.company}
                </a>
              </h5>
              <h6 className="text-muted">{job.title}</h6>
              <small className="text-muted">{job.date}</small>
              <p>
                <b>Skills</b>: {job.skills}
                <br />
                {job.content}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="row">
        <div className="col-12">
          <h2 className="text-center my-4">Education</h2>
        </div>
      </div>

      <div className="timeline">
        {education.map((edu, idx) => (
          <div
            className={`timeline-item transition-fade-up ${showEducation ? "show" : ""}`}
            key={edu.id}
            style={{ transitionDelay: `${idx * 120}ms` }}
          >
            <div className="timeline-icon"></div>
            <div className="timeline-content">
              <h5 className="timeline-title">
                {edu.link ? (
                  <a href={edu.link} target="_blank" rel="noopener noreferrer">
                    {edu.school}
                  </a>
                ) : (
                  edu.school
                )}
              </h5>
              <h6 className="text-muted">{edu.degree}</h6>
              <small className="text-muted">{edu.date}</small>
              <p>
                {edu.cgpa && (
                  <>
                    <b>CGPA</b>: {edu.cgpa}
                    <br />
                  </>
                )}
                {edu.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resume;