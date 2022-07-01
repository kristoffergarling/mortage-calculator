import styled from "styled-components";

const Container = styled.div`
  color: var(--primary);
  background-color: white;
  border-radius: 10px;
  margin-bottom: 40px;
  padding: 5px 15px;
  font-size: 15px;
  text-align: center;

  @media screen and (min-width: 500px) {
    font-weight: 700;
    font-size: 18px;
    padding: 10px 30px;
  }
`;

const formatNumber = (value) => {
  return new Intl.NumberFormat("fr-CA", {
    style: "currency",
    currency: "USD",
  }).format(value);
};

const MonthlyPayment = ({ input }) => {
  // M = P [ i(1 + i)^n ] / [ (1 + i)^n – 1].

  // Here’s a breakdown of each of the variables:

  // M = Total monthly payment
  // P = The total amount of your loan
  // I = Your interest rate, as a monthly percentage
  // N = The total amount of months in your timeline for paying off your mortgage

  const monthsInAYear = 12;
  const monthlyInterestRate = input.apr / 100 / monthsInAYear;
  const totalMonths = input.loanTerm / monthsInAYear;
  const loanPrincipal = input.purchasePrice - input.downPayment;

  let monthlyPayment =
    (loanPrincipal *
      monthlyInterestRate *
      Math.pow(monthlyInterestRate + 1, totalMonths)) /
    (Math.pow(monthlyInterestRate + 1), totalMonths - 1);

  monthlyPayment = Math.abs(Math.round(monthlyPayment));
  console.log(input);

  return (
    <Container>
      <h3>Estimated Monthly Payment:</h3>
      {input.apr && <h2>{formatNumber(monthlyPayment)}</h2>}
    </Container>
  );
};
export default MonthlyPayment;
