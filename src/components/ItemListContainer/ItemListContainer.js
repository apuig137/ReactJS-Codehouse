import "./ItemListContainer.css"
import Carousel from "../Carousel/Carousel"
import { getVehiculos } from "../../asyncMock"
import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"


const ItemListContainer = ({ greeting }) => {
    let [vehiculos, setVehiculos] = useState([])

    let { category } = useParams()

    useEffect(() => {
        getVehiculos(category)
            .then(resolve => {
                setVehiculos(resolve)
            })
            .catch(error => {
                console.log(error)
            })
    },[category])

    return (
        <div className="item-list-container">
            <Carousel/>
            <h1 className="title-page">{greeting}</h1>
            <ItemList vehiculos={vehiculos}/>
        </div>
        
    )
}

export default ItemListContainer