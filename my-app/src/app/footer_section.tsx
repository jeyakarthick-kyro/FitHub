/* eslint-disable @next/next/no-img-element */
import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

export default function FooterSection() {
  return (
    <Box
      component="footer"
      sx={{
        background: "linear-gradient(90deg, #000, #1A1A1A)",
        color: "#fff",
        py: 6,
        px: 4,
      }}
    >
      <Stack
        spacing={4}
        alignItems="center"
        sx={{ maxWidth: "1200px", margin: "0 auto" }}
      >
        <Box textAlign="center">
          <img
            src="/logo.svg"
            alt="GymFluencer Logo"
            style={{ width: "200px", height: "50px", marginBottom: "1rem" }}
          />
          <Typography
            variant="h6"
            sx={{ fontWeight: 300, maxWidth: 250, fontFamily: "Orbitron" }}
          >
            Where Fitness Meets Social Connection!
          </Typography>
        </Box>

        <Button
          variant="outlined"
          href="mailto:hello@gym.blinkventures.com"
          sx={{
            color: "#fff",
            border: "1px solid rgb(40, 40, 44)",
            px: 2,
            py: 1,
            fontSize: 16,
            borderRadius: "12px",
            textTransform: "none",
            fontFamily: "Space Grotesk",
          }}
        >
          <MailOutlineIcon sx={{ marginRight: 2 }} />
          hello@gym.blinkventures.com
        </Button>

        <Stack direction="row" spacing={6}>
          <Link href="#home" color="inherit" underline="hover">
            Home
          </Link>
          <Link href="#workout-plan" color="inherit" underline="hover">
            Workout Plan
          </Link>
          <Link href="#diet-plan" color="inherit" underline="hover">
            Diet Plan
          </Link>
          <Link href="#faqs" color="inherit" underline="hover">
            FAQ&apos;s
          </Link>
        </Stack>
      </Stack>
      <Divider sx={{ width: "100%", borderColor: "#444", my: 5 }} />
      <Box
        sx={{
          justifyContent: "space-between",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          mx: 10,
        }}
      >
        <Typography
          variant="body2"
          sx={{ color: "#aaa", fontFamily: "Orbitron" }}
        >
          © 2024 GymFluencer. All rights reserved.
        </Typography>
        <Stack direction="row" spacing={2}>
          <IconButton
            href="https://instagram.com"
            target="_blank"
            sx={{ color: "#fff" }}
          >
            <InstagramIcon />
          </IconButton>
          <IconButton
            href="https://linkedin.com"
            target="_blank"
            sx={{ color: "#fff" }}
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton
            href="https://twitter.com"
            target="_blank"
            sx={{ color: "#fff" }}
          >
            <TwitterIcon />
          </IconButton>
        </Stack>
      </Box>
    </Box>
  );
}
