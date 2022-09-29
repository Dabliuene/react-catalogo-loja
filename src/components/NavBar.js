// 2 - Link com React Router
//CSS
import './NavBar.css'

// React Router
import { NavLink } from "react-router-dom"

const NavBar = () => {
  return (
    <nav>
        {/* <Link to="/">Home</Link>
        <Link to="/about">Sobre</Link> */}
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/about">Sobre</NavLink>
    </nav>
  )
}

export default NavBar