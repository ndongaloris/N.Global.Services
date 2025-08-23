import { Link } from "react-router-dom"

function Footer(){
     return ( <footer>
                <nav>
                    <ul>
                        <li>© 2025 N Global Services. All rights reserved</li>
                    </ul>
                    <ul>
                        <li><h3>Let's do it</h3></li>
                        <li><Link to="">Newsletter signup</Link></li>
                        <li><Link to="/booking">Book a consultation</Link></li>
                        <li><Link to="">Portfolio showcase</Link></li>
                    </ul>
                    <ul>
                        <li><h3>Navigation & Quick Links</h3></li>
                        <li><Link to="/aboutus">About Us</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/faq">FAQs</Link></li>
                    </ul>
                    <ul>
                        <li><h3>Contact details</h3></li>
                        <li><Link to="">ndongajared@gmail.com</Link></li>
                        <li><h4>Tel: +375-25-697-8184</h4></li>
                        <li><Link to="https://www.linkedin.com/in/lorisjaredndonga/">My LinkedIn</Link></li>
                    </ul>
                    
                </nav>
            </footer>
    )
}

export default Footer