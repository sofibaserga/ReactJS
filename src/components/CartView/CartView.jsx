import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import BotonOutlined from "../Boton/BotonOutlined"
import EmptyCart from "../EmptyCart/EmptyCart"
import { Link } from "react-router-dom"
import BotonFill from "../Boton/BotonFill"


const CartView = () => {
    const { cart, totalCart, clearCart, removeItem } = useContext(CartContext)

    if (cart.length === 0) return <EmptyCart />

    return (
        <section className="container m-auto mt-8">
            <div className="border-b border-verdeOscuroTognis mb-20">
                <h2 className="text-3xl mb-4 text-center">Carrito de compras</h2>
            </div>
            <table className="mt-20 mb-8 table-fixed w-full">
                <thead>
                    <tr className="border-b border-verdeOscuroTognis/50">
                        <th className="font-normal"> </th>
                        <th className="font-normal"> </th>
                        <th className="font-normal">Producto</th>
                        <th className="font-normal">Precio</th>
                        <th className="font-normal">Cantidad</th>
                        <th className="font-normal">Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cart.map((item) => (
                            <tr key={item.id} className="border-b border-verdeOscuroTognis/50 text-center">
                                <td className="cursor-pointer text-4xl font-thin" onClick={() => removeItem(item.id)}>
                                    ×
                                </td>
                                <td className="flex items-center justify-center"><img src={item.portada} alt="Cart img" className="w-32  my-4 rounded-3xl" /></td>
                                <td>{item.name}</td>
                                <td className="font-semibold text-verdeClaroTognis">$ {item.price}</td>
                                <td>{item.cantidad}</td>
                                <td>$ {item.price * item.cantidad}</td>
                            </tr>

                        ))
                    }
                    <tr>
                        <th> </th>
                        <th> </th>
                        <th> </th>
                        <th> </th>
                        <th> </th>
                        <th className="text-xl font-medium my-4">TOTAL: ${totalCart()}</th>
                    </tr>
                </tbody>
            </table>
            <div className="flex items-start justify-between mb-20">
                <BotonOutlined onClick={clearCart}>Vaciar carrito</BotonOutlined>
                <BotonFill><Link to="/checkout">Terminar mi compra</Link></BotonFill>
            </div>
        </section>
    )
}

export default CartView