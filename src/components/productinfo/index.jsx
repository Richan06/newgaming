import { Box } from "@mui/material";
import { useState } from "react";
import product1 from "../../assets/images/product-1.png";
import product2 from "../../assets/images/product-2.png";
import product3 from "../../assets/images/product-3.png";
import product4 from "../../assets/images/product-4.png";
import StarIcon from "@mui/icons-material/Star";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import "./index.css";

function Productinfo() {
  const [product, setProduct] = useState(1);

  const products = [product1, product2, product3, product4];

  return (
    <div className="product-container">
      <div className="product-fullwidth">
        <Box
          sx={{
            display: "flex",
            flexDirection: { lg: "row", md: "row", sm: "column", xs: "column" },
            alignItems: "center",
            justifyContent: "center",
            gap: { lg: "50px", md: "50px", sm: "40px", xs: "30px" },
          }}
        >
 
          <Box sx={{ width: { lg: "auto", md: "auto", sm: "80%", xs: "85%" } }}>
            <Box
              sx={{
                backgroundColor: "hsl(240, 63%, 13%)",
                border: "2px solid rgba(152, 65, 255, 0.3)",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img
                style={{
                  width: product === 1 ? "80%" : "70%",
                }}
                src={products[product - 1]}
                alt="product"
              />
            </Box>

            <Box
              sx={{
                backgroundColor: "rgba(12, 12, 54, 0.1)",
                display: "flex",
                justifyContent: "space-between",
                marginTop: "7px",
                height: { lg: "80px", md: "80px", sm: "90px", xs: "90px" },
                gap: "6px",
              }}
            >
              {products.map((img, index) => (
                <div key={index} className="img-box" onClick={() => setProduct(index + 1)}>
                  <img
                    src={img}
                    width="100%"
                    alt={`product${index + 1}`}
                    style={{ cursor: "pointer" }}
                  />
                </div>
              ))}
            </Box>
          </Box>

   
          <Box sx={{ width: { lg: "auto", md: "auto", sm: "80%", xs: "85%" } }}>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <p className="steering">steering</p>
              <Box>
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="star-icon" fontSize="small" />
                ))}
              </Box>
            </Box>

            <p className="redex-title">REDEX STEERING WHEEL</p>
            <Box
              sx={{
                display: "flex",
                gap: "15px",
                fontFamily: "oxanium",
                color: "white",
                alignItems: "center",
              }}
            >
              <h2>$ 59.00</h2> <p style={{ color: "green" }}>(INSTOCK)</p>
            </Box>

            <p className="redux-paragraph">
              Designed for simplicity and made from high quality materials. Its sleek geometry and
              material combinations creates a modern look. Add To Cart
            </p>

            <input
              className="input-box-num"
              type="number"
              min={1}
              max={100}
              step={1}
              value={1}
              readOnly
            />
            <button className="add-cart-btn">Add to Cart</button>

            <div style={{ display: "flex", marginTop: "30px" }}>
              <p className="blue-tag">SKU :</p>
              <p className="white-tag">ANQ4O6DWDZ</p>
            </div>
            <div style={{ display: "flex" }}>
              <p className="blue-tag">CATEGORIES :</p>
              <p className="white-tag">BAG WOMEN</p>
            </div>
            <div style={{ display: "flex" }}>
              <p className="blue-tag">TAGS :</p>
              <p className="white-tag">DRESS PANTS</p>
            </div>

            <Box sx={{ marginTop: "20px" }}>
              <FacebookOutlinedIcon className="icons" />
              <TwitterIcon className="icons" />
              <InstagramIcon className="icons" />
              <YouTubeIcon className="icons" />
            </Box>
          </Box>
        </Box>

        <hr className="content-line" />
      </div>
    </div>
  );
}

export default Productinfo;
