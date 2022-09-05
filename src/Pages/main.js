import React, { useState, useEffect } from "react";
  import Timeline from "../Components/timeline";
  import Radium, { StyleRoot } from "radium";
  import { Typography } from "@mui/material";
  import Banner from "../Components/Banner/Banner";
  import BannerData from "../Components/Banner/BannerData.json";
  import Guide from "../Components/Guide/Guide";
  import FAQ from "../Components/FAQ/FAQ";
  import FAQs from "../Components/FAQ/FAQs.json";
  import Team from "../Components/Team/Team";
  import TeamData from "../Components/Team/TeamData.json";
  import Story from "../Components/Story/Story.js";
  import Info from "../Components/Info/Info.js";
  import Minter from "../Components/Mint/Minter.js";
  import { Provider } from "react-redux";
  import reportWebVitals from "../Components/Mint/reportWebVitals";
  import store from "../Components/Mint/redux/store";
  import SxBox from "../Components/SxBox/SxBox";
  
  
  function Main() {
    return (
      <div style={{
       
        display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
        }}>
        
        <SxBox />
        
       
        
      </div>
    );
  }
  
  export default Main;
  