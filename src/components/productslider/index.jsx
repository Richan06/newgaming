import React, { useEffect, useRef } from "react";
import "./index.css";
import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa";
import product1 from "../../assets/images/product-1.png";
import product2 from "../../assets/images/product-2.png";
import product3 from "../../assets/images/product-3.png";
import product4 from "../../assets/images/product-4.png";
import product5 from "../../assets/images/product-5.png";

import StarIcon from '@mui/icons-material/Star';

const products = [
  { id: 1, title: "STEERING WHEEL", category: "STEERING", price: "$69.00", tag: "IN STOCK", img: product1 },
  { id: 2, title: "FANTECH MOUSE", category: "MOUSE", price: "$49.00", tag: "HOT", img: product2 },
  { id: 3, title: "TARGUS CONSOLE", category: "CONSOLE", price: "$39.00", tag: "-70%", img: product4 },
  { id: 4, title: "XBOX CONTROLLER", category: "CONTROLLER", price: "$19.00", tag: "HOT", img: product3 },
  { id: 5, title: "VR HEADSET", category: "ACCESSORY", price: "$89.00", tag: "NEW", img: product5 },
  { id: 6, title: "MECHANICAL KEYBOARD", category: "ACCESSORY", price: "$99.00", tag: "IN STOCK", img: product1 },
];

const Productslider = () => {
  const sliderRef = useRef(null);
  const scrollAmount = 300;

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const autoScroll = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }, 3000);
    return () => clearInterval(autoScroll);
  }, []);

  return (
    <div className="slider-wrappers">

      <div className="arrow left" onClick={scrollLeft}>
        <FaArrowLeft />
      </div>

      <div className="slider-track-scroll" ref={sliderRef}>
        {products.map((product) => (
          <div className="card" key={product.id}>
            <div className="img-boxs">
              <span className="tag">{product.tag}</span>
              <img src={product.img} alt={product.title} className="prod-img" />
              <button className="add-btn">Add To Cart</button>
            </div>
            <div className="info">
                <div style={{display:'flex',justifyContent:'space-between'}}>
                    <span className="cat">{product.category} </span>
                    <div>
                         <StarIcon fontSize="small"  style={{color:'orange'}}/> 
                         <StarIcon fontSize="small"  style={{color:'orange'}}/>
                         <StarIcon fontSize="small"  style={{color:'orange'}}/><StarIcon fontSize="small"  style={{color:'orange'}}/>
                         <StarIcon fontSize="small"  style={{color:'orange'}}/>
                    </div>
                </div>
              
                
             
              <div className="title-stars">
                <h3 className="title">{product.title}</h3>
               
              </div>
              <p className="price">{product.price}</p>
               
            </div>
            
          </div>
         
        ))}
      </div>

      <div className="arrow right" onClick={scrollRight}>
        <FaArrowRight />
      </div>
    </div>
  );
};

export default Productslider;

