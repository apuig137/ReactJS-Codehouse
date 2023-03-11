import "./Navbar.css"
import CartWidget from "../CartWidget/CartWidget"

const Navbar = () => {
    return (
        <nav className = "navbar">
            <h1 className = "tittle">INSUMOS RP-TECH</h1>
            <div className = "navItems">
                <button className="btn">Smartphones</button>
                <button className="btn">Smartwatchs</button>
                <button className="btn">Notebooks</button>
                <CartWidget/>
            </div>
        </nav>
    )
}

export default Navbar