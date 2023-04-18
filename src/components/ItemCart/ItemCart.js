import "./ItemCart.css"
import { useCart } from "../../context/CartContext"

let ItemCart = ({ quantity, price, name, id }) => {
    let { removeItem } = useCart()

    return (
        <div className="item-cart-container">
            <p className="p-cart">x{quantity} {name}</p>
            <p className="p-cart price">U$S{price}</p>
            <button className="button-cart" onClick={ () => removeItem(id) }>X</button>
        </div>
    )
}

export default ItemCart