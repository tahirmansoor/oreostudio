import React from 'react';
import Container from 'react-bootstrap/Container';
import { Box } from '@mui/system';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import useStyles from "../../Assets/CustomStyles";
import Background from '../../Assets/Images/serv-img1.png';
import Background2 from '../../Assets/Images/serv-img2.png';
import Background3 from '../../Assets/Images/serv-img3.png';
import Link from '@mui/material/Link';


export default function Services() {

const Style = useStyles();

const name = 'moiz';

const products =[
  {
    prodimg :Background,
    Title: `DEVELOPMENT:`,
    para: `We can assist you with quickly creating or updating your website. Businesses that aren't ${name} online are superfluous in this modern day. We understand your goals, focus on your standards, and exceed your expectations 
    with our search engine friendly web solutions and designs. We develop intriguing designs for brands all over the world. `,
  },
  {
    prodimg :Background2,
    Title: 'DESIGN:',
    para: `Design is one of our specialties. We bring our professional designers to earn your brand the recognition it deserves. Our design teams do what they do the best with 
    a desire to make your business have a lasting effect on the corporate world. `,
  },
  {
    prodimg :Background3,
    Title: 'STRATEGY:',
    para: `Our excellent community management and social media methods can help you create a community around your company. Our SEO professionals are highly skilled and knowledgeable to help you improve your websites
     rating and alignment. To reach out to your potential customers, we use a variety of digital media. `,
  },
];

return (  
       <Box className={Style.ServiceSec}>
        <Container>
          <Typography className={Style.Title}>
               That Provides Custom Digital Services for your Business, All Right Here In Canada.
            </Typography>
                     

                 <Grid container>        
                   {    
                    products.map((data,index)=>{
                      return(
                        <Grid md={4}>
                         <img src={data.prodimg} className={Style.ServImg} /> 
                         <Box>
                           <h5 className={Style.ServName}>{data.Title}</h5>
                           <p className={Style.para}>{data.para}</p> 
                           <Link className={Style.More}>Read More</Link>
                         </Box>

                  <Box>
                     <h2>  dfdf</h2>
                  </Box>

                        </Grid>
                      )

                    }                    
                    )
               }                            
         </Grid>
        </Container>
       </Box>   
 ) 
}



