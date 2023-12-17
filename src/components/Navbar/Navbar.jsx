import logo from '../../assets/img/Navbar/logo.svg'
import NavLink from './NavLink.jsx'
import CartWidget from './CartWidget.jsx'
import { Link } from 'react-router-dom'


const Navbar = () => {

    return (
        <header>
            <div className='bg-cremaNutrix border-b flex flex-row place-content-between items-center px-24	py-4'>
                <Link to="/">
                    <img className='w-24' src={logo} alt="logo" />
                </Link>
                <nav className='flex gap-10'>
                    <NavLink href={"/"} text={"Todos los productos"} />
                    <NavLink href={"/category/freidora-de-aire"} text={"Freidora de aire"} />
                    <NavLink href={"/category/fabricadora-de-hielo"} text={"Fabricadora de hielo"} />
                    <NavLink href={"/category/juguera"} text={"Juguera"} />
                    <NavLink href={"/category/licuadora"} text={"Licuadora"} />
                </nav>
                <CartWidget />
            </div>
        </header>
    )
}
export default Navbar;


