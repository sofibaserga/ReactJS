import Boton from "../Boton/Boton";
import { useContext, useState } from "react";
import QuantitySelector from "../QuantitySelector/QuantitySelector";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";



const ItemDetail = ({ item }) => {

    const [cantidad, setCantidad] = useState(1)
    const { addToCart, isInCart } = useContext(CartContext)

    const handleAgregar = () => {
        const itemToCart = {
            ...item,
            cantidad
        }
        addToCart(itemToCart)
    }

    return (
        <div className="py-1 bg-verdeOscuroTognis">

            <div className="mx-40 mt-16 mb-36 flex gap-20 justify-center items-center">
                <img className="rounded-3xl " src={item.portada} alt={item.name} />

                <div className="w-2/5">
                    <h3 className="text-2xl mb-2 text-white">{item.name}</h3>
                    <p className="text-xl font-light text-white mb-4">{item.description}</p>
                    <p className="text-xl text-verdeClaroTognis mb-8">${item.price}</p>

                    {
                        isInCart(item.id)
                            ? <div className="border-b border-t border-negroTognis/30">
                                <Boton className="bg-verdeClaroTognis text-white my-8 hover:bg-verdeMasClaroTognis"><Link to="/cart">Terminar mi compra</Link></Boton>
                            </div>
                            : <>

                                <QuantitySelector
                                    cantidad={cantidad}
                                    stock={item.stock}
                                    setCantidad={setCantidad}
                                />


                                <div className="border-b border-t border-negroTognis/30">
                                    <Boton className="bg-verdeClaroTognis text-white my-8 hover:bg-verdeMasClaroTognis" onClick={handleAgregar}>Agregar al carrito</Boton>
                                </div>
                            </>
                    }

                </div>
            </div>


        </div>
    );
};

export default ItemDetail;