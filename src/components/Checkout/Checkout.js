import "./Checkout.css"

import { getDocs, addDoc, writeBatch, collection, query, where, documentId } from "firebase/firestore"
import { useCart } from "../../context/CartContext"
import { db } from "../../services/Firebase"
import { useState } from "react"

import Form from "../Form/Form"

const Checkout = () => {
    const { cart, total } = useCart()
    const [orderId, setOrderId] = useState("")

    const createOrder = async (userData) => {
        const objOrder = {
            buyer: userData,
            items: cart,
            total: total,
        }
        
        const ids = cart.map(prod => prod.id)
        const productsRef = query(collection(db, "products", where(documentId()), "in", ids))
        const { docs } = await getDocs(productsRef)

        const batch = writeBatch(db)
        const outOfStock = []

        docs.forEach(doc => {
            const dataDoc = doc.data()
            const stockDb = dataDoc.stock

            const productAddedToCart = cart.find(prod => prod.id === doc.id)
            const productQuantity = productAddedToCart?.quantity

            if(stockDb >= productQuantity) {
                const docRef = doc(db, "product", doc.id)
                batch.update(docRef, { stock: stockDb - productQuantity })
            } else {
                outOfStock.push({ id: doc.id, ...dataDoc })
            }
        })

        if(outOfStock.length === 0){
            batch.commit()
            const ordersRef = collection(db, "orders")
            const orderAdded = addDoc(ordersRef, objOrder)
            setOrderId(orderAdded.id)
        }
    }

    if(orderId){
        return (
            <div>
                <h1>El ID de su compra es {orderId}</h1>
            </div>
        )
    }

    if(cart.length === 0){
        return (
            <div className="cart-container">
                <h2>Todavía no agregaste ningún producto a tu carrito.</h2>
            </div>
        )
    }

    return (
        <div className="checkout">
            <h3>Por favor ingrese sus datos para finalizar la compra.</h3>
            <Form onConfirm={createOrder}/>
            <button className="checkout-button" onClick={createOrder}>CREAR ORDEN</button>
        </div>
    )
}

export default Checkout