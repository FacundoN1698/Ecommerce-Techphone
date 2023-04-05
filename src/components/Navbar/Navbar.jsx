import CardWidget from "../CardWidget/CardWidget"

import Styles from "./Navbar.module.css"
import ImageLogo from "../assets/images/logoTechphone.png"

const Navbar = ({color})=>{
    return <div className={Styles.containerNavbar}>
        <img
            src={ImageLogo} 
            alt="Logo de la Empresa Techphone"
        />
        
        <ul style={{display: "flex", gap: "30px", listStyle: "none", color: "white"}}>
            <li>Celulares</li>
            <li>Notebooks</li>
            <li>Relojes</li>
            <li>Accesorios</li>
        </ul>
        <CardWidget />
    </div>
}
export default Navbar