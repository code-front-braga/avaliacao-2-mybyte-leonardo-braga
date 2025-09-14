interface SimpleInterestFunctionProps {
  capital: number;
  rate: number;
  time: number;
}

export const simpleInterestFunction = ({ capital, rate, time }: SimpleInterestFunctionProps) => {
  const simpleInterest = (capital * rate * time);

  return simpleInterest;
}
