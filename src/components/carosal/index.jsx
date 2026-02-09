import React, { useState, useEffect } from "react";
import { Box, IconButton } from "@mui/material";
import vrimage from '../../assets/images/vrimage.jpg';
import  person from '../../assets/images/person.jpg'
import gamer from '../../assets/images/gamer.jpg'
import { ArrowBackIos, ArrowForwardIos, PlayArrow } from "@mui/icons-material";
import "./index.css";

const images = [
  vrimage,
  person,
  gamer,
];

const Carousel = () => {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Box className="carousel-wrappers">
      <IconButton className="arrow left" onClick={prevSlide}>
        <ArrowBackIos />
      </IconButton>

      <Box className="carousel">
        {images.map((img, i) => {
          let position = "nextSlide";
          if (i === index) position = "activeSlide";
          if (i === index - 1 || (index === 0 && i === images.length - 1))
            position = "lastSlide";

          return (
            <Box
              key={i}
              className={`slide ${position}`}
              sx={{
                backgroundImage: `url(${img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {i === index && (
                <Box className="play-btns">
                  <PlayArrow className="play-icons" />
                </Box>
              )}
            </Box>
          );
        })}
      </Box>

      <IconButton className="arrow right" onClick={nextSlide}>
        <ArrowForwardIos />
      </IconButton>
    </Box>
  );
};

export default Carousel;