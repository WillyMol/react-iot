import React from 'react';
import Logo from './IoT.png';
import { Link }  from 'react-router-dom';

function Nav() {

    const navStyle = {
        color: 'white'
    }

    const navStyle2 = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '10vh',
        background: 'rgb(54, 52, 52)',
        color: 'white',
      }

     const navLinks = {
        width: '40%',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        listStyle: 'none',
      }
      //images/IoT.png
    return (
        <nav style ={navStyle2}>
            <h3><img src={Logo} alt="Logo" width="50" height="50" /></h3>
            <ul style = {navLinks}>
                <Link style = {navStyle} to='/'><li>Home</li></Link>
                <Link style = {navStyle} to='/devices'><li>Devices</li></Link>
                <Link style = {navStyle} to='/about'><li>About</li></Link>                                        
            </ul>
        </nav>
    );
}

export default Nav;