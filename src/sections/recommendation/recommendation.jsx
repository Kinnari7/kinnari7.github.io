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
    text: `I had the pleasure of working with Kinnari at Infosys in Bangalore. She consistently exceeded expectations by completing tasks well ahead of deadlines without sacrificing code quality. Kinnari demonstrated remarkable independence and adaptability, making significant progress even when dealing with evolving and unclear requirements. Her ability to navigate and thrive in such an environment would make her a valuable asset to any team.`,
    link: "https://www.linkedin.com/in/albert-chiriyankandath-yohannan-4b55471a1/",
  },
  {
    id: 2,
    name: "Kalpesh Hadiyal",
    image: Kalpesh,
    text: `Kinnari joined the fintech development team at Openxcell Technolabs as an Associate Software Engineer, and it was soon easy to overlook her initial lack of experience. Her ability to quickly grasp new concepts and technologies is exceptional. She is both creative and confident in sharing her ideas. I had the opportunity to work closely with her on a complex research project, which she effortlessly managed from start to finish. Kinnari is truly a rare talent and one of the smartest engineers I have ever worked with.`,
    link: "https://www.linkedin.com/in/kalpesh-hadiyal-a4b669b6/",
  },
  {
    id: 3,
    name: "Jayesh Mathur",
    image: Jayesh,
    text: `I’ve worked with Kinnari since her time at Openxcell Technolabs, and I’ve witnessed her rapidly mastering new and complex technologies. She has a growth mindset complemented by a strong work ethic. Kinnari played a crucial role in several initiatives, demonstrating her ability to independently drive complex projects to completion. `,
    link: "https://www.linkedin.com/in/jayesh-mathur-b5b6a852/",
  },
  {
    id: 4,
    name: "Parth Goswami",
    image: Parth,
    text: `Kinnari is confident, receptive to feedback, and uses it to accelerate her growth. Her unique ability to handle multiple technologies and tasks significantly boosted our team’s productivity. Kinnari is a valuable asset to any team or company, and I wish her the very best in her future endeavors!`,
    link: "https://www.linkedin.com/in/goswami-parth-7a8095bb/",
  },
  {
    id: 5,
    name: "Rutul Amin",
    image: Rutul,
    text: `Kinnari has an exceptional growth mindset and consistently drives complex projects to successful completion. Her ability to handle multiple tasks efficiently and incorporate feedback to improve makes her a significant asset to any team.`,
    link: "https://www.linkedin.com/in/rutul-amin/",
  }
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
