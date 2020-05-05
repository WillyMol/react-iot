import React from 'react';

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

    return (
        <nav style ={navStyle2}>
            <h3>Logo</h3>
            <ul style = {navLinks}>
                <Link style = {navStyle} to='/about'><li>About</li></Link>            
                <Link style = {navStyle} to='/devices'><li>Devices</li></Link>            
            </ul>
        </nav>
    );
}

export default Nav;