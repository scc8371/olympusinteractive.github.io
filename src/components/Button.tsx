import React, { MouseEventHandler } from 'react'
import "../styles/Button.css"

interface Props {
    children?: string
    link: string
    onclick?: MouseEventHandler
}

const Button: React.FC<Props> = ({ children, link, onclick }) => {

    const hasLink = link && link.trim() !== '';

    return hasLink ? (
        <>
            <a href={link} id="btn-link"><button type="button" className="btn btn-dark" id="btn-panel">{children}</button></a>
        </>
    ) : (
        <>
            <a id="btn-link" type="submit"><button type="submit" className="btn btn-dark" id="btn-panel" onClick={onclick}>{children}</button></a>
        </>
    )
}

export default Button