import React, { memo, useState } from "react"; // Fixed capitalization, removed useNavigate
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import  Products  from "../data/Products";

function SimpleSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 900,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    const stylediv = {
        minHeight: "290px",
        height:"410px",
        display: "flex",
        backgroundColor: "rgb(134, 144, 224)",
        color: "white"
    };

    const fullwidth = {
        width: "75%", 
      
    };
   
    const location =()=>{
        window.location("/shop")
    }

   const navigate = useNavigate();
    const handelmovment = ()=>{
        navigate("/shop")
    }
    return (
        <>
<br/>
<br/>
            <div className=" container-fluid" style={stylediv} >
                <div className="slider-container  cursoul container " style={fullwidth}>
                    <Slider {...settings}>
                        {Products.filter(item=>item.category === "slider").map((item) => (
                            <div key={item.id} className="container mt-5">
                                <div className="row   ">


                                    <div className="col-12 col-md-7 text-center mt-4 ">
                                        <img 
                                            src={item.img}
                                            alt={item.title}
                                            className="img-fluid"
                                            style={{
                                                maxHeight: "240px",
                                                width: "auto",
                                                objectFit: "contain",
                                                filter: "drop-shadow(0px 10px 20px rgba(0,0,0,0.15))"
                                            }}
                                        />
                                    </div>
<br />

                                    <div className="col-12 col-md-5 text-center text-md-start  " >
                                        <h1 className="display-5 fw-bold text-white  ">
                                            {item.title}
                                        </h1>
                                        <p className="h4 text-white-50 ">
                                            {item.price} <small>EGP</small>
                                        </p>
                                        <button className="btn btn-light btn-lg  fw-bold shadow-sm " onClick={handelmovment}>
                                            View Collection
                                        </button>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    );
}



export default memo(SimpleSlider);