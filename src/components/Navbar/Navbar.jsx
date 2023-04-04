import Styles from "./Navbar.module.css"

const Navbar = ({color})=>{
    return <div className={Styles.containerNavbar}>
        <ul>
            <li style={{background: color, listStyle:"none"}} >Productos</li>
            <li>Servicios</li>
            <li>Contactos</li>
            </ul>
    </div>
}
export default Navbar