
import useStyles from "../../Assets/CustomStyles";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import Container from 'react-bootstrap/Container';



export default function Footer() {

   const Style = useStyles()

   const [name,setName] = useState('');
   const [phone,setPhone] = useState ('');
   const [email,setEmail] = useState('');
   const [textArea,setTextarea] = useState('');


   const submitHandler = (e)=>{
    e.preventDefault();
    if(name.length <= 2){
        alert('Please fill full name')
    }

    if(phone.length <= 3){
        alert('Please fill full the number')
    }
    else {
      const templateParams = {
      name: name,
      phone: phone,
      textarea : textArea
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
  <Box className={Style.footertext}>
    <Container>
      <Box>
        <Grid container>
            <Grid md={2}>
                <Typography className={Style.TitleFooter}>
                    Usefull Links
                </Typography>

                <ul className={Style.List}>
                    <li><Link>Home</Link></li>
                    <li><Link> About Us</Link></li>
                    <li><Link> Services</Link></li>
                    <li><Link> Portfolio</Link></li>
                    <li><Link> Case Studies</Link></li>
                    <li><Link> Contact U</Link></li>
                </ul>
            </Grid>

            <Grid md={3}>
                <Typography  className={Style.TitleFooter}>
                Services
                </Typography>

                <ul className={Style.List}>
                    <li><Link> Web Design & Development</Link></li>
                    <li><Link> Mobile Apps Development</Link></li>
                    <li><Link> Front-End Development</Link></li>
                    <li><Link> Product Development</Link></li>
                    <li><Link> Digital Marketing</Link></li>
                    <li><Link> Full Stack Development</Link></li>
                    <li><Link>Beta Testing</Link></li>
                </ul>
            </Grid>

            <Grid md={3}>
                 <Typography  className={Style.TitleFooter}>
                        Contact
                </Typography>

                <ul>
                    <li> <Link>778 444 0066</Link></li>
                    <li> <Link>  info@oreostudios.com</Link></li>
                    <li>8831 Edinburgh Dr, Surrey, BC , V3V6R7</li>
                </ul>
            </Grid>

            <Grid md={4}>
            <Typography  className={Style.TitleFooter}>
              Get In Touch
            </Typography>

                <form onSubmit={submitHandler}>
                    <Grid className={Style.flex}>
                      <Grid md={6}>
                        <input type='text' className={Style.InputType} placeholder='Name' onChange={(e)=>setName(e.target.value)}  />
                        </Grid>
                    <Grid md={6}>
                      <input type='phone' className={Style.InputType} placeholder='Phone' onChange={(e)=>setPhone(e.target.value)}  />
                     </Grid>
                    </Grid>
                
                    <Grid md={12}>
                       <input type='email' className={Style.InputType} placeholder='Email' onChange={(e)=>setEmail(e.target.value)}  />
                    </Grid>

                    <Grid md={12}>
                        <textarea className={Style.InputType} placeholder='Message' onChange={(e)=>setTextarea(e.target.value)} ></textarea>
                    </Grid>

                    <Grid>
                      <input type='Submit'  value='Submit Now' />
                    </Grid>
                </form>
            </Grid>
        </Grid>
      </Box>
    </Container>
    </Box>
  )
}
