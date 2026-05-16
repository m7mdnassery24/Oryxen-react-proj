import React, { memo  , useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // الاستيراد الجديد
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// استيراد الكومبوننتس بتاعتك
import Navbar from "./component/navbar";
import SimpleSlider from "./component/Slider.jsx";
import Cards from "../src/component/Cards.js";
import Bigsection from "../src/component/Discount.js";
import Newarr from "../src/component/Newarr";
import Bigsale from "./component/Bigsale.js";
import Shop from "./component/Shop.js"
import Cart from "./component/Cart.js";
import Lastsection from "./component/Lastsection.js";
function App() {

  
  return (
    <BrowserRouter>
      <div>
        <span> </span>
        <Navbar  style={ {zIndex:"1000"}}/>
        <Routes>

          <Route path="/" element={
            <>
              <SimpleSlider />
              <Cards />
              <Bigsection />
              <br /><br /><br />
              <Newarr />
              <Bigsale />
            </>
          } />

          <Route path="/shop" element={
           
              <Shop/>
       

          } />
          <Route path="/cart" element={<Cart/>} />

         
        </Routes>

       <Lastsection/>
      </div>
    </BrowserRouter>

  );
}

export default React.memo(App);