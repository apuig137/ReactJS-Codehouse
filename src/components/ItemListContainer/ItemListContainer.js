import "./ItemListContainer.css"
import Carousel from "../Carousel/Carousel"
import ItemList from "../ItemList/ItemList"
import Spinner from "../Spinner/Spinner"

import { useState, useEffect } from "react"
import { getDocs, collection, query, where } from "firebase/firestore"
import { db } from "../../services/Firebase"
import { useParams } from "react-router-dom"

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const [load, setLoad] = useState(true)

    const { category } = useParams()

    useEffect(() => {
        const productsRef = category 
            ? query(collection(db, "products"), where("category", "==", category))
            : collection(db, "products")

        getDocs(productsRef)
            .then(snapshot => {
                const productAdapted = snapshot.docs.map(doc => {
                    const data = doc.data()
                    return { id: doc.id, ...data }
                })
                setProducts(productAdapted)
            })
            .catch(error => {
                console.log(error);
            })
            .finally(() => {
                setLoad(false)
            })
    },[category])

    if(load){
        return (
            <div>
                <Spinner/>
            </div>
        )
    }
    
    if(category){
        return (
            <div className="item-list-container">
                <h1 className="title-page">{greeting}</h1>
                <ItemList products={products}/>
            </div>
        )
    }

    return (
        <div className="item-list-container">
            <Carousel/>
            <h1 className="title-page">{greeting}</h1>
            <ItemList products={products}/>
        </div>
        
    )
}

export default ItemListContainer