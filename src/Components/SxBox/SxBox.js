import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { Typography } from "@mui/material";
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

import { getDatabase, ref,set, child, get } from "firebase/database";
import { getStorage,  getDownloadURL } from "firebase/storage";


export default function SxBox() {

async function hideInfo(){
  setName('*****')
    setDNA('*****')
    setsSecurity('*****')
    setbtype('*****')
    setAddress('*****')
    setVax('*****')
    setheight('*****')
    setPassport('*****')
    setEmployee('*****')
    setHealth('*****')
    setFinancial('*****')
}

async function generateKey(){
  
  console.log("Generateing a Key for ",optionValue);
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
    console.log(typeof(account));
    const app = initializeApp(firebaseConfig);
    const db = getDatabase();

    const key= Math.floor(Math.random()*100000000000);
    console.log("Your Key is : ",key.toString());
    alert("Your Key is : "+key.toString());
    if (optionValue=="Basic"){
      console.log("Camer here");
    set(ref(db, 'Users/' + key.toString()), {
      name:name,
      address:address,
      phone:'',
      SocialSecurity:sSecurity
    });}

    else if (optionValue=='Medic'){
  
    set(ref(db, 'Users/' +key.toString()), {
      BType:btype,
      Height:height,
      VaccineStat:vax
    });
  }
  else if (optionValue=='Confid'){
    set(ref(db, 'Users/' +key.toString()), {
      Employee:employee,
      Health:health,
      Passport:passport
    });
  }

  
}


async function generateQR(){
  
  console.log("Generateing a Key for ",optionValue);
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
    console.log(typeof(account));
    const app = initializeApp(firebaseConfig);
    const db = getDatabase();

    const key= Math.floor(Math.random()*100000000000);
    console.log("Your Key is : ",key.toString());
    //alert("Your Key is : "+key.toString());
    if (optionValue=="Basic"){
      console.log("Camer here");
    set(ref(db, 'Users/' + key.toString()), {
      name:name,
      address:address,
      phone:'',
      SocialSecurity:sSecurity
    });}

    else if (optionValue=='Medic'){
  
    set(ref(db, 'Users/' +key.toString()), {
      BType:btype,
      Height:height,
      VaccineStat:vax
    });
  }
  else if (optionValue=='Confid'){
    set(ref(db, 'Users/' +key.toString()), {
      Employee:employee,
      Health:health,
      Passport:passport
    });
  }
  setWord(key.toString());
  setSize(100);
}



  async function pinata(){

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
    console.log(typeof(account));
    const app = initializeApp(firebaseConfig);
    const dbRef = ref(getDatabase(app));
    var data={}
    get(child(dbRef, 'Users/'.concat(account))).then((snapshot) => {
      if (snapshot.exists()) {
        
        data=snapshot.val();
        console.log("Data state is: ",data['verified']);
        if(data['verified']==false){
            alert("Data is not verified yet.");
            return
        }
        console.log("this works ");
        console.log(data['basicInfo']['name']);
        console.log(atts)
        setName(data['basicInfo']['name'])
        setsSecurity(data['basicInfo']['SocialSecurity'])
        setbtype(data['MedicalInfo']['BType'])
        setAddress(data['basicInfo']['address'])
        setVax(data['MedicalInfo']['VaccineStat'])
        setheight(data['MedicalInfo']['Height'])
        setPassport(data['Confid']['Passport'])
        setEmployee(data['Confid']['Employee'])
        setHealth(data['Confid']['Health'])
        setFinancial(data['Confid']['Employee'])
        //setimage('https://i.ibb.co/y5gXxzw/1627751200166.jpg')
        const reference=require('firebase/storage');
    const st = getStorage();

    getDownloadURL(reference.ref(st, 'Pictures/'+account))
  .then((url) => {
    // `url` is the download URL for 'images/stars.jpg'


    // Or inserted into an <img> element
    setimage(url);
    console.log(url);
  })
  .catch((error) => {
    // Handle any errors
  });

      } else {
        console.log("No data available");
        alert("Your data is being verified");
        return
      }
    }).catch((error) => {
      console.error(error);
    });

    

    const jsonFile={
      "name": "000001",
      "description": "This is the description for this individual",
      "image": "ipfs://QmYVBURouW72o1G4K2LgRVEqbWFsr4K6PqiJHRtJabucQC/1.png",
      "dna": "956cb29696914d86f77e0868166aef60e56daffe",
      "attributes": [
        {
          "trait_type": "Name",
          "value": "Bazil Sajjad"
        },
        {
          "trait_type": "Social Security",
          "value": "35202-3296580-1"
        },
        {
          "trait_type": "Blood type",
          "value": "O-Positive"
        },
        {
          "trait_type": "Address",
          "value": "NA"
        },
        {
          "trait_type": "Vaccine Status",
          "value": "Vaccinated"
        },
        {
          "trait_type": "Height",
          "value": "6'0"
        },
        {
          "trait_type": "Passport Status",
          "value": "40DD397F-184A-4122-85B8-97A340569C42"
        },
        {
          "trait_type": "Employement History",
          "value": "40DD397F-184A-4122-85B8-97A340569C42"
        },
        {
          "trait_type": "Health Documents",
          "value": "40DD397F-184A-4122-85B8-97A340569C42"
        },
        {
          "trait_type": "Financial History",
          "value": "40DD397F-184A-4122-85B8-97A340569C42"
        }
      ],
      "compiler": "NodeJs"
    };
    /*const pinataSDK = require('@pinata/sdk');
    const pinata = pinataSDK('7587e75b561383e5acea', '15812e829783118a0f3537ec08413a607d50164caa7b34e98a08bb4dc2b3c509');
  
    const IPFS = require('ipfs')
    const makeIpfsFetch = require('js-ipfs-fetch')
    const response = await fetch('ipfs://QmY7dWDZkFicfGgNaGAgopX6b7oSnmc886HRKGK9ckNBvg/1.json')
    const text = await response.json()*/
    const atts=jsonFile['attributes']

    
   
  }





const [name, setName] = useState("NA");
const [Data, setData] = useState("NA");
const [dna, setDNA] = useState("NA");
const [sSecurity, setsSecurity] = useState("NA");
const [btype, setbtype] = useState("NA");
const [address, setAddress] = useState("NA");
const [vax, setVax] = useState("NA");
const [height, setheight] = useState("NA");
const [passport, setPassport] = useState("NA");
const [employee, setEmployee] = useState("NA");
const [health, setHealth] = useState("NA");
const [financial, setFinancial] = useState("NA");
const [image, setimage] = useState("https://i.ibb.co/ftzwpYg/avatar-3637425-960-720.png");
const [optionValue, setOptionValue] = useState("");
const [qrCode, setQrCode] = useState("");
const [temp, setTemp] = useState("");
const [word, setWord] = useState("");
const [size, setSize] = useState(0);
const [bgColor, setBgColor] = useState("ffffff");


useEffect(() => {
  setQrCode
(`http://api.qrserver.com/v1/create-qr-code/?data=${word}!&size=${size}x${size}&bgcolor=${bgColor}`);
}, [word, size, bgColor]);

const handleSelect = (e) => {
  console.log("The Value is: ");
  console.log(e.target.value);
  setOptionValue(e.target.value);
};

  return (
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
      <div style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}>
         <Typography sx={{ fontSize: "30px", fontWeight: "700", marginTop: 6 ,color:"white",alignContent:"centre",backgroundColor:""}}>
          Digital Native Assortments
        </Typography>
        </div>

        <div style={{width:'100%'}}>
          <div style={
            {
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
                width:'49%',
                float:'left'  
              }}>
              <div style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                marginTop:"10%"
              }}>
              <img src={image} style={{width:'50%'}}></img>  
                </div>
          </div>
          <div style={
            {
                width:'49%',
                float:'right'  
              }}>
          <Typography sx={{ fontSize: "20px", fontWeight: "700", marginTop: 6 ,color:"white",alignContent:"centre",backgroundColor:""}}>
          Name: {name}
        </Typography>
        <Typography sx={{ fontSize: "20px", fontWeight: "700", marginTop: 6 ,color:"white",alignContent:"centre",backgroundColor:""}}>
          Social Security #: {sSecurity}
        </Typography>
        <Typography sx={{ fontSize: "20px", fontWeight: "700", marginTop: 6 ,color:"white",alignContent:"centre",backgroundColor:""}}>
          Blood Type : {btype}
        </Typography>
        <Typography sx={{ fontSize: "20px", fontWeight: "700", marginTop: 6 ,color:"white",alignContent:"centre",backgroundColor:""}}>
          Current Address: {address}
        </Typography>
        <Typography sx={{ fontSize: "20px", fontWeight: "700", marginTop: 6 ,color:"white",alignContent:"centre",backgroundColor:""}}>
          Vaccine Status: {vax}
        </Typography>
        <Typography sx={{ fontSize: "20px", fontWeight: "700", marginTop: 6 ,color:"white",alignContent:"centre",backgroundColor:""}}>
          Height: {height}
        </Typography>
        <Typography sx={{ fontSize: "20px", fontWeight: "700", marginTop: 6 ,color:"white",alignContent:"centre",backgroundColor:""}}>
          Passport Info: {passport}
        </Typography>
        <Typography sx={{ fontSize: "20px", fontWeight: "700", marginTop: 6 ,color:"white",alignContent:"centre",backgroundColor:""}}>
          Employeent History: {employee}
        </Typography>
        <Typography sx={{ fontSize: "20px", fontWeight: "700", marginTop: 6 ,color:"white",alignContent:"centre",backgroundColor:""}}>
          Health Documents: {health}
        </Typography>
          </div>
        </div>
        <div
        
        style={{
          width:"30%",
          height:"50%",
          marginTop:"30%",
          marginLeft:"10%",
        }}
        >
        <button onClick={pinata} 
          style={{
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
            marginBlock:"10%",
            ":hover": {
              backgroundColor: "black",
              color: "white",
            },
          }}
        >
      Display Information
    </button>
    <button onClick={hideInfo}
      style={{
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
        marginBlock:"10%",
        ":hover": {
          backgroundColor: "black",
          color: "white",
        },
      }}
    >
      Hide Information
    </button>
    <button onClick={hideInfo}
      style={{
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
        marginBlock:"10%",
        ":hover": {
          backgroundColor: "black",
          color: "white",
        },
      }}
    >
      Check Verification Status
    </button>

    <div>
      <Typography sx={{ fontSize: "15px", fontWeight: "700", marginTop: 6 ,color:"white",alignContent:"centre",backgroundColor:""}}>
          Generate a key for Data:
        </Typography>
        <select name="selectList" id='selectList' onChange={handleSelect} style={{width:"100%"}} >
        <option > </option>
        <option name="BasicInfo" value="Basic"> Basic Information</option>
        <option name="MedInfo" value="Medic">Medical Information</option>
        <option name="ConfidInfo" value="Confid">Confidential Information</option>
      </select>
      
     <div style={{
       width:"100%",
       display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        
     }}> 

     <div style={{
       display: "flex",
       justifyContent: "center",
       flexDirection: "column",
       alignItems: "center",
         width:'49%',
         float:'left'  
     }}>
    <button onClick={generateKey} 
    style={{
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
      marginBlock:"10%",
      ":hover": {
        backgroundColor: "black",
        color: "white",
      },
    }}
    >
      Generate Key
    </button>
    </div>
    <div style={{
       display: "flex",
       justifyContent: "center",
       flexDirection: "column",
       alignItems: "center",
         width:'49%',
         float:'right'  
     }}>
    <button onClick={generateQR} 
      style={{
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
        marginBlock:"10%",
        ":hover": {
          backgroundColor: "black",
          color: "white",
        },
      }}
    >
      Generate QR
    </button>

    <div className="output-box">
        <img src={qrCode} alt="" />
        <a href={qrCode} download="QRCode">
         
        </a>
      </div>
    </div>
    </div>
    </div>

    <div>
      
       
    </div>
    </div>
    </Box>
  );
}