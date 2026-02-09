import React from "react";
import Slider from "react-slick";
import gamer1 from '../../assets/images/gamer1.png'
import gamer2 from '../../assets/images/gamer2.png'
import gamer3 from '../../assets/images/gamer3.png'
import gamer4 from '../../assets/images/gamer4.png'
import gamer6 from '../../assets/images/gamer6.png'
import {
  Box,
  Typography,
  IconButton,
  Avatar,
  Stack,
} from "@mui/material";
import {
 
  FavoriteBorder,
  CommentOutlined,
} from "@mui/icons-material";

import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";

function Slick() {
  let sliderRef = React.useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 10000,
    pauseOnHover: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 3 } },
      { breakpoint: 900, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <Box className="slider-container">

      <IconButton
        className="arrow left-arrow"
        onClick={() => sliderRef.slickPrev()}
      >
        <ArrowBackIcon/>
      </IconButton>

      <Slider ref={(slider) => (sliderRef = slider)} {...settings}>

  
        <Box className="slide-box">
              <div className="rhombus-container">
                    <div className="rhombus rhombus-1"></div>
                    <div className="rhombus rhombus-2"></div>
                    <div className="rhombus rhombus-3"></div>
                    <div className="rhombus rhombus-4"></div>
                    <img src={gamer1} className="scroll-img" alt="" />
                    <div className="white-name-box" >
                    </div>  
               </div>
                
                    <div className="blue-name-box" >
                      <h3  style={{color:'white'}}>Zaquery Black</h3>
                    </div>
                    <div className="small-box">
                    </div>
                    <div className="small-box2">
                    </div>
                    <div className="game-box">
                      Call of Duty
                    </div>
                    
        </Box>

  
        <Box className="slide-box">
            <div className="rhombus-container">
                    <div className="rhombus rhombus-1"></div>
                    <div className="rhombus rhombus-2"></div>
                    <div className="rhombus rhombus-3"></div>
                    <div className="rhombus rhombus-4"></div>
                    <img src={gamer2} className="scroll-img" alt="" />
                    <div className="white-name-box" >
                    </div>  
               </div>
                <div className="blue-name-box" >
                      <h3 style={{color:'white'}} >Fredrick Johanson</h3>
                    </div>
                    <div className="small-box">
                    </div>
                    <div className="small-box2">
                    </div>
                    <div className="game-box">
                      Counter Strike 
                    </div>
          
        </Box>


        <Box className="slide-box">
            <div className="rhombus-container">
                    <div className="rhombus rhombus-1"></div>
                    <div className="rhombus rhombus-2"></div>
                    <div className="rhombus rhombus-3"></div>
                    <div className="rhombus rhombus-4"></div>
                    <img src={gamer3} className="scroll-img" alt="" />
                    <div className="white-name-box" >
                    </div>  
               </div>
                <div className="blue-name-box" >
                      <h3 style={{color:'white'}} >Brandon learned</h3>
                    </div>
                    <div className="small-box">
                    </div>
                    <div className="small-box2">
                    </div>
                    <div className="game-box">
                      overwatch
                    </div>
          
        </Box>

  
        <Box className="slide-box">
            <div className="rhombus-container">
                    <div className="rhombus rhombus-1"></div>
                    <div className="rhombus rhombus-2"></div>
                    <div className="rhombus rhombus-3"></div>
                    <div className="rhombus rhombus-4"></div>
                    <img src={gamer4} className="scroll-img" alt="" />
                    <div className="white-name-box" >
                    </div>  
               </div>
                <div className="blue-name-box" >
                      <h3  style={{color:'white'}}>Felix Langyel</h3>
                    </div>
                    <div className="small-box">
                    </div>
                    <div className="small-box2">
                    </div>
                    <div className="game-box">
                      valorent
                    </div>
          
        </Box>

   
        <Box className="slide-box">
            <div className="rhombus-container">
                    <div className="rhombus rhombus-1"></div>
                    <div className="rhombus rhombus-2"></div>
                    <div className="rhombus rhombus-3"></div>
                    <div className="rhombus rhombus-4"></div>
                    <img src={gamer6} className="scroll-img" alt="" />
                    <div className="white-name-box" >
                    </div>  
               </div>
                <div className="blue-name-box" >
                      <h3 style={{color:'white'}}> Sasha Hostyn</h3>
                    </div>
                    <div className="small-box">
                    </div>
                    <div className="small-box2">
                    </div>
                    <div className="game-box">
                      Star craft 2
                    </div>
         
        </Box>
      </Slider>

      <IconButton
        className="arrow right-arrow"
        onClick={() => sliderRef.slickNext()}
      >
        <ArrowForwardIcon/>
      </IconButton>
    </Box>
  );
}

export default Slick;


