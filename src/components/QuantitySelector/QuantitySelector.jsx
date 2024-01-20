

import BotonFill from "../Boton/BotonFill";

const QuantitySelector = ({ cantidad, stock, setCantidad }) => {

    const handleSumar = () => {
        cantidad < stock && setCantidad(cantidad + 1)
    }

    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    return (
        <div className="flex gap-4 items-center">
            <BotonFill className="bg-verdeClaroTognis text-white py-2 px-4 my-8 hover:bg-verdeMasClaroTognis" onClick={handleRestar}>-</BotonFill>
            <span className="text-white">{cantidad}</span>
            <BotonFill className="bg-verdeClaroTognis text-white py-2 px-4 my-8 hover:bg-verdeMasClaroTognis" onClick={handleSumar}>+</BotonFill>
        </div>
    );
};

export default QuantitySelector;