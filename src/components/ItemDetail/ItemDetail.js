import "./ItemDetail.css"
import { useCart } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import ItemCount from "../ItemCount/ItemCount"


let ItemDetail = ({id, marca, nombre, precio, modelo, kilometraje, img, transmision, potencia, combustible, stock}) => {
    
    let { addItem, isInCart } = useCart()

    const handleOnAdd = (quantity) => {
        const productToAdd = {
            id, img, marca, modelo, nombre, precio, quantity
        }
        addItem(productToAdd)
    }

    return(
        <div className="item-detail">
            <img src={img} alt={nombre}/>
            <div className="card-info">
                <div className="first-info">
                    <h3>U$S{precio}</h3>
                    <p>{modelo} | {kilometraje}</p>
                </div>
                <p>{marca} {nombre}</p>
                <p>{kilometraje} kilometros</p>
                <p>Transmision: {transmision}</p>
                <p>Potencia: {potencia}</p>
                <p>Tipo de combustible: {combustible}</p>
            </div>
            <div className="buttons-detail">
                {
                    isInCart(id) ? (
                        <Link className="link-detail" to="/cart">Terminar compra</Link>
                    ) : (
                        <ItemCount stock={ stock } onAdd={handleOnAdd}/>
                    )
                }
            </div>
        </div>
    )
}



export default ItemDetail