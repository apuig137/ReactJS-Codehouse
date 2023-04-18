import "./Cart.css"
import { useCart } from "../../context/CartContext"
import ItemCart from "../ItemCart/ItemCart"

const Cart = () => {
    const { cart, removeAll, total } = useCart()

    return (
        <div className="cart-container">
            <h1>Carrito</h1>
            {
            cart.map(item => <ItemCart key={item.id} {...item}/>)}
            <button className="remove-all" onClick={ removeAll }>VACIAR CARRITO</button>
            <h2>TOTAL: ${total}</h2>
        </div>
    )
}

export default Cart