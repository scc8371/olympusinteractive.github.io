import React from 'react'
import IconButton from './IconButton'

interface IconDefinition {
    link: string,
    icon_definition: any
}

interface Props {
    icons: IconDefinition[];
}

const IconList: React.FC<Props> = ({ icons }) => {
    return (
        <>
            <div className="footer-logos">
                {icons.map((icon, index) => (
                    <IconButton
                        key={index}
                        link={icon.link}
                        icon_definition={icon.icon_definition}
                    />
                ))}
            </div>
        </>
    )
}

export default IconList