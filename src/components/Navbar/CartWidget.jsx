import cartIcon from '../../assets/img/Navbar/shopping-cart.svg'


const NavLink = () => {

    return (
        <div className='flex flex-row items-center'>
            <img src={cartIcon} alt="Carrito de compras" /> 
            <span className='ms-2'> 0 </span>
        </div>
    )
}

export default NavLink;