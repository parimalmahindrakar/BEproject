import React from 'react'
import necklace_up from '../images/necklace_up.jpg'
import { Link } from 'react-router-dom'

import necklace1 from '../images/necklace1.png'
import necklace2 from '../images/necklace2.png'
import necklace3 from '../images/necklace3.png'
import necklace4 from '../images/necklace4.png'
import necklace5 from '../images/necklace5.png'

function necklace11(){
    sessionStorage.setItem("necklace_img",necklace1);
    sessionStorage.setItem("necklace_desc","ELEGANT TEMPEST");
    sessionStorage.setItem("necklace_price","₹4500");
}

function necklace22(){
    sessionStorage.setItem("necklace_img",necklace2);
    sessionStorage.setItem("necklace_desc","AUSTERE SPIRAL");
    sessionStorage.setItem("necklace_price","₹6350");
}

function necklace33(){
    sessionStorage.setItem("necklace_img",necklace3);
    sessionStorage.setItem("necklace_desc","ROYAL STAR");
    sessionStorage.setItem("necklace_price","₹5750");
}

function necklace44(){
    sessionStorage.setItem("necklace_img",necklace4);
    sessionStorage.setItem("necklace_desc","GRACEFUL WISH");
    sessionStorage.setItem("necklace_price","₹7250");
}

function necklace55(){
    sessionStorage.setItem("necklace_img",necklace5);
    sessionStorage.setItem("necklace_desc","ARCTIC BOND");
    sessionStorage.setItem("necklace_price","₹2500");
}

export default function LipProducts() {
  return (
    <> 
    <div className="container-fluid ">
        <div className="row">
            <div className="col-sm">
                <div className="row-sm">
                    <img src={necklace_up} className="lipsticks img-fluid"></img>
                    <h1 className="carousel-caption">Find Your Perfect Necklace!</h1>
                </div>
            </div>
            
        </div>
    
    </div>
    
    <div className="container-fluid ">
        <div className="row mt-5">
            <div className="col-sm-2 d-flex justify-content-center mb-4 ml-4 mr-4">
                <Link to="/tryout_necklace" onClick={necklace11}>
                    <div className="pac_product1">
                        <img src={necklace1} className="pac_image1"></img>
                        <h1 className="pac1_desc">ELEGANT TEMPEST <br/><br/>₹4500</h1>
                    </div>
                </Link>
            </div>

            <div className="col-sm-2 d-flex justify-content-center mb-4 ml-4 mr-4">
            <Link to="/tryout_necklace" onClick={necklace22}>
                <div className="pac_product1">
                    <img src={necklace2} className="pac_image1"></img>
                    <h1 className="pac1_desc">AUSTERE SPIRAL<br/><br/>₹6350</h1>
                </div>
            </Link>
            </div>

            <div className="col-sm-2 d-flex justify-content-center mb-4 ml-4 mr-4">
            <Link to="/tryout_necklace" onClick={necklace33}>
                <div className="pac_product1">
                    <img src={necklace3} className="pac_image1"></img>
                    <h1 className="pac1_desc">ROYAL STAR <br/><br/>₹5750</h1>
                </div>
            </Link>
            </div>

            <div className="col-sm-2 d-flex justify-content-center mb-4 ml-4 mr-4">
            <Link to="/tryout_necklace" onClick={necklace44}>
                <div className="pac_product1">
                    <img src={necklace4} className="pac_image1"></img>
                    <h1 className="pac1_desc">GRACEFUL WISH<br/><br/>₹7250</h1>
                </div>
            </Link>
            </div>

            <div className="col-sm-2 d-flex justify-content-center mb-4 ml-4 mr-4">
            <Link to="/tryout_necklace" onClick={necklace55}>
                <div className="pac_product1">
                    <img src={necklace5} className="pac_image1"></img>
                    <h1 className="pac1_desc">ARCTIC BOND<br/><br/>₹2500</h1>
                </div>
            </Link>
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
