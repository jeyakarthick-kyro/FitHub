"use client";

import Box from "@mui/material/Box";
import Image from "next/image";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import FitnessSection from "./fitness_section";
import ServicesSection from "./service_section";
import HighlightsSection from "./highlights_section";
import BenefitsSection from "./benefits_section";
import { Avatar, Chip } from "@mui/material";
import BlogSection from "./blog_section";
import FAQSection from "./faq_section";
import TransformationSection from "./transformation_section";
import FooterSection from "./footer_section";
import GymLocatorSection from "./gym_locator_section";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function Home() {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <AppBar
          position="sticky"
          sx={{
            top: 30,
            left: 0,
            width: "77%",
            background: "linear-gradient(90deg, #000, #1A1A1A)",
            margin: "0 auto",
            borderRadius: 10,
            height: "85px",
            border: "0.5px solid rgb(38, 38, 38)",
          }}
        >
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              height: "100%",
            }}
          >
            <Box display="flex" alignItems="center">
              <Box sx={{ width: 170, height: 42, position: "relative" }}>
                <Image src="/logo.svg" alt="logo image" layout="fill" />
              </Box>
            </Box>

            <Box display="flex" alignItems="center">
              <Button
                sx={{
                  color: "#fff",
                  textTransform: "none",
                  mx: 1,
                  fontSize: 17,
                  "&:hover": { color: "red" },
                }}
              >
                Home
              </Button>
              <Button
                sx={{
                  color: "#fff",
                  textTransform: "none",
                  mx: 1,
                  fontSize: 17,
                  "&:hover": { color: "red" },
                }}
              >
                About
              </Button>
              <Button
                sx={{
                  color: "#fff",
                  textTransform: "none",
                  mx: 1,
                  fontSize: 17,
                  "&:hover": { color: "red" },
                }}
                onClick={handleMenuOpen}
                endIcon={<KeyboardArrowDownIcon />}
              >
                Our Services
              </Button>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                sx={{ mt: 1 }}
              >
                <MenuItem onClick={handleMenuClose}>Service 1</MenuItem>
                <MenuItem onClick={handleMenuClose}>Service 2</MenuItem>
              </Menu>
              <Button
                sx={{
                  color: "#fff",
                  textTransform: "none",
                  mx: 1,
                  fontSize: 17,
                  "&:hover": { color: "red" },
                }}
              >
                Benefits
              </Button>
              <Button
                sx={{
                  color: "#fff",
                  textTransform: "none",
                  mx: 1,
                  fontSize: 17,
                  "&:hover": { color: "red" },
                }}
              >
                Blogs
              </Button>
              <Button
                sx={{
                  color: "#fff",
                  textTransform: "none",
                  mx: 1,
                  fontSize: 17,
                  "&:hover": { color: "red" },
                }}
              >
                Contact
              </Button>
              <Button
                sx={{
                  backgroundColor: "#E50914",
                  color: "#fff",
                  borderRadius: "50px",
                  px: 4,
                  py: 1,
                  mx: 1,
                  fontSize: 17,
                  textTransform: "none",
                  "&:hover": { backgroundColor: "#C40812" },
                }}
              >
                Join us now
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
        <Image
<<<<<<< Updated upstream
          src="/bgimage.jpg"
=======
          src="/bgimage.webp"
>>>>>>> Stashed changes
          alt="Workout image"
          layout="fill"
          objectFit="cover"
          priority
          style={{
            filter: "brightness(0.4)",
          }}
        />

        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            color: "#fff",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Chip
            variant="filled"
            avatar={
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                sx={{
                  position: "relative",
                  width: "100px",
                }}
              >
                <Avatar
                  src="/profile3.avif"
                  alt="User 1"
                  sx={{
                    width: "32px",
                    height: "32px",
                    position: "absolute",
                    left: 0,
                  }}
                />
                <Avatar
                  src="/profile2.avif"
                  alt="User 2"
                  sx={{
                    width: "32px",
                    height: "32px",
                    position: "absolute",
                    left: "20px",
                  }}
                />
                <Avatar
                  src="/profile1.avif"
                  alt="User 3"
                  sx={{
                    width: "32px",
                    height: "32px",
                    position: "absolute",
                    left: "40px",
                  }}
                />
              </Box>
            }
            label="Trusted by 3+ million users"
            sx={{
              bgcolor: "black",
              color: "white",
              borderRadius: "24px",
              fontWeight: "bold",
              width: "350px",
              height: "48px",
              display: "flex",
              fontFamily: "Orbitron",
              alignItems: "center",
              fontSize: 16,
              px: 1,
              justifyContent: "space-between",
              "& .MuiChip-label": {
                whiteSpace: "nowrap",
              },
            }}
          />

          <Typography
            sx={{
              fontWeight: 900,
              color: "red",
              textTransform: "capitalize",
              mb: 2,
              fontSize: 85,
              fontFamily: "Orbitron",
            }}
          >
            Track Your Fitness
            <br />
            Journey
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontWeight: "300",
              fontSize: "1.2rem",
              maxWidth: "750px",
              mx: "auto",
              fontFamily: "Space Grotesk",
            }}
          >
            Discover the ultimate fitness companion with GymFluencer.
            Effortlessly log your workouts, count reps, and track calories
            burned. Stay motivated and achieve your goals with ease.
          </Typography>
        </Box>
      </Box>

      <FitnessSection />
      <ServicesSection />
      <HighlightsSection />
      <BenefitsSection />
      <TransformationSection />
      <GymLocatorSection />
      <BlogSection />
      <FAQSection />
      <FooterSection />
    </>
  );
}
