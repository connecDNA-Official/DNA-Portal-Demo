import React from "react";
import { Box, CardMedia, Typography } from "@mui/material";

export default function Team({ image, name, profession, about, id }) {
  return (
    <Box
      sx={{
        width: "25%",
        height: "auto",
        padding: "40px",
        borderRadius: "20px",
        // border: "2px solid",
        bgcolor: "#f2f2f2",
      }}
    >
      <Box>
        <CardMedia
          component="img"
          sx={{
            height: "100%",
            width: "100%",
            marginBottom: "12px",
            borderRadius: "10px",
            border: "4px solid",
          }}
          image={image}
          alt="green iguana"
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          fontSize: "22px",
          fontWeight: "600",
          marginBottom: "10px",
        }}
      >
        <Typography
          sx={{
            fontSize: "26px",
            fontWeight: 700,
            lineHeight: "32px",
            letterSpacing: "0.5px",
          }}
        >
          {name}
        </Typography>
      </Box>
      <Box>
        <Typography
          sx={{
            color: "#666",
            fontSize: "18px",
          }}
        >
          {profession}
        </Typography>
      </Box>
      <Box
        sx={{
          fontSize: "18px",
          color: "#212529",
          marginTop: 1,
        }}
      >
        {about}
      </Box>
    </Box>
  );
}
