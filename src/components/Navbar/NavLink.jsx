


const NavLink = ({href, text}) => {

    return (
            <a className="px-5 py-2 rounded-full hover:bg-slate-200" href={href}>{text}</a>
    )
}

export default NavLink;