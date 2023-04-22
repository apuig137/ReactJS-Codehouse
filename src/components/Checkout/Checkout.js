import "./Checkout.css"

import { getDocs, addDoc, writeBatch, collection, query, where, documentId } from "firebase/firestore"
import { useCart } from "../../context/CartContext"
import { db } from "../../services/Firebase"
import { useState } from "react"

import Spinner from "../Spinner/Spinner"
import Form from "../Form/Form"

const Checkout = () => {
    const { cart, total, removeAll } = useCart()
    const [orderId, setOrderId] = useState("")
    const [load, setLoad] = useState(false)

    const createOrder = async (userData) => {
        setLoad(true)
        try{
            const objOrder = {
                buyer: userData,
                items: cart,
                total: total,
            }
            
            const ids = cart.map(prod => prod.id)
            const productsRef = query(collection(db, 'products'), where(documentId(), 'in', ids))
            const { docs } = await getDocs(productsRef)
    
            const batch = writeBatch(db)
            const outOfStock = []
    
            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock
    
                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const productQuantity = productAddedToCart?.quantity
    
                if(stockDb >= productQuantity) {
                    batch.update(doc.ref, { stock: stockDb - productQuantity })
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc })
                }
            })
    
            if(outOfStock.length === 0){
                batch.commit()
                const ordersRef = collection(db, "orders")
                const orderAdded = await addDoc(ordersRef, objOrder)
                setOrderId(orderAdded.id)
                removeAll()
            }
        } catch (error) {
            console.log(error)
        } finally { 
            setLoad(false)
        }
    }
        

    if(load){
        return (
            <div>
                <Spinner/>
            </div>
        )
    }

    if(orderId){
        return (
            <div className="checkout-container">
                <h1>El ID de su compra es {orderId}</h1>
            </div>
        )
    }

    if(cart.length === 0){
        return (
            <div className="checkout-container">
                <h2>Todavía no agregaste ningún producto a tu carrito.</h2>
            </div>
        )
    }

    return (
        <div className="checkout">
            <h3>Por favor ingrese sus datos para finalizar la compra.</h3>
            <Form onConfirm={createOrder}/>
        </div>
    )
}

export default Checkout