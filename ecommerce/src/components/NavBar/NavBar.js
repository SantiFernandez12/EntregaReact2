import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'

const NavBar = () => {
    return (
        <nav className="header">
            <h3 className="color">Todo Tecnologia</h3>
            <div className="navBar">
                <button className="navButton">Notebooks</button>
                <button className="navButton">Auriculares</button>
                <button className="navButton">Teclados</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar