import Item from "../Item/Item"
import "./ItemList.css"

let ItemList = ({vehiculos}) => {
    return(
        <div className="item-list">
            {vehiculos.map(vehiculo => <Item key={vehiculo.id} {...vehiculo}/>)}
        </div>
    )
}

export default ItemList