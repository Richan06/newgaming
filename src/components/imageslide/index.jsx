import React, { useEffect, useRef, useState } from "react";
import { Box } from "@mui/material";

import champions from "../../assets/images/champions.png";
import badge from "../../assets/images/badge.png";
import overlord from "../../assets/images/overlord.png";
import console from "../../assets/images/console.png";
import league from "../../assets/images/league.png";

const images = [
  champions,
  badge,
  overlord,
  console,
  league,
  champions,
  overlord,
];

function Imageslide() {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);


  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      if (scrollRef.current) {
        const container = scrollRef.current;
        const moveBy = container.clientWidth / 5; 

        container.scrollBy({
          left: moveBy,
          behavior: "smooth",
        });

        if (
          container.scrollLeft + container.clientWidth >=
          container.scrollWidth - 5
        ) {
          setTimeout(() => {
            container.scrollTo({ left: 0, behavior: "auto" });
          }, 500);
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused]);


  const handleDoubleClick = () => {
    setIsPaused((prev) => !prev);
  };


  const handleMouseDown = (e) => {
    if (!isPaused) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => setIsDragging(false);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e) => {
    if (!isDragging || !isPaused) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <Box
      ref={scrollRef}
      onDoubleClick={handleDoubleClick}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      sx={{
        width: "76%",
        margin: "auto",
        display: "flex",
        marginTop:'100px',
        gap: 3,
        overflow: "hidden",
        scrollBehavior: "smooth",
        cursor: isPaused ? "grab" : "default",
        p: 2,
        userSelect: "none",
        "&::-webkit-scrollbar": { display: "none" },
      }}
    >
      {images.map((src, index) => (
        <Box
          key={index}
          component="img"
          src={src}
          alt={`slide-${index}`}
          sx={{
            flexShrink: 0,
            width: "18%",
            borderRadius: "8px",
            transition: "transform 0.3s ease",
            "&:hover": { transform: "scale(1.05)" },
          }}
        />
      ))}
    </Box>
  );
}

export default Imageslide;

