import "./ItemDetailContainer.css"
import ItemDetail from "../ItemDetail/ItemDetail"
import Spinner from "../Spinner/Spinner"

import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getDoc, doc } from "firebase/firestore"
import { db } from "../../services/Firebase"

const ItemDetailContainer = () => {
    const [product,setProduct] = useState()
    const [load, setLoad] = useState(true)

    const { itemId } = useParams()

    useEffect(() => {
        const productRef = doc(db, "products", itemId)
        
        getDoc(productRef)
            .then(snapshot => {
                const data = snapshot.data()
                const productAdapted = { id: snapshot.id, ...data}
                setProduct(productAdapted)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setLoad(false)
            })
    }, [itemId])

    if(load){
        return (
            <div>
                <Spinner/>
            </div>
        )
    }

    return (
        <div className="item-detail-container">
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer