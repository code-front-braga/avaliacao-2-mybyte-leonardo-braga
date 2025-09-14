import { compoundInterestTest } from "./compound-interest-test"
import { simpleInterestTest } from "./simple-interest-test"

// Criei uma função para testar as duas funções de juros
// Para rodar o teste, use o comando pnpm test

export const test = () => {
  simpleInterestTest()
  compoundInterestTest()
}

test()
