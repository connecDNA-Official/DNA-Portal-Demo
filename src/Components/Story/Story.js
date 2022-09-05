import React from "react";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Typography } from "@mui/material";

export default function Story() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Container fixed>
          <Box sx={{ bgcolor: '', height: '500px'}} >

          <div
          style={{
            width:"70%",
            float:"left",

            border:'5px',
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
          >
              

        <Typography sx={{ fontSize: "20px", fontWeight: "400", marginTop: 6 ,color:'white'}}>
        Data Data Data Data Data Data Data Data Data Data Data Data Data Data Data Data Data Data Data Data Data Data Data Data Data Data Data Data Data Data Data Data Data Data Data Data Data Data Data Data Data Data Data Data Data Data Data Data Data Data Data Data Data Data
        Data Data Data Data Data Data Data Data Data Data Data Data Data Data Data Data Data DataData Data Data Data Data Data Data Data Data Data Data Data Data Data Data Data Data DataData Data Data Data Data Data Data Data Data Data Data Data Data Data Data Data Data Data
        Data Data Data Data Data Data Data Data Data Data Data Data Data Data Data Data Data DataData Data Data Data Data Data Data Data Data Data Data Data Data Data Data Data Data DataData Data Data Data Data Data Data Data Data Data Data Data Data Data Data Data Data Data 
        </Typography>

        </div>

        <div
          style={{
            width:"30%",
            float:"right",

            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
          >
               <img src="https://i.ibb.co/TbBC68B/bg2.png" style={{maxWidth:'70%'}} alt="bg1" border="0"/>
            
              <img src="https://i.ibb.co/Gtkfn1k/bg1.png" style={{maxWidth:'70%'}} alt="bg1" border="0"/>
             

        </div>

          </Box>
        </Container>
      </React.Fragment>
    );
  }