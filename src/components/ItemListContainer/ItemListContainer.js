import "./ItemListContainer.css"
import Carousel from "../Carousel/Carousel"

const ItemListContainer = ({greeting}) => {
    return (
        <div>
            <Carousel/>
            <h1 className="title-page">{greeting}</h1>
        </div>
        
    )
}

export default ItemListContainer