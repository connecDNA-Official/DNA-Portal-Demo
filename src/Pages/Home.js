import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { Button, Typography } from "@mui/material";
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

import { getStorage, uploadBytes } from "firebase/storage";

import { getDatabase, ref,set, child, get } from "firebase/database";

function Home() {
  async function searchStuff(){
    console.log("Data is",data)

    var account="";
    const { ethereum } = window;
    const accounts = await ethereum.request({ method: "eth_accounts" });

    if (accounts.length !== 0) {
      account = accounts[0];
      console.log("Found an authorized account: ", account);
    } else {
      console.log("No authorized account found");
      alert("Please Connect to metamask");
      return
    }
    
    const firebaseConfig = {
      apiKey: "AIzaSyDYQebt_thGdpQBG6U5_i3_0LBPFbbIilM",
      authDomain: "dna-1-5c006.firebaseapp.com",
      projectId: "dna-1-5c006",
      storageBucket: "dna-1-5c006.appspot.com",
      messagingSenderId: "87353375669",
      appId: "1:87353375669:web:92510a775d7b749ca437fc",
      measurementId: "G-2SWNXZ0DZB"
    };

    const app = initializeApp(firebaseConfig);
    const dbRef = ref(getDatabase(app));

    get(child(dbRef, 'Users/'+data)).then((snapshot) => {
      if (snapshot.exists()) {
        const data1=snapshot.val();
        console.log("this works ");
        setDatajson(data1);
        console.log(data1)
        console.log(datajson);
      } else {
        console.log("No data available");
        alert("No Data Available");
        return
      }
    }).catch((error) => {
      console.error(error);
    });

    
  }

  const [data, setData] = useState("");
  const [datajson,setDatajson]= useState({});
 
  return (
    <div style={{
     
      display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
      }}>
      
      <Box
      sx={{
        width: 800,
        height: 1000,
        backgroundColor: 'primary.dark',
        '&:hover': {
          backgroundColor: 'primary.main',
          
        },
        marginTop:'5%',
        border:'solid 1px Black',
        borderRadius:"6%"
      }}

    > 

      
    <div>

      <Typography sx={{ fontSize: "30px", fontWeight: "700", marginTop: 6 ,color:"white",alignContent:"centre",backgroundColor:"",marginLeft:'13%'}}> DIGITAL NATIVE ASSORTMENTS</Typography>
      <Typography
      sx={{ fontSize: "21px", fontWeight: "500", marginTop: 6 ,color:"white",alignContent:"centre",backgroundColor:"",marginLeft:'5%'}}
      >
          Welcome to our Prototype Platform, Here We have implemented some of our usecase which you can try out. The Link to our whitepaper will be made available soon
            You can: 
            
      </Typography>
      <Typography
      sx={{ fontSize: "21px", fontWeight: "500", marginTop: 6 ,color:"white",alignContent:"centre",backgroundColor:"",marginLeft:'5%'}}
      >
          1: Generate an ID 
            
      </Typography>
      <Typography
      sx={{ fontSize: "21px", fontWeight: "500", marginTop: 6 ,color:"white",alignContent:"centre",backgroundColor:"",marginLeft:'5%'}}
      >
          2: Apply for Verification 
            
      </Typography>

      <Typography
      sx={{ fontSize: "21px", fontWeight: "500", marginTop: 6 ,color:"white",alignContent:"centre",backgroundColor:"",marginLeft:'5%'}}
      >
          3: Apply for Early Beta sign up 
            
      </Typography>
    </div>
    
    
    <div style={{
      marginLeft:'6%'
    }}>
     
      <form>
      <Typography
      sx={{ fontSize: "21px", fontWeight: "500", marginTop: 6 ,color:"white",alignContent:"centre",backgroundColor:""}}
      >
          Search for a Key
            
      </Typography>
        <input value={data} style={{marginTop:"2%"}} type="text" onChange={(e)=>setData(e.target.value) } />

      <button type="button" value="Search" onClick={searchStuff}> Search</button>
    </form>

    <Typography sx={{ fontSize: "21px", fontWeight: "500", marginTop: 6 ,color:"white",alignContent:"centre",backgroundColor:""}}>
      
    </Typography>
    <div style={{
      background:"white",
      width:"50%",
      border:"0px solid White",
      borderRadius:"10%",
      fontSize:"20px",
      
    }}>
      <div style={{margin:'20%'}}>
      {Object.keys(datajson).map((key, i) => (
        <p key={i}>
          <span>{key} : </span>
          <span>{datajson[key]}</span>
        </p>
      ))}
      </div>
    </div>
     </div>
    </Box>
      
    
      
    </div>
  );
}

export default Home;
