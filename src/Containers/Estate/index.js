
import { textAlign } from '@mui/system';
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';


function Estate() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

   const [Fname, setFname] = useState('Your Name');
         
    const FullName = () =>{
        setFname('Tahir Mansoor');
    }

  

  return (
    <Container >
      <p sx={{textAlign : 'center'}}>You Picked the Item {count} times</p>     
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <p>{name}</p>
      <h2>{Fname}</h2>
      <button onClick={FullName}> Test Your Name</button>
     </Container>
  );
}

export default Estate