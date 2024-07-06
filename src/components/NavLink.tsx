import { ReactNode } from "react";
import "../styles/Navbar.css"

interface LinkProps {
    children: ReactNode,
    link: string
}


const NavLink: React.FC<LinkProps> = ({ children, link }) => {
    return (
        <li className="nav-item">
            <a className="nav-link" href={link}>{children}</a>
        </li>);
}

export default NavLink;