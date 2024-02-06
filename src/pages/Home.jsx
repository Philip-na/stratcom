import React from 'react'
import NavbarLandin from '../componets/nav/NavbarLandin'
import SidBar from '../componets/nav/SidBar'
import List from '../componets/home/List'

const Home = () => {
  return (
    <section className="home-section">
      {/* navbar */}

      <NavbarLandin />

      <div className="main-container">

        <SidBar />


        <div className="content">
           <List />
        </div>
      </div>

    </section>
  )
}

export default Home