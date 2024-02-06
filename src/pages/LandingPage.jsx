import Hero from "../componets/hero/Hero"
import NavbarLandin from "../componets/nav/NavbarLandin"

const LandingPage = () => {
  return (
   <section className='landing-con'>

    {/* navbar */}
    

    <NavbarLandin isHomePage ={false} />

    {/* hero section */}

    <Hero />

    {/* footer */}


   </section>
  )
}

export default LandingPage