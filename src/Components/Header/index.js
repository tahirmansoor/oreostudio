import React, { useState } from "react";
import { ReactDOM } from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import App from '../../App';
import Box from '@mui/material/Box';
import Logo from '../../Assets/Images/Logo.png';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import { flexbox } from '@mui/system';
import Grid from '@mui/material/Grid';
import useStyles from "../../Assets/CustomStyles";
import TemporaryDrawer from '../NavBar';
import { Style } from '@mui/icons-material';





export default function Header() {

  const Style = useStyles()
 
  return (
  <Box className={Style.HeaderSec}>  
    <Container>
     <Row className={Style.MainColom}>   
      <Box sx={{ display: 'flex',  alignItems: 'center', justifyContent: 'space-between' }}>     
        <Grid md={5}>
          <p className={Style.Phone}>778 444 0066</p>
        </Grid>

        <Grid md={2}>
          <img src={Logo} className={Style.Logo}   /> 
        </Grid>

        <Grid md={5}>
          <TemporaryDrawer />
        </Grid>      
      </Box> 
     </Row>
    </Container>    
    </Box>
  )
};