
import React, { ReactNode } from 'react'
import "../styles/Navbar.css"
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

interface NavbarProps {
    children?: ReactNode,
    imageLink?: string,
}


const Navbar : React.FC<NavbarProps> = ({children, imageLink}) => {
    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <img className="navbar-brand" src={imageLink}></img>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <ul className="navbar-nav ms-auto">
                            {children}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;