import styled from "styled-components";

const Container = styled.div`
  margin: 40px 0 20px 0;
  font-weight: 700;

  .icons {
    display: flex;
    justify-content: center;
  }

  .icons a {
    text-decoration: none;
    color: var(--primary);
    margin: 10px 15px 0 0;
    font-size: 30px;

    &:hover {
      cursor: pointer;
    }
  }

  @media screen and (min-width: 500px) {
    .icons a {
      margin: 10px 15px 0 0;
      font-size: 40px;
    }
  }
`;

const Footer = () => {
  return (
    <Container>
      <span>©Made by Kristoffer Gärling (2022)</span>
      <div className="icons">
        <a
          href="https://www.linkedin.com/in/kristoffer-g%C3%A4rling-4760b1203/"
          target="_blank"
          rel="noreferrer"
        >
          <i
            className="fa-brands
          fa-linkedin"
          ></i>
        </a>
        <a
          href="https://github.com/kristoffergarling"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-github-square"></i>
        </a>
      </div>
    </Container>
  );
};
export default Footer;
