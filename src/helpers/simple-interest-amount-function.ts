interface simpleInterestAmountFunctionProps {
  capital: number;
  simpleInterest: number;
}

export const simpleInterestAmountFunction = ({ capital, simpleInterest }: simpleInterestAmountFunctionProps) => {
  const amount = capital + simpleInterest;

  return amount;
}
