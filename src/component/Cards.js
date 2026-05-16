import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruckFast, faHeadset, faRotateLeft, faCreditCard } from '@fortawesome/free-solid-svg-icons';

const Cards = () => {
    // 1. El Data Array
    const cardData = [
        { title: "Free Shipping", lorem: "All orders over $50", icon: faTruckFast, color: "blue" },
        { title: "Secure Payment", lorem: "100% secure payment", icon: faCreditCard, color: "purple" },

        { title: "Support 24/7", lorem: "Contact us anytime", icon: faHeadset, color: "green" },

        { title: "Easy Return", lorem: "30 days return policy", icon: faRotateLeft, color: "orange" },

    ];

    return (
        <div className=" py-5" style={{width:"75%",margin:"auto"}}>
            <div className="row g-3 justify-content-center">
                {cardData.map((item, index) => (
                    <div className="col-11 col-md-3" key={index}>
                        {/* El Card el kbeera */}
                        <div className="bg-dark opacity-75 text-white d-flex flex-column align-items-center justify-content-center rounded shadow-sm" 
                             style={{ height: "180px" }}>
                            
                            {/* 1. El Div elly fo2 (El Dayra) */}
                            <div className="d-flex align-items-center justify-content-center shadow" 
                                 style={{ 
                                     width: "60px", 
                                     height: "60px", 
                                     backgroundColor: item.color, 
                                     borderRadius: "50%",
                                     marginBottom: "15px" 
                                 }}>
                                <FontAwesomeIcon icon={item.icon} size="lg" />
                            </div>

                            {/* 2. El Div elly t7tiha (El Kalam) */}
                            <div className="text-center px-2">
                                <h6 className="fw-bold mb-1" style={{ fontSize: "1rem" }}>{item.title}</h6>
                                <p className="m-0 opacity-75" style={{ fontSize: "0.8rem" }}>{item.lorem}</p>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default React.memo(Cards);