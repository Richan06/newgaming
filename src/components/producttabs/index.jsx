import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import comment1 from '../../assets/images/comment-1.png'
import comment2 from '../../assets/images/commentperson1.png'
import "./index.css";

const Producttabs = () => {
  const [activeTab, setActiveTab] = useState("description");

  const renderContent = () => {
    switch (activeTab) {
      case "description":
        return (
          <Box className="tab-box">
            <Box className="tab-content">
              <Typography className="tab-text">
                Lower temperature washes and delicate spin cycles are gentler on
                garment, helping to maintain the color, shape and structure of the
                fabric. At the same time it reduces energy consumption that is
                used in care processes.
              </Typography>

              <Box className="tab-info">
                <Box>
                  <p><strong className="highlight">Model wears:</strong> UK 10/ EU 38/ US 6</p>
                  <p><strong className="highlight">Country:</strong> Italy</p>
                  <p><strong className="highlight">Lining:</strong> Polyester 100%</p>
                </Box>
                <Box>
                  <p><strong className="highlight">Occasion:</strong> Lifestyle, Sport</p>
                  <p><strong className="highlight">Outer:</strong> Leather 100%, Polyamide 100%</p>
                  <p><strong className="highlight">CounSoletry:</strong> Rubber 100%</p>
                </Box>
              </Box>
            </Box>
          </Box>
        );

      case "additional":
        return (
          <Box className="tab-box">
            <Box className="tab-content">
              <table className="size-table">
                <thead>
                  <tr>
                    <th>Size</th>
                    <th>Bust</th>
                    <th>Waist</th>
                    <th>Hip</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>S</td><td>34-36</td><td>28-30</td><td>38-40</td></tr>
                  <tr><td>M</td><td>36-38</td><td>30-32.5</td><td>40-43</td></tr>
                  <tr><td>L</td><td>38-40</td><td>32-34.5</td><td>42-45.5</td></tr>
                  <tr><td>XL</td><td>40-42</td><td>35-37</td><td>46-48</td></tr>
                </tbody>
              </table>
            </Box>
          </Box>
        );

      case "reviews":
        return (
          <Box className="tab-box">
            <Box className="tab-content review-section">
              <Box className="review-card">
                <img src={comment1} alt="Elliot" />
                <div>
                  <p className="review-date">January 5, 2022</p>
                  <h4>Elliot Alderson</h4>
                  <p>Our versatile team is built of designers, developers and digital marketers.</p>
                </div>
                <span className="stars">★★★★★</span>
              </Box>
              <Box className="review-card">
                <img src={comment2} alt="Melania" />
                <div>
                  <p className="review-date">January 5, 2022</p>
                  <h4>Melania Trump</h4>
                  <p>Our versatile team is built of designers, developers and digital marketers.</p>
                </div>
                <span className="stars">★★★★★</span>
              </Box>
            </Box>
          </Box>
        );

      default:
        return null;
    }
  };

  return (
    <Box className="product-tabs">
      <Box className="tab-header">
        <Typography
          className={`tab-link ${activeTab === "description" ? "active" : ""}`}
          onClick={() => setActiveTab("description")}
        >
          DESCRIPTION
        </Typography>
        <Typography
          className={`tab-link ${activeTab === "additional" ? "active" : ""}`}
          onClick={() => setActiveTab("additional")}
        >
          ADDITIONAL INFORMATION
        </Typography>
        <Typography
          className={`tab-link ${activeTab === "reviews" ? "active" : ""}`}
          onClick={() => setActiveTab("reviews")}
        >
          REVIEWS (2)
        </Typography>
      </Box>
      {renderContent()}
    </Box>
  );
};

export default Producttabs;
