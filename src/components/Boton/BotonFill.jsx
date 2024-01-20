

const BotonFill = ({ children, className = "", onClick }) => {

    return (
        <button
            onClick={onClick}
            className={`border-solid border bg-verdeClaroTognis border-verdeClaroTognis rounded-full flex items-center py-1 px-12 text-center tracking-wider text-white my-4 hover:bg-verdeMasClaroTognis hover:text-white ${className}`} >
            {children}
        </button>
    );
};

export default BotonFill;