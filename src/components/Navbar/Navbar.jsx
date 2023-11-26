import logo from '../../assets/img/Navbar/logo.svg'
import NavLink from './NavLink.jsx'
import CartWidget from './CartWidget.jsx'

const Navbar = () => {

    return (
        <header>
            <div className='bg-slate-100 flex flex-row place-content-between items-center px-24	py-4'>
                <a href="#">
                    <img className='w-24' src={logo} alt="logo" />
                </a>
                <nav className='flex gap-10'>
                    <NavLink href={"#"} text={"Productos"} />
                    <NavLink href={"#"} text={"Sobre Nosotros"} />
                    <NavLink href={"#"} text={"Preguntas frecuentes"} />
                    <NavLink href={"#"} text={"Contacto"} />
                </nav>
                <CartWidget />
            </div>
        </header>
    )
}
export default Navbar;


