interface HeaderProps{
    children: string
};

const Header = ({children} : HeaderProps) => {
    return (
        <div>
            <>
                <h1 style={{ textAlign: "center", fontSize: "3rem", margin: "2rem" }}>{children}</h1>
            </>
        </div>
    )
}

export default Header