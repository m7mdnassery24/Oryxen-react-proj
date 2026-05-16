import react, { memo, useState } from "react";
import "../App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faPlus, } from "@fortawesome/free-solid-svg-icons"
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import Products from "../data/Products";


const Newarr = () => {
 

  const addtocart = (product) => {
        let cart = JSON.parse(localStorage.getItem("selectedproducts")) || [];
        const ifexist = cart.find(item => item.title === product.title);
        
        if (!ifexist) {
            cart.push(product);
            localStorage.setItem("selectedproducts", JSON.stringify(cart));
            
        
            window.dispatchEvent(new Event("cartupdated"));
          
        } else {
            alert("item already in your basket");
        }
    window.dispatchEvent(new Event("cartupdated"));
    }

    const [fav, setfav] = useState(() => {
        const saved = JSON.parse(localStorage.getItem("Favourits")) || []
        return saved.map(item => item.title)

    })

    const wishlist = (product) => {
        const wishlist = JSON.parse(localStorage.getItem("Favourits",)) || [];
        const ifexist = wishlist.find((item) => item.title === product.title)

        if (!ifexist) {
            wishlist.push(product)
            localStorage.setItem('Favourits', JSON.stringify(wishlist))
            setfav([...fav, product.title]);
        } else {
            const filterd = wishlist.filter((item) => item.title !== product.title)

            localStorage.setItem("Favourits", JSON.stringify(filterd))
            setfav(fav.filter((title) => title !== product.title));
        }
    }






    return (
        <>
            <div className="container-fluid "  >
                <br />
                <h2 className="text-center mb-5 " >New arivals</h2>

                <div className="  d-flex  flex-wrap gap-3 justify-content-center alighn-items-center " style={{ width: "75%", margin: "auto", }}>

                    {Products.filter(item=>item.category === "newarr").map((item, index) => {
                        return (

                            <div className="bg-light col-12 col-md-3 mt-2 holder" style={{ height: "350px", borderRadius: "15px", }}>

                                <img src={item.img} className="img-fluid " style={{ borderRadius: "15px", width: "100%", height: "50%" }} alt="sofa" />

                                <h6 className="fs-6 mt-3 mx-4"> {item.title}</h6>
                                <div className="d-flex  mt-4 mx-4  justify-content-between ">
                                    <h6 className="" >${item.price}</h6>

                                    <FontAwesomeIcon
                                        onClick={() => wishlist(item)}
                                        icon={farHeart}
                                        style={{
                                            cursor: "pointer",
                                            // هنا بنشيك لو العنوان موجود في الـ State
                                            color: fav.includes(item.title) ? "red" : "black"
                                        }}
                                    />
                                    {/* mt-4 mx-4 */}
                                </div>
                                <div className="text-end m-3">

                                    <button className="btn btn-primary btn-1" onClick={() => { addtocart(item) }}>

                                        <FontAwesomeIcon icon={faPlus} className="text-dark text-end" style={{ cursor: "pointer" }} />
                                    </button>

                                </div>
                            </div>
                        )
                    })}


                </div>
                <br />
                <br />
                <br />
                <br />


            </div >
        </>

    )

}

export default react.memo(Newarr);