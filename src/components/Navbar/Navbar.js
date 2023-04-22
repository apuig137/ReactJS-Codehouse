import "./Navbar.css"
import CartWidget from "../CartWidget/CartWidget"
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div className="navb">
            <img className="img-logo" src="https://firebasestorage.googleapis.com/v0/b/reactjs-coderhouse-4c952.appspot.com/o/logonavbar-removebg-preview.png?alt=media&token=cf5afa42-a76b-4728-a253-73f4b8f15a8a" alt="logo"></img>
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