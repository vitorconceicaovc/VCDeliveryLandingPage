import { Link } from "react-router-dom"
import './styles.css'

const Navbar = () => {
    return (
        <ul className="NavbarContainer" >
            <div className="logo">VCDelivery</div>
            <div className="links">
                <li><Link to={'/'} >Home</Link></li>
                <li><Link to={'/about'} >About</Link></li>
                <li className="buttonBg" ><Link to={'/'} >Contact</Link></li>
            </div>
        </ul>
    )
}

export default Navbar