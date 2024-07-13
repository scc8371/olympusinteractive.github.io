import React, { ReactNode } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../styles/IconPanel.css"

interface Props {
    icon_definition: any;
    children?: ReactNode
}

const IconPanel: React.FC<Props> = ({ icon_definition, children }) => {
    return (
        <div className="icon-panel panel panel-default">
            <div className="icon-panel-body panel-body">
                <FontAwesomeIcon className='panel-icon' icon={icon_definition}></FontAwesomeIcon>
                <p className="icon-panel-desc">{children}</p>
            </div>
        </div>
    )
}

export default IconPanel