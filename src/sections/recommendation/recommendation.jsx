import React, { useState } from "react";
import "./recommendation.css";
import Albert from "../../assets/images/albert_profile.jpeg";
import Kalpesh from "../../assets/images/kalpesh_hadiyal_profile.jpeg";
import Jayesh from "../../assets/images/jayesh_mathur_profile.jpeg";
import Parth from "../../assets/images/parth_goswami_profile.jpeg";
import Rutul from "../../assets/images/rutul_amin_profile.jpeg";
import Mitali from "../../assets/images/mitali_rajpurohit_profile.jpeg";

const recommendations = [
  {
    id: 1,
    name: "Albert Yohannan",
    image: Albert,
    text: `I worked with Kinnari at Infosys, Bangalore. Kinnari is outstanding. She completed her all tasks well before the deadline and that too without compromising on code quality. She was very independent and was able to make progress even when the requirements were unclear and evolving. She would be an asset on any team.`,
    link: "https://www.linkedin.com/in/albert-chiriyankandath-yohannan-4b55471a1/",
  },
  {
    id: 2,
    name: "Kalpesh Hadiyal",
    image: Kalpesh,
    text: `Kinnari joined the fintech development team at Openxcell Technolabs as an Associate Software Engineer as beginner and soon it was easy to forget her lack of experience. Her tendency to learn a new concept or technology is astronomical. She is neither void of ideas nor shy of expressing them. I worked closely with her on a complex research project that she had no trouble owning end to end. She is an asset that is hard to find. One of the smartest engineers I have worked with.`,
    link: "https://www.linkedin.com/in/kalpesh-hadiyal-a4b669b6/",
  },
  {
    id: 3,
    name: "Jayesh Mathur",
    image: Jayesh,
    text: `I've worked with Kinnari since with Openxcell Technolabs and during this journey, I've seen her quickly picking up newer and complex technologies. She has a growth mindset and a work ethic to match. She was instrumental in several initiatives and can independently drive complex projects to completion. She is confident and learns from feedback which helps her grow faster. Kinnari's ability to handle multiple technologies/tasks was unlike any I've seen before and helped increase the productivity of our team. Kinnari is an asset to any team/company and I wish her the very best!`,
    link: "https://www.linkedin.com/in/jayesh-mathur-b5b6a852/",
  },
  {
    id: 4,
    name: "Parth Goswami",
    image: Parth,
    text: `Kinnari is very bright and eager to learn new skills. During her Software Engineer role at Openxcell, I mentored her for a competition where she and her team had to prepare a pitch for a new product at Openxcell. She takes feedback seriously and applies it diligently to make improvements. Working in a team setting, she also demonstrated great leadership and communication skills. She and her team put together a very compelling pitch which won them the top price at the competition.`,
    link: "https://www.linkedin.com/in/goswami-parth-7a8095bb/",
  },
  {
    id: 5,
    name: "Rutul Amin",
    image: Rutul,
    text: `I've worked with Kinnari since my first day with Openxcell and during this journey, I've seen her quickly picking up newer and complex technologies. She has a growth mindset and a work ethic to match. She was instrumental in several initiatives and can independently drive complex projects to completion. She is confident and learns from feedback which helps her grow faster. Kinnari's ability to handle multiple technologies/tasks was unlike any I've seen before and helped increase the productivity of our team. Kinnari is an asset to any team/company and I wish her the very best!`,
    link: "https://www.linkedin.com/in/rutul-amin/",
  },
  {
    id: 6,
    name: "Mitali Rajpurohit",
    image: Mitali,
    text: `I've worked with Kinnari since her internship with Walmart and during this journey, I've seen her quickly picking up newer and complex technologies. She has a growth mindset and a work ethic to match. She was instrumental in several initiatives and can independently drive complex projects to completion. She is confident and learns from feedback which helps her grow faster. Kinnari's ability to handle multiple technologies/tasks was unlike any I've seen before and helped increase the productivity of our team. Aakriti is an asset to any team/company and I wish her the very best!`,
    link: "https://www.linkedin.com/in/mitali-rajpurohit01/",
  },
];

const Recommendations = () => {
  const [currentRecommendation, setCurrentRecommendation] = useState(1);
  const recommender_st = 1;
  const recommender_en = recommendations.length;

  return (
    <div className="container my-5 d-block">
      <div className="row">
        <h2 className="text-center mb-4">Hear from the Awesome Crowd!</h2>
      </div>
      <div className="row justify-content-center">
        <div className="col-12 col-md-12">
          {recommendations.map((recommendation) => (
            <div
              key={recommendation.id}
              className={`card mb-4 ${
                currentRecommendation === recommendation.id
                  ? "d-block"
                  : "d-none"
              }`}
            >
              <div className="card-body text-center">
                <img
                  src={recommendation.image}
                  alt={recommendation.name}
                  className="rounded-circle mb-3"
                  style={{ width: "100px", height: "100px" }}
                />
                <p className="card-text">
                  <em>{recommendation.text}</em>
                  <br />
                  <span className="attrib">
                    <a
                      href={recommendation.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      - {recommendation.name}
                    </a>
                  </span>
                </p>
                <div className="d-flex justify-content-between">
                  {currentRecommendation > recommender_st && (
                    <i
                      className="fas fa-arrow-left"
                      onClick={() =>
                        setCurrentRecommendation(
                          Math.max(recommender_st, currentRecommendation - 1)
                        )
                      }
                      style={{ cursor: "pointer" }}
                    ></i>
                  )}
                  {currentRecommendation < recommender_en && (
                    <i
                      className="fas fa-arrow-right"
                      onClick={() =>
                        setCurrentRecommendation(
                          Math.min(currentRecommendation + 1, recommender_en)
                        )
                      }
                      style={{ cursor: "pointer" }}
                    ></i>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recommendations;
