import { createContext, useState, useContext } from 'react';

let CartContext = createContext('valor inicial')

export let CartProvider = ({ children }) => {
    let [cart, setCart] = useState([])
    console.log(cart)

    let addItem = (productToAdd) => {
        if(!isInCart(productToAdd.id)) {
            setCart(prev => [...prev, productToAdd])
        } else {
            console.log('No se agrega porque ya esta en el carrito')
        }
    }

    let isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }

    let removeItem = (id) => {
        let updatedCart = cart.filter(prod => prod.id !== id)
        setCart(updatedCart)
    }

    let removeAll = () => {
        setCart([])
    }

    let getTotalQuantity = () => {
        let totalQuantity = 0

        cart.forEach(prod => {
            totalQuantity += prod.quantity
        })

        return totalQuantity
    }

    let totalQuantity = getTotalQuantity()

    return (
        <CartContext.Provider value={{ cart, addItem, totalQuantity, removeItem, isInCart, removeAll }}>
            { children }
        </CartContext.Provider>
    )
}

export let useCart = () => {
    return useContext(CartContext)
}