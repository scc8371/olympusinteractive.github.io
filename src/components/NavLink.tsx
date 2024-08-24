import { ReactNode, useEffect, useState } from "react";
import "../styles/Navbar.css"
import "../styles/NavLink.css"

interface LinkProps {
    children: ReactNode;
    link: string;
}



const NavLink: React.FC<LinkProps> = ({ children, link }) => {
    const [highlighted, setHighlighted] = useState(false);

    useEffect(() => {
        const sectionId = link.replace('#', '');
        const section = document.getElementById(sectionId);
        if (!section) return;

        const checkSectionInView = () => {
            const sectionTop = section.getBoundingClientRect().top + window.scrollY;
            const sectionBottom = section.getBoundingClientRect().bottom + window.scrollY;

            const viewportHeight = window.innerHeight;

            const viewportCenter = viewportHeight / 2;
            const scrollY = window.scrollY + viewportCenter;

            console.log(scroll);
            console.log(sectionId, sectionTop, sectionBottom);

            const inArea = scrollY < sectionBottom && scrollY > sectionTop;

            setHighlighted(inArea);

        };

        window.addEventListener("scroll", checkSectionInView);

        checkSectionInView();

        return () => {
            window.removeEventListener("scroll", checkSectionInView);
        };
    }, [link]);

    return (
        <li className="nav-item">
            <a className={`nav-link ${highlighted ? "highlighted" : ""}`} href={link} onClick={() => {
                let navbarMarkup: any = document.querySelector("#navbarNavAltMarkup");
                navbarMarkup.classList.remove("show");
            }}>{children}</a>
        </li>);
}

export default NavLink;