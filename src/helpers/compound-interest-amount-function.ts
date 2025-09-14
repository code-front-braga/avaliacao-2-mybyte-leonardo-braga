interface CompoundInterestAmountFunctionProps {
  capital: number;
  rate: number;
  time: number;
}

export const compoundInterestAmountFunction = ({ capital, rate, time }: CompoundInterestAmountFunctionProps) => {
  // Essa fórmula retorna o valor do montante em juros compostos, onde Math.pow realiza a operação de potenciação (1 + rate)^time
  const amount = capital * Math.pow(1 + rate, time);

  return amount;
}
