interface GeneralButtonProps {
    className?: string;
    text: string;
    onClick?: () => void;
  }
function GeneralButton({className, text, onClick}: GeneralButtonProps) {
    return (
        <button
            className={`${className ? className : ""} bg-sky-900 text-white px-2 py-1 rounded-xl hover:shadow-lg font-normal focus:outline-none focus:ring`}
            onClick={onClick}
        >
            {text}
        </button>
    )
}

export default GeneralButton