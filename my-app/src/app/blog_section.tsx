import React from "react";
import { Box, Card, Typography, Grid, Chip } from "@mui/material";

const BlogSection = () => {
  const blogs = [
    {
      title: "Conquering Consistency: How to Make Exercise a Habit You Love",
      category: "Exercise",
      date: "Jun 28, 2024",
      author: "Benjamin",
      image: "/blog1.jpg",
    },
    {
      title: "Weight Loss: A Sustainable Approach for a Healthier You",
      category: "Weight loss",
      date: "Jun 26, 2024",
      author: "Jessica",
      image: "/blog2.jpg",
    },
    {
      title: "Fuel Your Fitness: A Guide to Nutrition for Peak Performance",
      category: "Nutrition",
      date: "Jun 23, 2024",
      author: "David",
      image: "/blog3.jpg",
    },
  ];

  return (
    <Box sx={{ backgroundColor: "black", color: "white", pb: 8 }}>
      <Typography
        textAlign="center"
        sx={{
          fontWeight: "900",
          fontSize: "45px",
          color: "red",
          marginBottom: "16px",
          textTransform: "uppercase",
          mb: 8,
          fontFamily: "Orbitron",
        }}
      >
        Our Latest Blogs
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={8}>
          <Card
            sx={{
              backgroundColor: "transparent",
              color: "white",
              borderRadius: "8px",
              overflow: "hidden",
              position: "relative",
              ml: 6,
              "& img": {
                transition: "transform 0.3s ease",
              },
              "&:hover img": {
                transform: "scale(1.1)",
              },
            }}
          >
            <Box
              component="img"
              src={blogs[0].image}
              alt={blogs[0].title}
              sx={{
                width: "900px",
                height: "650px",
                objectFit: "cover",
                filter: "brightness(0.6)",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                bottom: 16,
                left: 16,
                right: 16,
              }}
            >
              <Chip
                label={blogs[0].category}
                sx={{
                  backgroundColor: "red",
                  color: "white",
                  fontWeight: "bold",
                  fontFamily: "Space Grotesk",
                  mb: 2,
                }}
              />
              <Typography
                variant="h5"
                sx={{ fontWeight: "bold", mb: 1, fontFamily: "Orbitron" }}
              >
                {blogs[0].title}
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  fontFamily: "Space Grotesk",
                }}
              >
                <span>{blogs[0].date}</span> | <span>{blogs[0].author}</span>
              </Typography>
            </Box>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Grid container spacing={4}>
            {blogs.slice(1).map((blog, index) => (
              <Grid item xs={12} key={index}>
                <Card
                  sx={{
                    backgroundColor: "transparent",
                    color: "white",
                    borderRadius: "8px",
                    overflow: "hidden",
                    position: "relative",
                    height: "308px",
                    mr: 6,
                    "& img": {
                      transition: "transform 0.3s ease",
                    },
                    "&:hover img": {
                      transform: "scale(1.1)",
                    },
                  }}
                >
                  <Box
                    component="img"
                    src={blog.image}
                    alt={blog.title}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      filter: "brightness(0.6)",
                      position: "absolute",
                    }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 16,
                      left: 16,
                      right: 16,
                    }}
                  >
                    <Chip
                      label={blog.category}
                      sx={{
                        backgroundColor:
                          blog.category === "Exercise"
                            ? "red"
                            : blog.category === "Weight loss"
                            ? "orange"
                            : "green",
                        color: "white",
                        fontWeight: "bold",
                        mb: 1,
                      }}
                    />
                    <Typography
                      variant="subtitle1"
                      sx={{ fontWeight: "bold", mb: 0.5 }}
                    >
                      {blog.title}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <span>{blog.date}</span> | <span>{blog.author}</span>
                    </Typography>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BlogSection;
