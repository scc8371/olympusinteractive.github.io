import React from 'react'
import "../styles/Button.css"

interface Props {
    children?: string
    link: string
}

const Button: React.FC<Props> = ({ children, link }) => {
    return (
        <>
            <a href={link} id="btn-link"><button type="button" className="btn btn-dark" id="btn-panel">{children}</button></a>
        </>
    )
}

export default Button