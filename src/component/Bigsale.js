import react, { memo, useState } from "react"
import "../App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Products from "../data/Products";
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
// استيراد القلب المليان للون الأحمر المتحدد

const Bigsale = () => {


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
    // 1. الـ State دي بتشيل أسماء (titles) المنتجات المتخزنة في المفضلة عشان نعرف نلونها
    const [favTitles, setFavTitles] = useState(() => {
        const saved = JSON.parse(localStorage.getItem("Favourits")) || [];
        return saved.map(item => item.title);
    });



    // 2. تحديث دالة الـ wishlist عشان تعدل الـ Storage والـ State مع بعض
    const handleWishlist = (product) => {
        let wishlistItems = JSON.parse(localStorage.getItem("Favourits")) || [];
        const ifexist = wishlistItems.find(item => item.title === product.title);

        if (!ifexist) {
            // لو مش موجود.. ضيفه
            wishlistItems.push(product);
            localStorage.setItem("Favourits", JSON.stringify(wishlistItems));
            setFavTitles([...favTitles, product.title]); // تحديث الـ State فوراً
        } else {
            // حركة احترافية: لو داس عليه تاني وهو أحمر، يشيله من المفضلة ويرجعه أسود
            const filtered = wishlistItems.filter(item => item.title !== product.title);
            localStorage.setItem("Favourits", JSON.stringify(filtered));
            setFavTitles(favTitles.filter(title => title !== product.title));
        }
    }

    const backs = {
        backgroundColor: "rgb(198, 200, 214)" 
    }

    return (
        <>
            <div className="container-fluid" >
                <br />
                <h2 className="text-center mb-5">Big Sale</h2>

                <div className="d-flex flex-wrap gap-3 justify-content-center align-items-center" style={{ width: "75%", margin: "auto" }}>

                    {Products.filter(item=> item.category === "bigsale" ).map((item, index) => {
                        // 3. بنشوف هل المنتج الحالي اسمه موجود جوه الـ State بتاعتنا؟
                        const isFavorite = favTitles.includes(item.title);

                        return (
                            <div key={index} className="bg-light col-12 col-md-3 mt-2 holder position-relative" style={{ height: "350px", borderRadius: "15px" }}>

                                <img src={item.img} className="img-fluid" style={{ borderRadius: "15px", width: "100%", height: "50%" }} alt={item.title} />

                                <h6 className="fs-6 mt-3 mx-4">{item.title}</h6>

                                <div className="d-flex mt-4 mx-4 justify-content-between align-items-center">
                                    <h6>${item.price}</h6>

                                    <FontAwesomeIcon onClick={() => handleWishlist(item)} icon={farHeart}
                                        style={{ cursor: "pointer", color: favTitles.includes(item.title) ? "red" : "black" }} />



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
                <br /><br /><br /><br />
            </div>
        </>
    )
}
export default react.memo(Bigsale);