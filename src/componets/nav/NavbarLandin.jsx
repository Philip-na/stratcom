
import { Link } from 'react-router-dom';
import './css/NavbarLandin.css';
import HomeLinks from './HomeLinks';
import LandingLinks from "./LandingLinks";

const NavbarLandin = ({isHomePage=true}) => {
  return (
    <nav className="landing-nav">
        
        

        <Link to={'/'}>
        <h2 className="log">Love Island</h2>
        </Link>
     

   {
    isHomePage ? <HomeLinks /> : <LandingLinks />
   }
  

     
     

    </nav>
  )
}

export default NavbarLandin