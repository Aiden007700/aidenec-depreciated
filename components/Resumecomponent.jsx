import styled from "styled-components";

const StyledResume = styled.div`
  width: 70%;
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
    font-family: "Stardos Stencil", cursive;
  }

  .subheading {
    font-size: 2em;
    margin: 2rem 0;
    font-family: "Stardos Stencil", cursive;
  }

  p {
    margin: 1rem 0;
    width: 80%;
  }

  .bold,
  strong {
    font-family: "Stardos Stencil", cursive;
  }

  .tagContainer {
    margin-top: -1rem;
    display: flex;
    flex-direction: row;
    font-size: 1.5rem;

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
    justify-content: space-around;

    .skill-box {
      min-width: 40%;
      margin: 2rem;
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

  .infoBox {
    background-color: #f7f7f7;
    padding: 1rem;
    border-radius: 4px;
    width: 100%;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.2s;

    &:hover {
      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
        0 10px 10px rgba(0, 0, 0, 0.22);
    }
  }

  .project--box {
    background-color: #f7f7f7;
    padding: 1rem;
    border-radius: 4px;
    width: 100%;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.2s;

    &:hover {
      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
        0 10px 10px rgba(0, 0, 0, 0.22);
    }
  }

  .stack-n-scope {
    display: flex;
    flex-direction: row;
    &__section {
      margin: 1rem 4rem;
      ul li {
        padding: 0.25rem 0.2rem;
      }
    }
  }

  @media screen and (max-width: 1400px) {
    width: 90%;
  }

  @media screen and (max-width: 1000px) {
    width: 100%;
  }

  @media screen and (max-width: 700px) {
    .tagContainer {
      flex-wrap: 
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
          <h2 className="subheading">Quick Start</h2>
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
          <ul>
            <li>
              <strong>Education:</strong> MBA Candidate, BBA
            </li>
            <li>
              <strong>Languages:</strong> English, Polish
            </li>
            <li>
              <strong>Visited:</strong> 🇺🇸🇵🇱🇯🇵🇲🇽🇹🇭🇩🇪🇫🇷🇳🇱🇭🇺
            </li>
          </ul>
          <h2 className="subheading">Skills</h2>
          <blockquote>Not limited to those below</blockquote>
          <div className="skills">
            <ul className="skill-box">
              <li className="bold skill-box__skill">FRONTEND</li>
              <li className="skill-box__skill">
                Javascript/ES.Next/TypeScript
              </li>
              <li className="skill-box__skill">React/Redux</li>
              <li className="skill-box__skill">Apollo</li>
              <li className="skill-box__skill">Next.js</li>
              <li className="skill-box__skill">Webpack/Parcel</li>
              <li className="skill-box__skill">NPM</li>
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
          <div className="project--box">
            <h3 className="bold">name</h3>
            <a href="#">site</a>
            <p>
              <strong>Role:</strong> Authorized Representative
            </p>
            <div className="stack-n-scope">
              <div className="stack-n-scope__section">
                <p className="bold">Stack</p>
                <ul>
                  <li>Javascript/ES.Next</li>
                  <li>React/Redux</li>
                  <li>Vue/Vuex</li>
                  <li>AngularJS</li>
                  <li>Webpack</li>
                  <li>NPM</li>
                  <li>Ionic</li>
                </ul>
              </div>
              <div className="stack-n-scope__section">
                <p className="bold">Scope</p>
                <ul>
                  <li>Javascript/ES.Next</li>
                  <li>React/Redux</li>
                  <li>Vue/Vuex</li>
                  <li>AngularJS</li>
                  <li>Webpack</li>
                  <li>NPM</li>
                  <li>Ionic</li>
                </ul>
              </div>
            </div>
          </div>
          <h2 className="subheading">Other Details</h2>
          <p>
            You can add any number of skills and project cards and arrange them
            however you wish, you perfectionist sicko.
          </p>
          <p>So we agree I'm awesome but like without trying too hard, yes?</p>
          <p>good</p>
        </StyledResume>
      </section>
    </>
  );
};

export default Resumecomponent;
