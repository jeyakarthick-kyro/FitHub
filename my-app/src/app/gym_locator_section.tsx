"use client";

import React, { useState } from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

const mapContainerStyle = {
  width: "100%",
  height: "100%",
};
const defaultZoom = 15;

const GymLocatorSection = () => {
  const gyms = [
    {
      id: 1,
      name: "Physc Gym Nerul 24/7",
      phone: "+91 1234567890",
      address: "Nerul, Navi Mumbai, Maharashtra, 400706",
      coords: { lat: 19.0324, lng: 73.017 },
      image: "/location1.avif",
    },
    {
      id: 2,
      name: "Iron Fitness",
      phone: "+91 1234567890",
      address: "Nerul, Navi Mumbai",
      coords: { lat: 19.033, lng: 73.0185 },
      image: "/location2.avif",
    },
    {
      id: 3,
      name: "Hydropower Fitness & Gym",
      phone: "+91-22-0001-0211",
      address: "Nerul, Navi Mumbai",
      coords: { lat: 19.035, lng: 73.015 },
      image: "/location3.avif",
    },
    {
      id: 4,
      name: "Yuva Fitness",
      phone: "+91 9876543210",
      address: "Nerul, Navi Mumbai",
      coords: { lat: 19.031, lng: 73.016 },
      image: "/location4.avif",
    },
    {
      id: 5,
      name: "Fit Zone",
      phone: "+91 9876543211",
      address: "Navi Mumbai, Maharashtra, 400707",
      coords: { lat: 19.036, lng: 73.019 },
      image: "/location1.avif",
    },
    {
      id: 6,
      name: "Powerhouse Gym",
      phone: "+91 9876543212",
      address: "Navi Mumbai, Maharashtra, 400708",
      coords: { lat: 19.037, lng: 73.02 },
      image: "/location2.avif",
    },
    {
      id: 7,
      name: "Fitness First",
      phone: "+91 9876543213",
      address: "Navi Mumbai, Maharashtra, 400709",
      coords: { lat: 19.038, lng: 73.021 },
      image: "/location3.avif",
    },
    {
      id: 8,
      name: "Gold's Gym",
      phone: "+91 9876543214",
      address: "Navi Mumbai, Maharashtra, 400710",
      coords: { lat: 19.039, lng: 73.022 },
      image: "/location4.avif",
    },
  ];

  const [selectedGym, setSelectedGym] = useState(gyms[0]);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.API_KEY || "",
  });

  if (loadError) {
    return <div />;
  }
  if (!isLoaded) return <div>Loading...</div>;

  return (
    <Box
      sx={{
        backgroundColor: "#000",
        pb: 10,
      }}
    >
      <Box
        textAlign="center"
        sx={{
          pb: 10,
          backgroundColor: "#000",
        }}
      >
        <Typography
          sx={{
            fontWeight: "900",
            fontSize: 45,
            color: "red",
            fontFamily: "Orbitron",
          }}
        >
          Find Your Nearest Gym
        </Typography>
        <Typography
          sx={{
            maxWidth: "500px",
            mx: "auto",
            fontSize: { xs: "16px", sm: "18px" },
            fontFamily: "Space Grotesk",
          }}
        >
          Easily discover gyms near your location to kickstart your fitness
          journey today!
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          height: "100vh",
          backgroundColor: "#000",
        }}
      >
        <Box
          sx={{
            width: "50%",
            ml: 10,
            overflowY: "auto",
            padding: "30px",
            backgroundColor: "#1e1c1c",
          }}
        >
          {gyms.map((gym) => (
            <Card
              key={gym.id}
              sx={{
                display: "flex",
                backgroundColor: selectedGym.id === gym.id ? "red" : "#222",
                color: "#fff",
                marginBottom: "20px",
                cursor: "pointer",
                border: selectedGym.id === gym.id ? "2px solid #fff" : "none",
              }}
              onClick={() => setSelectedGym(gym)}
            >
              <Box
                component="img"
                src={gym.image}
                alt={gym.name}
                sx={{ width: "100px", height: "150px", objectFit: "cover" }}
              />
              <CardContent>
                <Typography
                  sx={{
                    fontFamily: "Space Grotesk",
                    fontWeight: 600,
                    fontSize: 28,
                    mb: 2,
                  }}
                >
                  {gym.name}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Space Grotesk",
                    fontWeight: 200,
                    fontSize: 18,
                  }}
                >
                  {gym.phone}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Space Grotesk",
                    fontWeight: 200,
                    fontSize: 18,
                  }}
                >
                  {gym.address}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>

        <Box
          sx={{
            width: "50%",
            height: "100%",
            mr: 10,
          }}
        >
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={defaultZoom}
            center={selectedGym.coords}
          >
            {gyms.map((gym) => (
              <Marker
                key={gym.id}
                position={gym.coords}
                icon={{
                  url:
                    selectedGym.id === gym.id
                      ? "http://maps.google.com/mapfiles/ms/icons/red-dot.png"
                      : "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
                }}
              />
            ))}
          </GoogleMap>
        </Box>
      </Box>
    </Box>
  );
};

export default GymLocatorSection;
