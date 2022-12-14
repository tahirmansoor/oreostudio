import React from 'react';
import { useState } from 'react';
import { Grid } from '@mui/material';
import { Container } from '@mui/system';
import Header from '../../Components/Header'
import useStyles from '../../Assets/CustomStyles';
import { Box } from '@mui/system';
import { Button } from 'react-bootstrap';
import emailjs from '@emailjs/browser';


export default function SignUp(props) {

    const Style =  useStyles();

    const [name, setFname ] = useState('');
    const [lastname, setLastname] = useState('');
    const [phone, setPhone] = useState('');
    const [city, setCity] = useState('');
    const [textarea, setTextarea] = useState('');

    const [changeHeading, setChangeHeading] = 'This is heading ';


    const Submitsign = (e) =>{
        e.preventDefault();
        if(name.length <= 8){
        alert('Please fill full name')
    }

    if(phone.length > 8){
        alert('Please fill full the number')
    }
    else {
      const templateParams = {
      name: name,
      lastname: lastname,
      phone: phone,
      city:city,
      textarea : textarea,
  };

    emailjs.send('service_v2np5jn', 'template_1sv4ux7', templateParams, 'SVaYoOnd0-TJKZK5W')
    .then((response) => {
       console.log('SUCCESS!', response.status, response.text);
    }, (err) => {
       console.log('FAILED...', err);
    });

  }
 } 
   

  return (

  <>
   <Header />
    <Box className={Style.SignUpSection}>
     <Container>
      <h1> {props.heading}</h1>
      <form onSubmit={Submitsign}>
            <Grid md={6} >
                <input type='text' placeholder='Full Name' value={name} onChange={(e)=>setFname(e.target.value)}  />
            </Grid>

            <Grid md={6}>
                <input type='text' placeholder='Last Name' value={lastname} onChange={(e)=>setLastname(e.target.value)}  />
            </Grid>

            <Grid md={6}>
                <input type='text' placeholder='Phone'  value={phone} onChange={(e)=>setPhone(e.target.value)} />
            </Grid>

            <Grid md={6}>
                <input type='text' placeholder='City'  value={city} onChange={(e)=>setCity(e.target.value)} />
            </Grid>

            <Grid md={12}>
                <textarea placeholder='Enter Text Here'  value={textarea} onChange={(e)=>setTextarea(e.target.value)}> </textarea> 
            </Grid>

            <Grid md={6}>
                <input type='submit' value='Submit Now'  />
            </Grid>
      </form>

        <h2> This is heading {changeHeading}</h2>
        <button onClick={(e)=>setChangeHeading(e.target.value)}>Change Heading</button>

     </Container>
   </Box>    
  </>
 )
}
