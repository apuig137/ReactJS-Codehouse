import "./ItemDetailContainer.css"
import { useState, useEffect } from "react"
import { getVehiculoById } from "../../asyncMock"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {
    let [vehiculo,setVehiculo] = useState()

    let { itemId } = useParams()

    useEffect(() => {
        getVehiculoById(itemId)
            .then(response => {
                console.log(response)
                setVehiculo(response)
            })
            .catch(error => {
                console.log(error)
            })
    }, [itemId])

    return (
        <div className="item-detail-container">
            <ItemDetail {...vehiculo}/>
        </div>
    )
}

export default ItemDetailContainer