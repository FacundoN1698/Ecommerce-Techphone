import CartWidget from "../CartWidget/CartWidget"
import styles from "./Navbar.module.css"
import { Outlet, Link } from "react-router-dom"

export const Navbar = () => {
  return (
    <div>
      <div className={styles.containerNavbar}>
        <Link to="/">
            <img src="https://res.cloudinary.com/dxgfjp3xu/image/upload/v1682320869/Img%20Celulares/logoTechphone_gdtsxk.png" alt="Logo Techphone" style={{width:"250px"}} />
        </Link>

        <div className={styles.categories}>
          <Link to="/">Home</Link>
          <Link to="/category/gama-alta">Gama Alta</Link>
          <Link to="/category/gama-media">Gama Media</Link>
        </div>

        <CartWidget />
      </div>

      <Outlet />
    </div>
  )

  }