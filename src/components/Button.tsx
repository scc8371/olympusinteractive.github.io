import React from 'react'

interface Props {
    children?: string
}

const Button: React.FC<Props> = ({ children }) => {
    return (
        <>
            <button type="button" className="btn btn-dark">{children}</button>
        </>
    )
}

export default Button