
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
                    <a href="#about">About</a>
                </div>
                {!showMobile && <label onClick={handleMobileMenu} >&#9776;</label>}

              {showMobile && 
               <div className='menu-icon'>
               <p className="close-button" onClick={handleMobileMenu} >&times;</p>
               <a href='#webapps'>Web Apps</a>
               <a href='#projects'>Projects</a>
               <a href='#services'>Services</a>
               <a href='#achievement'>Achievement</a>
               <a href='#skills'>Skills</a>
               <a href='#contact'>Contact</a>
           </div>
           
              }
            </div>
        </div>
    );
}
