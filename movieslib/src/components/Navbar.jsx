import React from 'react'
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav id="navbar">
      <h2>
        <Link to="/">MoviesLib</Link>
      </h2>
      <h2>
        <Link to="/movie/1">Movies</Link>
        <Link to="/search">Search</Link>
      </h2>
    </nav>
  )
}

export default Navbar