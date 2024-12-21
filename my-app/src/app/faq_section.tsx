import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from "@mui/material";

const FAQSection = () => {
  const faqs = [
    {
      question: "How do I log my workouts?",
      answer:
        "You can easily log your workouts by selecting the exercise, entering the duration, and tracking your reps.",
    },
    {
      question: "Can I track my calories burned?",
      answer:
        "Yes, you can track calories burned through the application integrated tracking features.",
    },
    {
      question: "Is this application suitable for beginners?",
      answer:
        "Absolutely! GymFluencer is designed to be user-friendly and suitable for all fitness levels.",
    },
    {
      question: "What features does the application offer?",
      answer:
        "The app offers workout logging, rep counting, calorie tracking, and progress reviews.",
    },
    {
      question: "How can I reset my password?",
      answer:
        "You can reset your password by going to the login screen and selecting 'Forgot Password.'",
    },
  ];

  const [expanded, setExpanded] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <Box
      sx={{
        backgroundImage: "url(/faq.svg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#fff",
        padding: "20px",
        width: "100%",
        height: "650px",
        px: 50,
      }}
    >
      <Box
        sx={{
          position: "relative",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Orbitron",
            fontSize: 40,
            pb: 3,
          }}
          align="center"
          gutterBottom
        >
          Frequently Asked Questions
        </Typography>
        {faqs.map((faq, index) => (
          <Accordion
            key={index}
            expanded={expanded === index}
            onChange={() => handleToggle(index)}
            sx={{
              backgroundColor: "transparent",
              color: "#fff",
              border: "1px solid #fff",
              "&:before": {
                display: "none",
              },
              borderRadius: "2px",
              my: 3,
            }}
          >
            <AccordionSummary
              sx={{
                display: "flex",
                alignItems: "center",
                padding: "6px 12px",
              }}
            >
              <Box
                sx={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  lineHeight: "1",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "24px",
                  height: "24px",
                }}
              >
                {expanded === index ? "×" : "+"}
              </Box>
              <Typography
                sx={{
                  fontWeight: 500,
                  pl: 2,
                  fontFamily: "Space Grotesk",
                }}
              >
                {faq.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                sx={{
                  fontFamily: "Space Grotesk",
                }}
              >
                {faq.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  );
};

export default FAQSection;
