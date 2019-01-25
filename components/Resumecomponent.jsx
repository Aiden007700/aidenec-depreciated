import styled from "styled-components";

const StyledResume = styled.div`
  width: 100%;
  padding: 5rem 3rem;
  font-family: "Open Sans", sans-serif;
  font-weight: 300;
  font-size: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;

  .name {
    font-size: 2.5em;
    margin-bottom: 1rem;
    font-family: "Stardos Stencil", cursive;
  }

  .subheading {
    font-size: 2em;
    margin: 1rem 0;
    font-family: "Stardos Stencil", cursive;
  }

  p {
    margin: 0.5rem 0;
    width: 80%;
  }

  .bold,
  strong {
    font-family: "Stardos Stencil", cursive;
  }

  .bottomBorder {
    border-bottom: 1px solid black;
    padding-bottom: 0.5rem;
    display: inline-block;
  }

  .tagContainer {
    margin-top: -1rem;
    display: flex;
    flex-direction: row;
    font-size: 1.5rem;
    flex-wrap: wrap;

    li {
      background-color: #f5f5f5;
      display: inline-block;
      padding: 1rem;
      border-radius: 4px;
      margin: 1rem;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
      transition: all 0.2s;

      &:hover {
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
          0 10px 10px rgba(0, 0, 0, 0.22);
      }
    }
  }

  .skills {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;

    .skill-box {
      min-width: 40%;
      margin: 1rem 3rem 1rem 0;
      border-radius: 4px;
      background-color: #f7f7f7;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
      transition: all 0.2s;

      &:hover {
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
          0 10px 10px rgba(0, 0, 0, 0.22);
      }
      &__skill {
        padding: 1rem 2.5rem;
      }
      &__skill:nth-child(even) {
        background-color: #fcfcfc;
      }
    }
  }

  .latest--projects {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
  }

  .project--box {
    background-color: #f7f7f7;
    padding: 2rem;
    margin: 2rem;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.2s;

    &:hover {
      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
        0 10px 10px rgba(0, 0, 0, 0.22);
    }
  }

  @media screen and (max-width: 1400px) {
    width: 100%;
  }

  @media screen and (max-width: 1000px) {
    width: 100%;
  }

  @media screen and (max-width: 700px) {
    p {
      width: 100%;
    }
    .skills {
      flex-direction: column;
    }
  }
`;

const Resumecomponent = () => {
  return (
    <>
      <section style={{ overflowY: "scroll", maxHeight: "100vh" }}>
        <StyledResume>
          <h1 className="name">Aiden Campbell</h1>
          <ul className="tagContainer">
            <li>FULL-STACK DEVELOPER</li>
            <li>UTC+1</li>
            <li>Krakow</li>
            <li>EN</li>
            <li>PL</li>
            <li>
              <a href="https://bravelab.io" target="_blank">
                Bravelab
              </a>
            </li>
          </ul>
          <p>
            Hey there! I am a self-motivated web developer. Ambitious &
            problem-solving. From New York, currently in Krakow.
          </p>
          <p>
            <strong>Education:</strong> MBA Candidate, BBA
          </p>
          <p>
            <strong>Languages:</strong> English, Polish
          </p>
          <p>
            <strong>Visited:</strong> 🇺🇸 🇵🇱 🇯🇵 🇲🇽 🇹🇭 🇩🇪 🇫🇷 🇳🇱 🇭🇺
          </p>
          <h2 className="subheading">Skills</h2>
          <div className="skills">
            <ul className="skill-box">
              <li className="bold skill-box__skill">FRONTEND</li>
              <li className="skill-box__skill">
                Javascript/ES.Next/TypeScript
              </li>
              <li className="skill-box__skill">React/Next.js</li>
              <li className="skill-box__skill">Redux/Apollo</li>
              <li className="skill-box__skill">SASS</li>
              <li className="skill-box__skill">Webpack/Parcel/NPM</li>
            </ul>
            <ul className="skill-box">
              <li className="bold skill-box__skill">BACKEND</li>
              <li className="skill-box__skill">Node.js</li>
              <li className="skill-box__skill">Express.js</li>
              <li className="skill-box__skill">Apollo Server</li>
              <li className="skill-box__skill">GraphQL/REST</li>
              <li className="skill-box__skill">MySQL/MongoDB</li>
            </ul>
          </div>
          <p className="infoBox">
            <strong>Want to learn</strong>: GatsbyJS
          </p>
          <h2 className="subheading">Latest Projects</h2>
          <div className='latest--projects'>
            <div className="project--box">
              <h3 className="bold bottomBorder">
                <a href="https://mclinica.com/" target="_blank">
                  mClinica (SwipeRX)
                </a>
              </h3>
              <p>
                <strong>Role:</strong> Fullstack developer
              </p>
              <div className="stack-n-scope">
                <div className="stack-n-scope__section">
                  <p>
                    <strong>Frontend:</strong> React, Redux, Typescript, <br />{" "}
                    Webpack, Styled-Components, Moment.JS, React Router
                  </p>
                  <p>
                    <strong>Backend:</strong> Node, Warp, Express, Sentry
                  </p>
                  <p>
                    <strong>Server:</strong> MySQL, Azure, Papertrail
                  </p>
                </div>
              </div>
            </div>
            <div className="project--box">
              <h3 className="bold bottomBorder">
                <a href="https://www.imssensory.com/en/rd/" target="_blank">
                  IMS r&d (MapMaker)
                </a>
              </h3>
              <p>
                <strong>Role:</strong> Frontend developer
              </p>
              <div className="stack-n-scope">
                <div className="stack-n-scope__section">
                  <p>
                    <strong>Frontend:</strong> Angular 4, RxJs, Typescript, <br />{" "}
                    Webpack, Leaflet, OpenStreetMap
                  </p>
                  <p>
                    <strong>Backend:</strong> Django, Sentry
                  </p>
                  <p>
                    <strong>Server:</strong> MySQL
                  </p>
                </div>
              </div>
            </div>
          </div>
        </StyledResume>
      </section>
    </>
  );
};

export default Resumecomponent;
