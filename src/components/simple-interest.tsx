import { simpleInterestAmountFunction } from "../helpers/simple-interest-amount-function"
import { simpleInterestFunction } from "../helpers/simple-interest-function"
import CustomInterestResult from "./custom-interest-result"

const SimpleInterest = () => {
  const time = 8;
  const rate = 0.05;
  const capital = 2000;

  const simpleInterest = simpleInterestFunction({
    capital,
    rate,
    time,
  });

  const amount = simpleInterestAmountFunction({ capital, simpleInterest });

  return (
    <CustomInterestResult
      time={time}
      rate={rate}
      amount={amount}
      capital={capital}
      interest={simpleInterest}
    />
   );
}

export default SimpleInterest;
