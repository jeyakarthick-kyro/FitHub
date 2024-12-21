/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";
import SmartphoneOutlinedIcon from "@mui/icons-material/SmartphoneOutlined";
import FitnessCenterOutlinedIcon from "@mui/icons-material/FitnessCenterOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import RestaurantOutlinedIcon from "@mui/icons-material/RestaurantOutlined";

const benefits = [
  {
    title: "Effortless Workout Logging",
    description:
      "Easily log your workouts and monitor your progress over time with our intuitive logging feature.",
    icon: <SmartphoneOutlinedIcon sx={{ color: "#fff", fontSize: "2rem" }} />,
  },
  {
    title: "Personalized Workout Plans",
    description:
      "AI-powered workout plans tailored to your fitness level, goals, and progress.",
    icon: (
      <FitnessCenterOutlinedIcon sx={{ color: "#fff", fontSize: "2rem" }} />
    ),
  },
  {
    title: "Accurate Rep Counting",
    description:
      "Count your reps accurately with our app, ensuring consistency and improved performance.",
    icon: <AccessTimeOutlinedIcon sx={{ color: "#fff", fontSize: "2rem" }} />,
  },
  {
    title: "Calorie Calculation & Personalized Diet Plans",
    description:
      "Calculate calories burned during workouts and AI-customized meal plans for optimal nutrition.",
    icon: <RestaurantOutlinedIcon sx={{ color: "#fff", fontSize: "2rem" }} />,
  },
];

const BenefitsSection = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#000",
        color: "#fff",
        py: 4,
        px: 8,
        textAlign: "center",
      }}
    >
      <Typography
        sx={{
          fontWeight: "900",
          fontSize: "45px",
          color: "red",
          marginBottom: "16px",
          fontFamily: "Orbitron",
        }}
      >
        Discover GymFluencer Benefits
      </Typography>
      <Typography
        sx={{
          marginBottom: 6,
          maxWidth: "550px",
          mx: "auto",
          fontSize: "1rem",
          fontFamily: "Space Grotesk",
        }}
      >
        Unlock your full potential with GymFluencer, your personal fitness
        partner for progress and motivation.
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: 4,
        }}
      >
        <Box sx={{ flex: 1 }}>
          {benefits.slice(0, 2).map((benefit, index) => (
            <Card
              key={index}
              sx={{
                backgroundColor: "#121212",
                borderRadius: "16px",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.5)",
                color: "#fff",
                padding: "24px",
                textAlign: "left",
                width: "400px",
                height: "300px",
                mx: 4,
                mb: 3,
              }}
            >
              <CardContent>
                <Box
                  sx={{
                    backgroundColor: "#1E1E1E",
                    display: "inline-flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "8px",
                    width: "20px",
                    height: "20px",
                    mb: 5,
                  }}
                >
                  {benefit.icon}
                </Box>
                <Typography
                  sx={{
                    color: "red",
                    fontWeight: 700,
                    fontSize: 22,
                    mb: 1,
                    fontFamily: "Orbitron",
                  }}
                >
                  {benefit.title}
                </Typography>
                <Typography
                  sx={{
                    color: "#b3b3b3",
                    fontSize: 18,
                    fontFamily: "Space Grotesk",
                  }}
                >
                  {benefit.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>

        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src="/mobile.avif"
              alt="Mobile Mockup"
              style={{
                height: 650,
                width: 350,
                borderRadius: "20px",
              }}
            />
          </Box>
        </Box>

        <Box sx={{ flex: 1 }}>
          {benefits.slice(2).map((benefit, index) => (
            <Card
              key={index}
              sx={{
                backgroundColor: "#121212",
                borderRadius: "16px",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.5)",
                color: "#fff",
                padding: "24px",
                textAlign: "left",
                width: "400px",
                height: "300px",
                mx: 4,
                mb: 3,
              }}
            >
              <CardContent>
                <Box
                  sx={{
                    backgroundColor: "#1E1E1E",
                    display: "inline-flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "8px",
                    width: "20px",
                    height: "20px",
                    mb: 5,
                  }}
                >
                  {benefit.icon}
                </Box>
                <Typography
                  sx={{
                    color: "red",
                    fontWeight: 700,
                    fontSize: 22,
                    mb: 1,
                    fontFamily: "Orbitron",
                  }}
                >
                  {benefit.title}
                </Typography>
                <Typography
                  sx={{
                    color: "#b3b3b3",
                    fontSize: 18,
                    fontFamily: "Space Grotesk",
                  }}
                >
                  {benefit.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default BenefitsSection;
