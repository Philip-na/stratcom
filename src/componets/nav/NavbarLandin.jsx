
import './css/NavbarLandin.css';
import HomeLinks from './HomeLinks';
import LandingLinks from "./LandingLinks";

const NavbarLandin = ({isHomePage=true}) => {
  return (
    <nav className="landing-nav">
        <h2 className="log">Love Island</h2>

   {
    isHomePage ? <HomeLinks /> : <LandingLinks />
   }
  

     
     

    </nav>
  )
}

export default NavbarLandin