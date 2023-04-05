import "./Cart.css"
import { useCart } from "../../context/CartContext"
import ItemCart from "../ItemCart/ItemCart"
import { Button } from "bootstrap"

let Cart = () => {
    let { cart, removeAll } = useCart()

    return (
        <div className="cart-container">
            <h1>Carrito</h1>
            {
            cart.map(item => <ItemCart key={item.id} {...item}/>)}
            <button onClick={ removeAll }>VACIAR CARRITO</button>
        </div>
    )
}

export default Cart