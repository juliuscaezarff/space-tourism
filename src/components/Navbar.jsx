import './Navbar.css'

import { NavLink, Link } from 'react-router-dom'

import logo from '../img/logo.png'

const NavBar = () => {
  return (
    <nav className='navBar'>
    <Link to='/'><img className='logo' src={logo} alt="" /></Link>  
      <ul className='list'>
     <li className='item'><NavLink to="/">Home</NavLink></li> 
     <li className='item'><NavLink to="/about">Sobre</NavLink></li> 
     <li className='item'><NavLink to="/tickets">Tickets</NavLink></li> 
      </ul>
      
    </nav>
  )
}

export default NavBar
