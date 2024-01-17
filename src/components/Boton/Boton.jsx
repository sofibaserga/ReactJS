

const Boton = ({ children, className = "", onClick }) => {

    return (
        <button
            onClick={onClick}
            className={`border-solid border border-verdeOscuroTognis rounded-full flex items-center py-1 px-12 text-center tracking-wider text-verdeOscuroTognis my-4 hover:bg-verdeOscuroTognis hover:text-white ${className}`} >
            {children}
        </button>
    );
};

export default Boton;