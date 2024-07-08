import "../styles/Header.css"

interface HeaderProps{
    children: string
    subtitle: string
};

const Header = ({children, subtitle} : HeaderProps) => {
    return (
        <div>
            <>
            <div className="headerGroup">
                <h1 style={{fontSize: "3rem" }}>{children}</h1>
                <h3>{subtitle}</h3>
            </div> 
            </>
        </div>
    )
}

export default Header