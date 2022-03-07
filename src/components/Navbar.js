import React, { useState } from 'react'
import logo from '../images/Logo.png'


export default function Navbar() {

    const[bartext, setBartext] = useState("")
    const[show__afterclick, setShow__afterclick] = useState("")

    const toggleClass = () => {
        if(bartext == "toggle" && show__afterclick == "show__afterclick") {
            setBartext("")
            setShow__afterclick("")
        } else {
            setBartext("toggle")
            setShow__afterclick("show__afterclick")
        }
    }

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
            <div className={`bars ${bartext}`} onClick={toggleClass}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>
    </header>
    <div className={`hidenshow__onclick ${show__afterclick}`}>

        <div className="navlinks__mobview">
            <button>Try-Out</button>
            <button>Products</button>
            <button>Explore</button>
        </div>
            
    </div>

    
    
    
    </>
  )
}
