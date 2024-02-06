import { Link } from "react-router-dom"
import { MdAccountCircle, MdNotifications } from 'react-icons/md'
const HomeLinks = () => {
    return (
        <div className="home-nav-links">
            <Link to={'/profile'}>
                <MdAccountCircle size={50}/>
            </Link>
            <Link to={'#'}>
                <MdNotifications size={50}/>
                <span>3</span>
            </Link>
            <div className="dackMode">
                <label htmlFor="dack">dark Mode</label>
                <input type="checkbox" name="dack" id="dack" />
            </div>
            <button>
                Logout
            </button>
        </div>
    )
}

export default HomeLinks