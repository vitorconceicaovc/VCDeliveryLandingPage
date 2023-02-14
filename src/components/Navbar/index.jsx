import { Link } from "react-router-dom"
import './styles.css'

const Navbar = () => {
    return (
        <ul className="NavbarContainer" >
            <li><Link to={'/'} >Home</Link></li>
            <li><Link to={'/about'} >About</Link></li>
        </ul>
    )
}

export default Navbar