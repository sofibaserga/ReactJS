import { Link } from 'react-router-dom'


const NavLink = ({href, text}) => {

    return (
            <Link className="px-5 py-2 rounded-full hover:bg-slate-200" to={href}>{text}</Link>
    )
}

export default NavLink;