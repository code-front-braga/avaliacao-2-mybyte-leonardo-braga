import { compoundInterestAmountFunction } from "../helpers/compound-interest-amount-function";
import { compoundInterestFunction } from "../helpers/compound-interest-function";
import CustomInterestResult from "./custom-interest-result";

const CompoundInterest = () => {
  const time = 8;
  const rate = 0.05;
  const capital = 2000;

  const amount = compoundInterestAmountFunction({ time, rate, capital });
  const compoundInterest = compoundInterestFunction({ amount, capital });

  return (
    <CustomInterestResult
      time={time}
      rate={rate}
      capital={capital}
      amount={amount}
      interest={compoundInterest}
    />
   );
}

export default CompoundInterest;
