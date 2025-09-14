interface simpleInterestAmountFunctionProps {
  capital: number;
  simpleInterest: number;
}

export const simpleInterestAmountFunction = ({ capital, simpleInterest }: simpleInterestAmountFunctionProps) => {
  // Aqui, estou calculando o montante
  const amount = capital + simpleInterest;

  return amount;
}
