import { Typography } from '@mui/material'
import React,{useEffect, useState} from 'react';
import useStyles from "../../Assets/CustomStyles";
import Box from '@mui/material/Box';
import LoginSec from '../../Containers/LoginSec';



export default function Loginsss() {
 const Style = useStyles()

 const [name, setName] = useState("");
 const [password, setPassword] = useState("");

const formSubmitHandler = (e)=>{
  e.preventDefault();
if(name == 'tahir mansoor' && password == '123456'){
  alert('please use correct user name')
}
else{
  alert('Please use correct password')
}
}


  return (

    <>
       <LoginSec />
    
   <Box className={Style.LoginBg}>  
    <form onSubmit={formSubmitHandler}>
        <Typography className={Style.LoginTitle}>Login</Typography>
        <label htmlFor='Name' className={Style.Label}> Name </label>
        <input type='text' value={name} placeholder='Your ID' className={Style.InputType}
         onChange={(e)=>setName(e.target.value)}  />

        <label htmlFor='Password' className={Style.Label}> Password </label>
        <input type='password' value={password} placeholder='Enter Password' className={Style.InputType} 
         onChange={(e)=>setPassword(e.target.value)}  />
        <input type='submit' className={Style.SubmitBtn} value='Submit'/>
    </form>
   </Box>
   </>
  )
}

