import React from "react";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { Icon } from "@material-ui/core";

export default function Info() {


    function redirec(){

        window.location.href = "http://mywebsite.com/home.html"

    }

    return (

        <div>
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
        
        <div 
        style={{
            width:"100%",
            marginTop:"10%",
            marginLeft:"45%",
            alignItems:'centre'
        }}
        >

        <Typography align="center" sx={{ fontSize: "26px", fontWeight: "700", marginBottom: 2,color:"white" ,fontFamily:"Times"}}>

        Original collection of Dank and Chill ThugDuckz, entering the Metaverse in Style.

        </Typography>
        </div>
              
        <div
        style={{
            width:"100%",
            alignItems:"centre",
            alignContent:"centre",
            marginLeft:'65%',
            marginTop:"10%",
        }}
        >
        <div style={{
                width:"20%",
                display:"inline-block",
        }}>
        <Box
      sx={{
        width: 150,
        height: 80,
        marginLeft:"",
        border:'1px solid red',
        borderRadius:'30%',
        backgroundColor: '#ff0723',
          opacity: [0.9, 0.8, 0.7],
      
      }}
    >
        <Typography
        align="centre"
          sx={{
            fontSize: "26px",
            fontWeight: 700,
            color:'white',
            lineHeight: "32px",
            letterSpacing: "0.5px",
            marginTop:"15%",
            marginLeft:"15%",
          }}
        >
          10,000
        </Typography>
        
    </Box>
    <Typography
        align="centre"
          sx={{
            fontSize: "18px",
            fontWeight: 700,
            color:'white',
            lineHeight: "32px",
            letterSpacing: "0.5px",
            marginTop:"2%",
            marginLeft:"13%",
            marginRight:"40%",
            backgroundColor:'black'
          }}
        >
          Total NFTs
        </Typography>
    </div>
    <div style={{
                width:"20%",
                display:"inline-block",
        }}>
        <Box
      sx={{
        width: 150,
        height: 80,
        marginLeft:"",
        border:'1px solid red',
        borderRadius:'30%',
        backgroundColor: '#ff0723',
          opacity: [0.9, 0.8, 0.7],
      
      }}
    >
        <Typography
        align="centre"
          sx={{
            fontSize: "26px",
            fontWeight: 700,
            color:'white',
            lineHeight: "32px",
            letterSpacing: "0.5px",
            marginTop:"15%",
            marginLeft:"15%",
          }}
        >
          0.08 ETH
        </Typography>
        
    </Box>
    <Typography
        align="centre"
          sx={{
            fontSize: "18px",
            fontWeight: 700,
            color:'white',
            lineHeight: "32px",
            letterSpacing: "0.5px",
            marginTop:"2%",
            marginLeft:"13%",
            marginRight:"42%",
            backgroundColor:'black'
          }}
        >
          Mint Price
        </Typography>
    </div>
    <div style={{
                width:"20%",
                display:"inline-block",
        }}>
        <Box
      sx={{
        width: 150,
        height: 80,
        marginLeft:"",
        border:'1px solid red',
        borderRadius:'30%',
        backgroundColor: '#ff0723',
          opacity: [0.9, 0.8, 0.7],
      
      }}
    >
        <Typography
        align="centre"
          sx={{
            fontSize: "26px",
            fontWeight: 700,
            color:'white',
            lineHeight: "32px",
            letterSpacing: "0.5px",
            marginTop:"15%",
            marginLeft:"15%",
          }}
        >
          Feb 30
        </Typography>
        
    </Box>
    <Typography
        align="centre"
          sx={{
            fontSize: "18px",
            fontWeight: 700,
            color:'white',
            lineHeight: "32px",
            letterSpacing: "0.5px",
            marginTop:"2%",
            marginLeft:"20%",
            marginRight:"50%",
            backgroundColor:'black'
          }}
        >
          Arrival
        </Typography>
    </div>
    <div style={{
                width:"20%",
                display:"inline-block",
        }}>
        <Box
      sx={{
        width: 150,
        height: 80,
        marginLeft:"",
        border:'1px solid red',
        borderRadius:'30%',
        backgroundColor: '#ff0723',
          opacity: [0.9, 0.8, 0.7],
      
      }}
    >
        <Typography
        align="centre"
          sx={{
            fontSize: "26px",
            fontWeight: 700,
            color:'white',
            lineHeight: "32px",
            letterSpacing: "0.5px",
            marginTop:"15%",
            marginLeft:"15%",
          }}
        >
          12,000+
        </Typography>
        
    </Box>
    <Typography
        align="centre"
          sx={{
            fontSize: "18px",
            fontWeight: 700,
            color:'white',
            lineHeight: "32px",
            letterSpacing: "0.5px",
            marginTop:"2%",
            marginLeft:"13%",
            marginRight:"44%",
            backgroundColor:'black'
          }}
        >
          Followers
        </Typography>
    </div>
   
        </div>
        <div style={{
            width:'120%',
            display:'flex',
            marginLeft:'120%',
            marginTop:'5%'
        }}>
            <div style={{
                float:'left',
                display:"inline-block",
                width:'25%',


                
            }}>
            <img src="https://i.ibb.co/wzVQsxZ/ezgif-5-a1f6530fb5.gif" style={{width:'100%'}}></img>
                
                    
            </div>
            <div style={{
                display:"inline-block",
                marginTop: '10%',
                marginLeft:'23%',
                width: '30%',
                padding: '10px',
                position:'absolute',

                
            }}>

            <Icon>
                <img src={'https://i.ibb.co/9Nksdw1/icons8-discord-50.png'} height={50} width={50}/>
                
            </Icon>
            <Icon>
            <img src={'https://i.ibb.co/rxcs6yZ/icons8-twitter-50.png'} height={50} width={50}/>
                
            </Icon>
            
            
            </div>
           

          
        </div>
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
             

        </div>

          </div>
    );
  }