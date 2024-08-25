import React from 'react'


interface Props {
    hasBgImage: boolean;
    color: 'primary' | 'secondary'
    position: 'absolute' | 'relative'
}
const Divider: React.FC<Props> = ({hasBgImage, color, position}) => {
    return (
        <>
            <div className={`${hasBgImage ? 'has-bg-img' : ''}`}>
                <div className={`section-divider ${color}`} style={{position: position}}></div>
            </div>
        </>
    )
}

export default Divider