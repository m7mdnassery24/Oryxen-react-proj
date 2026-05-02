import react from "react"
import Slider from "react-slick";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Products } from "../data/Products";
function SimpleSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    const stylediv = {
        minHeight: "280px",
        height:"530px",
        display: "flex",
        alignItems: "center",
        backgroundColor: "rgb(134, 144, 224)",
        padding: "40px 0", 
        color: "white"
    };

    const fullwidth = {
        width: "75%", 
        margin: "auto",
    };
    const content = {
    }
    return (
        <>
            <br/>
            <br/>
            
            <div className=" container-fluid" style={stylediv} >
                <div className="slider-container  cursoul container" style={fullwidth}>
                    <Slider {...settings}>
                        {Products.map((item) => (
                            <div key={item.id} className="container">
                                <div className="row align-items-center justify-content-center p-3 p-md-5">


                                    <div className="col-12 col-md-7 text-center ">
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


                                    <div className="col-12 col-md-5 text-center text-md-start ">
                                        <h1 className="display-5 fw-bold text-white mb-3">
                                            {item.title}
                                        </h1>
                                        <p className="h4 text-white-50 mb-4">
                                            {item.price} <small>EGP</small>
                                        </p>
                                        <button className="btn btn-light btn-lg px-5 fw-bold shadow-sm">
                                            Buy Now
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



export default SimpleSlider;