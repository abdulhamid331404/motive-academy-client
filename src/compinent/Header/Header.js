import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
    return (
     <div className='bg-dark d-flex nav-container sm-d-block'>
      <div>
        <img className='ms-3' src={logo} alt="" width="100%" height="50" />
      </div>
      <div className='header-nav-link'>
        <Link to={'/home'}>Home</Link>
        <Link to={'/courses'}>Courses</Link>
        <Link to={'/faq'}>FAQ</Link>
        <Link to={'/blog'}>Blog</Link>
        <Link to={'/login'}>LogIn</Link>
      </div>

     </div> 
    )
};

export default Header;