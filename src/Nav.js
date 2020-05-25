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
        fontFamily: 'courier new'
      }
      //images/IoT.png
    return (
        <nav style ={navStyle2}>
            <h3><img src={Logo} alt="Logo" width="50" height="50" /></h3>
             <ul style = {navLinks}>
                <Link className="w3-bar-item w3-button" style = {navStyle} to='/'><li>Home</li></Link>

                <div className="w3-dropdown-hover">
                    <button className="w3-button">Devices...</button>
                    <div className="w3-dropdown-content w3-bar-block w3-card-4">
                        <Link className="w3-bar-item w3-button w3-hover-cyan"  to='/devices'><li>List Devices</li></Link>                        
                        <Link className="w3-bar-item w3-button w3-hover-cyan"  to='/devices/add'><li>Add Device</li></Link>                                                
                    </div>
                </div>
                <Link className="w3-bar-item w3-button" style = {navStyle} to='/about'><li>About</li></Link>                                        
            </ul>             
        </nav>
    );
}

export default Nav;

            
//style = {navStyle}