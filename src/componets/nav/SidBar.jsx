import { Link } from "react-router-dom"

const SidBar = () => {
  return (
    <aside>
        <Link to={'/home'} >HOME</Link>
        <Link to={'/home'} >Fovarates</Link>
        <Link to={'/profile'} >Profile</Link>
        <Link to={'/home'} >Setting</Link>
    </aside>
  )
}

export default SidBar