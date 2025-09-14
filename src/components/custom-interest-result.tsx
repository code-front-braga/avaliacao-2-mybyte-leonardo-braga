import { convertToBrl } from "../helpers/convert-to-brl";

// Criei um componente utilitário para evitar repetição de código.
// Ele recebe as props e retorna um componente com os valores formatados.
// O "presentValue" é opcional, pois é utilizado somente no juros composto

interface CustomInterestResultProps {
  capital: number;
  rate: number;
  time: number;
  interest: number;
  amount: number;
  presentValue?: number;
}

const CustomInterestResult = ({
  capital,
  rate,
  time,
  interest,
  amount,
  presentValue,
}: CustomInterestResultProps) => {
  return (
    <div>
      <p className="text-lg">Capital: {convertToBrl(capital)}</p>
      <p className="text-lg">Tempo: {time}</p>
      <p className="text-lg">Taxa: {rate}</p>
      <p className="text-lg">Juros: {convertToBrl(interest)}</p>
      <p className="text-lg">Montante: {convertToBrl(amount)}</p>
      {presentValue && (
        <p className="text-lg">
          Valor Presente: {convertToBrl(presentValue)}
        </p>
      )}
    </div>
   );
}

export default CustomInterestResult;
