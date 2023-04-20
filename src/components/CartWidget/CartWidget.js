import "./CartWidget.css"
import cart from "./CartWidget.svg"
import { Link } from "react-router-dom"
import { useCart } from "../../context/CartContext"

const CartWidget = () => {
    const { totalQuantity } = useCart()

    return (
            <div className="cart-widget">
                <Link to={`/cart`}><img className="cart" src={cart}/></Link>
                <p>{totalQuantity}</p>
            </div>
    )
}

export default CartWidget