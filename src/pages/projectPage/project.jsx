import React, { Component } from "react";
import "./project.css";
import Jeeves from "../../assets/images/jeeves.jpg";
import Ajio from "../../assets/images/ajio-reliance-retail.jpeg";
import Danske from "../../assets/images/danske-bank.png";
import Xedu from "../../assets/images/xedu-logo.jpeg";
import Sql from "../../assets/images/sql.png";
import Reddit from "../../assets/images/subreddit.jpeg";
import Slogan from "../../assets/images/slogan.jpeg";

class Project extends Component {
  render() {
    return (
      <div className="container my-5 d-block">
        <div className="row">
          <div className="col-12">
            <h4 className="mt-5 mb-3">Corporate Projects</h4>
          </div>
          {/* Jeeves */}
          <div className="card mb-3 p-3 d-flex flex-row align-items-center">
            <img
              src={Jeeves}
              alt="Jeeves"
              className="img-thumbnail project-logo me-3"
            />
            <div>
              <h5 className="mb-1">
                Jeeves (YC19) - Fintech Expense Management Platform
              </h5>
              <p className="mb-0">
                I contributed to Jeeves from MVP to Series C, helping scale this
                YC-backed global fintech platform that offers corporate cards,
                cross-border payments, credit lines, and expense management
                solutions for businesses. I worked on full-stack development,
                building and optimizing the entire website, implementing SEO
                best practices, and managing landing pages and content. On the
                backend, I developed secure APIs, integrated banking services
                with webhooks and cron jobs, and automated financial statement
                workflows. I also handled payment, card, and loan UIs,
                third-party integrations, website migration, and implemented
                robust monitoring, event tracking, and cloud infrastructure.
                Additionally, I managed GitHub PR reviews, merge requests, and
                coordinated sprints to deliver releases smoothly.
              </p>
              <p className="mb-0">
                <b className="text-muted">Technology/Tools:</b> React.js,
                Next.js, Webflow, Node.js, SQL, MongoDB, Ant Design, Flinks,
                Belvo, Plaid, AWS (S3, SES, Lambda, Secret Manager, CloudWatch),
                Firebase, SonarQube, Datadog, Google Tag Manager, Google Search
                Console, Git, Docker, Jenkins
              </p>
              <p>
                {" "}
                <b className="text-muted">Link: </b>{" "}
                <a
                  href="https://www.tryjeeves.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.tryjeeves.com/
                </a>
              </p>
            </div>
          </div>

          {/* AJIO */}
          <div className="card mb-3 p-3 d-flex flex-row align-items-center">
            <img
              src={Ajio}
              alt="Ajio"
              className="img-thumbnail project-logo me-3"
            />
            <div>
              <h5 className="mb-1">Ajio - Reliance E-commerce Platform</h5>
              <p className="mb-0">
                I worked as a frontend engineer on AJIO, Reliance’s e-commerce
                platform, focusing on delivering smooth B2B experiences for
                wholesalers and distributors. I contributed to building the B2B
                return order journey, revamped the in-house CMS with new
                features, and improved key flows for wholesalers and
                distributors. I also worked on AJIO Dhan, enhancing credit line
                functionality for B2B users, and redesigned the cart UI for a
                better user experience and improved conversion.
              </p>
              <p className="mb-0">
                <b className="text-muted">Technology/Tools:</b> JavaScript,
                TypeScript, React.js, Redux, Bootstrap, HTML, CSS
              </p>
                <p>
                {" "}
                <b className="text-muted">Link: </b>{" "}
                <a
                  href="https://ajiobusiness.com/storefront/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://ajiobusiness.com/storefront/
                </a>
              </p>
            </div>
          </div>

          {/* Danske Bank  */}
          <div className="card mb-3 p-3 d-flex flex-row align-items-center">
            <img
              src={Danske}
              alt="Danske Bank"
              className="img-thumbnail project-logo me-3"
            />
            <div>
              <h5 className="mb-1">Danske Bank - Denmark</h5>
              <p className="mb-0">
                I worked as part of the Requirement Analysis and Legal Team at
                Danske Bank, Denmark, where I developed intuitive UIs to define
                rules and categories for user account openings and fraud
                transaction detection. I built website interfaces with API
                integrations, wrote comprehensive test cases using Jest to
                ensure robust UI and backend functionality, and actively
                participated in daily scrum calls and sprint planning under
                agile methodology. I also reviewed PRs to maintain high code
                quality and team collaboration.
              </p>
              <p className="mb-0">
                <b className="text-muted">Technology/Tools:</b> JavaScript,
                React.js, HTML, CSS, REST APIs, Jest/Mocha, Agile Methodology,
                Git, Microsoft Azure, Azure DevOps, SonarQube, Postman
              </p>
               <p>
                {" "}
                <b className="text-muted">Link: </b>{" "}
                <a
                  href="https://danskebank.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://danskebank.com/
                </a>
              </p>
            </div>
          </div>

          {/* Xedu App  */}
          <div className="card mb-3 p-3 d-flex flex-row align-items-center">
            <img
              src={Xedu}
              alt="Xedu App"
              className="img-thumbnail project-logo me-3"
            />
            <div>
              <h5 className="mb-1">Xedu.app - Early Stage Edtech Startup</h5>
              <p className="mb-0">
                I worked as a backend engineer at Xedu.app, a platform that
                connects students, advisors, and parents for seamless
                communication and session tracking. I revamped the entire
                database using a modern ORM, integrated Stripe for secure
                payment processing, and implemented real-time streaming features
                for live sessions. Additionally, I developed backend cron jobs
                to automate critical workflows and ensure system reliability.
              </p>
              <p className="mb-0">
                <b className="text-muted">Technology/Tools:</b> Node.js, Prisma
                ORM, SQL, Stripe, 100ms streaming, Cron jobs
              </p>
              <p>
                {" "}
                <b className="text-muted">Link: </b>{" "}
                <a
                  href="https://www.xedu.app/intro"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.xedu.app/intro
                </a>
              </p>
            </div>
          </div>
        </div>

        <div>
          <h4 className="mt-5 mb-3">Academic Projects</h4>

          {/* QueryMate */}
          <div className="card mb-3 p-3 d-flex flex-row align-items-center">
            <img
              src={Sql}
              alt="SQL"
              className="img-thumbnail project-logo me-3"
            />
            <div>
              <h5 className="mb-1">
                QueryMate - Natural Language SQL Query Web App
              </h5>
              <p className="mb-0">
                I developed QueryMate, a web application that enables users to
                query SQL databases using natural language. Leveraging OpenAI’s
                API and Langchain, I built a system that converts user prompts
                into SQL queries via an AI-powered SQL agent. The app seeds
                initial data, processes user input, calls the OpenAI API
                securely, and parses query results into a clean, readable table
                format. The accuracy depends on the quality of user prompts and
                dataset size, making data access intuitive for non-technical
                users.
              </p>
              <p>
                <b className="text-muted">Technology/Tools:</b> NLP, JavaScript,
                OpenAI API, Langchain, SQL, Node.js, REST APIs
              </p>
            </div>
          </div>

          {/* Connect Hive */}
          <div className="card mb-3 p-3 d-flex flex-row align-items-center">
            <img
              src={Reddit}
              alt="Reddit"
              className="img-thumbnail project-logo me-3"
            />
            <div>
              <h5 className="mb-1">
                Connect Hive - Full-Stack Reddit Inspired Web App
              </h5>
              <p className="mb-0">
                I built Connect Hive, a full-stack social platform inspired by
                Reddit, enabling users to sign up or sign in with Google
                authentication and interact in real time. Using Firebase as the
                backend, I implemented live post creation, upvote/downvote
                functionality, community creation, joining/leaving, and a
                dynamic feed page. The app supports secure data encryption and
                decryption for sensitive information using robust cryptographic
                algorithms. I integrated light/dark mode switching with a
                modern, customizable UI and ensured a smooth developer
                experience with TypeScript support.
              </p>
              <p>
                <b className="text-muted">Technology/Tools:</b> Next.js,
                Firebase, TypeScript, React-Firebase-Hooks, Chakra UI, Crypto-JS
                (AES, HMAC, SHA256)
              </p>
            </div>
          </div>

          {/* Slogan Generator */}
          <div className="card mb-3 p-3 d-flex flex-row align-items-center">
            <img
              src={Slogan}
              alt="Slogan"
              className="img-thumbnail project-logo me-3"
            />
            <div>
              <h5 className="mb-1">
                Slogan Generator - ML Based Web Application
              </h5>
              <p className="mb-0">
                I developed a machine learning web app that generates marketing
                slogans tailored to brand keywords using a fine-tuned
                transformer model. I preprocessed a large Kaggle dataset by
                cleaning duplicates, missing values, and unwanted characters to
                ensure high-quality training data. Using BART (Bidirectional and
                Auto-Regressive Transformers), I fine-tuned a pre-trained model
                with pairs of brand descriptions and slogans to produce catchy,
                relevant taglines. Users can input keywords and instantly
                receive AI-generated slogans suited to their brand identity.
              </p>
              <p>
                <b className="text-muted">Technology/Tools:</b> Python, BART,
                Hugging Face Transformers, Pandas, Scikit-learn, Flask/FastAPI,
                Kaggle Datasets
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Project;
