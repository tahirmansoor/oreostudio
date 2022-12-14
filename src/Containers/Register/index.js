
import React, {useState} from 'react';
import { Container } from '@mui/system';
import Grid from '@mui/material/Grid';
import Register from '../../Containers/Register';

 


export default function RegisteComp() {
  
    const [fname, setFname] = useState(''); 
    const [lname, setLname] = useState('');
    const [phone, setPhone] = useState('');
    const [city,  setCity] = useState('');

  
    const SubmitHandle = (e)=>{
        e.preventDefault();

       console.log({fname})
        if(fname == 'tahir mansoor' && lname == '123456'){
            alert('please use correct user name')
          }
          else{
            alert('Please use correct password')
          }
            
    }


  return (
    <>
        <Register />
  
    <Container>
     <Grid>
        <div>Register page</div>
            <form onSubmit={SubmitHandle}>
                <input type='text' placeholder='First Name' value={fname}  onChange={(e)=>setFname(e.target.value)}  />
                <input type='text' placeholder='Last Name' value={lname} onChange={(e)=>setLname(e.target.value)} />
                <input type='phone' placeholder='Phone' value={phone} onChange={(e)=>setPhone(e.target.value)} />
                {/* <input type='text' placeholder='City' value={city}  /> */}
                <input type='submit' />
            </form>
     </Grid>
    </Container>
    </>
  )
}



