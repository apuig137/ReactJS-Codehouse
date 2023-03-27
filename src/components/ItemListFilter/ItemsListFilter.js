import "../ItemListContainer/ItemListContainer.css"
import { getVehiculoByCategory } from "../../asyncMock"
import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

const ItemListFilter = ({ greeting }) => {
    let [vehiculos, setVehiculos] = useState([])

    let { category } = useParams()

    useEffect(() => {

        getVehiculoByCategory(category)
            .then(resolve => {
                setVehiculos(resolve)
            })
            .catch(error => {
                console.log(error)
            })
    },[category])

    return (
        <div className="item-list-container">
            <h1 className="title-page">{category}</h1>
            <ItemList vehiculos={vehiculos}/>
        </div>
        
    )
}

export default ItemListFilter