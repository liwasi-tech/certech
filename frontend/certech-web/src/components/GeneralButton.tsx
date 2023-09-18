interface GeneralButtonProps {
    className: string;
    text: string;
    onClick?: () => void;
  }
function GeneralButton({className, text, onClick}: GeneralButtonProps) {
    return (
        <button
            className={`${className} bg-white text-sky-700 px-2 py-1 rounded-full hover:shadow-lg`}
            onClick={onClick}
        >
            {text}
        </button>
    )
}

export default GeneralButton