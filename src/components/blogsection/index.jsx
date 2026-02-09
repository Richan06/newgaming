import React from "react";
import { Box } from "@mui/material";
import "./index.css";
import chasing from "../../assets/images/chasing.jpg";
import winterland from "../../assets/images/winterland.jpg";
import alien from "../../assets/images/alien.jpg";
import ice from "../../assets/images/ice.jpg";

import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

function Blogsection() {
  return (
    <div className="full-blogsection-container">
      <div className="full-blogsection-width">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            gap: { xs: "30px", md: "40px" },
            flexDirection: { xs: "column", sm: "column", md: "row" },
            alignItems: { xs: "center", md: "flex-start" },
          }}
        >
  
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "30px",
              justifyContent: "center",
            }}
          >
            <Box className="blog-box2">
              <img className="blog-inside-img" src={ice} alt="" />
              <Box sx={{ padding: "20px" }}>
                <div className="blog-small-icon">
                  <span style={{ color: "blueviolet" }}>
                    <CalendarMonthIcon />
                  </span>
                  <p> JAN 01 2022 </p>
                  <span style={{ color: "blueviolet" }}>
                    <PersonOutlineOutlinedIcon />
                  </span>
                  <p> ELLIOT ALDERSON</p>
                </div>
                <p className="blog-heading">
                  Financial Expert Support Help You to Find Out
                </p>
                <p className="blog-desc">
                  Financial experts support or help you to to find out which way
                  you can raise your funds more...
                </p>
                <hr className="blog-mini-line" /> READMORE
              </Box>
            </Box>

            <Box className="blog-box2">
              <img className="blog-inside-img" src={winterland} alt="" />
              <Box sx={{ padding: "20px" }}>
                <div className="blog-small-icon">
                  <span style={{ color: "blueviolet" }}>
                    <CalendarMonthIcon />
                  </span>
                  <p> JAN 01 2022 </p>
                  <span style={{ color: "blueviolet" }}>
                    <PersonOutlineOutlinedIcon />
                  </span>
                  <p> ELLIOT ALDERSON</p>
                </div>
                <p className="blog-heading">
                  Financial Expert Support Help You to Find Out
                </p>
                <p className="blog-desc">
                  Financial experts support or help you to to find out which way
                  you can raise your funds more...
                </p>
                <hr className="blog-mini-line" /> READMORE
              </Box>
            </Box>
          </Box>

    
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "30px",
            }}
          >
            <Box className="blog-box2">
              <img className="blog-inside-img" src={chasing} alt="" />
              <Box sx={{ padding: "20px" }}>
                <div className="blog-small-icon">
                  <span style={{ color: "blueviolet" }}>
                    <CalendarMonthIcon />
                  </span>
                  <p> JAN 01 2022 </p>
                  <span style={{ color: "blueviolet" }}>
                    <PersonOutlineOutlinedIcon />
                  </span>
                  <p> ELLIOT ALDERSON</p>
                </div>
                <p className="blog-heading">
                  Financial Expert Support Help You to Find Out
                </p>
                <p className="blog-desc">
                  Financial experts support or help you to to find out which way
                  you can raise your funds more...
                </p>
                <hr className="blog-mini-line" /> READMORE
              </Box>
            </Box>

            <Box className="blog-box2" >
              <img className="blog-inside-img" src={alien} alt="" />
              <Box sx={{ padding: "20px" }}>
                <div className="blog-small-icon">
                  <span style={{ color: "blueviolet" }}>
                    <CalendarMonthIcon />
                  </span>
                  <p> JAN 01 2022 </p>
                  <span style={{ color: "blueviolet" }}>
                    <PersonOutlineOutlinedIcon />
                  </span>
                  <p> ELLIOT ALDERSON</p>
                </div>
                <p className="blog-heading">
                  Financial Expert Support Help You to Find Out
                </p>
                <p className="blog-desc">
                  Financial experts support or help you to to find out which way
                  you can raise your funds more...
                </p>
                <hr className="blog-mini-line" /> READMORE
              </Box>
            </Box>
          </Box>

          <Box className="blog-sidebar" sx={{display:"flex",flexDirection:{lg:'column',md:'row',sm:'row',xs:'column',gap:'20px'}}}>
            <div className="full-search-box">
              <div className="whole-search-box">
                <input
                  className="blog-input-box"
                  type="text"
                  placeholder="Search"
                />
                <p
                  style={{
                    display: "inline",
                    paddingRight: "10px",
                    color: "blueviolet",
                  }}
                >
                  🔍︎
                </p>
              </div>
            </div>

   
            <div className="blog-categories">
              <h3>Categories</h3>
              <div className="cat-item">
                <p>Business Strategy</p>
                <p className="cat-count">23</p>
              </div>
              <div className="cat-item">
                <p>Project Management</p>
                <p className="cat-count">05</p>
              </div>
              <div className="cat-item">
                <p>Digital Marketing</p>
                <p className="cat-count">18</p>
              </div>
              <div className="cat-item">
                <p>Customer Experience</p>
                <p className="cat-count">04</p>
              </div>
              <div className="cat-item">
                <p>Partnership System</p>
                <p className="cat-count">15</p>
              </div>
            </div>

           <div style={{fontFamily:'oxanium',color:'white',marginTop:'20px',backgroundColor:'rgba(162, 160, 177, 0.1)',paddingLeft:'10px',paddingBottom:'10px'}}> <h3 style={{paddingTop:'10px'}}>Tags</h3>
            <button className="tag-btn">Business</button> 
            <button className="tag-btn">Marketing</button>
             <button className="tag-btn">Startup</button> 
             <button className="tag-btn">Design</button> 
             
             <br /> <button className="tag-btn">Consulting</button> 
             <button className="tag-btn">Strategy</button>
             <button className="tag-btn">Development</button> <br />
             <button className="tag-btn"> Tips</button>
              <button className="tag-btn">Seo</button> </div>
          </Box>
        </Box>

        <div style={{ display: "flex", gap: "5px",  marginTop: "30px" }}>
          <p className="page-tag">←</p>
          <p className="page-tag">1</p>
          <p className="page-tag">2</p>
          <p className="page-tag">3</p>
          <p className="page-tag">→</p>
        </div>
      </div>
    </div>
  );
}

export default Blogsection;
