import "./CartWidget.css"
import cart from "./CartWidget.svg"

const CartWidget = () => {
    return (
        <div className="cart-widget">
            <img className="cart" src={cart}/>
            0
        </div>
    )
}

export default CartWidget