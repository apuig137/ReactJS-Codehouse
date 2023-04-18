import "./CartWidget.css"
import cart from "./CartWidget.svg"
import { Link } from "react-router-dom"
import { useCart } from "../../context/CartContext"

const CartWidget = () => {
    const { totalQuantity } = useCart()

    return (
        <Link to={`/cart`}>
            <div className="cart-widget">
                <img className="cart" src={cart}/>
                {totalQuantity}
            </div>
        </Link>
        
    )
}

export default CartWidget