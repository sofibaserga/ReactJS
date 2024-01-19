import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import Boton from "../Boton/Boton"
import EmptyCart from "../EmptyCart/EmptyCart"
import { Link } from "react-router-dom"


const CartView = () => {
    const { cart, totalCart, clearCart, removeItem } = useContext(CartContext)

    if (cart.length === 0) return <EmptyCart />

    return (
        <section className="container m-auto mt-8">
            <div className="border-b border-verdeOscuroTognis mb-8">
                <h2 className="text-3xl mb-4 text-center">Carrito de compras</h2>
            </div>
            <div className="mx-20">
                <ul className="flex items-center border-b border-verdeOscuroTognis/50 py-4 justify-center gap-32 font-medium">
                    <li>
                        <p>Nombre</p>
                    </li>
                    <li>
                        <p>Precio unitario</p>
                    </li>
                    <li>
                        <p>Cantidad</p>
                    </li>
                    <li>
                        <p>Precio subtotal</p>
                    </li>
                </ul>


                <ul className="mb-20">
                    {
                        cart.map((item) => (
                            <li key={item.id} className="flex items-center border-b border-verdeOscuroTognis/50 py-8 justify-between">
                                <img src={item.portada} alt="Cart img" className="w-32 rounded-3xl" />

                                <h3>{item.name}</h3>
                                <p>$ {item.price}</p>
                                <p>Cantidad: {item.cantidad}</p>
                                <p>$ {item.price * item.cantidad}</p>


                                <Boton onClick={() => removeItem(item.id)}>
                                    Eliminar
                                </Boton>
                            </li>
                        ))
                    }
                </ul>
                <div className="flex items-start justify-between gap-10 mb-20">
                    <Boton onClick={clearCart}>Vaciar carrito</Boton>
                    <div className="flex flex-col items-end">
                        <h4 className="text-xl">TOTAL: ${totalCart()}</h4>
                        <Boton className="border-verdeClaroTognis bg-verdeClaroTognis text-white my-8 hover:bg-verdeMasClaroTognis"><Link to="/checkout">Terminar mi compra</Link></Boton>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default CartView