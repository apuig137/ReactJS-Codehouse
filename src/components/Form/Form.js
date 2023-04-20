import "./Form.css"
import { useState } from "react";

const Form = ({ onConfirm }) => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        const userData = { name, phone, email }
        onConfirm(userData)
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <p className="p-form-item">Nombre completo</p>
            <input type="text" className="form-item" value={name} onChange={(e) => setName(e.target.value)}/>
            <p className="p-form-item">Email</p>
            <input type="email" className="form-item" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <p className="p-form-item">Numero de telefono</p>
            <input type="tel" className="form-item" value={phone} onChange={(e) => setPhone(e.target.value)}/>
            <button className='checkout-button' type='submit'>CREAR ORDEN</button>
        </form>
    )
}

export default Form