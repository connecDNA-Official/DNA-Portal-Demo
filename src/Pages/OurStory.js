import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { Typography } from "@mui/material";
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getDatabase, ref, set  } from "firebase/database";
import { getStorage, uploadBytes } from "firebase/storage";


function OurStory() {

  async function FirbDB(){

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

    console.log(inputs['SSno']);

  
  const db = getDatabase();

  set(ref(db, 'Users/' + account), {
    verified:false
  });

  set(ref(db, 'Users/' + account+'/'+'basicInfo'), {
    name:inputs['Name'],
    address:inputs['Address'],
    phone:inputs['PhoneNo'],
    SocialSecurity:inputs['SSno']
  });

  set(ref(db, 'Users/' + account+'/'+'MedicalInfo'), {
    BType:inputs['Btype'],
    Height:inputs['Height'],
    VaccineStat:inputs['Vax']
  });

  set(ref(db, 'Users/' + account+'/'+'Confid'), {
    Employee:inputs['Ehistory'],
    Health:inputs['MedHistory'],
    Passport:inputs['Passport']
  });


  
  const reference=require('firebase/storage');
  const st = getStorage();
  const storageRef = reference.ref(st, 'Pictures/'+account);
  uploadBytes(storageRef, imageAsFile).then((snapshot) => {
  console.log('Uploaded a blob or file!');
  alert("Data Sent for verification.");
  });


  }


  const allInputs = {imgUrl: ''}
  const [imageAsFile, setImageAsFile] = useState('')
  const [imageAsUrl, setImageAsUrl] = useState(allInputs)
    const [userData, setUserData] = ("");
    console.log(imageAsFile)
    const handleImageAsFile = (e) => {
         const image = e.target.files[0]
         setImageAsFile(imageFile => (image))
     }

  const [inputs, setInputs] = useState({ 
    Name:"",
    PhoneNo:"",
    Address:"",
    SSno:"",
    Btype:"",
    Height:"",
    Vax:"",
    Ehistory:"",
    MedHistory:"",
    Passport:""
    
  });
  const handleChange = (event) => {
    const value = event.target.value;
  setInputs({
    ...inputs,
    [event.target.name]:value
  });
  
  } 

  const handleSubmit = (event) => {
  event.preventDefault();
  console.log(inputs);
  FirbDB();
  }
  
  
    console.log(userData);



    
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

      
    <div style={{width:'100%'}}>
    <Typography sx={{ fontSize: "30px", fontWeight: "700", marginTop: 6 ,color:"white",alignContent:"centre",backgroundColor:"",marginLeft:'13%'}}>
          Digital Native Assortments Application
        </Typography>
    <div
    style={{
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
        width:'35%',
        float:'right',
        marginTop:"5%" ,
        marginRight:"20%"
    }}
    >
        
      <div style={{
        fontSize: '16px',
        fontWeight: '600',
        color:'white',
        

      }}>
        <form onSubmit={handleSubmit}>
    <label  style={{margin:'10%'}}>Enter your name:
        <input type="text" name="Name" defaultValue={inputs.Name}  onChange={handleChange} style={{margin:'5%', width:'100%'}} />
      </label>

      <label  style={{margin:'10%'}}>Phone No:
        <input type="text"  name="PhoneNo" value={inputs.PhoneNo }  onChange={handleChange}  style={{margin:'5%',width:'100%'}} />
      </label>

      <label  style={{margin:'10%'}}>Address:
        <input type="text" name="Address" defaultValue={inputs.Address}  onChange={handleChange}  style={{margin:'5%', width:'100%'}}/>
      </label>

      <label  style={{margin:'10%'}}>Social Security No:
        <input type="text" name="SSno" defaultValue={inputs.SSno}  onChange={handleChange}   style={{margin:'5%', width:'100%'}}/>
      </label>

      <p>Some Medical Information</p>
      <label  style={{margin:'10%'}}>Blood Type:
        <input type="text" name="Btype" defaultValue={inputs.Btype}  onChange={handleChange}  style={{margin:'5%', width:'100%'}}/>
      </label>
      <label style={{margin:'10%'}}>Height:
        <input type="text" name="Height" defaultValue={inputs.Height}  onChange={handleChange}  style={{margin:'5%', width:'100%'}}/>
      </label>

      <label style={{margin:'10%'}}>Vaccination Status:
        <input type="text" name="Vax" defaultValue={inputs.Vax}  onChange={handleChange}  style={{margin:'5%', width:'100%'}}/>
      </label>

      <p>Confidentional Information</p>

      <label style={{margin:'10%',width:'100%'}}>Employement Verification picture:
        <input type="text" name="Ehistory" defaultValue={inputs.Ehistory}  onChange={handleChange}  style={{margin:'5%', width:'100%'}}/>
      </label>

      <label style={{margin:'10%'}}>Medical Records Picture:
        <input type="text" name="MedHistory" defaultValue={inputs.MedHistory}  onChange={handleChange}  style={{margin:'5%', width:'100%'}}/>
      </label>

      <label style={{margin:'10%'}}>Passport picture:
        <input type="text" name="Passport" defaultValue={inputs.Passport}  onChange={handleChange}  style={{margin:'5%', width:'100%'}}/>
      </label>

      <button className="submit_button" >
        submit
      </button>
      </form>
      </div>
      </div>

      <div
    style={{
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
        width:'30%',
        float:'right',
        marginTop:"20%"  
    }}
    >
       <input 
   type="file"
   onChange={handleImageAsFile}
      />



    </div>
    
      </div>
    </Box>
      
     
      
    </div>
  );
}

export default OurStory;
