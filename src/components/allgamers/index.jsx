import React, { useState, useEffect } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import gamer1 from "../../assets/images/gamer2.png";

const gamers = [
  { id: 1, name: "Sasha Hostyn", game: "StarCraft II", img: gamer1 },
  { id: 2, name: "Zaqueri Black", game: "Call of Duty", img: gamer1 },
  { id: 3, name: "Fredrik Johanson", game: "Counter Strike", img: gamer1 },
  { id: 4, name: "Brandon Larned", game: "Overwatch", img: gamer1 },
  { id: 5, name: "New Player", game: "Valorant", img: gamer1 },
];

const AllGamers = () => {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(4);

  useEffect(() => {
    const updateVisible = () => {
      if (window.innerWidth < 600) setVisible(1);
      else if (window.innerWidth < 900) setVisible(2);
      else setVisible(4);
    };
    updateVisible();
    window.addEventListener("resize", updateVisible);
    return () => window.removeEventListener("resize", updateVisible);
  }, []);

  const nextSlide = () => {
    if (index < gamers.length - visible) setIndex(index + 1);
  };

  const prevSlide = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        py: 6,
      }}
    >
      {/* Slider track */}
      <Box
        sx={{
          display: "flex",
          transition: "transform 0.6s ease",
          transform: `translateX(-${(index * 100) / visible}%)`,
          width: `${(gamers.length / visible) * 100}%`,
        }}
      >
        {gamers.map((gamer) => (
          <Box
            key={gamer.id}
            sx={{
              flex: `0 0 ${100 / visible}%`,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              px: 2,
            }}
          >
            {/* Background Gradient Blocks */}
            <Box
              sx={{
                position: "relative",
                width: "100%",
                maxWidth: 300,
                height: 300,
                mb: 2,
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(180deg, rgba(161,0,255,0.6), rgba(0,200,255,0.3))",
                  clipPath:
                    "polygon(20% 0, 100% 0, 100% 80%, 80% 100%, 0 100%, 0 20%)",
                  zIndex: 0,
                  borderRadius: "8px",
                }}
              />
              <Box
                component="img"
                src={gamer.img}
                alt={gamer.name}
                sx={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "10px",
                  zIndex: 1,
                }}
              />
            </Box>

            {/* Card Info */}
            <Box
              sx={{
                background:
                  "linear-gradient(90deg, #6c00ff, #00bfff, #6c00ff)",
                borderRadius: "8px",
                padding: "8px 16px",
                display: "inline-block",
                color: "white",
                fontFamily: "Orbitron, sans-serif",
                mb: 0.5,
              }}
            >
              <Typography
                sx={{ fontWeight: 700, fontSize: "1.1rem", color: "white" }}
              >
                {gamer.name}
              </Typography>
            </Box>
            <Typography
              sx={{ color: "#ccc", fontSize: "0.9rem", fontFamily: "Poppins" }}
            >
              {gamer.game}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* Arrows */}
      <IconButton
        onClick={prevSlide}
        sx={{
          position: "absolute",
          top: "50%",
          left: "10px",
          transform: "translateY(-50%)",
          color: "white",
          background: "rgba(255,255,255,0.1)",
          "&:hover": { background: "rgba(255,255,255,0.3)" },
        }}
      >
        <ArrowBackIos />
      </IconButton>

      <IconButton
        onClick={nextSlide}
        sx={{
          position: "absolute",
          top: "50%",
          right: "10px",
          transform: "translateY(-50%)",
          color: "white",
          background: "rgba(255,255,255,0.1)",
          "&:hover": { background: "rgba(255,255,255,0.3)" },
        }}
      >
        <ArrowForwardIos />
      </IconButton>
    </Box>
  );
};

export default AllGamers;
