import React, { memo, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {

    const borderStyle = {
        borderBottom: "5px solid aqua",
        height: "60px",
        backgroundColor: "white", // لازم تدي خلفية عشان السكاشن متظهرش من وراه وهي بتتحرك
        zIndex: "1000" // عشان يفضل فوق أي عنصر تاني
    };


    const [cartnumber, setcartnumber] = useState();

    const addnumber = () => {
        setcartnumber(cartnumber + 1)
    }



    useEffect(() => {
        const handelcartupdated = () => {
            const saved = JSON.parse(localStorage.getItem("selectedproducts")) || [];
            setcartnumber(saved.length)
        }
        handelcartupdated()

        window.addEventListener("cartupdated", handelcartupdated)


        return () => {
            window.removeEventListener("cartupdated", handelcartupdated)

        }
    }, [])





    return (
        <>
            {/* دمجنا الـ style في أوبجكت واحد */}
            <div className="container-fluid fixed-top w-100 bg-white" style={borderStyle} >
                <nav className="navbar container navbar-expand-sm navbar-dark">
                    <div className="container d-flex justify-content-between align-items-center">

                        {/* 2. استخدمنا Link بدل a عشان نمنع الـ Reload */}
                        <Link className="navbar-brand fw-bold fs-4 text-danger" to="/">Oryxen</Link>

                        <button className="navbar-toggler bg-dark" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="mynavbar">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    {/* 3. الخاصية اسمها to بدل href */}
                                    <Link className="nav-link fw-bold fs-5 text-danger" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link fw-bold fs-5 text-danger" to="/shop">Shop</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link fw-bold text-danger fs-5" to="/cart">Cart</Link>
                                </li>
                                <li className="nav-item">
                                    {/* أيقونة السلة برضه بتودي لصفحة الـ cart */}
                                    <Link to="/cart">
                                        <div className="position-relative d-inline-block">
                                            {cartnumber > 0 && (
                                                <span
                                                    className="d-flex align-items-center justify-content-center bg-primary"
                                                    style={{
                                                        position: "absolute",
                                                        left: "4px",
                                                        top: "-1px",
                                                        width: "18px",
                                                        height: "18px",
                                                    
                                                        borderRadius: "50%", // 50% makes it a perfect circle
                                                        color: "white",      // Assuming you want white text on a red badge
                                                        fontSize: "11px"     // Adjusted font size to fit the 18px badge
                                                    }}
                                                >
                                                    {cartnumber}
                                                </span>
                                            )}
                                            <FontAwesomeIcon icon={faCartShopping} className="mt-3 text-primary fw-bold" style={{ fontSize: "20px" }} />
                                        </div>

                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
}

export default memo(Navbar);