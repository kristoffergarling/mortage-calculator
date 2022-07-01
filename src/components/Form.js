import { Fragment } from "react";

import useForm from "../hooks/useForm";
import validate from "./ValidationRules";
import { FormRow, MonthlyPayment, ErrorSpan } from "./index";
import styled from "styled-components";

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 900px;

  .error {
    border-color: #be1a1a;
    background-color: #f3baba;
  }

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

const Form = () => {
  const { values, errors, handleChange, handleSubmit } = useForm(
    calculate,
    validate
  );

  function calculate() {
    console.log("success");
  }

  return (
    <Fragment>
      <FormContainer onSubmit={handleSubmit}>
        <div className="form-rows">
          <FormRow
            className={errors.purchasePrice ? "error" : ""}
            label="Purchase Price"
            name="purchasePrice"
            value={values.purchasePrice}
            onChange={handleChange}
            error={errors.purchasePrice}
          />
          <FormRow
            className={errors.downPayment ? "error" : ""}
            label="Down Payment"
            name="downPayment"
            value={values.downPayment}
            onChange={handleChange}
            error={errors.downPayment}
          />
          <FormRow
            className={errors.loanTerm ? "error" : ""}
            label="Loan Term (Years)"
            name="loanTerm"
            value={values.loanTerm}
            onChange={handleChange}
            error={errors.loanTerm}
          />
          <FormRow
            className={errors.apr ? "error" : ""}
            label="APR (%)"
            name="apr"
            step={0.01}
            value={values.apr}
            onChange={handleChange}
            error={errors.apr}
          />
        </div>
        <SubmitButton type="submit">Calculate</SubmitButton>
        <MonthlyPayment input={values}></MonthlyPayment>
      </FormContainer>
    </Fragment>
  );
};
export default Form;
