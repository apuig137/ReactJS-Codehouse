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
                    <Link to="/categoria/3%20puertas" className="sidebar-link">3 puertas</Link>
                </div>
            </li>

            <li className="list-item">
                <div className="list-button">
                    <Link to="/categoria/5%20puertas" className="sidebar-link">5 puertas</Link>
                </div>
            </li>

            <li className="list-item">
                <div className="list-button">
                    <Link to="/categoria/Sedan" className="sidebar-link">Sedan</Link>
                </div>
            </li>

            <li className="list-item">
                <div className="list-button">
                    <Link to="/categoria/SUV" className="sidebar-link">SUV</Link>
                </div>
            </li>

            <li className="list-item">
                <div className="list-button">
                    <Link to="/categoria/Camioneta" className="sidebar-link">Camioneta</Link>
                </div>
            </li>
        </ul>
    </nav>
    )
}

export default Sidebar