/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Typography, Box } from "@mui/material";

const features = [
  { title: "TRACK", image: "TRACK1.png" },
  { title: "ANALYZE", image: "TRACK5.png" },
  { title: "TRAIN", image: "TRACK2.png" },
  { title: "CONNECT", image: "TRACK3.jpg" },
  { title: "CHALLENGE", image: "TRACK4.jpg" },
];

const HighlightsSection = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        overflow: "hidden",
        height: "650px",
      }}
    >
      {features.map((feature, index) => (
        <Box
          key={index}
          sx={{
            position: "relative",
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
            "& img": {
              transition: "transform 0.3s ease",
            },
            "&:hover img": {
              transform: "scale(1.1)",
            },
          }}
        >
          <img
            src={feature.image}
            alt={feature.title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
          <Typography
            sx={{
              position: "absolute",
              color: "#fff",
              fontWeight: "bold",
              textTransform: "uppercase",
              zIndex: 1,
              fontSize: 26,
              fontFamily: "Orbitron",
            }}
          >
            {feature.title}
          </Typography>
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.4)",
              zIndex: 0,
            }}
          ></Box>
        </Box>
      ))}
    </Box>
  );
};

export default HighlightsSection;
