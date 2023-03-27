import "./Item.css"
import { Link } from "react-router-dom"

let Item = ({marca, nombre, precio, img, modelo, kilometraje, id}) => {
    return (
        <div className="card-car">
            <img src={img} alt={nombre}/>
            <div className="card-info">
                <div className="first-info">
                    <h3>U$S{precio}</h3>
                    <p>{modelo} | {kilometraje}</p>
                </div>
                <p>{marca} {nombre}</p>
                <div className="button-item">
                    <Link to={`/item/${id}`} href="#">Ver detalle</Link>
                </div>
            </div>
        </div>
    )
    
}

export default Item