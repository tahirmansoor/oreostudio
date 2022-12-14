import React from 'react';
import { Box } from '@mui/system';
import Grid from '@mui/material/Grid';
import useStyles from "../../Assets/CustomStyles";
import Container from 'react-bootstrap/Container';
import AboutImg from '../../Assets/Images/About-img1.png';
import Link from '@mui/material/Link';
import { Typography } from '@mui/material';



export default function AboutUs(props) {

    const Style = useStyles()

    const ProdData =[
      {
        prodTitle: 'TITLE ONE',
        prodDescp : 'DESCPRIOTION',
        prodImage : 'sdssdsdsd',
     }
    ]


  return (  
 
<Box className={Style.AboutSec}>
   <Container>  
    <Grid container>
      <Grid md={10} className={Style.Middle}>

          {
            ProdData.map((data,index)=>{
              return(
                <>
                  <h1>{data.prodTitle}</h1>
                  <p>{data.prodDescp}</p>
                  <p>{data.prodImage}</p>
                </>
                )
            }
            )
          }
         
            <Grid container item md={12} sx={{display:'flex', alignItems: 'center', justifyContent:'space-around'}}>
              <Grid item md={5} className={Style.AboutContent}>
                  <img src={AboutImg} className={Style.FullImg} />
                  <Box className={Style.Circle}></Box>
              </Grid>

          <Grid item md={6}>
           <Typography className={Style.SmallText}> Some status About Oreo Studios created by {props.name} </Typography>
                 <Typography className={Style.Title}>
                   WHAT MAKES US STAND OUT ? {props.name}
                 </Typography>
                   <p className={Style.Para}>   
                        We use state-of-the-art technology and innovations to provide efficient, highly
                        reliable, and low-cost solutions for your business needs. Oreo has completed several
                        software development projects. We prefer long-term "consultancy-based engagements"
                        to short-term client-vendor ties. OREO STUDIOS believes in collaborating with 
                        clients rather than working for them, and always ensures complete transparency.
                   </p>
                <Link className={Style.Link}>Learn More About our Approach</Link>
          </Grid>    
         </Grid>       
      
       </Grid>
      </Grid>  
     </Container>
    </Box>
  
  )
}
