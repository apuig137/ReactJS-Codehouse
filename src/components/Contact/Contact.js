import "./Contact.css"

const Contact = () => {
    return (
        <div className="contact">
            <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d26278.66286866667!2d-58.435573450648064!3d-34.5830955153357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sabasto!5e0!3m2!1ses!2sar!4v1682105265274!5m2!1ses!2sar" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <div className="contact-networks">
                <p>Email: tienda@gmail.com</p>
                <p>Telefono: +54 1234567898</p>
                <p>Direccion: Avenida Corrientes 3247, CABA</p>
            </div>
        </div>
    )
    
}

export default Contact