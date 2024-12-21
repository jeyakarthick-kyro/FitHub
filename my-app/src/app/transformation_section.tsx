/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Box } from "@mui/material";

const TransformationSection = () => {
  return (
    <Box sx={{ pt: 10, pb: 8, backgroundColor: "black" }}>
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation
        pagination={{
          clickable: true,
        }}
      >
        <SwiperSlide>
          <img
            src="/carousel1.png"
            alt="Image 1"
            style={{
              width: "100%",
              height: "660px",
              objectFit: "cover",
              transform: "scale(1.1)",
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="carousel2.png"
            alt="Image 2"
            style={{
              width: "100%",
              height: "660px",
              objectFit: "cover",
              transform: "scale(1.1)",
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="carousel3.png"
            alt="Image 3"
            style={{
              width: "100%",
              height: "660px",
              objectFit: "cover",
              transform: "scale(1.1)",
            }}
          />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default TransformationSection;
