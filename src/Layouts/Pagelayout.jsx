import { Outlet } from "react-router-dom";
import NavbarLandin from '../componets/nav/NavbarLandin'
import SidBar from '../componets/nav/SidBar'

const Pagelayout = () => {
  return (
    <section className="home-section">
      <NavbarLandin />

      <div className="main-container">
        <SidBar />

        <div className="content">
            <Outlet />
        </div>
      </div>
    </section>
  );
};

export default Pagelayout;
