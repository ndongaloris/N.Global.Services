import { Link } from "react-router-dom"

function Header (){
    return ( <header>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/booking">Booking</Link></li>
                        <li><img src="../src/assets/logo.png" alt="" /></li>
                        <li><Link to="aboutus">About Us</Link></li>
                        <li><Link to="/contactus">Contact Us</Link></li>
                        <li><Link to="faq">FAQ</Link></li>
                    </ul>
                </nav>
            </header>
    )
}

export default Header  