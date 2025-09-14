export const convertToBrl = (value: number) => {
  // Converte o valor para o formato de moeda brasileira (BRL)
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}
