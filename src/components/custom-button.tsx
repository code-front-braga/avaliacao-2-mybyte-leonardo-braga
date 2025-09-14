interface CustomButtonProps {
  text: string;
  isActive: boolean;
  onClick: () => void;
}

const CustomButton = ({ text, onClick, isActive }: CustomButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`bg-black/60 p-2 w-26 rounded-lg cursor-pointer ${isActive && 'border-2 border-white'}`}
      >
        {text}
      </button>
   );
}

export default CustomButton;
