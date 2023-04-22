import "./Navbar.css"
import CartWidget from "../CartWidget/CartWidget"
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div className="navb">
            <p className="brand">PG INSUMOS</p>
            <ul>
                <li className="item-effect"><Link to={`/`}>Inicio</Link></li>
                <li className="item-effect"><Link to={`/sobre-nosotros`}>Sobre Nosotros</Link></li>
                <li className="item-effect"><Link to={`/contacto`}>Contactanos</Link></li>
                <CartWidget/>
            </ul>
        </div>
    )
}

export default Navbar