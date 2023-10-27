
import '../styles/header.css';
import { useState } from 'react';

export function Header() {


  const [showMobile, setShowMobile] = useState(false);
  
  function handleMobileMenu(){
        setShowMobile(!showMobile)
  }

    return (
        <div className="header">
            <div className="navbar">
                <div className="logo">
                    <a href="/">Ibadulkarim</a>
                </div>
                <div className='navbar-main'>
                    <a href="#about">Menu</a>
                </div>
                {!showMobile && <label onClick={handleMobileMenu} >&#9776;</label>}

              {showMobile && 
               <div className='menu-icon'>
               <p className="close-button" onClick={handleMobileMenu} >&times;</p>
               <a href='#webapps'  onClick={handleMobileMenu}    >Web Apps</a>
               <a href='#projects' onClick={handleMobileMenu}  >Projects</a>
               <a href='#services' onClick={handleMobileMenu}  >Services</a>
               <a href='#achievement' onClick={handleMobileMenu}  >Achievement</a>
               <a href='#skills'  onClick={handleMobileMenu}  >Skills</a>
               <a href='#contact' onClick={handleMobileMenu}   >Contact</a>
           </div>
           
              }
            </div>
        </div>
    );
}
