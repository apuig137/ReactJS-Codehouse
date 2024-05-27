import './ItemCount.css'
import { useState } from 'react'

const ItemCount = ({stock = { stock }, initial = 1, onAdd})=> {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if(quantity < stock) {
            setQuantity(quantity+1)
        }
    }

    const decrement = () => {
        if(quantity > 1) {
            setQuantity(quantity - 1)
        }     
    }

    return(
        <div className='counter'>
            <p className='controls'>Stock: {stock}</p>
            <div className='controls'>
                <button className="count-button item-count-buttons" onClick={decrement}>-</button>
                <h4 className='number'>{quantity}</h4>
                <button className="count-button item-count-buttons" onClick={increment}>+</button>
            </div>
            <div className='controls'>
                <button className="add-button item-count-buttons" onClick={() => onAdd(quantity)}>Agregar al carrito</button>
            </div>
        </div>
    )

}
export default ItemCount