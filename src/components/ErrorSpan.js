import styled from "styled-components";

const Span = styled.span`
  color: red;
  font-size: 15px;
  transition: all 2s ease-in-out;

  @media screen and (min-width: 500px) {
    span {
      margin-bottom: 0px;
    }
  }
`;

const ErrorSpan = (props) => {
  return <Span>{props.children}</Span>;
};
export default ErrorSpan;
