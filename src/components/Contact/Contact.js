import "./Contact.css"

const Contact = () => {
    return (
        <div className="contact">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.0113003544975!2d-58.413564623398585!3d-34.603875757508135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca8c854bd13f%3A0xfc0cf5c054da4aa1!2sAbasto%20Shopping!5e0!3m2!1ses!2sar!4v1682174835395!5m2!1ses!2sar" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <div className="contact-networks">
                <p>Email: tienda@gmail.com</p>
                <p>Telefono: +54 1234567898</p>
                <p>Direccion: Avenida Corrientes 3247, CABA</p>
            </div>
        </div>
    )
    
}

export default Contact