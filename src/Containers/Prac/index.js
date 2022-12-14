import { Title } from '@mui/icons-material';
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';


export default function Prac(props) {
    const PriceTag =[ 200,300,350,400,450,500,600,650,700,800,900];
    const newPriceTag = PriceTag.filter(( abc, index )=>{
        return abc > 400;
    })

    console.log(newPriceTag);
  
  return (    
            <Container>
                <h1>Hello, {props.name} </h1>
                <p>Lorem Ipsum is a  Dummy text.  Lorem Ipsum is a  Dummy text.  Lorem Ipsum is a  Dummy text. 
                Lorem Ipsum is a  Dummy text.  Lorem Ipsum is a  Dummy text.  Lorem Ipsum is a  Dummy text.  
                Lorem Ipsum is a  Dummy text.  Lorem Ipsum is a  Dummy text.  Lorem Ipsum is a  Dummy text.  
                Lorem Ipsum is a  Dummy text.  Lorem Ipsum is a  Dummy text.  Lorem Ipsum is a  Dummy text.
                Lorem Ipsum is a  Dummy text.  </p>
            </Container>
  )
} 
