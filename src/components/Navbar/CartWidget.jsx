import { Link } from 'react-router-dom'
import cartIcon from '../../assets/img/Navbar/shopping-cart.svg'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const CartWidget = () => {

    const { itemsInCart } = useContext(CartContext)

    return (
        <Link to="/cart" className='flex flex-row items-center cursor-pointer'>
            <img src={cartIcon} alt="Carrito de compras" /> 
            <span className='ms-2'> { itemsInCart() } </span>
        </Link>
    )
}

export default CartWidget;