import React from "react";
import { Box, Typography, Container } from "@mui/material";

const FitnessSection = () => {
  const textLines = [" Fitness / Transformation / Progress / Strength "];

  const textLines1 = [" Fitness / Transformation / Progress / Strength "];

  return (
    <Box
      sx={{
        backgroundColor: "black",
        color: "white",
        width: "100%",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "190px",
          overflow: "hidden",
        }}
      >
        <style jsx>{`
          @keyframes scroll-horizontal-0 {
            0% {
              transform: translateX(100%);
            }
            100% {
              transform: translateX(-100%);
            }
          }
          @keyframes scroll-horizontal-1 {
            0% {
              transform: translateX(-100%);
            }
            100% {
              transform: translateX(100%);
            }
          }
        `}</style>
        <Box
          key={0}
          sx={{
            position: "absolute",
            top: `0px`,
            whiteSpace: "nowrap",
            animation: `scroll-horizontal-0 10s linear infinite`,
            animationDelay: `0s`,
          }}
        >
          <Typography
            color="white"
            sx={{
              display: "inline-block",
              paddingRight: "50px",
              fontWeight: "500",
              fontSize: 80,
              fontFamily: "Orbitron",
            }}
          >
            {textLines[0].repeat(1)}
          </Typography>
        </Box>
        <Box
          key={1}
          sx={{
            position: "absolute",
            top: `75px`,
            whiteSpace: "nowrap",
            animation: `scroll-horizontal-1 10s linear infinite`,
            animationDelay: `0s`,
          }}
        >
          <Typography
            color="red"
            sx={{
              display: "inline-block",
              opacity: 0.5,
              fontWeight: "500",
              fontSize: 80,
              fontFamily: "Orbitron",
            }}
          >
            {textLines1[0].repeat(1)}
          </Typography>
        </Box>
      </Box>
      <Container maxWidth="lg">
        <Box textAlign="center" mb={2}>
          <Typography
            sx={{
              fontWeight: "900",
              textTransform: "uppercase",
              color: "red",
              fontSize: 65,
              mx: "auto",
              maxWidth: "600px",
              fontFamily: "Orbitron",
              mt: 4,
              lineHeight: 1.2,
            }}
          >
            Your Fitness. Our Mission.
          </Typography>
        </Box>
        <Box textAlign="center" mb={8}>
          <Typography
            variant="body1"
            sx={{
              maxWidth: "800px",
              mx: "auto",
              fontSize: "20px",
              fontFamily: "Space Grotesk",
            }}
          >
            At GymFluencer, our mission is simple: to provide the tools and
            support you need to reach your fitness goals. We combine innovative
            technology with personalized guidance to make fitness easier, more
            accessible, and more motivating. Join us as we help you transform
            your fitness journey, one workout at a time.
          </Typography>
        </Box>
        <Box display="flex" justifyContent="center" flexWrap="wrap" gap={3}>
          <Box textAlign="center" flexBasis={{ xs: "100%", sm: "30%" }}>
            <Typography sx={{ fontWeight: "900", fontSize: 55 }}>
              463k+
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "gray",
                fontFamily: "Space Grotesk",
                fontSize: { xs: "14px", sm: "16px" },
              }}
            >
              Workouts logged and progress tracked every month
            </Typography>
          </Box>
          <hr
            style={{
              width: "1px",
              height: "130px",
              backgroundColor: "#1d1d20",
              border: "none",
            }}
          />
          <Box textAlign="center" flexBasis={{ xs: "100%", sm: "30%" }}>
            <Typography sx={{ fontWeight: "900", fontSize: 55 }}>
              163k+
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "gray",
                fontFamily: "Space Grotesk",
                fontSize: { xs: "14px", sm: "16px" },
              }}
            >
              Fitness enthusiasts connected through our platform
            </Typography>
          </Box>
          <hr
            style={{
              width: "1px",
              height: "130px",
              backgroundColor: "#1d1d20",
              border: "none",
            }}
          />
          <Box textAlign="center" flexBasis={{ xs: "100%", sm: "30%" }}>
            <Typography sx={{ fontWeight: "900", fontSize: 55 }}>
              13+
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "gray",
                fontFamily: "Space Grotesk",
                fontSize: { xs: "14px", sm: "16px" },
              }}
            >
              Countries where GymFluencer is making an impact
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default FitnessSection;
