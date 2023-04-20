import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount"

import { useCart } from '../../context/CartContext'
import { Link } from 'react-router-dom'

let ItemDetail = ({id, category, name, price, description, img, stock}) => {
    let { addItem, isInCart } = useCart()

    const handleOnAdd = (quantity) => {
        const productToAdd = {
            id,category,name,price,description,img,quantity,stock
        }
        addItem(productToAdd)
    }

    return(
        <div className="item-detail">
            <div className="img">
                <img src={img} alt={name}/>
            </div>
            
            <div className="card-info">
                <h3>U$S{price}</h3>
                <h4>{name}</h4>
                <p>{description}</p>
            </div>
            <div className="buttons-detail">
                {
                    isInCart(id) ? (
                        <Link className="link-detail" to="/cart">Ir al carrito</Link>
                    ) : (
                        <ItemCount stock={ stock } onAdd={handleOnAdd}/>
                    )
                }
            </div>
        </div>
    )
}



export default ItemDetail