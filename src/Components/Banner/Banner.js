import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";


import { useHistory } from "react-router-dom";

export default function Banner({ image, heading, paragraph, buttonValue }) {
  const history = useHistory();
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
      }}
    >
      <Box>
        <Typography
          sx={{
            color: "white",
            fontSize: "80px",
            fontWeight: 750,
            marginBottom: "-20px",
            marginLeft: "6%",
            WebkitTextStroke:"2px black"
            
          }}
        >
          {heading}
        </Typography>
        <Typography
          sx={{
            color: "white",
            fontFamily:'courier',
            fontSize: "40px",
            fontWeight: 750,
            marginLeft: "6.2%",
            marginRight: "50%",
            marginBottom: "50px",
            WebkitTextStroke:"1px black",
            backgroundColor:"black",
            
         
          }}
        >
          {paragraph}
        </Typography>
        <Button
          onClick={() => history.push("OurStory")}
          sx={{
            width: "125px",
            height: "50px",
            marginBottom: "6%",
            marginLeft: "7%",
            borderRadius: "30px",
            backgroundColor: "#ff0723",
            color: "white",
            border: "none",
            fontWeight: "bolder",
            fontSize: "16px",
            letterSpacing: "-.5px",
            textAlign: "center",
            textTransform: "none",
            cursor: "pointer",
            ":hover": {
              backgroundColor: "black",
              color: "white",
            },
          }}
        >
          {buttonValue}
        </Button>
      </Box>
    </Box>
  );
}
