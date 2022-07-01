import styled from "styled-components";
import ErrorSpan from "./ErrorSpan";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  label {
    font-size: 15px;
    font-weight: 600;
    color: var(--secondary);
  }

  input {
    background-color: rgba(255, 255, 255, 0.3);
    height: 35px;
    border: none;
    border-radius: 5px;
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

const FormRow = ({ className, label, name, value, error, step, onChange }) => {
  return (
    <Container>
      <label>{label}</label>
      <input
        className={className}
        type="number"
        name={name}
        step={step}
        value={value}
        onChange={onChange}
      ></input>
      {error && <ErrorSpan>{error}</ErrorSpan>}
    </Container>
  );
};
export default FormRow;
