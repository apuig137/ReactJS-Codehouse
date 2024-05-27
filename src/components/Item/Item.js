import "./Item.css"
import { Link } from "react-router-dom"

let Item = ({id, name, price, img}) => {
    return (
        <div className="card-car">
            <img src={img} alt={name}/>
            <div className="card-info-list">
                <div className="first-info">
                    <h3>U$S{price}</h3>
                    <p>{name}</p>
                </div>
                <div className="button-item">
                    <Link to={`/item/${id}`} href="#">Ver detalle</Link>
                </div>
            </div>
        </div>
    )
    
}

export default Item