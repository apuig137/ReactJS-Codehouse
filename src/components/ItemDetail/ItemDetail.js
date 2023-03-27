import "./ItemDetail.css"

let ItemDetail = ({marca, nombre, precio, modelo, kilometraje, img, transmision, potencia, combustible}) => {
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
        </div>
    )
}

export default ItemDetail