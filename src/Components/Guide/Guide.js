import * as React from "react";
import GuideCard from "./GuideCard";
import GuideCardData from "./GuideCardData.json";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Guide() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "30px",
      }}
    >
      <Box sx={{ textAlign: "center" }}>
        <Typography
          sx={{
            fontSize: "42px",
            fontWeight: 600,
            color: "#212529",
          }}
        >
          Our Roadmap
        </Typography>
      </Box>
      <Box>
        {GuideCardData.map((data) => {
          return (
            <GuideCard
              key={data.id}
              number={data.number}
              heading={data.heading}
              paragraph={data.paragraph}
            />
          );
        })}
      </Box>

      {/* <Box>
        <Button
          sx={{
            width: "125px",
            height: "50px",
            marginBottom: "30px",
            borderRadius: "30px",
            color: "white",
            backgroundColor: "black",
            border: "1px solid black",
            fontWeight: "bolder",
            fontSize: "16px",
            letterSpacing: "-.5px",
            textAlign: "center",
            textTransform: "none",
            cursor: "pointer",
            ":hover": {
              backgroundColor: "white",
              color: "black",
            },
          }}
        >
          Start Hosting
        </Button>
      </Box> */}
    </Box>
  );
}
