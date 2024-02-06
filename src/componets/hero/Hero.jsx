import { Link } from 'react-router-dom';
import './css/Hero.css';
const Hero = () => {
  return (
    <div className="hero-con">
      <div className="hero-left">
        <h2> Where Love is Found <br /> Functional and Relaible</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet cumque, natus, vitae excepturi ipsam doloremque ex modi maiores, dolor eum eligendi laboriosam illo aperiam quis itaque asperiores vel et error?
        </p>

        <Link to={'home'} >Get A Soulmate Now</Link>
      </div>
      <div className="hero-right">
        <div className="img">
          <img src="./images/hero.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Hero