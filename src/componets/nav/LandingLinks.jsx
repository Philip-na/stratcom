import { Link } from "react-router-dom"
const LandingLinks = () => {
    return (
        <div className="nav-links">
            <a href="#wellcome">Wellocom</a>
            <a href="#about-us">About Us</a>
            <a href="#contact-us">Contact Us</a>
            <a href="#review">Rewiews</a>
            <Link to={'/login'} className="auth-link"> Login</Link>
            <Link to={'/signup'} className="auth-link"> Sigup</Link>
        </div>
    )
}

export default LandingLinks