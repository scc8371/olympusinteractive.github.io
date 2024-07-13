import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/IconButton.css"

interface Props {
    icon_definition: any;
    link: string;
}

const IconButton: React.FC<Props> = ({ icon_definition, link, }) => {
    return (
        <>
            <div className="icon-button">
                <a href={link}><FontAwesomeIcon className='footer-icon' icon={icon_definition}></FontAwesomeIcon></a>
            </div>
        </>
    )
}

export default IconButton