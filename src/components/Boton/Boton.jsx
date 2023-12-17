

const Boton = ({ children, className = "", onClick }) => {

    return (
        <button
            onClick={onClick}
            className={`bg-verdeNutrix-100 rounded-full flex items-center py-2 px-4 text-center text-white my-4 ${className}`}
        >
            {children}
        </button>
    );
};

export default Boton;