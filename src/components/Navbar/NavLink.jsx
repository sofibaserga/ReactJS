import { Link } from 'react-router-dom'


const NavLink = ({href, text}) => {

    return (
            <Link className="border-solid border border-verdeOscuroTognis rounded-full flex items-center py-1 px-12 text-center tracking-wider text-verdeOscuroTognis my-4 hover:bg-verdeOscuroTognis hover:text-white" to={href}>{text}</Link>
    )
}

export default NavLink;