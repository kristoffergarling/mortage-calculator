import styled from "styled-components";

const Container = styled.div`
  margin: 20px;
  font-size: 15px;

  @media screen and (min-width: 500px) {
    font-size: 23px;
  }
`;

const Header = () => {
  return (
    <Container>
      <h1>Mortage Calculator</h1>
    </Container>
  );
};
export default Header;
