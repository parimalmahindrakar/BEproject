import React from 'react'
import logo from '../images/Logo.jpg'


export default function Navbar() {
  return (
    <>

    <header className = "header__nav">
        <nav className = "navbar__nav">
            <div className="logo">
                <img src={logo}/>
            </div>
            <div className="navlinks">
                <h3>Try-Out</h3>
                <h3>Products</h3>
                <h3>Explore</h3>
            </div>
            <div className="bars ">
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>
    </header>
    <div className="hidenshow__onclick ">

        <div className="navlinks__mobview">
            <button>Try-Out</button>
            <button>Products</button>
            <button>Explore</button>
        </div>
            
    </div>
    
    
    </>
  )
}
