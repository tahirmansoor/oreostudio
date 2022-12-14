import React from 'react';
import Login from '../../Containers/Login';
import Container from 'react-bootstrap/Container';


export default function LoginArea() {
  return (
    <>       
       
        <Container>
          <form>
           <div>
                <input type='text' placeholder='Namess' />
                <input type='text' placeholder='Last Name' />
                <input type='phone' placeholder='Phone' />
                <input type='submit'  />
           </div>
          </form>
        </Container>
        </>

  )
}
