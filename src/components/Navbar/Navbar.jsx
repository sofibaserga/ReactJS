import NavLink from './NavLink.jsx'
import CartWidget from './CartWidget.jsx'
import { Link } from 'react-router-dom'


const Navbar = () => {

    return (
        <header className='sticky top-0'>
            <div>
                <p className='text-center bg-verdeClaroTognis py-2 text-sm'>Lunes a viernes de 8 a 20 hs • Sábados y domingos de 9 a 20hs</p>
            </div>
            <div className='bg-cremaTognis border-b border-negroTognis flex flex-row place-content-between items-center px-24 py-4 '>
                <Link to="/">
                    <img className='w-40' src="src/assets/img/Navbar/Logo.svg" alt="logo" />
                </Link>
                <nav className='flex gap-10'>
                    <NavLink href={"/"} text={"Todos los productos"} />
                    <NavLink href={"/category/dulce"} text={"Dulce"} />
                    <NavLink href={"/category/salado"} text={"Salado"} />
                    <NavLink href={"/category/merch"} text={"Merch"} />
                </nav>
                <CartWidget />
            </div>
        </header>
    )
}
export default Navbar;


