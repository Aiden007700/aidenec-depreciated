import styled from 'styled-components';

const StyledFooter = styled.div`
  display: none !important;
  padding: 1rem 2rem;
  font-size: 2.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
  width: 100vw;
  bottom: 0;
  background-color: #fff;

  @media screen and (max-width: 700px) {
  .contact {
    position: fixed;
  }
}
`;

const Footer = () => {
  return (
    <StyledFooter>
      <div className="contact__info">
        <h2>
          N:
          <span className="highlite">+48 515 817 829</span>
        </h2>
        <h2>
          E:
          <span className="highlite">
            <a href="mailto:hello@aidenec.com">hello@aidenec.com</a>
          </span>
        </h2>
      </div>
      <div className="contact__links">
        <a className="" href="https://linkedin.com/in/aidenec" target="_blank">
          <i className="fab fa-linkedin-in" />
        </a>
        <a className="" href="https://github.com/Aiden007700" target="_blank">
          <i className="fab fa-github" />
        </a>
      </div>
    </StyledFooter>
  );
};

export default Footer