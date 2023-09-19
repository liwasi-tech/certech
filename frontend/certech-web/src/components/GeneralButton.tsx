interface GeneralButtonProps {
    className?: string;
    text: string;
    onClick?: () => void;
  }
function GeneralButton({className, text, onClick}: GeneralButtonProps) {
    return (
        <button
            className={`${className} bg-sky-900 text-white px-2 py-1 rounded-xl hover:shadow-lg font-normal`}
            onClick={onClick}
        >
            {text}
        </button>
    )
}

export default GeneralButton