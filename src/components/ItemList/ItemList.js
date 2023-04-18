import Item from "../Item/Item"
import "./ItemList.css"

let ItemList = ({products}) => {
    return(
        <div className="item-list">
            {products.map(product => <Item key={product.id} {...product}/>)}
        </div>
    )
}

export default ItemList