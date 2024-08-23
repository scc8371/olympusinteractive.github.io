import React, { ReactNode } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../styles/IconPanel.css"

interface Props {
    icon_definition?: any;
    icon_title?: string
    children?: ReactNode
}

const IconPanel: React.FC<Props> = ({ icon_definition, children, icon_title }) => {
    return (
        <div className="icon-panel panel panel-default">
            <div className="icon-panel-body panel-body">
                <FontAwesomeIcon className='panel-icon' icon={icon_definition}></FontAwesomeIcon>
                <div id="icon-panel-body-w-padding">
                    <h1 id="icon-panel-title">{icon_title ? icon_title : "Example Title"}</h1>
                    <p className="icon-panel-desc">{children}</p>
                </div>
            </div>
        </div>
    )
}

export default IconPanel