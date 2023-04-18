import "./Sidebar.css"
import CartWidget from "../CartWidget/CartWidget"
import { Link } from "react-router-dom"

let listElements = document.querySelectorAll(".list-button-click")

listElements.forEach(listElement => {
    listElement.addEventListener("click", () => {
        listElement.classList.toggle("arrow")
        let height = 0
        let menu = listElement.nextElementSibling
        if (menu.clientHeight == 0){
            height = menu.scrollHeight
        }
        menu.style.height = `${height}px`
    })
})

const Sidebar = () => {
    return (
        <nav className="sidebar">
        <ul className="list">
            <li className="list-item">
                <div className="list-button">
                    <Link to="/category/monitor" className="sidebar-link">Monitores</Link>
                </div>
            </li>

            <li className="list-item">
                <div className="list-button">
                    <Link to="/category/placa%20grafica" className="sidebar-link">Placas de video</Link>
                </div>
            </li>

            <li className="list-item">
                <div className="list-button">
                    <Link to="/category/teclado" className="sidebar-link">Teclados</Link>
                </div>
            </li>

            <li className="list-item">
                <div className="list-button">
                    <Link to="/category/placa%20madre" className="sidebar-link">Placas madre</Link>
                </div>
            </li>

            <li className="list-item">
                <div className="list-button">
                    <Link to="/category/auricular" className="sidebar-link">Auriculares</Link>
                </div>
            </li>

            <li className="list-item">
                <div className="list-button">
                    <Link to="/category/procesador" className="sidebar-link">Procesadores</Link>
                </div>
            </li>
        </ul>
    </nav>
    )
}

export default Sidebar