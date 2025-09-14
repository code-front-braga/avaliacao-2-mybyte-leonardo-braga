import { useState } from "react"
import CustomButton from "./custom-button";
import SimpleInterest from "./simple-interest";
import CompoundInterest from "./compound-interest";

type InterestType = 'simple' | 'compound';

const UIResult = () => {
  const [selectedType, setSelectedType] = useState<InterestType | null>(null);

  const simpleType = selectedType === 'simple';
  const compoundType = selectedType === 'compound';

  const handleSelectType = (type: InterestType) => {
    setSelectedType(type)
  };

  return (
    <section className="text-white bg-[#242424] p-8 rounded-lg flex flex-col items-center gap-2 shadow-blue-300 shadow-[0px_0px_12px_#ffffff66]">
      <div className='flex items-center gap-4'>
        <CustomButton text="Simples" onClick={() => handleSelectType('simple')} isActive={simpleType} />
        <CustomButton text="Composto" onClick={() => handleSelectType('compound')} isActive={compoundType} />
      </div>
      <h1 className="text-3xl font-bold">Resultado</h1>

      {simpleType && <SimpleInterest />}
      {compoundType && <CompoundInterest />}
    </section>
   );
}

export default UIResult;
