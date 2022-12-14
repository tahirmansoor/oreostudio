import React,{useState} from 'react';
import Container from 'react-bootstrap/Container';
import emailjs from '@emailjs/browser';
import { Timer } from '@mui/icons-material';


export default function RecentProjects() {
    const [name,setName] = useState('');
    const [phone,setPhone] = useState('');
    const [textArea,seTextarea] = useState('');

    const currDate  = new Date().toLocaleDateString();
    const currTime = new Date().toLocaleTimeString();


    const [country, setCountry] = useState('Select Country ');
    const SelectCountry = () =>{
         setCountry('Your Country is London');
    }
    

    
//   function nameChangeHandler(e){
//     setName(e.target.value)
//  }

//  function phoneChangeHandler(e){
//     setPhone(e.target.value)z
//  }

//  function textAreaChangeHandler(e){
//     seTextarea(e.target.value)
//  }


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
   
    <Container>
    <h2 className='mt-5'>  ABCS  </h2>   
    <p>{currDate}</p>
    <p>{currTime}</p>
        <form className='mt-5' onSubmit={submitHandler}>
            <div className='form-group'>
                <input type="text" className='form-control' value={name} onChange={(e)=>setName(e.target.value)} placeholder='Name'/>              
            </div>

            <div className='form-group'>
                <input type="phone" className='form-control' value={phone}  onChange={(e)=>setPhone(e.target.value)} placeholder='Phone'/>
              
            </div>

            <div className='form-group'>
               <textarea className='form-control' value={textArea} onChange={(e)=>seTextarea(e.target.value)}  placeholder='Message'></textarea>              
            </div>
            <div className='form-group'>
               <input type='submit' value='Submit' />
          </div>
         </form>

        
         <div>
           <p>{country}</p>
           <button onClick={SelectCountry}>Find your country</button>
         </div>
        </Container>
   
    )
}
