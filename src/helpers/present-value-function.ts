interface PresentValueProps {
  futureValue: number;
  time: number;
  rate: number;
}

export const presentValueFunction = ({ futureValue, time, rate }: PresentValueProps) => {
  const presentValue = futureValue / Math.pow(1 + rate, time);

  return presentValue;
}
