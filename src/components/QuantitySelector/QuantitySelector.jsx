

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
            <BotonFill className="py-2 px-4 my-8" onClick={handleRestar} >-</BotonFill>
            <p className="text-white">{cantidad}</p>
            <BotonFill className={cantidad === stock
                ? `py-2 px-4 my-8 bg-neutral-300 text-neutral-500 border-neutral-300 hover:bg-neutral-300 hover:text-gray-500 cursor-default`
                : `py-2 px-4 my-8`
            } onClick={handleSumar}>+</BotonFill>
        </div>
    );
};

export default QuantitySelector;