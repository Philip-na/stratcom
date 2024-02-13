import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <aside>
      <Link to={'/home'}>HOME</Link>
      <Link to={'/home'}>Fovarets</Link>
    
      <Link to={'/home'}>Profile</Link>
    </aside>
  )
}

export default Sidebar