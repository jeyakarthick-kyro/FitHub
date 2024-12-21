/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Carousel } from "react-responsive-carousel";
import { Box } from "@mui/material";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const TransformationSection = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#000",
        color: "#fff",
        position: "relative",
      }}
    >
      {/* @ts-expect-error Server Component */}
      <Carousel
        infiniteLoop
        showArrows
        showThumbs={false}
        showStatus={false}
        autoPlay
        interval={3000}
      >
        <div>
          <img
            src="/carousel1.png"
            alt="Image 1"
            style={{
              width: "100%",
              height: "690px",
              objectFit: "cover",
              transform: "scale(1.1)",
            }}
          />
        </div>
        <div>
          <img
            src="carousel2.png"
            alt="Image 2"
            style={{
              width: "100%",
              height: "690px",
              objectFit: "cover",
              transform: "scale(1.1)",
            }}
          />
        </div>
        <div>
          <img
            src="carousel3.png"
            alt="Image 3"
            style={{
              width: "100%",
              height: "690px",
              objectFit: "cover",
              transform: "scale(1.1)",
            }}
          />
        </div>
      </Carousel>
    </Box>
  );
};

export default TransformationSection;
