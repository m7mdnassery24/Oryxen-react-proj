import react, { memo, useState } from "react";
import "../App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import backy from"../Assets/backs3.webp";
import { faPlus, } from "@fortawesome/free-solid-svg-icons"
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import Products from "../data/Products";


const Shop = () => {


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


const [searchitem , setsearchitem]= useState("");
const [ category , setcategory] = useState("All");

const filterdproducts = Products.filter((item)=>{
const matchsearch= item.title.toLocaleLowerCase().includes(searchitem.toLocaleLowerCase());
    const matchcategory = category === "All" || item.type === category; 
    return matchsearch && matchcategory &&  item.id >=5;
})



// التعديل الصح
const backa = {
    backgroundImage: `url(${backy})`, // لازم url()
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: "150px",
    display: "flex",          // عشان نوسط الكلام
    alignItems: "center",     // توسيط رأسي
    justifyContent: "center", // توسيط أفقي
    color: "white",           // لون الخط عشان يبان فوق الصورة
    textShadow: "2px 2px 4px rgba(0,0,0,0.5)" // ظل للكلام لزيادة الوضوح
};
    const backs = {
        backgroundColor: "rgb(198, 200, 214)"
    }

    return (
        <>
   <div className="container-fluid" style={backa}> 
       <h1 className="fw-bold mt-5">All Products</h1>
</div>
            <div className="container-fluid " style={backs} >
        
                
                <div className=" " style={{ width: "60%", margin: "auto" }}>
            <input 
                type="search" 
                placeholder="Search" 
                onChange={(abs) => setsearchitem(abs.target.value)} 
                style={{borderRadius:'5px' ,}} 
                className="mt-5"
            />
                    <div className="dropdown mt-2" >
                        <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" >
                       {category === "All" ? "Search by category" : `Category: ${category}`}
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" onClick={()=>setcategory("All")}>All</a></li>
                            <li><a class="dropdown-item" onClick={()=>setcategory("phone")}>phones</a></li>
                            <li><a class="dropdown-item" onClick={()=>setcategory("furniture")}>furniture</a></li>
                            <li><a class="dropdown-item" onClick={()=>setcategory("laptop")}>laptop</a></li>
                            <li><a class="dropdown-item" onClick={()=>setcategory("headphones")}>headphone</a></li>
                        </ul>
                    </div>

                </div>
                <br />
                <div className="  d-flex  flex-wrap gap-3 justify-content-center alighn-items-center " style={{ width: "75%", margin: "auto", }}>

                    {filterdproducts.filter(item => item.id >= 5).map((item, index) => {
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

export default react.memo(Shop);