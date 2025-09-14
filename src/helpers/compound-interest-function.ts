interface CompoundInterestFunctionProps {
  amount: number;
  capital: number;
}

export const compoundInterestFunction = ({ amount, capital }: CompoundInterestFunctionProps) => {
  // Aqui, estou calculando o juros compostos, subtraindo o capital do montante
  const compoundInterest = amount - capital;

  return compoundInterest;
}
