import React, { useState } from 'react'
import logo from '../images/Logo.png'


export default function Navbar() {

    const[bartext, setBartext] = useState("bars")

  return (
    <>

    <header className = "header__nav">
        <nav className = "navbar__nav">
            <div className="logo">
                <img src={logo}/>
            </div>
            <div className="navlinks">
                <a href="#"><h3>Try-Out</h3></a>
                <a href="#"><h3>Products</h3></a>
                <a href="#"><h3>Explore</h3></a>
            </div>
            <div className={bartext} >
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>
    </header>
    <div className="hidenshow__onclick ">

        <div className="navlinks__mobview">
            <a href="#"><button>Try-Out</button></a>
            <a href="#"><button>Products</button></a>
            <a href="#"><button>Explore</button></a>
        </div>
            
    </div>

    
    
    
    </>
  )
}
