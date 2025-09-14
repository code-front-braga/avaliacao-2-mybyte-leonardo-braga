import { convertToBrl } from './../helpers/convert-to-brl';
import { compoundInterestAmountFunction } from "../helpers/compound-interest-amount-function";
import { compoundInterestFunction } from "../helpers/compound-interest-function";
import { presentValueFunction } from "../helpers/present-value-function";

export const compoundInterestTest = () => {
  const time1 = 10;
  const rate1 = 0.05;
  const capital1 = 1000000;
  const futureValue1 = 10500;

  const time2 = 5;
  const rate2 = 0.06;
  const capital2 = 10000;
  const futureValue2 = 10600;

  const time3 = 8;
  const rate3 = 0.03;
  const capital3 = 350;
  const futureValue3 = 360;

  const amount1 = compoundInterestAmountFunction({ capital: capital1, rate: rate1, time: time1 });
  const compoundInterestResult1 = compoundInterestFunction({ amount: amount1, capital: capital1 });
  const presentValue1 = presentValueFunction({ futureValue: futureValue1, time: time1, rate: rate1 });

  const amount2 = compoundInterestAmountFunction({ capital: capital2, rate: rate2, time: time2 });
  const compoundInterestResult2 = compoundInterestFunction({ amount: amount2, capital: capital2 });
  const presentValue2 = presentValueFunction({ futureValue: futureValue2, time: time2, rate: rate2 });

  const amount3 = compoundInterestAmountFunction({ capital: capital3, rate: rate3, time: time3 });
  const compoundInterestResult3 = compoundInterestFunction({ amount: amount3, capital: capital3 });
  const presentValue3 = presentValueFunction({ futureValue: futureValue3, time: time3, rate: rate3 });

  console.log('Montante 1', convertToBrl(amount1));
  console.log('Juros Compostos 1', convertToBrl(compoundInterestResult1));
  console.log('Valor Presente 1', convertToBrl(presentValue1));
  console.log('Montante 2', convertToBrl(amount2));
  console.log('Juros Compostos 2', convertToBrl(compoundInterestResult2));
  console.log('Valor Presente 2', convertToBrl(presentValue2));
  console.log('Montante 3', convertToBrl(amount3));
  console.log('Juros Compostos 3', convertToBrl(compoundInterestResult3));
  console.log('Valor Presente 3', convertToBrl(presentValue3));
}

compoundInterestTest();
