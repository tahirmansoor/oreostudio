import React from 'react';
import Container from 'react-bootstrap/Container';
import { Box } from '@mui/system';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import useStyles from "../../Assets/CustomStyles";
import mobile1 from '../../Assets/Images/mobile1.png';
import mobile2 from '../../Assets/Images/mobile2.png';
import mobile3 from '../../Assets/Images/mobile3.png';
import { Table } from '@mui/material';
import Bg from '../../Assets/Images/bg3.png';
import Bg2 from '../../Assets/Images/bg2.png';
import Bg3 from '../../Assets/Images/bg3.png';

export default function Apps() {
  const Style = useStyles();
  const AppsData = [
      { BackgroundImage: Bg, 
         MobileImg : mobile1,
         SmallText : 'Portfolio Highlights',
         AppsTitle : 'ZKRA APP',
         AppsPara  : `Zkra is an application developed for learners from all ages, engaging them in a creative way
          that simplifies the memorization process of memorizing and reciting Quran to a new level with both 
          writing and listening features.`,
          Ancor     : 'View Case Study',
          link : '/about',
      },
      { BackgroundImage: Bg2, 
         MobileImg : mobile2,
         SmallText : 'Portfolio Highlights',
         AppsTitle : 'ZKRA APP',
         AppsPara  : `Zkra is an application developed for learners from all ages, engaging them in a creative way
          that simplifies the memorization process of memorizing and reciting Quran to a new level with both 
          writing and listening features.`,
          Ancor     : 'View Case Study',
          link : '/about',
      },
      { BackgroundImage: Bg3, 
         MobileImg : mobile3,
         SmallText : 'Portfolio Highlights',
         AppsTitle : 'ZKRA APP',
         AppsPara  : `Zkra is an application developed for learners from all ages, engaging them in a creative way
          that simplifies the memorization process of memorizing and reciting Quran to a new level with both 
          writing and listening features.`,
          Ancor     : 'View Case Study',
          link : '/about',
      },


   
   
   ]

  
  return (
   <>
         {
      AppsData.map((data,index)=>{
         return(


     <Box className={Style.AppsContent} sx={{backgroundImage:`url(${data.BackgroundImage})`,}}> 
      <Container>  
       <Grid md={10} sx={{margin:'0 auto !important', float:'none !important', display:'table !important'}}>   
         <Grid container sx={{display:'flex', alignItems:'start', justifyContent: 'space-between'}} className={index == 1 && Style.columnreverse}>   
             <Grid md={6}>
                  <img src={data.MobileImg} className={Style.CentImg} />
               </Grid>
              <Grid md={6}>                          
               <Grid md={8}>
                   <h6> {data.SmallText} </h6>
                   <h2> {data.AppsTitle} </h2>
                   <p>  {data.AppsPara}</p>
                   <Link to={data.link}>{data.Ancor}</Link>
               </Grid>                                                                                                                                                                                     
              </Grid>          
        </Grid>             
       </Grid>
      </Container>
     </Box>
         ) 
       }
     )
    }  
   </>
  )
}
