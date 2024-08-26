import React, { ReactElement, ReactNode, useState } from 'react'
import "../styles/Panel.css"
import Button from "./Button"


interface Props {
    imageSource?: string,
    imageAlt?: string,
    title: string,
    dates?: string,
    children?: ReactNode,
    buttonText?: string,
    tag?: string,
    link?: string,
    innerElement?: ReactElement
}



const Panel: React.FC<Props> = ({ imageSource, imageAlt, children, tag, title, dates, buttonText, link, innerElement }) => {

    const [buttonVisibility, setButtonVisibility] = useState(false);
    if ((buttonText != undefined) && buttonVisibility !== true) {
        setButtonVisibility(true);
    }

    const [imageVisibility, setImageVisibility] = useState(false);

    if ((imageSource != undefined) && imageVisibility !== true) {
        setImageVisibility(true);
    }

    const handleClick = () => {
        if (link) {
            window.location.href = link;
        }
    }

    return (
        <>
        {console.log(link)}
            <div className={`panel panel-default ${link ? 'clickable' : ''}`} id={tag} onClick={handleClick}>
                <div className="panel-body">

                    {imageVisibility && <img src={imageSource} alt={imageAlt}></img>}

                    <div className="panel-info">
                        <h2 className="panel-title">{title}</h2>
                        <h2 className="panel-dates">{dates}</h2>
                    </div>
                    <p className="panel-desc">{children}</p>
                    {buttonVisibility && <Button link={link ? link : ""}>{buttonText}</Button>}

                    {innerElement}
                </div>
            </div>
        </>
    )
}

export default Panel