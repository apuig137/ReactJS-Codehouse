import "./Navbar.css"
import CartWidget from "../CartWidget/CartWidget"
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div class="navb">
            <ul>
                <li className="item-effect"><Link to={`/`}>Inicio</Link></li>
                <li className="item-effect"><a href="#">Sobre nosotros</a></li>
                <li className="item-effect"><a href="#">Contactanos</a></li>
                <li className="cart-li"><a href="#"><CartWidget/></a></li>
            </ul>
        </div>
    )
}

export default Navbar