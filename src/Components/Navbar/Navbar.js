import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Icon } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  logo: {
    marginRight: 8,
    marginLeft: 90,
    width: 70,
    height: 70,
  },
  appBarTransparent: {
    backgroundColor: "rgba(67, 129, 168,0) !important",
  },
  appBarSolid: {
    backgroundColor: "black !important",
  },
}));

export default function Navbar() {

  const history = useHistory();

  const [currentAccount, setCurrentAccount] = useState(null);

  const checkWalletIsConnected = async () => {
    const { ethereum } = window;

    if (!ethereum) {
      console.log("Make sure you have Metamask installed!");
      return;
    } else {
      console.log("Wallet exists! We're ready to go!");
    }

    const accounts = await ethereum.request({ method: "eth_accounts" });

    if (accounts.length !== 0) {
      const account = accounts[0];
      console.log("Found an authorized account: ", account);
      setCurrentAccount(account);
    } else {
      console.log("No authorized account found");
    }
  };

  const connectWalletHandler = async () => {
    const { ethereum } = window;

    if (!ethereum) {
      alert("Please install Metamask!");
    }

    try {
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log("Found an account! Address: ", accounts[0]);
      setCurrentAccount(accounts[0]);
    } catch (err) {
      console.log(err);
    }
  };

  const connectWalletButton = () => {
    return (
      <Button
              onClick={connectWalletHandler}
              size="large"
              sx={{
                marginRight: "6%",
                borderRadius: "30px",
                padding: "12px 28px",
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
              Connect Wallet
            </Button>
    );
  };

  const ConnectedButton = () => {
    return (
      <Button
              size="large"
              sx={{
                marginRight: "6%",
                borderRadius: "30px",
                backgroundColor: "green",
                color: "white",
                border: "none",
                fontWeight: "bolder",
                fontSize: "16px",
                letterSpacing: "-.5px",
                textAlign: "center",
                textTransform: "none",
                cursor: "pointer",
                ":hover": {
                  backgroundColor: "green",
                  color: "white",
                },
              }}
            >
              Connected
            </Button>
    );
  };
  

  const switch_button = () => {
    return (
      <Button
              onClick={() => history.push("OurStory")}
              size="large"
              variant="text"
              sx={{
                marginRight: "6%",
                borderRadius: "30px",
                backgroundColor: "transparent",
                backgroundRepeat: "no-repeat",
                color: "white",
                fontWeight: "bolder",
                fontSize: "16px",
                letterSpacing: "-.5px",
                textAlign: "center",
                textTransform: "none",
                cursor: "pointer",
                ":hover": {
                  backgroundColor: "rgb(34,31,42)",
                  backgroundRepeat: "no-repeat",
                  color: "white",
                },
              }}
            >
              Explore
            </Button>
    );
  };


  const classes = useStyles();

  const [navBackground, setNavBackground] = useState("appBarTransparent");
  const navRef = React.useRef();
  navRef.current = navBackground;
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 250;
      if (show) {
        setNavBackground("appBarSolid");
      } else {
        setNavBackground("appBarTransparent");
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);
  console.log(`${navBackground}`);

  useEffect(() => {
    checkWalletIsConnected();
  }, []);


  return (
    <div className={classes.root}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="fixed"
          elevation={0}
          className={classes[navRef.current]}
        >
          <Toolbar sx={{ display: "flex", justifyContent: "flex-end"}}>
          <div
          style={{
            width:"100%",
           }}
          >
          
          <div style={{width:"10%", float:'left',marginLeft:'0%',marginTop:'-1.5%',display:"inline-block",}}>
            <Button onClick={() => history.push("/")}>
           <img style={{width:"100%"}} src="https://i.ibb.co/JC1GtVk/image-2022-04-17-161136991-removebg-preview.png"></img>
           </Button>
          </div>
          <div style={{width:"15%", float:'left',marginLeft:'40%',marginTop:'1.5%',display:"inline-block",}}>

          <Button sx={{
                
                marginRight: "6%",
                borderRadius: "30px",
                padding: "12px 28px",
                backgroundColor: "#ff0723",
                color: "white",
                border: "none",
                fontWeight: "bolder",
                fontSize: "15px",
                letterSpacing: "-.5px",
                textAlign: "center",
                textTransform: "none",
                cursor: "pointer",
                ":hover": {
                  backgroundColor: "black",
                  color: "white",
                },
              }} onClick={() => history.push("/OurStory")}> Register an ID </Button>
          </div>
          <div style={{width:"15%", float:'left',marginLeft:'0%',marginTop:'1.5%',display:"inline-block",}}>

          <Button   
          sx={{
                
            marginRight: "6%",
            borderRadius: "30px",
            padding: "12px 28px",
            backgroundColor: "#ff0723",
            color: "white",
            border: "none",
            fontWeight: "bolder",
            fontSize: "15px",
            letterSpacing: "-.5px",
            textAlign: "center",
            textTransform: "none",
            cursor: "pointer",
            ":hover": {
              backgroundColor: "black",
              color: "white",
            },
          }}        
            onClick={() => history.push("/Main")}> Digital ID </Button>
          </div>

          <div
          style={{
            width:"20%",
            float:"right",
            marginTop:"1.5%",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",}}
          
          
          >{currentAccount ? ConnectedButton() : connectWalletButton()}</div>
          </div>
         
          
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}
