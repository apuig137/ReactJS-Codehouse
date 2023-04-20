import "./Cart.css"

import { useCart } from "../../context/CartContext"
import { Link } from "react-router-dom"

import ItemCart from "../ItemCart/ItemCart"

const Cart = () => {
    const { cart, removeAll, total } = useCart()

    if(cart.length === 0){
        return (
            <div className="cart-null">
                <h2>Todavía no agregaste ningún producto a tu carrito.</h2>
            </div>
        )
    }

    return (
        <div className="cart-container">
            <h1>CARRITO</h1>
            {   cart.map(item => <ItemCart key={item.id} {...item}/>)   }
            <div className="cart-functionalities">
                <h2>TOTAL: U$D{total}</h2>
                <Link to="/checkout" className="confirm-purchase">CONFIRMAR COMPRA</Link>
                <button className="remove-all" onClick={ removeAll }>VACIAR CARRITO</button>
            </div>
        </div>
    )
}

export default Cart