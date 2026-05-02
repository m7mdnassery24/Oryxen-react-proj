import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


// 1. Capitalized the component name
// const border={
//     borderBottom:"5px solid rgb(29, 123, 246)"
// }
const Navbar = () => {
    return (
        <>
         <div className="container-fliud ">
            <nav className="navbar container navbar-expand-sm navbar-dark bg-dark opacity-75 " >
                <div className="container d-flex justify-content-between align-items-center">
                    
                    <a className="navbar-brand fw-bold" href="#">Oryxen</a>
                    <button className="navbar-toggler bg-dark" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse b" id="mynavbar">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item text-primary">
                                <a className="nav-link fw-bold" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fw-bold" href="#">shop</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fw-bold" href="#">cart</a>
                            </li>
                        </ul>
                        
                    </div>
                </div>
            </nav>
            </div>
        </>
    );
}

export default Navbar;