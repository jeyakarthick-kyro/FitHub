import React from "react";
import { Box, Container, Typography } from "@mui/material";

const ServicesSection = () => {
  return (
    <Box sx={{ backgroundColor: "black", color: "white" }}>
      <Container maxWidth="lg">
        <Box textAlign="center" mb={8}>
          <Box
            component="iframe"
            src="https://www.youtube.com/embed/pznrAWMhahA"
            sx={{
              width: "100%",
              maxWidth: "900px",
              borderRadius: "8px",
              overflow: "hidden",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.5)",
              height: "500px",
            }}
            allowFullScreen
          />
        </Box>

        <Box textAlign="center" mb={8}>
          <Typography
            sx={{
              fontWeight: "900",
              fontSize: 60,
              color: "red",
              fontFamily: "Orbitron",
            }}
          >
            Our Services
          </Typography>
          <Typography
            sx={{
              maxWidth: "600px",
              mx: "auto",
              fontSize: { xs: "16px", sm: "18px" },
              fontFamily: "Space Grotesk",
            }}
          >
            GymFluencer offers 5 essential services to help you achieve your
            fitness goals with ease and flexibility.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default ServicesSection;
