import styled from "styled-components";

const Span = styled.span`
  color: red;
  font-size: 15px;
  /* margin-bottom: 5px; */
  transition: all 2s ease-in-out;
`;

const ErrorSpan = ({ message }) => {
  return <Span>{message}</Span>;
};
export default ErrorSpan;
