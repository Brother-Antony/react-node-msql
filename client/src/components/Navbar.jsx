import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../context/authContext"

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext)

  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src="https://brother-antony.github.io/PORTAFOLIO/img/logo.png" alt="" />
          </Link>
        </div>
        <div className="links">
          <Link to="/?cat=art" className='link'>
            <h6>ART</h6>
          </Link>
          <Link to="/?cat=science" className='link'>
            <h6>SCIENCE</h6>
          </Link>
          <Link to="/?cat=technology" className='link'>
            <h6>TECHNOLOGY</h6>
          </Link>
          <Link to="/?cat=cinema" className='link'>
            <h6>CINEMA</h6>
          </Link>
          <Link to="/?cat=design" className='link'>
            <h6>DESIGN</h6>
          </Link>
          <Link to="/?cat=food" className='link'>
            <h6>FOOD</h6>
          </Link>
          <span>{currentUser?.username}</span>
          {currentUser ? (
            <span onClick={logout}>Logout</span>
          ) : (
            <link className="link" to="/login">Login</link>
          )}
          <span className='write'>
            <Link to="/write" className='link'>Write</Link>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Navbar