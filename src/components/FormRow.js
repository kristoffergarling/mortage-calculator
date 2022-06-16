import styled from "styled-components";
import ErrorSpan from "./ErrorSpan";

const Container = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-size: 15px;
    font-weight: 600;
    color: var(--secondary);
  }

  input {
    background-color: rgba(255, 255, 255, 0.3);
    height: 35px;
    border: none;
    border-radius: 10px;
    padding: 0 10px;
    color: var(--secondary);
    font-weight: 700;
    box-shadow: 0 0 1px 0 rgba(8, 11, 14, 0.06),
      0 6px 6px -1px rgba(8, 11, 14, 0.1);
    transition: all 0.3s ease-in-out;
    &:hover,
    &:focus {
      box-shadow: 0 0 1px 0 rgba(8, 11, 14, 0.06),
        0 16px 16px -1px rgba(8, 11, 14, 0.1);
    }
    margin-bottom: 20px;
  }

  @media screen and (min-width: 500px) {
    label {
      font-size: 20px;
    }

    input {
      margin-bottom: 0px;
    }
  }
`;

const FormRow = ({ label, name, value, max, error, onChange }) => {
  return (
    <Container>
      <label>{label}</label>
      <input
        name={name}
        type="number"
        max={max}
        value={value}
        onChange={onChange}
      ></input>
      {error && <ErrorSpan message={error}></ErrorSpan>}
    </Container>
  );
};
export default FormRow;
