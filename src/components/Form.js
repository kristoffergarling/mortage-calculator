import { Fragment, useState } from "react";

import { FormRow, MonthlyPayment, ErrorSpan } from "./index";
import styled from "styled-components";

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 900px;

  @media screen and (min-width: 500px) {
    .form-rows {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, 1fr);
      grid-column-gap: 20px;
      grid-row-gap: 20px;
    }
  }
`;

const SubmitButton = styled.button`
  color: #fff;
  background-color: var(--primary);
  border: none;
  width: 150px;
  height: 36px;
  font-size: 15px;
  letter-spacing: 0.03rem;
  line-height: 36px;
  border-radius: 2px;
  box-shadow: 0 0 1px 0 rgba(8, 11, 14, 0.06),
    0 6px 6px -1px rgba(8, 11, 14, 0.1);
  transition: all 0.3s ease-in-out;
  &:hover,
  &:focus {
    cursor: pointer;
    box-shadow: 0 0 1px 0 rgba(8, 11, 14, 0.06),
      0 16px 16px -1px rgba(8, 11, 14, 0.1);
  }
  margin: 20px;
  align-self: center;

  @media screen and (min-width: 500px) {
    margin: 40px;
  }
`;

const initialState = {
  price: 1000000,
  downPayment: 100000,
  loanTerm: 10,
  apr: 2,
  submitted: false,
};

// const formatNumber = (value) => {
//   return new Intl.NumberFormat("fr-CA", {
//     style: "currency",
//     currency: "USD",
//   }).format(value);
// };

const Form = () => {
  const [input, setInput] = useState(initialState);

  const controlInputs = () => {
    if (
      input.price.length > 1 ||
      input.downPayment.length > 1 ||
      input.loanTerm.length > 1 ||
      input.apr.length > 1
    ) {
      return false;
    }
    return true;
  };

  const handleChange = (e) => {
    // const newValue = formatNumber(e.target.value);
    setInput({ ...input, submitted: false });
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setInput({ ...input, submitted: true });
  };

  return (
    <Fragment>
      <FormContainer onSubmit={handleSubmit}>
        <div className="form-rows">
          <FormRow
            label="Purchase Price"
            name="price"
            error={input.price.length < 1 ? "Please enter a Price" : ""}
            value={input.price}
            onChange={handleChange}
          />
          <FormRow
            label="Down Payment"
            name="downPayment"
            error={
              input.downPayment > input.price
                ? "Down Payment can't be higher than Purchase Price"
                : "" || input.downPayment.length < 1
                ? "Please enter a Down Payment"
                : ""
            }
            value={input.downPayment}
            onChange={handleChange}
          />
          <FormRow
            label="Loan Term (Years)"
            name="loanTerm"
            error={input.loanTerm.length < 1 ? "Please enter a Loan Term" : ""}
            max={25}
            value={input.loanTerm}
            onChange={handleChange}
          />
          <FormRow
            label="APR (%)"
            name="apr"
            error={
              input.apr.length < 1
                ? "Please enter an Annual Percentage Rate (APR) in %"
                : ""
            }
            max={10}
            onChange={handleChange}
            value={input.apr}
          />
        </div>
        <SubmitButton type="submit">Calculate</SubmitButton>
      </FormContainer>
      <MonthlyPayment input={input.submitted ? input : 0}></MonthlyPayment>
    </Fragment>
  );
};
export default Form;
