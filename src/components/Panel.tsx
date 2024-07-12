import React, { useState } from 'react'
import "../styles/Panel.css"
import Button from "./Button"


interface Props {
    imageSource: string,
    imageAlt?: string,
    title: string,
    dates?: string,
    children?: string,
    buttonText?: string,
    tag?: string
}



const Panel: React.FC<Props> = ({ imageSource, imageAlt, children, tag, title, dates, buttonText }) => {

    const [buttonVisibility, setButtonVisibility] = useState(false);
    if((buttonText != undefined) && buttonVisibility !== true){
        setButtonVisibility(true);
    } 

    return (
        <>
            <div className="panel panel-default" id={tag}>
                <div className="panel-body">
                    <img src={imageSource} alt={imageAlt}></img>
                    <div className="panel-info">
                        <h2 className="panel-title">{title}</h2>
                        <h2 className="panel-dates">{dates}</h2>
                    </div>
                    <p className="panel-desc">{children}</p>
                    {buttonVisibility && <Button>{buttonText}</Button>}
                </div>
            </div>
        </>
    )
}

export default Panel