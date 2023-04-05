import "./ItemCart.css"
import { useCart } from "../../context/CartContext"

let ItemCart = ({ img, quantity, precio, nombre, marca, modelo, id }) => {
    let { removeItem } = useCart()

    return (
        <div className="item-cart-container">
            <p className="p-cart">{marca} {nombre} {modelo}</p>
            <p className="p-cart price"> x{quantity} U$S {precio}</p>
            <button onClick={ removeItem }>X</button>
        </div>
    )
}

export default ItemCart