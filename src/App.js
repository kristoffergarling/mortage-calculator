import styled from "styled-components";
import { Header, HouseImage, Form, Footer } from "./components/index";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
`;

const App = () => {
  return (
    <Container>
      <Header />
      <Form />
      <HouseImage />
      <Footer />
    </Container>
  );
};
export default App;
