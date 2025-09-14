import { convertToBrl } from "../helpers/convert-to-brl";
import { simpleInterestAmountFunction } from "../helpers/simple-interest-amount-function";
import { simpleInterestFunction } from "../helpers/simple-interest-function";

export const simpleInterestTest = () => {
  const time1 = 10;
  const rate1 = 0.05;
  const capital1 = 1000000;

  const time2 = 5;
  const rate2 = 0.06;
  const capital2 = 10000;

  const time3 = 8;
  const rate3 = 2;
  const capital3 = 350;

  const simpleInterestResult1 = simpleInterestFunction({time: time1, rate: rate1, capital: capital1});
  const amountResult1 = simpleInterestAmountFunction({ capital: capital1, simpleInterest: simpleInterestResult1 });

  const simpleInterestResult2 = simpleInterestFunction({time: time2, rate: rate2, capital: capital2});
  const amountResult2 = simpleInterestAmountFunction({ capital: capital2, simpleInterest: simpleInterestResult2 });

  const simpleInterestResult3 = simpleInterestFunction({time: time3, rate: rate3, capital: capital3});
  const amountResult3 = simpleInterestAmountFunction({ capital: capital3, simpleInterest: simpleInterestResult3 });

  console.log('Juros Simples 1', convertToBrl(simpleInterestResult1));
  console.log('Montante 1', convertToBrl(amountResult1));
  console.log('Juros Simples 2', convertToBrl(simpleInterestResult2));
  console.log('Montante 2', convertToBrl(amountResult2));
  console.log('Juros Simples 3', convertToBrl(simpleInterestResult3));
  console.log('Montante 3', convertToBrl(amountResult3));
}

simpleInterestTest();
