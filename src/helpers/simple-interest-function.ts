interface SimpleInterestFunctionProps {
  capital: number;
  rate: number;
  time: number;
}

export const simpleInterestFunction = ({ capital, rate, time }: SimpleInterestFunctionProps) => {
  // Aqui, estou calculando o juros simples, multiplicando o capital, a taxa de juros e o tempo
  const simpleInterest = capital * rate * time;

  return simpleInterest;
}
