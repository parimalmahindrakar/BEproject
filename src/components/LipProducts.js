import React from 'react'
import rectangle from '../images/Rectangle 202.png'

import lips1 from '../images/pac1.jpg'
import lips2 from '../images/pac2.jpg'
import lips3 from '../images/pac3.jpg'
import lips4 from '../images/pac4.jpg'
import lips5 from '../images/pac5.PNG'


export default function LipProducts() {
  return (
    <> 
    <div className="container-fluid ">
        <div className="row">
            <div className="col-sm">
                <div className="row-sm">
                    <img src={rectangle} className="lipsticks"></img>
                    <h1 className="carousel-caption">Find Your Perfect Shade!</h1>
                </div>
            </div>
            
        </div>
    
    </div>
    
    <div className="container-fluid ">
        <div className="row mt-5">
            <div className="col-sm-2 mr-5 ml-3">
                <a href="#">
                    <div className="pac_product1">
                        <img src={lips1} className="pac_image1"></img>
                        <h1 className="pac1_desc">MATTE LIPSTICK <br/><br/>₹450</h1>
                    </div>
                </a>
            </div>

            <div className="col-sm-2 mr-5">
            <a href="#">
                <div className="pac_product1">
                    <img src={lips2} className="pac_image1"></img>
                    <h1 className="pac1_desc">SOFT MATTE CREAM LIPSTICK<br/>₹635</h1>
                </div>
            </a>
            </div>

            <div className="col-sm-2 mr-5">
            <a href="#">
                <div className="pac_product1">
                    <img src={lips3} className="pac_image1"></img>
                    <h1 className="pac1_desc">LIP DIP LIPSTICK <br/><br/>₹575</h1>
                </div>
            </a>
            </div>

            <div className="col-sm-2 mr-5">
            <a href="#">
                <div className="pac_product1">
                    <img src={lips4} className="pac_image1"></img>
                    <h1 className="pac1_desc">PURE MATTE LIPSTICK<br/><br/>₹725</h1>
                </div>
            </a>
            </div>

            <div className="col-sm-2 mr-5">
            <a href="#">
                <div className="pac_product1">
                    <img src={lips5} className="pac_image1"></img>
                    <h1 className="pac1_desc">LIP COLOR REFILL<br/><br/>₹250</h1>
                </div>
            </a>
            </div>
        </div>
    </div>
       
    {/*
    <a href="#">
        <div className="pac_product1">
            <img src={lips1} className="pac_image1"></img>
            <h1 className="pac1_desc">MATTE LIPSTICK <br/><br/>₹450</h1>
        </div>
    </a>

    <a href="#">
        <div className="pac_product2">
            <img src={lips2} className="pac_image2"></img>
            <h1 className="pac2_desc">SOFT MATTE CREAM LIPSTICK <br/><br/>₹635</h1>
        </div>
    </a>

    <a href="#">
        <div className="pac_product3">
            <img src={lips3} className="pac_image3"></img>
            <h1 className="pac3_desc">LIP DIP LIPSTICK <br/><br/>₹575</h1>
        </div>
    </a>

    <a href="#">
        <div className="pac_product4">
            <img src={lips4} className="pac_image4"></img>
            <h1 className="pac4_desc">PURE MATTE LIPSTICK <br/><br/>₹725</h1>
        </div>
    </a>

    <a href="#">
        <div className="pac_product5">
            <img src={lips5} className="pac_image5"></img>
            <h1 className="pac5_desc">LIP COLOR REFILL<br/><br/>₹250</h1>
        </div>
  </a>*/}
</>
  )
}
