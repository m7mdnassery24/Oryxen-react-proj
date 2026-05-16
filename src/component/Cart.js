import React, { useState, useEffect , memo  } from "react";
import { faSortUp, faSortDown, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import backy from "../Assets/backs3.webp";

const Cart = () => {
    const [cart, setcart] = useState([]);

    useEffect(() => {
        const savedproducts = JSON.parse(localStorage.getItem("selectedproducts")) || [];
        setcart(savedproducts);
    }, []);

    const updatedquantity = (index, type) => {
        const updatedcart = [...cart];
        const item = updatedcart[index];
        if (type === "increase") {
            item.quantity++;
        } else if (type === "decrease" && item.quantity > 1) {
            item.quantity--;
        }
        setcart(updatedcart);
        localStorage.setItem("selectedproducts", JSON.stringify(updatedcart));
    };

    const removeFromCart = (indexToRemove) => {
        const updatedCart = cart.filter((_, index) => index !== indexToRemove);
        setcart(updatedCart);
        localStorage.setItem("selectedproducts", JSON.stringify(updatedCart));
        window.dispatchEvent(new Event("cartupdated"))
    };

    const headerStyle = {
        backgroundImage: `url(${backy})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: "150px",
        
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        textShadow: "2px 2px 4px rgba(0,0,0,0.5)"
    };

    return (
        <div style={{ backgroundColor: "#f4f4f4", minHeight: "100vh" }}>
            {/* Header */}
            <div className="container-fluid" style={headerStyle}>
                <h1 className="fw-bold mt-5">Shopping Cart</h1>
            </div>

            <div className="container mt-5 pb-5">
                <div className="row">
                    {/* Products List */}
                    <div className="col-lg-8">
                        {cart.length > 0 ? (
                            cart.map((item, index) => (
                                <div key={index} className="card mb-3 border-0 shadow-sm" style={{ borderRadius: "15px", overflow: "hidden" }}>
                                    <div className="row g-0 align-items-center">
                                        <div className="col-md-4">
                                            <img src={item.img} className="img-fluid" alt={item.title} style={{ height: "220px", width: "100%", objectFit: "cover" }} />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body px-4">
                                                <div className="d-flex justify-content-between align-items-start">
                                                    <h5 className="card-title fw-bold">{item.title}</h5>
                                                    <button className="btn btn-outline-danger btn-sm border-0" onClick={() => removeFromCart(index)}>
                                                        <FontAwesomeIcon icon={faTrash} />
                                                    </button>
                                                </div>
                                                <p className="text-muted mb-2">Price: ${parseFloat(item.price).toFixed(2)}</p>
                                                
                                                <div className="d-flex justify-content-between align-items-center mt-3">
                                                    <div className="d-flex align-items-center bg-white border rounded-pill px-3 py-1">
                                                        <span className="me-3 fw-bold">Qty: {item.quantity}</span>
                                                        <div className="d-flex flex-column" style={{ lineHeight: "0.5" }}>
                                                            <FontAwesomeIcon icon={faSortUp} className="text-primary mb-1" style={{ cursor: "pointer" }} onClick={() => updatedquantity(index, "increase")} />
                                                            <FontAwesomeIcon icon={faSortDown} className="text-primary" style={{ cursor: "pointer" }} onClick={() => updatedquantity(index, "decrease")} />
                                                        </div>
                                                    </div>
                                                    <h5 className="mb-0 fw-bold text-primary">
                                                        ${(item.price * item.quantity).toFixed(2)}
                                                    </h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="text-center py-5">
                                <h3>Your cart is empty 🛒</h3>
                                <p>Looks like you haven't added anything yet.</p>
                            </div>
                        )}
                    </div>

                    {/* Order Summary */}
                    <div className="col-lg-4">
                        <div className="card border-0 shadow-sm p-4 sticky-top" style={{ borderRadius: "15px", top: "20px" }}>
                            <h4 className="fw-bold mb-4">Order Summary</h4>
                            <div className="d-flex justify-content-between mb-2">
                                <span>Subtotal</span>
                                <span>${cart.reduce((acc, item) => acc + (item.price * item.quantity), 0).toFixed(2)}</span>
                            </div>
                            <div className="d-flex justify-content-between mb-4">
                                <span>Shipping</span>
                                <span className="text-success">Free</span>
                            </div>
                            <hr />
                            <div className="d-flex justify-content-between mb-4">
                                <h5 className="fw-bold">Total</h5>
                                <h5 className="fw-bold text-primary">
                                    ${cart.reduce((acc, item) => acc + (item.price * item.quantity), 0).toFixed(2)}
                                </h5>
                            </div>
                            <button className="btn btn-warning " style={{width:"150px"}} > Order Now</button>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default  React.memo(Cart);