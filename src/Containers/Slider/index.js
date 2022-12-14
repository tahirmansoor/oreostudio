import React from 'react';
import { ReactDOM } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Banner from '../../Assets/Images/bg1.jpg';
import { Container } from '@mui/system';
import { Style } from '@mui/icons-material';
import Box from '@mui/material/Box';
import Bg from '../../Assets/Images/bg1.jpg';
import useStyles from "../../Assets/CustomStyles";
import Row from 'react-bootstrap/Row';






export default function Slider() {
    const Style = useStyles()

    let data = 'Tahir ';
    function apple()
    {
      data = 'Masoor';
    }


  

  return ( 
     <Box className={Style.SliderSec}>
      <Container>
        <h1>ereeeeeeeeeee</h1>
        <p>We use state-of-the-art technology and innovations to provide efficient, highly reliable,
         and low-cost solutions for your business needs. Oreo has completed several software development projects.
          We prefer long-term "consultancy-based engagements" to short-term client-vendor ties. OREO STUDIOS believes
          in collaborating with clients rather than working for them, and always ensures complete transparency.</p>
      </Container>              
     </Box>
  )
}

