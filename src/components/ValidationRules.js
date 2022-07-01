export default function validate(values) {
  let errors = {};

  //Purchase Price
  if (!values.purchasePrice) {
    errors.purchasePrice = "Purchase Price is required";
  } else if (values.purchasePrice < 10000 || values.purchasePrice > 99999999) {
    errors.purchasePrice =
      "Enter a Purchase Price between 10 000 and 99 999 999";
  }
  if (!values.downPayment) {
    //Down Payment
    errors.downPayment = "Down Payment is required";
  } else if (values.downPayment > values.purchasePrice) {
    errors.downPayment = "Down Payment can't be higher than Purchase Price";
  }

  //Loan Term (Years)
  if (!values.loanTerm) {
    errors.loanTerm = "Loan Term in years is required";
  } else if (values.loanTerm > 10 || values.loanTerm < 1) {
    errors.loanTerm = "Enter a Loan Term between 1 and 10";
  }

  //APR (%)
  if (!values.apr) {
    errors.apr = "APR in % is required";
  } else if (values.apr > 10 || values.apr < 0.1) {
    errors.apr = "Enter an APR between 0.1 to 5";
  }

  return errors;
}
