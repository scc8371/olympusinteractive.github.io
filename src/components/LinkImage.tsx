interface Props {
    imageUrl: string,
    linkUrl: string,

}

const LinkImage = ({ imageUrl, linkUrl }: Props) => {
    return (
        <div className="linkImg">
            <>
                <a href={linkUrl}><img src={imageUrl} /></a>
            </>
        </div>
    )
}

export default LinkImage