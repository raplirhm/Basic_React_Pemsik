const Button = ({ onClick, text, colorClass }) => (
    <button
        onClick={onClick}
        className={`${colorClass} rounded px-4 py-2 text-white font-semibold transition-colors duration-600`}
    >
        {text}
    </button>
);

export default Button