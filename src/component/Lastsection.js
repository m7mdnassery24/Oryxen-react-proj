import React, { useState, useEffect , memo  } from "react"

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Lastsection=()=>{

return (
        <footer className="bg-dark text-white py-5 mt-auto">
            <div className="container">
                <div className="row gy-4">
                    
                    {/* العمود الأول: اللوجو والوصف */}
                    <div className="col-lg-3 col-md-6">
                        <h5 className="fw-bold mb-4">
                            <i className="bi bi-bag-fill me-2"></i>STORE
                        </h5>
                        <p className="text-secondary small" style={{ lineHeight: "1.8" }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Auctor libero id et, in gravida. Sit diam duis mauris nulla 
                            cursus. Erat et lectus vel ut sollicitudin elit at amet.
                        </p>
                    </div>

                    {/* العمود الثاني: About Us */}
                    <div className="col-lg-3 col-md-6">
                        <h6 className="fw-bold mb-4">About Us</h6>
                        <ul className="list-unstyled text-secondary small">
                            <li className="mb-2"><a href="#" className="text-decoration-none text-secondary">Careers</a></li>
                            <li className="mb-2"><a href="#" className="text-decoration-none text-secondary">Our Stores</a></li>
                            <li className="mb-2"><a href="#" className="text-decoration-none text-secondary">Our Cares</a></li>
                            <li className="mb-2"><a href="#" className="text-decoration-none text-secondary">Terms & Conditions</a></li>
                            <li className="mb-2"><a href="#" className="text-decoration-none text-secondary">Privacy Policy</a></li>
                        </ul>
                    </div>

                    {/* العمود الثالث: Customer Care */}
                    <div className="col-lg-3 col-md-6">
                        <h6 className="fw-bold mb-4">Customer Care</h6>
                        <ul className="list-unstyled text-secondary small">
                            <li className="mb-2"><a href="#" className="text-decoration-none text-secondary">Help Center</a></li>
                            <li className="mb-2"><a href="#" className="text-decoration-none text-secondary">How to Buy</a></li>
                            <li className="mb-2"><a href="#" className="text-decoration-none text-secondary">Track Your Order</a></li>
                            <li className="mb-2"><a href="#" className="text-decoration-none text-secondary">Corporate & Bulk Purchasing</a></li>
                            <li className="mb-2"><a href="#" className="text-decoration-none text-secondary">Returns & Refunds</a></li>
                        </ul>
                    </div>

                    {/* العمود الرابع: Contact Us */}
                    <div className="col-lg-3 col-md-6">
                        <h6 className="fw-bold mb-4">Contact Us</h6>
                        <p className="text-secondary small mb-2">
                            70 Washington Square South, New York, NY 10012, United States
                        </p>
                        <p className="text-secondary small mb-2">Email: uilib.help@gmail.com</p>
                        <p className="text-secondary small">Phone: +1 1123 456 780</p>
                    </div>

                </div>
            </div>
        </footer>
    );

}

export default React.memo(Lastsection);